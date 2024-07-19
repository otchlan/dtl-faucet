// lib/ethersConnector.ts
import { ethers } from 'ethers';

// Function to get a provider
export function getProvider() {
    if (!window.ethereum) {
        throw new Error("Metamask is not installed");
    }
    return new ethers.providers.Web3Provider(window.ethereum, "any");
}

// Function to get the signer
export function getSigner() {
    const provider = getProvider();
    return provider.getSigner();
}

// Function to get the contract
export function getContract(address: string, abi: any) {
    const signer = getSigner();
    return new ethers.Contract(address, abi, signer);
}
