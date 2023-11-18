// // Write a function that returns a substring of a string based on a starting index and length.
// The start argument is the starting index. If negative, treat it as strLength + start where 
// strLength is the length of the string. For example, if start is -3, treat it as strLength - 3.
// The length argument is the maximum length of the desired substring. If length exceeds the 
// number of characters available, just use the available characters.


function substr(string, start, length) {
  let subStr = '';
  if (start > 0 && length > 0) {
    for (let i = start; i < string.length; i += 1) {
      subStr = subStr.concat(string[i]);
      if (subStr.length === length) {
        break;
      }
    }
    console.log(subStr)
  } else if (length < 0) {
    console.log(subStr)
  } else {
    for (let i = string.length + start; i < string.length; i += 1) {
      subStr = subStr.concat(string[i]);
      if (subStr.length === length) {
        break;
      }
    }
    console.log(subStr)
  }
    
}

let string = 'hello world';

substr(string, 2, 4);      // "llo "
substr(string, -3, 2);     // "rl"
substr(string, 8, 20);     // "rld"
substr(string, 0, -20);    // ""
substr(string, 0, 0);      // ""