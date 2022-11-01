require("@nomicfoundation/hardhat-toolbox");
require('@nomiclabs/hardhat-etherscan');
require('dotenv').config();

const GOERLI_RPC_URL = process.env.RPC_URL
const PRIVATE_KEY = process.env.PRIVATE_KEY
const ETHERSCAN_API = process.env.ETHERSCAN_API

module.exports = {
  solidity: '0.8.17',
  networks: {
    goerli: {
      url: GOERLI_RPC_URL,
      accounts: [PRIVATE_KEY],
      chainId: 5,
    },
    localhost: {
      url: 'http://127.0.0.1:8545/', 
      chainId: 31337,
    },
  },
  etherscan: {
    apiKey: ETHERSCAN_API,
  },
}

/** @type import('hardhat/config').HardhatUserConfig */
