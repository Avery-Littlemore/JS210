// Write a function that takes one argument, a positive integer, and returns a string of 
// alternating '1's and '0's, always starting with a '1'. The length of the string should match the given integer.

function stringy(posInt) {
  let returnStr = '';
  let counter = 0;
  while (counter < posInt) {
    returnStr = counter % 2 === 0 ? returnStr + '1' : returnStr + '0'
    counter += 1;
  }
  console.log(returnStr);
}

stringy(6);    // "101010"
stringy(9);    // "101010101"
stringy(4);    // "1010"
stringy(7);    // "1010101"