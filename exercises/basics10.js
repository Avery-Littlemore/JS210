// In the previous exercise, you reimplemented a function that converts non-negative numbers to strings. 
// In this exercise, you're going to extend that function by adding the ability to represent negative numbers.

// You may not use any of the standard conversion functions available in JavaScript, such as String(), 
// Number.prototype.toString, or an expression such as '' + number. You may, however, use the integerToString function from the previous exercise.

const NUMBERS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

function signedIntegerToString(num) {
  let newStr = '';
  let newNum = num;
  let numArr = []
  if (num === 0) {
    newStr = NUMBERS[0];
  } else if (num < 0) {
    newNum = Math.abs(newNum);
    while (newNum) {
      numArr.unshift(NUMBERS[newNum % 10]);
      newNum = (newNum - newNum % 10) / 10;
    }
    newStr = '-' + numArr.join('');
  } else {
    while (newNum) {
      numArr.unshift(NUMBERS[newNum % 10]);
      newNum = (newNum - newNum % 10) / 10;
    }
    newStr = '+' + numArr.join('');
  }
  return newStr;
}

console.log(signedIntegerToString(4321));      // "+4321"
console.log(signedIntegerToString(-123));      // "-123"
console.log(signedIntegerToString(0));         // "0"