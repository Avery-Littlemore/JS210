// In this exercise, you will write a program that asks the user for a phrase, 
// then outputs the number of characters in that phrase. 
// Go over the documentation for String to find an appropriate method to use.

let rlSync = require('readline-sync');
let first = rlSync.question(console.log("Please enter a phrase: "));
console.log(`there are ${first.length} characters in ${first}`);