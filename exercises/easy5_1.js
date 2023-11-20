// Write a function that takes a string, doubles every character in the string, and returns the result as a new string.

function repeater(str) {
  let returnStr = ''
  if (str.length > 1) {
    str.split('').forEach(char => returnStr += char + char)
  }

  return returnStr;
}

console.log(repeater('Hello'));        // "HHeelllloo"
console.log(repeater('Good job!'));    // "GGoooodd  jjoobb!!"
console.log(repeater(''));             // ""