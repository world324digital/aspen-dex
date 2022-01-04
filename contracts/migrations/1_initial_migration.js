var Migrations = artifacts.require("./aspenNFT.sol");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
};
