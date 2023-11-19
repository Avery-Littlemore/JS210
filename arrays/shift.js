// Write a function named shift that accepts one argument: an Array. 
// The function should remove the first value from the beginning of the Array and return it.

function shift(array) {
  let first = array[0];
  for (let i = 0; i < array.length - 1; i += 1) {
    array[i] = array[i + 1];
  }
  array.length = array.length - 1;
  return first;
}

let count = [1, 2, 3];
console.log(shift(count));           // 1
console.log(count);                  // [ 2, 3 ]