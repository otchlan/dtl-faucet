// components/Auth/MetamaskConnect.tsx
import React, { useState, useEffect, useCallback } from 'react';
import styles from "./MetamaskConnection.module.css";

declare global {
  interface Window {
    ethereum?: {
      request: (request: { method: string, params?: Array<any> }) => Promise<any>;
      on: (event: string, callback: (...args: any[]) => void) => void;
      removeListener: (event: string, callback: (...args: any[]) => void) => void;
    }
  }
}

interface MetamaskConnectionProps {
  setGlobalIsConnected?: (isConnected: boolean) => void;
  setGlobalAccount?: (account: string) => void;
}

const MetamaskConnection: React.FC<MetamaskConnectionProps> = ({ setGlobalIsConnected, setGlobalAccount }) => {
  const [isConnected, setIsConnected] = useState<boolean>(false);
  const [account, setAccount] = useState<string>('');

  const updateGlobalState = useCallback(() => {
    setGlobalIsConnected?.(isConnected);
    if (account) {
      setGlobalAccount?.(account);
    }
  }, [isConnected, account, setGlobalIsConnected, setGlobalAccount]);

  // Handle changes to accounts
  const handleAccountsChanged = useCallback((accounts: string[]) => {
    const connected = accounts.length > 0;
    setIsConnected(connected);
    setAccount(connected ? accounts[0] : '');
  }, []);

  // Listen for account changes
  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on('accountsChanged', handleAccountsChanged);

      return () => {
        window.ethereum?.removeListener('accountsChanged', handleAccountsChanged);
      };
    }
  }, [handleAccountsChanged]);

  const connectWallet = async () => {
    if (!window.ethereum) {
      alert('Please install Metamask extension!');
      return;
    }

    try {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      handleAccountsChanged(accounts);
    } catch (error) {
      console.error('Error connecting to Metamask:', error);
    }
  };

  // Check for an existing connection when the component mounts
  useEffect(() => {
    const checkForExistingConnection = async () => {
      if (window.ethereum) {
        try {
          const accounts = await window.ethereum.request({ method: 'eth_accounts' });
          handleAccountsChanged(accounts);
        } catch (error) {
          console.error('Error checking for existing connection:', error);
        }
      }
    };

    checkForExistingConnection();
  }, [handleAccountsChanged]);

  return (
    <button
      className={`${styles.connectbtn} ${isConnected ? styles.connected : ''}`}
      onClick={connectWallet}
    >
      {isConnected ? `Connected: ${account.substring(0, 6)}...${account.substring(account.length - 4)}` : 'Connect Wallet 🪙'}
    </button>
  );
};

export default MetamaskConnection;
