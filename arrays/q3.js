// Create a function that returns the contents of the array it receives as an argument, 
// but with the values in reversed order. Your function should use a for loop that 
// iterates over the elements in the array from the end of the array to the beginning, 
// and pushes each element's value to a new result array. Be sure to start your loop 
// with the element whose index is one less than the input array's length.
const NAMES = ['Steve', 'Martha', 'Pat'];
const NUMBERS = [1, 2, 3, 4, 5];

function reverse(arr) {
  let newArr = []
  for (let i = arr.length - 1; i >= 0; i -= 1) {
    newArr.push(arr[i]);
  }
  return newArr;
}

console.log(reverse(NAMES));
console.log(reverse(NUMBERS));