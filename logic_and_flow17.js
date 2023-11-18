// Write a function that returns a string converted to lowercase.

// To convert a single uppercase character to a lowercase character,
// get its ASCII numeric representation from the ASCII table, add 32 
// to that number, then convert the number back to a character using 
// the same ASCII table. You can use the String.fromCharCode and the 
// String.charCodeAt methods for these operations. For example:

// let string = 'A';
// let asciiNumeric = string.charCodeAt(0);         // 65
// asciiNumeric += 32;
// string = String.fromCharCode(asciiNumeric);  // "a", converted to lowercase

function toLowerCase(string) {
  const CONVERSION_OFFSET = 32;
  let newStr = ''
  for (let i = 0; i < string.length; i += 1) {
    let charCode = string.charCodeAt(i)
    if (charCode >= 65 && charCode <= 90) {
      charCode += CONVERSION_OFFSET;
      newStr = newStr.concat(String.fromCharCode(charCode))
    } else {
      newStr = newStr.concat(string[i])
    }
  }
  console.log(newStr);
}

toLowerCase('ALPHABET');    // "alphabet"
toLowerCase('123');         // "123"
toLowerCase('abcDEF');      // "abcdef"