const Migrations = artifacts.require("Migrations");

module.exports = function(deployer) {
  deployer.deploy(Migrations)
    .then(() => {
      console.log("Migrations contract deployed.");
    })
    .catch(error => {
      console.error("Migrations deployment error:", error);
    });
};
