// Import libraries
var web3            = require('web3'),
    contract        = require("truffle-contract"),
    path            = require('path')
    MyContractJSON  = require(path.join(__dirname, 'build/contracts/Casino.json'));

// Setup RPC connection   
var provider    = new web3.providers.HttpProvider("http://localhost:8545");

// Read JSON and attach RPC connection (Provider)
var MyContract = contract(MyContractJSON);
MyContract.setProvider(provider);

// Use Truffle as usual
MyContract.deployed().then(function(instance) {
    //instance.myFunction.call(arg1, arg2, {from: '0x************************'})
    //
    //return instance.maxAmountOfBets()
    //return instance.bet(5, {gas: 300000, from: web3.eth.accounts[0], value: web3.toWei(0.5, 'ether')})
    return instance.bet(3, {gas: 300000, from: "0x****", value: '10000000000000000'})

}).then(function(result) {
    console.log(result);

}, function(error) {
    console.log(error);
});
