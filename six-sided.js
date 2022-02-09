const prompt = require('prompt-sync')();

let Roll = Number(prompt("Type [1] to roll the dice! "));

if (Roll === 1) {
    console.log(Math.ceil(Math.random()*6));
} else {
    console.log("Can not compute.");
}