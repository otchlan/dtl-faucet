// backend/db_server.js
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3006; // Port for the database server

app.use(bodyParser.json());

// Function to ensure directory exists
const ensureDirectoryExistence = (filePath) => {
    const dirname = path.dirname(filePath);
    if (fs.existsSync(dirname)) {
        return true;
    }
    ensureDirectoryExistence(dirname);
    fs.mkdirSync(dirname);
};

// Function to generate unique ID
const generateUniqueId = () => {
    return 'xxxx-xxxx-4xxx-yxxx-xxxx-xxxxxxxx'.replace(/[xy]/g, function (c) {
        const r = (Math.random() * 16) | 0,
            v = c === 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
    });
};

// Ensure the metadata file exists and is initialized as an empty array if it doesn't exist or is empty
const initializeMetadataFile = () => {
    const filePath = './data/metadata.json';
    ensureDirectoryExistence(filePath);
    if (!fs.existsSync(filePath) || fs.readFileSync(filePath).length === 0) {
        fs.writeFileSync(filePath, JSON.stringify([]));
    }
};

initializeMetadataFile();

// Endpoint to save metadata
app.post('/api/saveMetadata', (req, res) => {
    const { walletAddress, firstMintTime, lastMintTime, totalMinted, mintCount, ipAddress, deviceInfo, location, referrer, lastLoginTime, userAgent, mintingStatus, averageMintInterval, accountAge } = req.body;
    const metadata = {
        id: generateUniqueId(),
        walletAddress,
        firstMintTime,
        lastMintTime,
        totalMinted,
        mintCount,
        ipAddress,
        deviceInfo,
        location,
        referrer,
        lastLoginTime,
        userAgent,
        mintingStatus,
        averageMintInterval,
        accountAge
    };
    const filePath = './data/metadata.json';

    // Ensure the directory exists where the file will be saved
    ensureDirectoryExistence(filePath);

    // Read the existing metadata or initialize a new array if not present
    fs.readFile(filePath, (err, data) => {
        let metadataArray = [];
        if (err && err.code !== 'ENOENT') {
            console.error('Error reading file:', err);
            return res.status(500).json({ success: false, message: 'Failed to read metadata file.' });
        } else if (!err && data.length > 0) {
            try {
                metadataArray = JSON.parse(data);
            } catch (parseError) {
                console.error('Error parsing JSON:', parseError);
                return res.status(500).json({ success: false, message: 'Failed to parse metadata file.' });
            }
        }

        // Add the new metadata
        metadataArray.push(metadata);
        fs.writeFile(filePath, JSON.stringify(metadataArray, null, 2), (err) => {
            if (err) {
                console.error('Error writing file:', err);
                return res.status(500).json({ success: false, message: 'Failed to save metadata.' });
            }
            console.log('Metadata saved successfully.');
            res.json({ success: true, message: 'Metadata saved successfully!' });
        });
    });
});

app.get('/api/getMetadata', (req, res) => {
    const filePath = './data/metadata.json';

    // Ensure the directory exists where the file will be saved
    ensureDirectoryExistence(filePath);

    // Read the existing metadata
    fs.readFile(filePath, (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return res.status(500).json({ success: false, message: 'Failed to read metadata file.' });
        }
        try {
            const metadataArray = JSON.parse(data || '[]'); // Handle empty file by providing default empty array
            res.json(metadataArray);
        } catch (parseError) {
            console.error('Error parsing JSON:', parseError);
            res.status(500).json({ success: false, message: 'Failed to parse metadata file.' });
        }
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Database server running on http://localhost:${PORT}`);
});
