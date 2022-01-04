import Web3 from "web3"
//overrides metamask v0.2 for our v 1.0
// const web3 = new Web3(window.web3.currentProvider);
// const web3 = new Web3(web3.currentProvider);

var web3 = new Web3(new Web3.providers.HttpProvider('HTTP://127.0.0.1:8545'));
// console.log(web3)
export default web3;