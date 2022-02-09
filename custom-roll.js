const prompt = require('prompt-sync')();

let custom = Number(prompt("How many sides does your die have? "));

console.log(Math.ceil(Math.random()*custom));

