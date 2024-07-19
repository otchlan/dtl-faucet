import React, { useEffect, useState } from 'react';
import Web3 from 'web3';
import styles from './TokenSale.module.css';

declare let window: any;

const MyTokenSale: React.FC = () => {
    const [web3, setWeb3] = useState<Web3 | null>(null);
    const [accounts, setAccounts] = useState<string[]>([]);
    const [contract, setContract] = useState<any>(null);
    const [numberOfTokens, setNumberOfTokens] = useState<string>('');

    const contractAddress = '0x433d5c91e8167cf7f4cdc3d454106a9c1257d3d0';  
    const ABI = [
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "numberOfTokens",
                "type": "uint256"
            }
        ],
        "name": "buyTokens",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "contract ERC20",
                "name": "_tokenContract",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "_tokenPrice",
                "type": "uint256"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "buyer",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "TokensPurchased",
        "type": "event"
    },
    {
        "inputs": [],
        "name": "tokenContract",
        "outputs": [
            {
                "internalType": "contract ERC20",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "tokenPrice",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
];  
    
    useEffect(() => {
        const init = async () => {
            if (window.ethereum) {
                try {
                    // Request account access
                    await window.ethereum.enable();
                    
                    const web3Instance = new Web3(window.ethereum);
                    const accounts = await web3Instance.eth.getAccounts();
                    const contractInstance = new web3Instance.eth.Contract(ABI, contractAddress);

                    setWeb3(web3Instance);
                    setAccounts(accounts);
                    setContract(contractInstance);
                } catch (error) {
                    console.error("Error enabling ethereum or creating web3 instance: ", error);
                }
            } else {
                alert('Non-Ethereum browser detected. Please install MetaMask');
            }
        };
        init();
    }, []);


    const buyTokens = async () => {
        if (contract && numberOfTokens) {
            try {
                const response = await contract.methods.buyTokens(numberOfTokens).send({ from: accounts[0] });
                console.log('Tokens bought: ', response);
            } catch (error) {
                console.error('An error occurred when buying tokens: ', error);
            }
        }
    };

      return (
            <div className={styles.container}>
                <h2>Buy My Tokens</h2>
                <input 
                    type="text" 
                    placeholder="Number of tokens" 
                    onChange={e => setNumberOfTokens(e.target.value)} 
                    value={numberOfTokens} 
                />
                <button className={styles.tokenButton} onClick={buyTokens}>Buy Tokens</button>
            </div>
        );
    };

    export default MyTokenSale;