// Write a function named splice that accepts three arguments: an Array, a start index, and the number of values to remove. 
// The function should remove values from the original Array, starting with the start index and removing the specified number of values. 
// The function should return the removed values in a new Array.

function splice(array, start, numToRemove) {
  let removed = [];
  let newSize = array.length - numToRemove;
  counter = 0;
  for (let i = start; i < start + numToRemove; i += 1) {
    removed.push(array[i])
  }
  for (let j = start + numToRemove; j < array.length; j += 1) {
    array[j - numToRemove] = array[j];
  }
  array.length = newSize;
  return removed;
}

let count = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(splice(count, 2, 5));                   // [ 3, 4, 5, 6, 7 ]
console.log(count);                                 // [ 1, 2, 8 ]