// Earlier, we learned that Number.isNaN(value) returns true if value is the NaN value, false otherwise. 
// You can also use Object.is(value, NaN) to make the same determination.

// Without using either of those methods, write a function named isNotANumber that returns true if the value 
// passed to it as an argument is NaN, false if it is not.

function isNotANumber(input) {
  if (!input == false) {
    return false
  } else if (input ?? true) {
    return false
  } else if (input + 1 ){
    return false
  } else {
    return true
  }
} 

console.log(isNotANumber(null));
console.log(isNotANumber(undefined));
console.log(isNotANumber('3'));
console.log(isNotANumber(3));
console.log(isNotANumber('0'));
console.log(isNotANumber(0));
console.log(isNotANumber({}));
console.log(isNotANumber([]));
console.log(isNotANumber(''));
console.log(isNotANumber(NaN));

// simpler...

function isNotANumber(value) {
  return value !== value;
}