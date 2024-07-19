import React, { useEffect, useState } from 'react';
import Web3 from 'web3';

declare let window: any;

interface NFTTokenMinterProps {
    contractAddress: string;
    contractABI: any;
}

const NFTTokenMinter: React.FC<NFTTokenMinterProps> = ({ contractAddress, contractABI }) => {
    const [web3, setWeb3] = useState<Web3 | null>(null);
    const [accounts, setAccounts] = useState<string[]>([]);
    const [contract, setContract] = useState<any>(null);
    const [tokenText, setTokenText] = useState<string>('');

    useEffect(() => {
        const init = async () => {
            if (window.ethereum) {
                try {
                    await window.ethereum.enable();
                    const web3Instance = new Web3(window.ethereum);
                    const accounts = await web3Instance.eth.getAccounts();
                    const contractInstance = new web3Instance.eth.Contract(contractABI, contractAddress);

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
    }, [contractAddress, contractABI]);

    const mintToken = async () => {
        if (contract && tokenText) {
            try {
                const tokenId = new Date().getTime(); // Simple unique ID for example
                const response = await contract.methods.mint(accounts[0], tokenId, tokenText).send({ from: accounts[0] });
                console.log('Token minted: ', response);
            } catch (error) {
                console.error('An error occurred when minting token: ', error);
            }
        }
    };

    return (
        <div>
            <h2>Mint New Token</h2>
            <input 
                type="text" 
                placeholder="Token Text" 
                onChange={e => setTokenText(e.target.value)} 
                value={tokenText} 
            />
            <button onClick={mintToken}>Mint Token</button>
        </div>
    );
};

export default NFTTokenMinter;
