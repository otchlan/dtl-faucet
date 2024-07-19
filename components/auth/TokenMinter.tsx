//components/auth/TokenMinter.tsx
import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import contractABI from '../../contracts/abis/Stablecoin.abi.json';
import styles from './StablecoinInteraction.module.css';

//const contractAddress = '0xA83082b6BDb9E94c3Bf25f5aab6e9a35bB7a8f82'; //Amoy
const contractAddress = '0x916581438bb1698012572ffe3298f3B361de353f'; //mainnet

const StablecoinInteraction = () => {
    const [contract, setContract] = useState<ethers.Contract | null>(null);
    const [owner, setOwner] = useState('');
    const [totalSupply, setTotalSupply] = useState('');
    const [balance, setBalance] = useState('');
    const [balanceAddress, setBalanceAddress] = useState('');
    const [newMinter, setNewMinter] = useState('');
    const [isMinterPaused, setIsMinterPaused] = useState(false);
    const [value, setValue] = useState('');
    const [recipient, setRecipient] = useState('');
    const [isConnecting, setIsConnecting] = useState(false);

    useEffect(() => {
        const init = async () => {
            if (window.ethereum) {
                await window.ethereum.request({ method: 'eth_requestAccounts' });
                const provider = new ethers.providers.Web3Provider(window.ethereum);
                const signer = provider.getSigner();
                const stablecoinContract = new ethers.Contract(contractAddress, contractABI, signer);
                setContract(stablecoinContract);
                fetchData(stablecoinContract);
            } else {
                console.error('Please install MetaMask!');
            }
        };
        init();
    }, []);

    const fetchData = async (contract: ethers.Contract) => {
        fetchOwner(contract);
        fetchTotalSupply(contract);
    };

    useEffect(() => {
        const connectWallet = async () => {
            if (window.ethereum && !isConnecting) {
                setIsConnecting(true);
                try {
                    // Request account access if needed
                    await window.ethereum.request({ method: 'eth_requestAccounts' });

                    // We use Web3Provider to wrap the existing provider, which is window.ethereum in MetaMask's case.
                    const provider = new ethers.providers.Web3Provider(window.ethereum);
                    const signer = provider.getSigner();
                    const stablecoinContract = new ethers.Contract(contractAddress, contractABI, signer);
                    setContract(stablecoinContract);
                } catch (error) {
                    console.error("Failed to connect wallet:", error);
                } finally {
                    setIsConnecting(false); // Reset the connection status
                }
            } else if (!window.ethereum) {
                console.error('Please install MetaMask!');
            }
        };

        connectWallet();
    }, [isConnecting]);

    const fetchOwner = async (contract: ethers.Contract) => {
        try {
            const currentOwner = await contract.owner();
            setOwner(currentOwner);
        } catch (error) {
            console.error('Failed to fetch owner:', error);
        }
    };

    const fetchTotalSupply = async (contract: ethers.Contract) => {
        try {
            const supply = await contract.totalSupply();
            setTotalSupply(ethers.utils.formatUnits(supply, 'ether'));
        } catch (error) {
            console.error('Failed to fetch total supply:', error);
        }
    };

    const fetchBalance = async () => {
        if (!balanceAddress) {
            alert('Please provide an address to fetch the balance.');
            return;
        }
        try {
            const bal = await contract!.balances(balanceAddress);
            setBalance(ethers.utils.formatUnits(bal, 'ether'));
        } catch (error) {
            console.error('Failed to fetch balance:', error);
            alert('Failed to fetch balance');
        }
    };

    const setMinter = async (minterAddress: string, paused: boolean) => {
        try {
            const tx = await contract!.setMinter(minterAddress, paused);
            await tx.wait();
            alert('Minter set successfully');
        } catch (error) {
            console.error('Failed to set minter:', error);
            alert('Failed to set minter');
        }
    };

    const mint = async (recipient: string, amount: string) => {
        try {
            const formattedAmount = ethers.utils.parseUnits(amount, 'ether');
            const tx = await contract!.mint(recipient, formattedAmount);
            await tx.wait();
            alert('Minting successful');
        } catch (error) {
            console.error('Failed to mint:', error);
            alert('Failed to mint');
        }
    };

    const handleFormSubmit = (event: React.FormEvent, action: string) => {
        event.preventDefault();
        if (!contract) {
            alert('Contract not initialized.');
            return;
        }

        switch (action) {
            case 'setMinter':
                setMinter(newMinter, isMinterPaused);
                break;
            case 'mint':
                mint(recipient, value);
                break;
            case 'fetchBalance':
                fetchBalance();
                break;
            default:
                console.log('No action specified');
        }
    };

    return (
        <div className={styles.container}>
            <form onSubmit={(e) => handleFormSubmit(e, 'setMinter')}>
                <input type="text" placeholder="Minter Address" value={newMinter} onChange={(e) => setNewMinter(e.target.value)} />
                <input type="checkbox" checked={isMinterPaused} onChange={(e) => setIsMinterPaused(e.target.checked)} /> Pause Minter
                <button type="submit">Set Minter</button>
            </form>
            <form onSubmit={(e) => handleFormSubmit(e, 'mint')}>
                <input type="text" placeholder="Recipient Address" value={recipient} onChange={(e) => setRecipient(e.target.value)} />
                <input type="text" placeholder="Value to Mint" value={value} onChange={(e) => setValue(e.target.value)} />
                <button type="submit">Mint Tokens</button>
            </form>
            <div>
                <h3>Contract Owner: {owner}</h3>
                <h3>Total Supply: {totalSupply} Tokens</h3>
                <form onSubmit={(e) => handleFormSubmit(e, 'fetchBalance')}>
                    <input type="text" placeholder="Address for Balance" value={balanceAddress} onChange={(e) => setBalanceAddress(e.target.value)} />
                    <button type="submit">Get Balance</button>
                </form>
                <p>Balance for {balanceAddress}: {balance} Tokens</p>
            </div>
        </div>
    );
};

export default StablecoinInteraction;
