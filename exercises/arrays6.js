// In this exercise, you will implement your own version of the Array.prototype.reverse method. 
// Your implementation should differ from the built-in method in the following two ways:
  // It should accept either a string or an array as an argument.
  // It should return a new string or array.

function reverse(inputForReversal) {
  let reversedOuput;
  if (Array.isArray(inputForReversal)) {
    reversedOuput = [];
    for (let i = inputForReversal.length - 1; i >= 0; i -= 1) {
      reversedOuput.push(inputForReversal[i]);
    }
  } else {
    reversedOuput = '';
    for (let i = inputForReversal.length - 1; i >= 0; i -= 1) {
      reversedOuput += inputForReversal[i];
    }
  }
  console.log(reversedOuput);
  return reversedOuput;
}

reverse('Hello');           // "olleH"
reverse('a');               // "a"
reverse([1, 2, 3, 4]);      // [4, 3, 2, 1]
reverse([]);                // []

const array = [1, 2, 3];
reverse(array);             // [3, 2, 1]
console.log(array);                      // [1, 2, 3]