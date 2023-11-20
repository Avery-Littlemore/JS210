// The previous exercise mimics the parseInt function to a lesser extent. In this exercise, 
// you're going to extend that function to work with signed numbers.
// Write a function that takes a string of digits and returns the appropriate number as an integer. 
// The string may have a leading + or - sign; if the first character is a +, your function should 
// return a positive number; if it is a -, your function should return a negative number. If there is no sign, return a positive number.
// You may assume the string will always contain a valid number.

const NUMBERS = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  0: 0,
}

function stringToSignedInteger(string) {
  let newStr;
  if (string[0] === '+') {
    newStr = stringToInteger(string.slice(1));
  } else if (string[0] === '-') {
    newStr = -stringToInteger(string.slice(1));
  } else {
    newStr = stringToInteger(string);
  }
  return newStr;
}

function stringToInteger(string) {
  let stringArr = string.split('');
  for (let i = 0; i < stringArr.length; i += 1) {
    stringArr[i] = NUMBERS[stringArr[i]];
  }
  return stringArr.join('');
}

console.log(stringToSignedInteger('4321'));      // 4321
console.log(stringToSignedInteger('-570'));      // -570
console.log(stringToSignedInteger('+100'));      // 100