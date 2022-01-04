import { useEffect, useState } from "react";
import { connectWallet, loadContract, createTokens } from "../utils/interact.js";
import {Button as MuiButton}  from '@material-ui/core'
import {TextField as TextField} from  '@material-ui/core';
import { Modal as Modal } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import { CONTRACT_ABI, CONTRACT_ADDRESS } from "../nft-contract"
import web3 from "../web3";


  
  const Minter = (props) => {
    const [isConnected, setConnectedStatus] = useState(false);
    const [walletAddress, setWallet] = useState("");
    const [status, setStatus] = useState("");
    const [ids, setids] = useState([]);
    const [collectionName, setCollectionName] = useState("");
    const [collectionId, setCollectionId] = useState();
    const [amounts, setAmounts] = useState([]);
    const [maxPackCount, setMaxPackCount] = useState()
    //getCollectionIds
    const [getBycollectionName, setGetByCollectionName] = useState([]);
    // Set Pack Price 
    const [packPrice, setPackPrice] = useState();
    // Get Pack Price 
    const [getPackPrice, setGetPackPrice] = useState();
    const [packSize, setPackSize] = useState();
    const [contractBalance, setContractBalance] = useState();
    const [tokenResponse, setTokenResponse] = useState()
    const [operatorAddress, setOperatorAddress] = useState("")
    const [approval, setApproval] = useState("")
    const [funds, setFunds] = useState("")

    const nftContract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS)


  
    useEffect(async () => {
      if (window.ethereum) {
        try {
          const accounts = await window.ethereum.request({ method: "eth_accounts" })
          if (accounts.length) {
            setConnectedStatus(true);
            setWallet(accounts[0]);
          } else {
            setConnectedStatus(false);
            setStatus("🦊 Connect to Metamask using the top right button.");
          }
        } catch {
          setConnectedStatus(false);
          setStatus(
            "🦊 Connect to Metamask using the top right button. " +
              walletAddress
          );
        }
      }
    });
  
    const connectWalletPressed = async () => {
      const walletResponse = await connectWallet();
      setConnectedStatus(walletResponse.connectedStatus);
      setStatus(walletResponse.status);
      if (isConnected) {
        setWallet(walletAddress);
      }
    };

    
  
   async function clickCreate(e) {
      e.preventDefault();
      let data = web3.eth.abi.encodeParameter('bytes','0x01')
      let address= walletAddress
      let idarray = []
      let splitarr = ids.split(',')
      var i;
      for (i = 0; i < splitarr.length; i++){
        var id = splitarr[i]
        idarray.push(id)
        
      }        

      let collection = collectionName
      let collectionid = collectionId
      let amountarray = []
      let splitamountarr = amounts.split(',')
      var x;
      for (x = 0; x < splitamountarr.length; x++){
        var amountx = splitarr[x]
        amountarray.push(amountx)
        
      }        
      let packcount = maxPackCount

      await nftContract.methods
        .createToken(address, idarray, collection, collectionid,amountarray,packcount,data)
        .send({ from: address,gas:2100000}).then(res =>  console.log(res.events.Assign));
    };
    
    const getCollectionTokens = async ()  => {
      await nftContract.methods
        .getCollectionTokens(getBycollectionName)
        .call({ from: walletAddress,
        gas:2100000 })
        .then(res => console.log(res));
        }
    const OnClickSetPackprice = async (e) =>{
      e.preventDefault();
      await nftContract.methods
        .setPackPrice(packPrice)
        .send({ from: walletAddress,
        gas:2100000 }).then(res =>  console.log(res));
        console.log(setPackPrice)
        }
    const OnClickSetPackSize = async (e) =>{
      e.preventDefault();
      await nftContract.methods
        .setPackSize(packSize)
        .send({ from: walletAddress,
        gas:2100000 }).then(res =>  console.log(res));
        }
    const OnClickGetPackprice = async () =>{
      await nftContract.methods
        .getPackPrice()
        .call({ from: walletAddress,
        gas:2100000 }).then(res =>  setGetPackPrice(res));
        console.log(setGetPackPrice)
        }
    const getContractBalance = async ()  => {
      await nftContract.methods
        .checkContractBalance()
        .call({ from: walletAddress,
        gas:2100000 })
        .then(res => setContractBalance(res));
        }
    const onClickGetFundsFromContract = async ()  => {
      await nftContract.methods
        .getFundsFromContract(funds)
        .send({ from: walletAddress,
        gas:2100000 })
        .then(res => console.log(res));
        }
    
    const onClickSetApprovalForAll = async ()  => {
      await nftContract.methods
        .setApprovalForAll(operatorAddress,approval )
        .send({ from: walletAddress,
        gas:2100000 })
        .then(res => console.log(res));
        }
  
    return (
      <div className="Minter">
        <MuiButton id="walletButton" style={{paddingLeft:"50px"}} onClick={connectWalletPressed}>
          {isConnected ? (
            "👛 Connected: " +
            String(walletAddress).substring(0, 6) +
            "..." +
            String(walletAddress).substring(38)
          ) : (
            <span>👛 Connect Wallet</span>
          )}
        </MuiButton>
  
        <br></br>
        <h1 style={{paddingLeft:"150px",paddingTop:"50px"}} id="title">🧙‍♂️ Admin Page for Aspen's NFT</h1>
        <p>
        </p>
        <form style={{paddingLeft:"250px"}}>
          <h2>🖼 list of Ids to be minted</h2>
          <TextField
            type="string"
            placeholder="e.g. 1,2,3,4,5,7,8"
            onChange={(event) => 
              setids(event.target.value)}
          />
          <h2>🤔 Collection Name: </h2>
          <TextField
            type="text"
            placeholder="e.g. American Revolution"
            onChange={(event) => setCollectionName(event.target.value)}
          />
          <h2>✍️ Collection Id: </h2>
          <TextField
            type="string"
            placeholder="e.g. 1776"
            onChange={(event) => setCollectionId(event.target.value)}
          />
          <Box m={8} />

          <h2>✍️  Amount/rarity of each token in a list: </h2>
          <TextField
            type="text"
            placeholder="e.g. 1,1,1,1,1,1,1,1 )"
            onChange={(event) => setAmounts(event.target.value)}
          />
           <Box m={8} />

          <h2>✍️  MaxPackCount </h2>
          <TextField
            type="text"
            placeholder="e.g. if total tokens is 448 1 per pack MaxPackCount is 448;)"
            onChange={(event) => setMaxPackCount(event.target.value)}
          />
        </form>
        <Box m={8} />

        <MuiButton id="mintButton" style={{paddingLeft:"150px"}} onClick={clickCreate}>
          Mint NFTs
        </MuiButton>
        <p id="status" style={{ color: "red" }}>
          {status}
        </p>
        <Box m={8} />
          <Grid>
        <form style={{paddingLeft:"250px"}}  noValidate autoComplete="off">
        <TextField id="standard-basic" label="Collection Name" onChange={(event) => setGetByCollectionName(event.target.value)} />
        <MuiButton padding="30px" variant="outlined" color="primary" onClick={getCollectionTokens}>
          Get Tokens By Collection Name
        </MuiButton >
        <Box m={8} />
        <Typography>
          Set Approval for All
        </Typography>
        <TextField id="standard-basic" label="operator address" onChange={(event) => setOperatorAddress(event.target.value)} />
        <TextField id="standard-basic" label="Enter true " onChange={(event) => setApproval(event.target.value)} />
        <MuiButton padding="30px" variant="outlined" color="primary" onClick={onClickSetApprovalForAll}>
          setApprovalforAll
        </MuiButton >
        <Box m={8} />

        <TextField id="standard-basic" label=" Pack Price" onChange={(event) => setPackPrice(event.target.value)} />
        <MuiButton padding="30px" variant="outlined" color="primary" onClick={OnClickSetPackprice}>
            Set Pack Price 
        </MuiButton >
        <Box m={8} />

        <MuiButton padding="30px" variant="outlined" color="primary" onClick={OnClickGetPackprice}>
            Get Pack Price 
        </MuiButton >
        <h2>{getPackPrice}</h2>
        <Box m={8} />
        <TextField id="standard-basic" label=" Pack Size" onChange={(event) => setPackSize(event.target.value)} />
        <MuiButton padding="30px" variant="outlined" color="primary" onClick={OnClickSetPackSize}>
            Set Pack Size 
        </MuiButton >
        <Box m={8} />

        <MuiButton padding="30px" variant="outlined" color="primary" onClick={getContractBalance}>
          Check Contract Balance 
        </MuiButton >
      <Typography>{contractBalance}</Typography>
        <Box m={8} />
        <Typography>
          Get Funds From Contract
        </Typography>
        <TextField id="standard-basic" label="Enter  address" onChange={(event) => setFunds(event.target.value)} />
        <MuiButton padding="30px" variant="outlined" color="primary" onClick={onClickGetFundsFromContract}>
          getFunds
        </MuiButton >

        



        </form>
        </Grid>

      </div>
    );
  };
  
  export default Minter;