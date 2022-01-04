import { useEffect, useState } from "react";
import { connectWallet, setApprovalForAll } from "../utils/interact";
import "../stylesheet/new-style.css";
import SideNav from '../Components/SideNav';
import NavBar from '../Components/NavBar';
import {NavLink} from 'react-router-dom';
import product from '../images/american-pack-white-background.png';
import { Button as MuiButton } from '@material-ui/core'
import Box from '@material-ui/core/Box';
import { CONTRACT_ADDRESS, CONTRACT_ABI } from "../nft-contract";
import web3 from "../web3";
import {americanRevolution} from "../Collections/metadata-individual"
import {
    useParams,
    useHistory,
    useLocation
  } from "react-router-dom";

const NFT_Contract = new web3.eth.Contract(
    CONTRACT_ABI,
    CONTRACT_ADDRESS
  );
function MarketDetails() {
    const history = useHistory();
    const accounts = web3.eth.getAccounts();
    
    const [boughtMoment, setBoughtMoment] = useState()
    const [isConnected, setConnectedStatus] = useState(false);
    const [walletAddress, setWallet] = useState("");
    const [status, setStatus] = useState("");
    const [transactionHash, setTransactionHash] = useState([])
    
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

      var nftContract= new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);


    
     const BuyPack = async (e) => {
        e.preventDefault()
        await setApprovalForAll(walletAddress, true)
        //const collectionIDs = americanRevolution;
        const CollectionName = 'american revolution'
        //const collectionIDObject = collectionIDs[0]
        //var keys = Object.keys(collectionIDObject);
        //const randomID = keys[Math.floor(Math.random() * keys.length)];
        const randomID = 6
        console.log(randomID)

        await nftContract.getPastEvents('PacksLeft', {
          filter: {myIndexedParam: [20,23], myOtherIndexedParam: '0x123456789...'}, // Using an array means OR: e.g. 20 or 23
          fromBlock: 0,
          toBlock: 'latest'
      }, function(error, events){ console.log(events); })
      .then(function(events){
          console.log(events) // same results as the optional callback above
      });
      await nftContract.once('PacksLeft', { 
         filter: {myIndexedParam: [20,23], myOtherIndexedParam: '0x123456789...'}, // Using an array means OR: e.g. 20 or 23
          fromBlock: 0,
          toBlock: 'latest'
    }, function(error, event){ console.log(event); });


        await nftContract.events.momentBought({
        }, function(error, event){ console.log(event); })
        .on("connected", function(subscriptionId){
          console.log(subscriptionId);
          }).on('data', function(event){
          console.log(event); // same results as the optional callback above
        })

        await nftContract.methods
        .buyMoment(randomID, CollectionName)
        .send({ from: walletAddress,
        gas:2100000, value:1000000000000000000 })
        .then(res => console.log(res));

        
        
        


        //keys.pop(randomID)
        }
    
    const alignTop = {
        alignItems: "start",
        paddingTop: "60px"
    };
    const maxHeight = {
        height: "100vh"
    };
    const borderRight = {
        borderRight: "1px solid black"
    }
    
    return (
        <section className="showcase" style={alignTop}>
            <SideNav/>
            <div className="main">
                <NavBar/>
                <div className="row mt-4">
                    <div className="col-md-8">
                        <p className="text-center col-12">From $150 USD</p>
                        <h1 className="text-center col-12">American Revolution</h1>
                        <div className="col-12">
                            <div className="row justify-content-center">
                                <div className="col-md-4" style={borderRight}>
                                    <h4 className="col-12 text-center">59 Unique</h4>
                                    <p className="col-12 text-center text-sm">NFTS</p>
                                </div>
                                <div className="col-md-4" style={borderRight}>
                                    <h4 className="col-12 text-center">13 </h4>
                                    <p className="col-12 text-center text-sm">Founding Fathers</p>
                                </div>
                                <div className="col-md-4">
                                    <h4 className="col-12 text-center">1776</h4>
                                    <p className="col-12 text-center text-sm">Birth of the American Republic</p>
                                </div>
                                <Box m={6} />
                                <div>
                                <p className="col-12 text-center text-md">The revolution that created the United States of America. Taxes, tea and property rights spurred the founding fathers to engage in a struggle for freedom against the rising empire of Britain. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4" style={maxHeight}>
                        <img src={product} alt className="img-fluid" />
                        <Box m={4} />
                    <div className="buy-pack-btn-padding">
                    <button id="buypackButton" className="buy-pack-btn" >
                        Buy Pack
                      </button>
                    </div>
                  
                        
                    </div>
              
                </div>
            </div>
            <div>
           

            </div>
        </section>
           
    )
}

export default MarketDetails;