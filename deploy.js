const Web3 = require('web3');
const fs = require('fs');
const path = require('path');

// Replace with your Ganache URL and account details
const ganacheUrl = 'http://127.0.0.1:7545';
const account = '0xa8fda71DA8505DE61086eEEaA63713D6f1b73D7b'; // Replace with your account address
const privateKey = '0x8218ab657dbfb5b0cc84a8ceb4faffbfb92e95cb1923bed9d64cd355013a14eb'; // Replace with your private key

// Create a new instance of Web3 using your Ganache URL
const web3 = new Web3(ganacheUrl);

const deployContract = async () => {
  try {
    // Path to your compiled contract JSON file
    const contractPath = path.resolve(__dirname, 'build/contracts/FoodTraceability.json');
    const { abi, bytecode } = JSON.parse(fs.readFileSync(contractPath));

    // Create a new contract instance
    const contract = new web3.eth.Contract(abi);

    // Prepare deployment parameters
    const deployOptions = {
      data: '0x' + bytecode,
      arguments: []
    };

    // Create a transaction object for contract deployment
    const deployTransaction = contract.deploy(deployOptions);

    // Estimate gas and get gas price
    const gas = await deployTransaction.estimateGas({ from: account });
    const gasPrice = await web3.eth.getGasPrice();

    // Build transaction object
    const transactionObject = {
      data: deployTransaction.encodeABI(),
      gas: gas,
      gasPrice: gasPrice
    };

    // Sign transaction with private key
    const signedTransaction = await web3.eth.accounts.signTransaction(transactionObject, privateKey);

    // Deploy the contract and get deployment receipt
    const receipt = await web3.eth.sendSignedTransaction(signedTransaction.rawTransaction);

    // Log contract deployment address
    console.log(`Contract deployed at address: ${receipt.contractAddress}`);
  } catch (error) {
    console.error('Error deploying contract:', error);
  }
};

deployContract();
