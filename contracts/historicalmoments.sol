// SPDX-License-Identifier: MIT
pragma solidity >=0.6.2 ^0.8.0;
pragma experimental ABIEncoderV2;

import "./ERC1155/ERC1155.sol";

contract aspenNFT  is ERC1155 { 
    
    uint256[] public  listIds;
    address public owner;
    uint256 public Packprice;
    uint256 private PackSize;

    mapping (uint => address) public momentIDToAddress;

    address zeroaddress = 0x0000000000000000000000000000000000000000;
    
    struct Offer {
        bool isForSale;
        uint momentID;
        address seller;
        uint minValue;          // in ether
        address onlySellTo;     // specify to sell only to a specific person
    }

    struct Bid {
        bool hasBid;
        uint momentID;
        address bidder;
        uint value;
    }
    struct  Collection {
        uint id;
        string name;
        uint256[] listIds;
        uint256[] rarity;
        uint256 maxPackCount;
    }
     mapping(string => Collection) Collections;

     // A record of punks that are offered for sale at a specific minimum value, and perhaps to a specific person
    mapping (uint => Offer) public momentsOfferedForSale;


    // A record of the highest punk bid
    mapping (uint => Bid) public momentBids;

    mapping (address => uint) public pendingWithdrawals;



    modifier onlyOwner() {
    require(msg.sender == owner);
    _;
}

    event Assign(address indexed to, uint256 momentID);
    event Transfer(address indexed from, address indexed to, uint256 value);
    event TransferFunds(address indexed from, address indexed to, uint256 value);

    event momentTransfer(address indexed from, address indexed to, uint256 momentID);
    event momentOffered(uint indexed momentID, uint minValue, address indexed toAddress);
    event momentBidEntered(uint indexed momentID, uint value, address indexed fromAddress);
    event momentBidWithdrawn(uint indexed momentID, uint value, address indexed fromAddress);
    event momentBought(uint indexed momentID, uint value, address indexed fromAddress, address indexed toAddress);
    event momentNoLongerForSale(uint indexed momentID);
    event PacksLeft(uint256 indexed packCount);
   constructor() payable ERC1155
        ('https://aspenlabs.io/collections/tokens/{id}'){
            owner = payable(msg.sender);
        
    }
    function createToken(address account,uint256[] memory ids,string memory Collectionname,uint Collectionid, uint256[] memory amounts,uint256 maxPackCount,bytes memory data) public  onlyOwner {
        Collections[Collectionname] =  Collection(Collectionid,Collectionname,ids, amounts, maxPackCount);
        _mintBatch(account, ids, amounts, data);
        for(uint i = 0; i<ids.length; i++){
           uint id = ids[i];
           momentIDToAddress[id] = account;
            emit Assign(account, id);
            
       }
       

    }
        
    function getIds() public view returns(uint256[] memory){
        return listIds;
    }
    
    
    
    function setPackPrice(uint256 price) public onlyOwner returns(uint256){
        Packprice = 1 ether / price;
        return Packprice;
    }
      function setPackSize(uint256 size) public onlyOwner returns(uint256){
        PackSize = size;
        return PackSize;
        
    }
     function getPackSize() public view returns(uint256){
        return PackSize;
        
    }
    function getPackPrice() public view returns(uint256){
        return Packprice;
        
    }
    function checkContractBalance() onlyOwner public payable  returns(uint) {
        return address(this).balance;
  }
    function getFundsFromContract(address payable _to) onlyOwner public payable returns(bool, uint256){
        address _contract = address(this);
        uint256 balance = _contract.balance;
        (bool sent, bytes memory data) = _to.call{value: balance}("");
        require(sent, "Failed to send Ether");
        return (sent, balance);
    }

    function getCollection(string calldata id) public view returns(Collection memory){
        return Collections[id];
    }
    function getCollectionTokens(string calldata Collectionname) public view returns(uint256[] memory, uint256[] memory){
        Collection storage findCollection = Collections[Collectionname];
        uint256[] memory tokenIDs = findCollection.listIds;
        uint256[] memory rarity = findCollection.rarity;
        return (tokenIDs, rarity);
    }
    

    function momentsNoLongerForSale(uint momentID) public payable {
        if(momentIDToAddress[momentID] != msg.sender) revert();
        momentsOfferedForSale[momentID] = Offer(false, momentID, msg.sender, 0, zeroaddress);
        momentNoLongerForSale(momentID);
    }

    function offerMomentForSale(uint momentID, uint minSalePriceInWei) public payable {
        if(momentIDToAddress[momentID] != msg.sender) revert();
        momentsOfferedForSale[momentID] = Offer(true, momentID, msg.sender, minSalePriceInWei,zeroaddress);
        momentOffered(momentID, minSalePriceInWei, zeroaddress);
    }

    function offerMomentForSaleToAddress(uint momentID, uint minSalePriceInWei, address toAddress)  payable public {
        require(momentIDToAddress[momentID] != msg.sender);
        momentsOfferedForSale[momentID] = Offer(true, momentID, msg.sender, minSalePriceInWei, toAddress);
        momentOffered(momentID, minSalePriceInWei, toAddress);
    }
    
   

    function buyMoment(uint256 momentID, string memory Collectionname ) payable public {
        require(msg.value >= Packprice);
        TransferFunds(msg.sender,owner,msg.value);
        uint256 amount = PackSize;
        momentIDToAddress[momentID] = msg.sender;
        safeTransferFrom(owner, msg.sender, momentID, amount , '0x01' );
        Transfer(owner, msg.sender, momentID);
        Collection memory findCollection = Collections[Collectionname];
        uint256 packCount = findCollection.maxPackCount;
        uint256 packsleft = packCount - 1;
        findCollection.maxPackCount = packsleft;
        momentBought(momentID, msg.value, owner, msg.sender);
        PacksLeft(packsleft);
    }

    function withdraw() public payable {
        uint amount = pendingWithdrawals[msg.sender];
        // Remember to zero the pending refund before
        // sending to prevent re-entrancy attacks
        pendingWithdrawals[msg.sender] = 0;
        payable(msg.sender).transfer(amount);
    }

    function enterBidForMoment(uint momentID) payable public {
        if(momentIDToAddress[momentID] == zeroaddress)revert();
        if(momentIDToAddress[momentID] == msg.sender)revert();
        require(msg.value > 0);
        Bid memory existing = momentBids[momentID];
        require(msg.value >= existing.value);
        if (existing.value > 0) {
            // Refund the failing bid
            pendingWithdrawals[existing.bidder] += existing.value;
        }
        momentBids[momentID] = Bid(true, momentID, msg.sender, msg.value);
        momentBidEntered(momentID, msg.value, msg.sender);
    }

    function acceptBidForMoment(uint momentID, uint minPrice) public payable {
        require(momentIDToAddress[momentID] == msg.sender);
        address seller = msg.sender;
        Bid memory bid = momentBids[momentID];
        if (bid.value == 0) revert();
        if (bid.value < minPrice) revert();
        momentIDToAddress[momentID] = bid.bidder;
        safeTransferFrom(seller,bid.bidder,momentID , PackSize, "0x01" );
        Transfer(seller, bid.bidder, 1);

        momentsOfferedForSale[momentID] = Offer(false, momentID, bid.bidder, 0, zeroaddress);
        uint amounts = bid.value;
        momentBids[momentID] = Bid(false, momentID, zeroaddress, 0);
        pendingWithdrawals[seller] += amounts;
        momentBought(momentID, bid.value, seller, bid.bidder);
    }

    function withdrawBidForMoment(uint momentID) public payable {
        require(momentIDToAddress[momentID] != zeroaddress) ;
        require(momentIDToAddress[momentID] != msg.sender);
        Bid memory bid = momentBids[momentID];
        if (bid.bidder != msg.sender) revert();
        momentBidWithdrawn(momentID, bid.value, msg.sender);
        uint amount = bid.value;
        momentBids[momentID] = Bid(false, momentID, zeroaddress, 0);
        // Refund the bid money
        payable(msg.sender).transfer(amount);
    }
    

}
