require('@nomicfoundation/hardhat-toolbox')
require('dotenv').config()

const { ALFAJORES_API_KEY, ALFAJORES_URL, PRIVATE_KEY } = process.env

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: 'hardhat',
  networks: {
    hardhat: {
      chainId: 31337,
    },
    localhost: {
      url: 'http://127.0.0.1:8545',
      chainId: 31337,
    },
    alfajores: {
      url: ALFAJORES_URL,
      accounts: [PRIVATE_KEY],
      chainId: 44787,
    },
  },
  solidity: {
    compilers: [
      {
        version: '0.8.9',
      },
      {
        version: '0.8.7',
      },
      {
        version: '0.6.6',
      },
    ],
  },
  namedAccounts: {
    deployer: {
      default: 0,
    },
  },
  etherscan: {
    apiKey: {
      alfajores: ALFAJORES_API_KEY,
    },
    customChains: [
      {
        network: 'alfajores',
        chainId: 44787,
        urls: {
          apiURL: 'https://api-alfajores.celoscan.io/api',
          browserURL: 'https://alfajores.celoscan.io/',
        },
      },
    ],
  },
}
