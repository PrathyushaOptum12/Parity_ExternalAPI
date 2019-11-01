var fs = require('fs');

 var jsonFile = "C:/Users/pkorrap2/Repos/Examples/HelloNodeJsAPI/api/abis/HelloBlockchain.json";
var parsed= JSON.parse(fs.readFileSync(jsonFile));
var abi = parsed.abi;
var Web3 = require('web3'); // gets the Web3 object, which is a function constructor
var web3 = new Web3(); // instantiate Web3 to get a new object

web3Azure = new Web3(new Web3.providers.HttpProvider("https://accumdev.blockchain.azure.com:3200/ajkJzpNwg0SihtLDBc1dFTQC"));
web3Local = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
var helloBlockchainAzureContract = new web3Azure.eth.Contract(abi,"0xc3DF3b7740040Af900e85E9F9a268AD2C7aFB277");
var helloBlockchainLocalContract = new web3Local.eth.Contract(abi,"0xEA04A65E212903A8411AFF832E0126Fd502EFbc1");

console.log("===caling HelloBlockchain smart contract===");



exports.read_HelloBlockchain = function(req, res) {
    
    // helloBlockchainLocalContract.methods.getMessage().call((err, result) => 
    //  { 
    //      console.log(result);
    //     res.send(result);
    //      });
    res.send("hello blockchain");
};