// Write two functions that each take two strings as arguments. Their expected behaviors are as follows:
// The indexOf function searches for the first instance of a substring in firstString that matches the 
// string secondString, and returns the index of the character where that substring begins.
// The lastIndexOf function searches for the last instance of a substring in firstString that matches 
// the string secondString, and returns the index of the character where that substring begins.
// Both functions return -1 if firstString does not contain the substring specified by secondString.

function indexOf(firstString, secondString) {
  for (let i = 0; i < firstString.length; i += 1) {
    if (firstString[i] === secondString[0]) {
      if (secondString.length === 1) {
        console.log(i);
        return;
      } else {
        let mismatchFound = false;
        for (let j = 0; j < secondString.length; j += 1) {
          if (firstString[i + j] !== secondString[j]) {
            mismatchFound = true;
            break;
          }
        }
        if (mismatchFound) {
          console.log(-1);
          return;
        } else {
          console.log(i);
          return;
        }
      }
    }
  }
}

function lastIndexOf(firstString, secondString) {
  for (let i = firstString.length - 1; i >= 0; i -= 1) {
    if (firstString[i] === secondString[0]) {
      if (secondString.length === 1) {
        console.log(i);
        return;
      } else {
        let mismatchFound = false;
        for (let j = 0; j < secondString.length; j += 1) {
          if (firstString[i + j] !== secondString[j]) {
            mismatchFound = true;
            break;
          }
        }
        if (mismatchFound) {
          console.log(-1);
          return;
        } else {
          console.log(i);
          return;
        }
      }
    }
  }
}

// indexOf('Some strings', 's');                      // 5
// indexOf('Blue Whale', 'Whale');                    // 5
// indexOf('Blue Whale', 'Blute');                    // -1
// indexOf('Blue Whale', 'leB');                      // -1

lastIndexOf('Some strings', 's');                  // 11
lastIndexOf('Blue Whale, Killer Whale', 'Whale');  // 19
lastIndexOf('Blue Whale, Killer Whale', 'all');    // -1

// You may use the square brackets ([]) to access a character by index (as shown below), 
// and the length property to find the string length. However, you may not use any other 
// properties or methods from JavaScript's built-in String class.

// 'hello'[0];    // "h"
// 'hello'[4];    // "o"