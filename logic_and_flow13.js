// Write a function that takes a string as an argument, and returns the 
// string stripped of spaces from both ends. Do not remove or alter internal spaces.

// You may use the square brackets ([]) to access a character by index, 
// and the length property to find the string length. However, you may not use any other 
// properties or methods from JavaScript's built-in String class.

function trimFront(str) {
  let returnStr = ''
  for (let i = 0; i < str.length; i += 1) {
    if (returnStr < 1 && str[i] === ' ') {
      continue;
    } else {
      returnStr = returnStr.concat(str[i]);
    }
  }
  return returnStr
}

function trimRear(str) {
  let charCount;
  let returnStr = '';
  for (let i = str.length - 1; i > 0; i -= 1) {
    if (str[i] !== ' ') {
      charCount = i;
      break
    }
  }
  for (let i = 0; i < charCount + 1; i += 1) {
    returnStr = returnStr.concat(str[i]);
  }
  return returnStr;
}

function trim(str) {
  str = trimFront(str);
  str = trimRear(str);
  console.log(`string is here: ${str} with ${str.length} characters`);
}

trim('  abc  ');  // "abc"
trim('abc   ');   // "abc"
trim(' ab c');    // "ab c"
trim(' a b  c');  // "a b  c"
trim('      ');   // ""
trim('');         // ""