// components/FaucetComponent.tsx
import React, { useState } from 'react';
import axios from 'axios';
import { ethers } from 'ethers';
import styles from './FaucetComponent.module.css';
import { useWeb3Context } from '../hooks/Web3Context';
import contractABI from '../contracts/abis/Stablecoin.abi.json';

interface FaucetComponentProps {
  isWalletConnected: boolean;
}

const contractAddress = process.env.REACT_APP_CONTRACT_ADDRESS || '0x916581438bb1698012572ffe3298f3B361de353f';

const FaucetComponent: React.FC<FaucetComponentProps> = ({ isWalletConnected }) => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const { provider } = useWeb3Context();
  const [balance, setBalance] = useState('');

  const fetchBalance = async (contract: ethers.Contract, address: string) => {
    try {
      const bal = await contract.balances(address);
      setBalance(ethers.utils.formatUnits(bal, 'ether'));
    } catch (error) {
      console.error('Failed to fetch balance:', error);
      setBalance('Error fetching balance');
    }
  };

  const mintTokens = async (walletAddress: string) => {
    if (!provider || !isWalletConnected) {
      setMessage('Wallet is not connected');
      return;
    }

    setLoading(true);
    try {
      const signer = provider.getSigner();
      const contract = new ethers.Contract(contractAddress, contractABI, signer);
      const transaction = await contract.mint(walletAddress, ethers.utils.parseUnits('5.0', 'ether'));
      await transaction.wait();
      setMessage('Minting successful, 5 tokens received.');
      await fetchBalance(contract, walletAddress);
    } catch (error) {
      console.error('Minting failed:', error);
      setMessage('Minting failed. Please try again.');
    }
    setLoading(false);
  };

  const checkCanClaimTokens = async () => {
    if (!provider || !isWalletConnected) {
      setMessage('Wallet is not connected');
      return;
    }

    setLoading(true);
    setMessage('');

    try {
      const signer = provider.getSigner();
      const walletAddress = await signer.getAddress();
      console.log(`Making request to mint tokens for wallet address: ${walletAddress}`);
      const response = await axios.post(`http://localhost:3005/api/mintTokens`, { walletAddress, amount: 5 });
      console.log('Server response:', response.data);

      if (response.data.success) {
        await mintTokens(walletAddress);
      } else {
        setMessage(response.data.message);
      }
    } catch (error) {
      console.error('Server error:', error);
      if (axios.isAxiosError(error)) {
        console.error('Axios error details:', error.toJSON());
        setMessage(error.response?.data.message || 'Failed to communicate with the server. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <img src={'/faucet_dtl.gif'} alt="Faucet" />
      <p>{message}</p>
      <button onClick={checkCanClaimTokens} disabled={!provider || !isWalletConnected || loading}>
        {loading ? 'Loading...' : 'Claim Your Tokens'}
      </button>
      {balance && <p>Token Balance: {balance}</p>}
    </div>
  );
};

export default FaucetComponent;





// #TODO - TERAZ POWINNO BYĆ DODANE SPRAWDZANIE CZY DANY ADRES JUŻ "CLAIM TOEKNS"
// #TODO - DODAĆ INFORMACJE ŻE LOSOWANE JEST MIĘDZY 0.05 I 0.2 TOKENÓW uDTL
// chce teraz ograniczyć do 8 godzin mintowania
// adres dodać do .env