// Write a function that takes an array of arrays as an argument, 
// and returns a new array that contains the sums of each of the sub-arrays.

function matrixSums(arr) {
  let sumArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    sumArr.push(arr[i].reduce((total, accum) => total + accum, 0));
  }
  console.log(sumArr);
}

matrixSums([[2, 8, 5], [12, 48, 0], [12]]);  // returns [15, 60, 12]