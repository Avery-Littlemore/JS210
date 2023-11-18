// Write a program that asks the user to enter an integer greater than 0, 
// then asks if the user wants to determine the sum or the product of all numbers between 1 and the entered integer, inclusive.

// Please enter an integer greater than 0: 5
// Enter "s" to compute the sum, or "p" to compute the product. s
// The sum of the integers between 1 and 5 is 15.

// Please enter an integer greater than 0: 6
// Enter "s" to compute the sum, or "p" to compute the product. p
// The product of the integers between 1 and 6 is 720.

let rlSync = require('readline-sync');

console.log('Please enter an integer greater than 0:')
let num = Number(rlSync.prompt());

console.log('Enter "s" to compute the sum, or "p" to compute the product.')
let sumOrProduct = rlSync.prompt();

if (sumOrProduct === 's') {
  let sum = 0
  for (let i = 1; i <= num; i += 1) {
    sum += i;
  }
  console.log(`The sum of the integers between 1 and ${num} is ${sum}.`)
} else if (sumOrProduct === 'p') {
  let product = 1
  for (let i = 1; i <= num; i += 1) {
    product *= i;
  }
  console.log(`The product of the integers between 1 and ${num} is ${product}.`)
} else {
  console.log('Not a valid input');
}