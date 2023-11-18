// This practice problem is similar to the previous one. This time though, both arguments are indices of the provided string. 
// The following rules apply:
// If both start and end are positive integers, start is less than end, and both are within the boundary of the string, 
//  return the substring from the start index (inclusive), to the end index (NOT inclusive).
// If the value of start is greater than end, swap the values of the two, then return the substring as described above.
// If start is equal to end, return an empty string.
// If end is omitted, the end variable inside the function isundefined. Return the substring starting at position 
//  start up through (and including) the end of the string.
// If either start or end is less than 0 or NaN, treat it as 0.
// If either start or end is greater than the length of the string, treat it as equal to the string length.

// P:
// Rules: 
// - start > 0, end > 0, start < end, within boundary of string, return substring from start index to end index
// - start > end, swap values and return as above
// - if start === end, return empty string
// - if end omitted, set end=undefined, return substring from start position to end of string
// - if start or end < 0, or start or end is NaN, treat it as 0
// - if start or end > length, treat it as equal to length
// Input: string, start index, end index
// output: substring

// E: below

// D: strings and nums

// A:
// - create function substring with three parameters: str, start, end=undefined
//   - check edge cases
//     - if end is undefined
//       - set end = str.length - 1
//     - if start < 0 or start is NaN
//       - set start = 0
//     - if end  < 0 or end is NaN
//       - set end = 0
//     - if start or end > length
//       - set it equal to length
//     - if start === end
//       - return empty str
//     - if start > end
//       - swap start and end


//     - create var subStr with let and set to an empty string
//     - iterate from start index to end index
//       - concat the indexed character from str to the substring
//     - return subStr



function substring(str, start, end=undefined) {
  let returnStr = ''

  if (end === undefined) {
    end = str.length;
  }

  if (start > 0 === false) {
    start = 0;
  }

  if (end > 0 === false) {
    end = 0;
  }

  if (start > str.length) {
    start = str.length;
  }

  if (end > str.length) {
    end = str.length;
  }

  if (start === end) {
    console.log(returnStr);
    return str;
  } else if (start > end) {
    // let newStart = end;
    // let newEnd = start;
    // start = newStart;
    // end = newEnd;

    // alternate:
    [start, end] = [end, start];
  }

  
  for (let i = start; i < end; i += 1) {
    returnStr = returnStr.concat(str[i]);
  }
  console.log(returnStr);
  return returnStr;
}

let string = 'hello world';

substring(string, 2, 4);    // "ll"
substring(string, 4, 2);    // "ll"
substring(string, 0, -1);   // ""
substring(string, 2);       // "llo world"
substring(string, 'a');     // "hello world"
substring(string, 8, 20);   // "rld"