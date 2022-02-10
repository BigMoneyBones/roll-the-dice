// const prompt = require('prompt-sync')();

// let sides = Number(prompt("How many sides does your die have? ")); //probability is 1/sides
// let rigged = Number(prompt("What side is loaded? "));              //desire to have a probability of 2/sides
// let twice = 2 / sides;

// // if (sides === 0 || sides === 1) {
// //     console.log("Impossible.")
// // } else if (sides >= 2){
// //     console.log(((Math.ceil(Math.random()) * sides)) * result);
// // }

// if ()

// console.log((Math.ceil(Math.random()*sides)) * (twice * rigged));









const prompt = require('prompt-sync')();

let sides = Number(prompt("How many sides does your die have? ")); 
let prob1 = 1 / sides;

let rigged = Number(prompt("What side is loaded? "));              
let prob2 = rigged * (2 / sides);

let random = ((Math.ceil(Math.random())) * sides);

console.log(random * prob1) + ()