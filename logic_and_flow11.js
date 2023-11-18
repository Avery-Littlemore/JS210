// Write a function that takes a number of rows as the argument nStars and logs a square of numbers and asterisks. 
// For example, if nStars is 7, log the following pattern:
// You may assume that nStars is greater than 1 and less than 10.

// P: Take a number representing rows and columns. Print out each row with incrementing numbers and decremeting stars.
// Input: number of rows and cols
// Output: strings of rows

// Algorithm: 

function generatePattern(nStars) {
  let output = '1';
  for (let i = 1; i <= nStars; i += 1) {
    output = output.slice(0,i-1).concat(i).concat('*'.repeat(nStars - i));
    console.log(output);
  }
}

generatePattern(7);
generatePattern(20);

// console output
// 1******
// 12*****
// 123****
// 1234***
// 12345**
// 123456*
// 1234567