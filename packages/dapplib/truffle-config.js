require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess gloom symptom spot warrior ridge remember arrow island knife sun gasp'; 
let testAccounts = [
"0x849763b4e41c7d697972c9c1b5aeda67ec7a9c26b3c867535f6c2b8dbd6b4bcf",
"0x0a7bb447abf871ce53481ebff0c34d3acfe32e6c50c720a6447c47b248ab7c50",
"0xacd0e349ce69530e4e7296690ed793e9419c60f7d6e046273e0ac4c760190f6b",
"0x92275164df2312d87fa660a0ef25cdfc7ea0b50b49f0a45e7595a9f5baaf628e",
"0xdb7f581428fc80035f8ab786075ab797727b204446cb7448ea6790a8efdbe4e6",
"0x0ed306755accabde0d2dabf01332d2b1a5a7ed1eea8b580549c513b5b4d0b8dd",
"0x565101d67a46cf64dcfff68da6b7728f394e3776c4c77d2c92d338c3a15cf3b4",
"0xc27eddf34368e82ed45741d7732bb25f1cd532606481dce78c899da8a0c0e9e4",
"0xe571209889776f969e4b04bd4aeb434d9d322c441ca506a75d64de2c694dea8f",
"0x504d07a4df2189eef6bb1abbd0db633b2aeb6edc3efa5e97c1c9d3b6ec1a68b2"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


