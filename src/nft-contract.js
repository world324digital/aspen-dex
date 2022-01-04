export const CONTRACT_ADDRESS = '0xE3211AAFa474D76484f55Ad02EAD0BC8982c805F'
export const CONTRACT_ABI = [{
        "inputs": [],
        "stateMutability": "payable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [{
                "indexed": true,
                "internalType": "address",
                "name": "account",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "operator",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "bool",
                "name": "approved",
                "type": "bool"
            }
        ],
        "name": "ApprovalForAll",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [{
                "indexed": true,
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "momentID",
                "type": "uint256"
            }
        ],
        "name": "Assign",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [{
            "indexed": true,
            "internalType": "uint256",
            "name": "packCount",
            "type": "uint256"
        }],
        "name": "PacksLeft",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [{
                "indexed": true,
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "Transfer",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [{
                "indexed": true,
                "internalType": "address",
                "name": "operator",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256[]",
                "name": "ids",
                "type": "uint256[]"
            },
            {
                "indexed": false,
                "internalType": "uint256[]",
                "name": "values",
                "type": "uint256[]"
            }
        ],
        "name": "TransferBatch",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [{
                "indexed": true,
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "TransferFunds",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [{
                "indexed": true,
                "internalType": "address",
                "name": "operator",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "TransferSingle",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [{
                "indexed": false,
                "internalType": "string",
                "name": "value",
                "type": "string"
            },
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            }
        ],
        "name": "URI",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [{
                "indexed": true,
                "internalType": "uint256",
                "name": "momentID",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "fromAddress",
                "type": "address"
            }
        ],
        "name": "momentBidEntered",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [{
                "indexed": true,
                "internalType": "uint256",
                "name": "momentID",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "fromAddress",
                "type": "address"
            }
        ],
        "name": "momentBidWithdrawn",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [{
                "indexed": true,
                "internalType": "uint256",
                "name": "momentID",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "fromAddress",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "toAddress",
                "type": "address"
            }
        ],
        "name": "momentBought",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [{
            "indexed": true,
            "internalType": "uint256",
            "name": "momentID",
            "type": "uint256"
        }],
        "name": "momentNoLongerForSale",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [{
                "indexed": true,
                "internalType": "uint256",
                "name": "momentID",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "minValue",
                "type": "uint256"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "toAddress",
                "type": "address"
            }
        ],
        "name": "momentOffered",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [{
                "indexed": true,
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "momentID",
                "type": "uint256"
            }
        ],
        "name": "momentTransfer",
        "type": "event"
    },
    {
        "inputs": [],
        "name": "Packprice",
        "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
                "internalType": "uint256",
                "name": "momentID",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "minPrice",
                "type": "uint256"
            }
        ],
        "name": "acceptBidForMoment",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [{
                "internalType": "address",
                "name": "account",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            }
        ],
        "name": "balanceOf",
        "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
                "internalType": "address[]",
                "name": "accounts",
                "type": "address[]"
            },
            {
                "internalType": "uint256[]",
                "name": "ids",
                "type": "uint256[]"
            }
        ],
        "name": "balanceOfBatch",
        "outputs": [{
            "internalType": "uint256[]",
            "name": "",
            "type": "uint256[]"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
                "internalType": "uint256",
                "name": "momentID",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "Collectionname",
                "type": "string"
            }
        ],
        "name": "buyMoment",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "checkContractBalance",
        "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [{
                "internalType": "address",
                "name": "account",
                "type": "address"
            },
            {
                "internalType": "uint256[]",
                "name": "ids",
                "type": "uint256[]"
            },
            {
                "internalType": "string",
                "name": "Collectionname",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "Collectionid",
                "type": "uint256"
            },
            {
                "internalType": "uint256[]",
                "name": "amounts",
                "type": "uint256[]"
            },
            {
                "internalType": "uint256",
                "name": "maxPackCount",
                "type": "uint256"
            },
            {
                "internalType": "bytes",
                "name": "data",
                "type": "bytes"
            }
        ],
        "name": "createToken",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "uint256",
            "name": "momentID",
            "type": "uint256"
        }],
        "name": "enterBidForMoment",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "string",
            "name": "id",
            "type": "string"
        }],
        "name": "getCollection",
        "outputs": [{
            "components": [{
                    "internalType": "uint256",
                    "name": "id",
                    "type": "uint256"
                },
                {
                    "internalType": "string",
                    "name": "name",
                    "type": "string"
                },
                {
                    "internalType": "uint256[]",
                    "name": "listIds",
                    "type": "uint256[]"
                },
                {
                    "internalType": "uint256[]",
                    "name": "rarity",
                    "type": "uint256[]"
                },
                {
                    "internalType": "uint256",
                    "name": "maxPackCount",
                    "type": "uint256"
                }
            ],
            "internalType": "struct aspenNFT.Collection",
            "name": "",
            "type": "tuple"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "string",
            "name": "Collectionname",
            "type": "string"
        }],
        "name": "getCollectionTokens",
        "outputs": [{
                "internalType": "uint256[]",
                "name": "",
                "type": "uint256[]"
            },
            {
                "internalType": "uint256[]",
                "name": "",
                "type": "uint256[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "address payable",
            "name": "_to",
            "type": "address"
        }],
        "name": "getFundsFromContract",
        "outputs": [{
                "internalType": "bool",
                "name": "",
                "type": "bool"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getIds",
        "outputs": [{
            "internalType": "uint256[]",
            "name": "",
            "type": "uint256[]"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getPackPrice",
        "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getPackSize",
        "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
                "internalType": "address",
                "name": "account",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "operator",
                "type": "address"
            }
        ],
        "name": "isApprovedForAll",
        "outputs": [{
            "internalType": "bool",
            "name": "",
            "type": "bool"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "name": "listIds",
        "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "name": "momentBids",
        "outputs": [{
                "internalType": "bool",
                "name": "hasBid",
                "type": "bool"
            },
            {
                "internalType": "uint256",
                "name": "momentID",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "bidder",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "name": "momentIDToAddress",
        "outputs": [{
            "internalType": "address",
            "name": "",
            "type": "address"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "uint256",
            "name": "momentID",
            "type": "uint256"
        }],
        "name": "momentsNoLongerForSale",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "name": "momentsOfferedForSale",
        "outputs": [{
                "internalType": "bool",
                "name": "isForSale",
                "type": "bool"
            },
            {
                "internalType": "uint256",
                "name": "momentID",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "seller",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "minValue",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "onlySellTo",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
                "internalType": "uint256",
                "name": "momentID",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "minSalePriceInWei",
                "type": "uint256"
            }
        ],
        "name": "offerMomentForSale",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [{
                "internalType": "uint256",
                "name": "momentID",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "minSalePriceInWei",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "toAddress",
                "type": "address"
            }
        ],
        "name": "offerMomentForSaleToAddress",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "owner",
        "outputs": [{
            "internalType": "address",
            "name": "",
            "type": "address"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "address",
            "name": "",
            "type": "address"
        }],
        "name": "pendingWithdrawals",
        "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256[]",
                "name": "ids",
                "type": "uint256[]"
            },
            {
                "internalType": "uint256[]",
                "name": "amounts",
                "type": "uint256[]"
            },
            {
                "internalType": "bytes",
                "name": "data",
                "type": "bytes"
            }
        ],
        "name": "safeBatchTransferFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            },
            {
                "internalType": "bytes",
                "name": "data",
                "type": "bytes"
            }
        ],
        "name": "safeTransferFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{
                "internalType": "address",
                "name": "operator",
                "type": "address"
            },
            {
                "internalType": "bool",
                "name": "approved",
                "type": "bool"
            }
        ],
        "name": "setApprovalForAll",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "uint256",
            "name": "price",
            "type": "uint256"
        }],
        "name": "setPackPrice",
        "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "uint256",
            "name": "size",
            "type": "uint256"
        }],
        "name": "setPackSize",
        "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "bytes4",
            "name": "interfaceId",
            "type": "bytes4"
        }],
        "name": "supportsInterface",
        "outputs": [{
            "internalType": "bool",
            "name": "",
            "type": "bool"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "name": "uri",
        "outputs": [{
            "internalType": "string",
            "name": "",
            "type": "string"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "withdraw",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "uint256",
            "name": "momentID",
            "type": "uint256"
        }],
        "name": "withdrawBidForMoment",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    }
]