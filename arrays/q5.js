// Using the function from the previous problem, What happens if you 
// pass a count greater than the length of the array? How can you fix the 
// function so it returns a new instance of the entire array when count is greater than the array length?

function lastNOf(arr, count) {
  let index = arr.length - length;

  if (index < 0) {
    index = 0;
  }

  return arr.slice(index);
}

let digits = [4, 8, 15, 16, 23, 42];
lastNOf(digits, 3);    // returns [16, 23, 42]
lastNOf(digits, 7);    // returns [16, 23, 42]