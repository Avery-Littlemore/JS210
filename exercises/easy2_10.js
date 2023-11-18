// Write a function that takes a year as input and returns the century. 
// The return value should be a string that begins with the century number, 
// and ends with 'st', 'nd', 'rd', or 'th' as appropriate for that number.

// New centuries begin in years that end with 01. So, the years 1901 - 2000 comprise the 20th century.

function century(year) {
  let cent = parseInt(year / 100);
  if (year % 10 !== 0) {
    cent += 1;
  }
  let centStr = cent + ''
  if (centStr.slice(-2) == '01') {
    centStr += 'st';
  } else if (centStr.slice(-2) == '02') {
    centStr += 'nd';
  } else if (centStr.slice(-2) == '03') {
    centStr += 'rd';
  } else if (centStr.slice(-2) == '11') {
    centStr += 'th';
  } else if (centStr.slice(-2) == '12') {
    centStr += 'th';
  } else if (centStr.slice(-2) == '13') {
    centStr += 'th';
  } else if (centStr.slice(-1) === '1') {
    centStr += 'st';
  } else if (centStr.slice(-1) === '2') {
    centStr += 'nd';
  } else if (centStr.slice(-1) === '3') {
    centStr += 'rd';
  } else {
    centStr += 'th';
  }
  return centStr;
}

console.log(century(2000));        // "20th"
console.log(century(2001));        // "21st"
console.log(century(1965));        // "20th"
console.log(century(256));         // "3rd"
console.log(century(5));           // "1st"
console.log(century(10103));       // "102nd"
console.log(century(1052));        // "11th"
console.log(century(1127));        // "12th"
console.log(century(11201));       // "113th"