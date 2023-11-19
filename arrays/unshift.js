// Write a function named unshift that accepts two arguments: an Array and a value. 
// The function should insert the value at the beginning of the Array, and return 
// the new length of the array. You will need a for loop for this problem.

function unshift(array, element) {
  for (let i = array.length; i >= 0; i -= 1) {
    array[i] = array[i-1];
  }
  array[0] = element;
  return array.length;
}

let count = [1, 2, 3];
console.log(unshift(count, 0));      // 4
console.log(count);                  // [ 0, 1, 2, 3 ]