require('@nomiclabs/hardhat-ethers');
require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.17',
  networks: {
    rinkeby: {
      url: 'https://rinkeby.infura.io/v3/YOUR_INFURA_PROJECT_ID',
      accounts: ['YOUR_PRIVATE_KEY']
    }
  }
};
