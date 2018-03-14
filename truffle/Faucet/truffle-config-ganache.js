module.exports = {
    // See <http://truffleframework.com/docs/advanced/configuration>
    // to customize your Truffle configuration!
    networks: {
        localnode: {
            network_id: "3",
            host: "localhost",
            port: 8546,
            from: "0x546ecf360fcf266d44c725cd4b7ea4c7172151ce",
            gas: 8000000,
            gasPrice: 100000000000,
        }
    }
};
