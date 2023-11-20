// In this exercise, you will implement your own versions of the Array.prototype.shift 
// and Array.prototype.unshift methods. These methods manipulate the contents of an array starting from the first index.
// The shift method removes the first element from an array and returns that element; 
// if the array is empty, shift returns undefined. The unshift method adds one or more 
// elements to the start of an array and returns the new length of the array. Both methods mutate the original array.

function shift(arr) {
  if (arr.length === 0) {
    return undefined;
  } 
  let removed = arr[0];
  arr.splice(0, 1);;
  return removed;
}

function unshift(arr, ...args) {
  for (const arg of args) {
    arr.splice(0, 0, arg)
  }
  console.log(arr);
  return arr.length;
}

console.log(shift([1, 2, 3]));                // 1
console.log(shift([]));                       // undefined
console.log(shift([[1, 2, 3], 4, 5]));        // [1, 2, 3]

console.log(unshift([1, 2, 3], 5, 6));        // 5
console.log(unshift([1, 2, 3]));              // 3
console.log(unshift([4, 5], [1, 2, 3]));      // 3

const testArray = [1, 2, 3];
shift(testArray);                // 1
console.log(testArray);                       // [2, 3]
unshift(testArray, 5);           // 3
console.log(testArray);                       // [5, 2, 3]