const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const Blockchain = require('./Blockchain');
const port = 3001;
const bitcoin = new Blockchain();


const {v4: uuidv4} = require('uuid');
const nodeAddress = uuidv4().split('-').join('');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));



app.get('/blockchain', function (req, res) {
  res.send(bitcoin);
});



app.get('/wallet', function(req, res){
  res.sendFile(__dirname + "/index.html"); 
});



app.post('/wallet', function(req, res) {
  const blockIndex = bitcoin.createNewTransaction(req.body.amount, req.body.senderAddress, req.body.recipientAddress, req.body.fees);
  res.json({note: 'This Transaction will be added in block ' + blockIndex });
});



app.get('/mine', function (req,res){
  const lastBlock = bitcoin.getLastBlock();
  const previousBlockHash = lastBlock['Hash'];

  const currentBlockData = {
    transaction: bitcoin.pendingTransaction,
    index: lastBlock['index'] + 1
  }
  const nonce = bitcoin.proofOfWork(previousBlockHash, currentBlockData);

  const blockhash = bitcoin.hashBlock(previousBlockHash, currentBlockData, nonce);


  const newBlock = bitcoin.createNewBlock(nonce, previousBlockHash, blockhash);
  res.json({
    note: "New Block mined Successfull",
    block: newBlock
  });
 
});



app.listen(port, function(){
    console.log(port);
    console.log("Server is running on port " + port + "....")
});