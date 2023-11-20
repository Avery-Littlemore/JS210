// Build a program that logs when the user will retire and how many more years the user has to work until retirement.
// What is your age? 30
// At what age would you like to retire? 70
// It's 2017. You will retire in 2057.
// You have only 40 years of work to go!

let rlSync = require('readline-sync');

console.log('What is your age?')
let age = rlSync.prompt();

console.log('At what age would you like to retire?')
let retirement = rlSync.prompt();

let year = new Date().getFullYear();

let yearsToGo = Number(retirement) - Number(age);

console.log(`It's ${year}. You will retire in ${year + yearsToGo}.`)
console.log(`You have only ${yearsToGo} years of work to go!`)