// Write a function that takes two arrays as arguments and returns an array containing the union of the values from the two. 
// There should be no duplication of values in the returned array, even if there are duplicates in the original arrays. 
// You may assume that both arguments will always be arrays.

function union(arr1, arr2) {
  let newArr = [];
  for (let i = 0; i < arr1.length; i += 1) {
    if (newArr.indexOf(arr1[i]) === -1) {
      newArr.push(arr1[i]);
    }
  }
  for (let j = 0; j < arr2.length; j += 1) {
    if (newArr.indexOf(arr2[j]) === -1) {
      newArr.push(arr2[j]);
    }
  }
  return newArr;
}

console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]