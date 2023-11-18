// Write a function similar to the oddLengths function from Exercise 6, 
// but don't use map or filter. Instead, try to use the reduce method.

function oddLengths(arr) {
  return arr.reduce(function(accumulator, element) {
    if (element.length % 2 === 0) {
      return accumulator
    } else {
      accumulator.push(element.length)
      return accumulator
    }
  }, []);
}

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]