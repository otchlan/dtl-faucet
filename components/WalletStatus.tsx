// WalletStatus.tsx
import React, { useState, useEffect } from 'react';
import MetamaskConnection from './auth/MetamaskConnection'; // Make sure the path is correct
import styles from './WalletStatus.module.css'; // Import the CSS module here
import { ethers } from 'ethers';
import contractABI from '../contracts/abis/Stablecoin.abi.json'; // Adjust path as needed

interface WalletStatusProps {
  setIsWalletConnected: (isConnected: boolean) => void;
}

//const contractAddress = '0xA83082b6BDb9E94c3Bf25f5aab6e9a35bB7a8f82'; //Amoy
const contractAddress = '0x916581438bb1698012572ffe3298f3B361de353f'; //mainnet

const WalletStatus: React.FC<WalletStatusProps> = ({ setIsWalletConnected }) => {
  const [account, setAccount] = useState<string>('');
  const [contract, setContract] = useState<ethers.Contract | null>(null);
  const [balance, setBalance] = useState<string>('');

  useEffect(() => {
    const checkWalletConnection = async () => {
      if (window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const accounts = await provider.listAccounts();
        const connected = accounts.length > 0;
        setIsWalletConnected(connected);
        if (connected) {
          setAccount(accounts[0]);
          const signer = provider.getSigner();
          const stablecoinContract = new ethers.Contract(contractAddress, contractABI, signer);
          setContract(stablecoinContract);
          fetchBalance(stablecoinContract, accounts[0]);
        } else {
          setAccount('');
          setContract(null);
          setBalance('');
        }
      }
    };

    checkWalletConnection();
  }, [setIsWalletConnected]);

  const fetchBalance = async (contract: ethers.Contract, address: string) => {
    try {
      const bal = await contract.balances(address);
      setBalance(ethers.utils.formatUnits(bal, 'ether'));
    } catch (error) {
      console.error('Failed to fetch balance:', error);
      setBalance('Error fetching balance');
    }
  };

  return (
    <div className={styles.container}>
      {account ? (
        <div>
          <div>Jeśli jeszcze nie jesteś Minterem napisz do nas:</div>
          <div>asystentai@deeptechlabs.pl</div>
          <div>Dodamy Twój adres w przeciągu 8 godzin w tytule napisz "uDTL inicjacja</div>
          <div>-- -- -- -- -- -- -- -- -- </div>
          <div>Wallet Address: {account}</div>
          <div>Token Balance: {balance ? `${balance} Tokens` : 'Error fetching balance'}</div>
        </div>
      ) : (
        <MetamaskConnection
          setGlobalIsConnected={setIsWalletConnected}
          setGlobalAccount={setAccount}
        />
      )}
    </div>
  );
};

export default WalletStatus;
