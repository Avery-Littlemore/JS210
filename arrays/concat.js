// Write a function named concat that accepts two Array arguments.
// The function should return a new Array that contains the values from each of the original Arrays.

function concat(arr1, arr2) {
  let newArr = [];
  for (let i = 0; i < arr1.length; i += 1) {
    newArr.push(arr1[i]);
  }
  for (let j = 0; j < arr2.length; j += 1) {
    newArr.push(arr2[j]);
  }
  return newArr;
}

console.log(concat([1, 2, 3], [4, 5, 6]));       // [ 1, 2, 3, 4, 5, 6 ]