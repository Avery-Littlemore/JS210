// Use map and filter to first determine the lengths of all the elements in an array of string values, 
// then discard the even values (keep the odd values).

function oddLengths(array) {
  newArr = array.filter(str => str.length % 2 !== 0)
  return newArr.map(str => str.length)
}

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]