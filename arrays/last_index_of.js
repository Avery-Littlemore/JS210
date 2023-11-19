// Write a function indexOf that accepts two arguments: an array and a value. 
// The function returns the first index at which the value can be found, or -1 if the value is not present.

function lastIndexOf(array, value) {
  for (let i = array.length - 1; i >= 0; i -= 1) {
    if (array[i] === value) {
      return i;
    }
  }
  return -1;
} 

console.log(lastIndexOf([1, 2, 3, 3], 3));     // 3
console.log(lastIndexOf([1, 2, 3], 4));        // -1