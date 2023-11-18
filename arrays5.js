// Use reduce to compute the sum of the squares of all of the numbers in an array:
// Note that 83 is 3*3 + 5*5 + 7*7.

function sumOfSquares(arr) {
  return arr.reduce((accumulator, element) => accumulator + element * element, 0)
}

let array = [3, 5, 7];
console.log(sumOfSquares(array)); // => 83