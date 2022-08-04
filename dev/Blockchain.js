const sha256 = require("sha256");

let a = 100;

function Blockchain() {
    this.chain = [];
    this.pendingTransaction = [];
    this.createNewBlock(100, 'DUMYYYY', 'BITCOIN');
}


Blockchain.prototype.createNewBlock = function(nonce,  prevBlockHash, Hash){
    m = a/2;
    
    if((this.chain.length + 1) == 1){
        h = 1;
    }
    else{
        h = this.pendingTransaction.length;
    }

    const newBlock = {
        Height: this.chain.length + 1,
        timestamp: Date.now(),
        NumberOfTransactions: h, 
        transection: this.pendingTransaction,
        nonce: nonce,
        prevBlockHash: prevBlockHash,
        Hash: Hash,
        BlockReward: m,

    }
    a = m;
    this.pendingTransaction = [];
    this.chain.push(newBlock)

    return newBlock;

}



Blockchain.prototype.getLastBlock = function(){
    return this.chain[this.chain.length - 1];
}



Blockchain.prototype.createNewTransaction = function(amount, sender, recipient, fees) {

    const newTrasaction = {
        amount: amount,
        sender: sender,
        recipient: recipient,
        FeeReward: fees,
    };
    

    this.pendingTransaction.push(newTrasaction);

    return this.getLastBlock()['index'] + 1;
}



Blockchain.prototype.hashBlock = function(prevBlockHash, currentBlockData, nonce) {
    const dataAsString = prevBlockHash + nonce.toString() + JSON.stringify(currentBlockData);
    const hash = sha256(dataAsString);
    return hash;
}



Blockchain.prototype.proofOfWork = function(prevBlockHash, currentBlockData) {
    let nonce = 0;
    let hash = this.hashBlock(prevBlockHash, currentBlockData, nonce);

    while (hash.substring(0,4) !== '0000') {
        nonce++;
        hash = this.hashBlock(prevBlockHash,currentBlockData,nonce);
        // console.log(hash);
    }

    return nonce;
}



module.exports = Blockchain;