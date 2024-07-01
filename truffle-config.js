module.exports = {
    networks: {
      development: {
        host: "127.0.0.1",
        port: 7545, // Port where your Ganache is running
        network_id: "5777", // Match any network id
        gas: 6000000, // Increase this value if necessary
      gasPrice: 20000000000, // 20 Gwei
      },
    },
    compilers: {
      solc: {
        version: "0.8.19", // Specify the version of Solidity compiler
      },
    },
  };
  