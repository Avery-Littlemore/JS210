// Write a function that returns a string of all the values in an array with no 
// intervening content. For example, your function should return '1a4' if the 
// argument is [1, 'a', 4]. Use a for loop to process the array elements in 
// sequence, and coerce each value in the array to a String before concatenating it to the result string.

const NAMES = ['Steve', 'Martha', 'Pat'];
const NUMBERS = [1, 2, 3, 4, 5];

function arrToStr(array) {
  let string = '';
  for (let i = 0; i < array.length; i += 1) {
    string += String(array[i]);
  }
  return string;
}

console.log(arrToStr(NAMES));
console.log(arrToStr(NUMBERS));