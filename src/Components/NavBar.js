import "../stylesheet/new-style.css";
import {NavLink} from 'react-router-dom'
import { useEffect, useState } from "react";
import {Button as MuiButton}  from '@material-ui/core'
import { connectWallet} from "../utils/interact.js";
import MobileMenuButton from "./Drawer";




function NavBar() {

   const [isConnected, setConnectedStatus] = useState(false);
   const [walletAddress, setWallet] = useState("");
   const [status, setStatus] = useState("");
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
  return (
    <div className="container-fluid">
    <div className="row">
      <nav className="navbar navbar-expand-lg navbar-light col-12">
        {/* <NavLink className="navbar-brand" to="/">
          Navbar
        </NavLink> */}
        <MobileMenuButton/>
        {/* <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button> */}
        <div
          className="collapse navbar-collapse"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              {/* <NavLink className="nav-link" to="/marketplace">
                NFTS
              </NavLink> */}
              <NavLink className="nav-link" to="/MarketPlace">
                NFTS
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/explore">
                EXPLORER
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                ROADMAP
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                FAQS
              </NavLink>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
          <li className="nav-item">

          <button id="walletButton" className="nav-btn btn" style={{paddingLeft:"50px"}} onClick={connectWalletPressed}>
          {isConnected ? (
            "👛 Connected: " +
            String(walletAddress).substring(0, 6) +
            "..." +
            String(walletAddress).substring(38)
          ) : (
            <span>👛 Connect Wallet</span>
          )}
        </button>
          </li>
          </ul>
        </div>
      </nav>
     
    </div>
  </div>
    
  );
}

export default NavBar;
