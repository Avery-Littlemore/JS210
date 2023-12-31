// Write a function named slice that accepts three arguments: 
// an Array, a start index, and an end index. 
// The function should return a new Array that contains values 
// from the original Array starting with the value at the starting 
// index, and including all values up to but not including the end index. 
// Do not modify the original Array.

function slice(array, start, end) {
  newArr = [];
  for (let i = start; i < end; i += 1) {
    newArr.push(array[i]);
  }
  return newArr;
}

console.log(slice([1, 2, 3, 4, 5], 0, 2));                      // [ 1, 2 ]
console.log(slice(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 1, 3));  // [ 'b', 'c' ]