const Blockchain = require("./Blockchain");



//DefaultConstructor
// const bitcoin = new Blockchain();



//========================CreateNewBlock Testing==================================//
// bitcoin.createNewBlock(1234, "hsadhashddasdasda", "dsadsadasddas");
// bitcoin.createNewBlock(5678, "hsadhashddasdasda", "dsadsadasddas");
// console.log(bitcoin);



//========================CreateNewTransaction Testing=============================//
// bitcoin.createNewTransaction(2000, "dsadasdas", "dasdasqwqqq");
// bitcoin.createNewTransaction(3000, "dsadasdas", "dasdasqwqqq");
// bitcoin.createNewTransaction(4000, "dsadasdas", "dasdasqwqqq");


//1st
//console.log(bitcoin);

//3rd to see array
//console.log(bitcoin.chain[1]);



//==========================BlockHash & Proof of Work============================//

// const previousBlockHash = "SSADASDASDASDAAAASSSSSDSA";
// const currentBlockData = [
//     {
//         amount: 10,
//         sender: "SAASDADASDASDASAAAAAAA",
//         receipent: "SSSSSSSSSSSSSSSSSSSSD"
//     },
//     {
//         amount: 20,
//         sender: "QQQQQQQQQQQQSDASDASAAAAAAA",
//         receipent: "SBBBBBBBBSSSSSSSSSSSSSSSD"
//     }
// ];

// 1)HashBlock Testing

// const nonce = 12345;
// console.log(bitcoin.hashBlock(previousBlockHash,currentBlockData, nonce));


// 2)Proof of work Testing

// console.log(bitcoin.proofOfWork(previousBlockHash, currentBlockData));



///test// node test.js  ///test//