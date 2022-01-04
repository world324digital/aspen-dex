import { CONTRACT_ABI, CONTRACT_ADDRESS } from "../nft-contract"
import web3 from "../web3";


const owner = "0x98250D2ec8226261f609701F662930FAA92Bfb49"


export const connectWallet = async() => {
    if (window.ethereum) {
        try {
            const address = await window.ethereum.enable();
            const obj = {
                connectedStatus: true,
                status: "",
                address: address
            }
            return obj;

        } catch (error) {
            return {
                connectedStatus: false,
                status: "🦊 Connect to Metamask using the button on the top right."
            }
        }

    } else {
        return {
            connectedStatus: false,
            status: "🦊 You must install Metamask into your browser: https://metamask.io/download.html"
        }
    }
};

export const loadContract = async() => {
    return new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);
};

export const setApprovalForAll = async(operator, boolean) => {
    let nftContract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS)
    await nftContract.methods
    .setApprovalForAll(operator, boolean)
    .send({ from: owner,
    gas:2100000})
    .then(res => console.log(res));
}
export const acceptBidForMoment = async(momentID, minValue) => {
    let nftContract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS)
    await nftContract.methods
    .acceptBidForMoment(momentID, minValue)
    .send({ from: window.ethereum.selectedAddress,
    gas:2100000})
    .then(res => console.log(res));
}
export const enterBidForMoment = async(momentID) => {
    let nftContract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS)
    await nftContract.methods
    .enterBidForMoment(momentID)
    .send({ from: window.ethereum.selectedAddress,
    gas:2100000})
    .then(res => console.log(res));
}
export const createTokens = async(address, idArray, collectionName, collectionId, amountsArray, maxPackCount, data) => {


    let nftContract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS)
    const transactionParameters = {
        to: CONTRACT_ADDRESS, // Required except during contract publications.
        from: window.ethereum.selectedAddress, // must match user's active address.
        'data': nftContract.methods.createToken(address, idArray, collectionName, collectionId, amountsArray, maxPackCount, data).call()
    };

    try {
        const txHash = await window.ethereum
            .request({
                method: 'eth_sendTransaction',
                params: [transactionParameters],
            });
        return {
            success: true,
            status: "✅ Check out your transaction on Etherscan: https://ropsten.etherscan.io/tx/" + txHash
        }
    } catch (error) {
        return {
            success: false,
            status: "😥 Something went wrong: " + error.message
        }
    }
}