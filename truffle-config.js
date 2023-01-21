const HDWalletProvider = require('@truffle/hdwallet-provider');
require('dotenv').config();


module.exports = {
  networks: {
    development: {
     host: "127.0.0.1",
     port: 8545,
     network_id: "*",
    },
    goerli: {
      provider: function(){
        // return new HDWalletProvider(`${process.env.PRIVATE_KEY}`, `wss://goerli.infura.io/ws/v3/${process.env.INFURA_ID}`)
        // const pk = Buffer.from(`${process.env.PRIVATE_KEY}`, 'hex')
        // return new HDWalletProvider({privateKeys:`${process.env.PRIVATE_KEY}`, providerOrUrl: `https://goerli.infura.io/v3/${process.env.INFURA_ID}`})
        // return new HDWalletProvider({privateKeys: pk, providerOrUrl: `https://goerli.infura.io/v3/${process.env.INFURA_ID}`})
        return new HDWalletProvider(`${process.env.PRIVATE_KEY}`, `https://goerli.infura.io/v3/${process.env.INFURA_ID}`)

      },
      network_id:5,
      networkCheckTimeoutnetworkCheckTimeout: 10000,
      timeoutBlocks: 200,  
    }
  },
  
  // Ajouter cette partie (ou décommenter directement dans le fichier):
  compilers: {
    solc: {
      version: "0.8.17", // Récupérer la version exacte de solc-bin (par défaut : la  version de truffle)
      settings: {  // Voir les documents de solidity pour des conseils sur l'optimisation et l'evmVersion
        optimizer: {
        enabled: false,
        runs: 200
        },
      }
    },
  },
 };