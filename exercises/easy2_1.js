// Write a function that takes a string argument and returns a new string that 
// contains the value of the original string with all consecutive duplicate 
// characters collapsed into a single character.

function crunch(string) {
  let newStr = '';
  for (let i = 0; i < string.length; i += 1) {
    if (string[i] === newStr.slice(-1)) {
      continue;
    } else {
      newStr += string[i];
    }
  }
  return newStr;
}

console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""