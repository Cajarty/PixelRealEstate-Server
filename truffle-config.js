const HDWalletProvider = require("@truffle/hdwallet-provider");

module.exports = {
    networks: {
        development: {
            host: "localhost",
            port: 8545,
            network_id: "1515620301557", // Match any network id
            gas: 4700000,
            networkCheckTimeout: 1000000
        },
        rinkeby: {
            host: "localhost", // Connect to geth on the specified
            port: 8545,
            from: "0x4e11D7D39d1933f0dB081376d7B312fCfd118b1E", // default address to use for any transaction Truffle makes during migrations
            network_id: 4,
            gas: 4700000,
            networkCheckTimeout: 1000000
        },
        kovan: {
            provider: () => {
                return new HDWalletProvider({
                    mnemonic: 'acid invest endorse drift congress middle lonely busy paddle another brain glue', // Throwaway 0-eth dev address
                    providerOrUrl: 'wss://kovan.infura.io/ws/v3/b46c5cc8ebc7441aa2eb027f51c1950c', // API key used with that 100k daily limit
                    pollingInterval: 10000,
                });
            },
            networkCheckTimeout: 1000000
        }
    }
};