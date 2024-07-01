//const Migrations = artifacts.require("Migrations");
//const FoodTraceability = artifacts.require("FoodTraceability");



//module.exports = function(deployer) {
 // deployer.deploy(Migrations).then(function() {
   //// return deployer.deploy(FoodTraceability);
  //});
//};
//new


//const MyContract = artifacts.require("MyContract");

//module.exports = function(deployer) {
  //deployer.deploy(MyContract, { gas: 6000000 }); // Adjust gas limit as needed
//};
// new again after delete 1_initial
//const FoodTraceability = artifacts.require("FoodTraceability");

//module.exports = function (deployer) {
  //deployer.deploy(FoodTraceability);
//};

const FoodTraceability = artifacts.require("FoodTraceability");

module.exports = async function(deployer, network, accounts) {
  //const deployerAddress = accounts[0];

  console.log("Starting deployment...");
  await deployer.deploy(FoodTraceability);

  const instance = await FoodTraceability.deployed();
  console.log("Contract deployed at address:", instance.address);

  // Grant the deployer the default admin role
  //const DEFAULT_ADMIN_ROLE = await instance.DEFAULT_ADMIN_ROLE();
 // await instance.grantRole(DEFAULT_ADMIN_ROLE, deployerAddress);

  //console.log(`Granted DEFAULT_ADMIN_ROLE to: ${deployerAddress}`);
};
