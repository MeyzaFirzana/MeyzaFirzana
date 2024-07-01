import Web3 from 'web3';
import FoodTraceability from './build/contracts/FoodTraceability.json';

const web3 = new Web3(Web3.givenProvider || "http://localhost:7545");

const contractAddress = "0x0E408E4d2Aa3be5B5A670e3beE097741C28F9958"; // Your deployed contract address
const contractABI = FoodTraceability.abi;

const contract = new web3.eth.Contract(contractABI, contractAddress);

export default contract;
