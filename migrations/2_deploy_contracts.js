const LowbMarket = artifacts.require("LowbMarket");
const fs = require('fs');
const address = fs.readFileSync("./../.address").toString().trim();

module.exports = function(deployer) {
  deployer.deploy(LowbMarket, address, address);
};
