const CC = require('crypto-converter-lt');
let cryptoConverter = new CC({ from: "btc", to: "usdt", amount: 100 })
console.log(cryptoConverter)