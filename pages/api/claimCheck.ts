//pages/api/claimCheck.ts

import type { NextApiRequest, NextApiResponse } from 'next';

// Placeholder functions for database operations
async function getUserRecord(walletAddress: string): Promise<{ lastClaimTime: number } | null> {
    // Implement database logic here
    return null;
}

async function updateUserRecord(walletAddress: string, lastClaimTime: number): Promise<void> {
    // Implement database logic here
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    const { walletAddress } = req.body;
    if (!walletAddress) {
        return res.status(400).json({ message: 'Wallet address is required' });
    }

    const currentTime = new Date().getTime();
    const eightHoursInMillis = 8 * 60 * 60 * 1000;

    try {
        const userRecord = await getUserRecord(walletAddress);
        if (!userRecord) {
            await updateUserRecord(walletAddress, currentTime);
            return res.status(200).json({ canClaim: true });
        }

        const lastClaimTime = userRecord.lastClaimTime;
        if (currentTime - lastClaimTime >= eightHoursInMillis) {
            await updateUserRecord(walletAddress, currentTime);
            return res.status(200).json({ canClaim: true });
        } else {
            return res.status(200).json({ canClaim: false, nextClaimTime: lastClaimTime + eightHoursInMillis });
        }
    } catch (error) {
        console.error('Error accessing the database:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
}
