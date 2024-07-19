// test_db_server.js
const axios = require('axios');

const testMetadata = {
    walletAddress: '0x1234567890abcdef1234567890abcdef12345678',
    firstMintTime: new Date().toISOString(),
    lastMintTime: new Date().toISOString(),
    totalMinted: 10,
    mintCount: 2,
    ipAddress: '192.168.1.1',
    deviceInfo: {
        browser: 'Chrome',
        os: 'Windows 10'
    },
    location: 'New York, USA',
    referrer: 'https://example.com',
    lastLoginTime: new Date().toISOString(),
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
    mintingStatus: 'success',
    averageMintInterval: '3 days',
    accountAge: '1 year'
};

axios.post('http://localhost:3006/api/saveMetadata', testMetadata)
    .then(response => {
        console.log('Response:', response.data);
    })
    .catch(error => {
        console.error('Error:', error.message);
        if (error.response) {
            console.error('Error response data:', error.response.data);
        }
    });
