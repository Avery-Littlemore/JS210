// Write a program that solicits six numbers from the user and logs a message that describes whether the sixth 
// number appears among the first five numbers.

// Enter the 1st number: 25
// Enter the 2nd number: 15
// Enter the 3rd number: 20
// Enter the 4th number: 17
// Enter the 5th number: 23
// Enter the last number: 17

// The number 17 appears in [25, 15, 20, 17, 23].

// -----

// Enter the 1st number: 25
// Enter the 2nd number: 15
// Enter the 3rd number: 20
// Enter the 4th number: 17
// Enter the 5th number: 23
// Enter the last number: 18

// The number 18 does not appear in [25, 15, 20, 17, 23].
let rlSync = require('readline-sync');
let arr = []

console.log('Enter the 1st number:')
arr.push(rlSync.prompt());
console.log('Enter the 2nd number:')
arr.push(rlSync.prompt());
console.log('Enter the 3rd number:')
arr.push(rlSync.prompt());
console.log('Enter the 4th number:')
arr.push(rlSync.prompt());
console.log('Enter the 5th number:')
arr.push(rlSync.prompt());
console.log('Enter the last number:')
let lastNum = rlSync.prompt();

if (arr.indexOf(lastNum) !== -1) {
  console.log(`The number ${lastNum} appears in [${arr}]`)
} else {
  console.log(`The number ${lastNum} does not appear in [${arr}]`)
}