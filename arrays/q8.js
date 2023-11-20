// Write a function that takes an array, and returns a new array with duplicate elements removed.

function uniqueElements(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (newArr.includes(arr[i])) {
      continue;
    } else {
      newArr.push(arr[i]);
    }
  }
  console.log(newArr);
}

uniqueElements([1, 2, 4, 3, 4, 1, 5, 4]);  // returns [1, 2, 4, 3, 5]