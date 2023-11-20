// Write a function that takes a string, doubles every consonant character in the string, and returns the result as a new string. 
// The function should not double vowels ('a','e','i','o','u'), digits, punctuation, or whitespace.

const CONSONANTS = 'bcdfghjklmnpqrstvwxyz'

function doubleConsonants(str) {
  let returnStr = ''
  if (str.length > 1) {
    str.split('').forEach(char => {
      if (CONSONANTS.indexOf(char.toLowerCase()) === -1) {
        returnStr += char
      } else {
        returnStr += char + char
      }
    });
  }

  return returnStr;
}

console.log(doubleConsonants('String'));          // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
console.log(doubleConsonants(''));                // ""