// Implement a function that determines whether a string begins with another string. 
// If it does, the function should return true, or false otherwise.

function startsWith(string, searchString) {
  if (string.length < searchString.length) {
    console.log(false);
    return false;
  } else if (searchString === '') {
    console.log(true);
    return true;
  } else {
    let mismatchFound = false;
    for (let i = 0; i < searchString.length; i += 1) {
      if (string[i] !== searchString[i]) {
        mismatchFound = true;
        break;
      }
    }
    if (mismatchFound) {
      console.log(false);
      return false;
    } else {
      console.log(true);
      return true;
    }
  }
}

let str = 'We put comprehension and mastery above all else';
startsWith(str, 'We');              // true
startsWith(str, 'We put');          // true
startsWith(str, '');                // true
startsWith(str, 'put');             // false

let longerString = 'We put comprehension and mastery above all else!';
startsWith(str, longerString);      // false