// backend/server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');
const app = express();
const PORT = 3005;
const DB_SERVER_URL = 'http://localhost:3006'; // URL for the database server

// Enable CORS to allow requests from multiple origins
const allowedOrigins = ['http://localhost:3000', 'https://www.deeptechlabs.pl', 'http://www.deeptechlabs.pl'];
app.use(cors({
    origin: function (origin, callback) {
        // Allow requests with no origin (like mobile apps, curl requests)
        if (!origin) return callback(null, true);
        if (allowedOrigins.indexOf(origin) === -1) {
            const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
            return callback(new Error(msg), false);
        }
        return callback(null, true);
    }
}));

// Use bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());

// Endpoint to log wallet address when a user connects their wallet
app.post('/api/saveWallet', (req, res) => {
    const { walletAddress } = req.body;
    console.log('Received request to save wallet address:', walletAddress);

    const filePath = './data/walletAddresses.json';

    // Ensure the directory exists where the file will be saved
    if (!fs.existsSync('./data')) {
        fs.mkdirSync('./data');
    }

    // Read the existing wallet addresses or initialize a new array if not present
    fs.readFile(filePath, (err, data) => {
        let addresses = [];
        if (err && err.code !== 'ENOENT') {
            console.error('Error reading file:', err);
            return res.status(500).json({ success: false, message: 'Failed to read wallet addresses file.' });
        } else if (!err) {
            addresses = JSON.parse(data);
        }

        // Add the new wallet address if it does not exist
        if (!addresses.includes(walletAddress)) {
            addresses.push(walletAddress);
            fs.writeFile(filePath, JSON.stringify(addresses, null, 2), (err) => {
                if (err) {
                    console.error('Error writing file:', err);
                    return res.status(500).json({ success: false, message: 'Failed to save wallet address.' });
                }
                console.log('Wallet address saved successfully:', walletAddress);
                res.json({ success: true, message: 'Wallet address saved successfully!' });
            });
        } else {
            console.log('Wallet address already exists:', walletAddress);
            res.json({ success: true, message: 'Wallet address already saved.' });
        }
    });
});

// Function to check if the wallet can mint tokens
const canMintTokens = async (walletAddress) => {
    try {
        console.log('Checking if wallet can mint tokens:', walletAddress);
        const response = await axios.get(`${DB_SERVER_URL}/api/getMetadata`);
        const metadataArray = response.data;
        const metadata = metadataArray.find(meta => meta.walletAddress === walletAddress);

        if (metadata) {
            const lastMintTime = new Date(metadata.lastMintTime);
            const currentTime = new Date();
            const timeDifference = (currentTime - lastMintTime) / (1000 * 60 * 60); // Time difference in hours

            if (timeDifference < 8) {
                const timeLeft = 8 - timeDifference;
                const hoursLeft = Math.floor(timeLeft);
                const minutesLeft = Math.floor((timeLeft - hoursLeft) * 60);
                const formattedTimeLeft = `${hoursLeft.toString().padStart(2, '0')}:${minutesLeft.toString().padStart(2, '0')}`;
                console.log(`Minting not allowed. Time left: ${formattedTimeLeft} hours`);
                return { canMint: false, timeLeft: formattedTimeLeft };
            }
        }
        console.log('Wallet can mint tokens:', walletAddress);
        return { canMint: true };
    } catch (error) {
        console.error('Error checking minting eligibility:', error);
        throw new Error('Failed to check minting eligibility.');
    }
};

// Endpoint to handle minting requests
app.post('/api/mintTokens', async (req, res) => {
    const { walletAddress, amount } = req.body;
    console.log('Received minting request for wallet:', walletAddress, 'Amount:', amount);

    // Validate the minting amount
    if (amount !== 5) {
        console.log('Invalid minting amount:', amount);
        return res.status(400).json({ success: false, message: 'Minting failed: Amount must be exactly 5 tokens.' });
    }

    try {
        const { canMint, timeLeft } = await canMintTokens(walletAddress);
        if (!canMint) {
            return res.status(400).json({
                success: false,
                message: `Time left for next claim: ${timeLeft} h`
            });
        }

        const mintTime = new Date().toISOString();

        // Create the metadata object
        const metadata = {
            walletAddress,
            firstMintTime: mintTime,  // Assuming this is the first mint
            lastMintTime: mintTime,
            totalMinted: amount,
            mintCount: 1,
            ipAddress: req.ip,
            deviceInfo: req.headers['user-agent'], // Basic device info from user-agent
            location: 'Unknown', // You might want to use an external service to get location from IP
            referrer: req.headers.referer || 'Direct',
            lastLoginTime: mintTime,
            userAgent: req.headers['user-agent'],
            mintingStatus: 'success',
            averageMintInterval: 'N/A', // Calculating intervals might need more context
            accountAge: 'N/A' // You might need registration time to calculate this
        };

        // Logging the minting request
        console.log('Minting request is valid. Saving metadata for wallet:', walletAddress);

        // Save the metadata by forwarding the request to db_server.js
        const response = await axios.post(`${DB_SERVER_URL}/api/saveMetadata`, metadata);
        console.log('Metadata saved successfully:', response.data);
        res.json(response.data);
    } catch (error) {
        console.error('Error saving metadata:', error);
        res.status(500).json({ success: false, message: 'Failed to save metadata.' });
    }
});

// Start the ser
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
