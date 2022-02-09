const prompt = require('prompt-sync')();

let roll = Number(prompt("How many sides does your die have? "));
let loaded = Number(prompt("What side is loaded? "));

if (roll === ((1 || 2 || 3 || 4 || 5 || 6 ) && (roll === loaded))) {
    console.log((Math.ceil(Math.random()*(roll))) * (Math.ceil(Math.pow(1/loaded,2))));
} else {
    
}
