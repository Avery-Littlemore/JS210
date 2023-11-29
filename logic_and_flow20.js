// Rot13 ("rotate by 13 places") is a letter-substitution cipher that translates a String into a new String:
// For each character in the original String:
  // If the character is a letter in the modern English alphabet, change it to the character 13 positions later in the alphabet. 
    // Thus, a becomes n. If you reach the end of the alphabet, return to the beginning. Thus, o becomes b.
  // Letter transformations preserve case. A becomes N while a becomes n.
  // Don't modify characters that are not letters.
// Write a Function, rot13, that takes a String and returns that String transformed by the rot13 cipher.

// P:
// Take a string as input
// Go character by character and rotate by 13 places
//   non-aplhabetical characters are skipped
// Input: string
// output: new string

// E: 
// rot13('Teachers open the door, but you must enter by yourself.'); => 'Grnpuref bcra gur qbbe, ohg lbh zhfg ragre ol lbhefrys.'
// rot13(rot13('Teachers open the door, but you must enter by yourself.')) => 'Teachers open the door, but you must enter by yourself.'

// A:
// - create constant for capital letter ASCII start num and capital letter ASCII end num
// - create constant for lowercase letter ASCII start num and lowercase letter ASCII end num
// - create function rot13, takes a string as input
//   - create a return string variable using let and set it to an empty string
//   - iterate through each character in the input string 
//     - convert character to ascii num
//     - check if ascii num is between constants
//       - if so, add or subtract 13
//     - convert back to character
//     - concat to return string
//   - return new string


const LOWERCASE_ASCII_START_NUM = 'a'.charCodeAt();
const LOWERCASE_ASCII_END_NUM = 'z'.charCodeAt();
const UPPERCASE_ASCII_START_NUM = 'A'.charCodeAt();
const UPPERCASE_ASCII_END_NUM = 'Z'.charCodeAt();;

function rotate(charCode, rotationAmount, maxCharCode) {
  charCode += rotationAmount;
  if (charCode > maxCharCode) {
    charCode -= rotationAmount * 2;
  }
  return charCode;
}

function isLowerCase(charCode) {
  return charCode < LOWERCASE_ASCII_END_NUM + 1 && charCode > LOWERCASE_ASCII_START_NUM - 1;
}

function isUpperCase(charCode) {
  return charCode < UPPERCASE_ASCII_END_NUM + 1 && charCode > UPPERCASE_ASCII_START_NUM - 1;
}

function rot13(string, rotation=13) {
  let rotatedString = '';
  for (let i = 0; i < string.length; i += 1) {
    let charCode = string.charCodeAt(i);
    if (isLowerCase(charCode)) {
      charCode = rotate(charCode, rotation, LOWERCASE_ASCII_END_NUM);
    } else if (isUpperCase(charCode)) {
      charCode = rotate(charCode, rotation, UPPERCASE_ASCII_END_NUM);
    }
    rotatedString += String.fromCharCode(charCode);
  }
  return rotatedString;
}

console.log(rot13('Teachers open the door, but you must enter by yourself.'));
console.log(rot13(rot13('Teachers open the door, but you must enter by yourself.')));