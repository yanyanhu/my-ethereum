var Casino = artifacts.require("./Casino.sol");

module.exports = function(deployer) {
  deployer.deploy(Casino, web3.toWei(0.01, 'ether'), 100, {gas: 3000000});
};
