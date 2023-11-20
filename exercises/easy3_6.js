// Write a function that returns true if its integer argument is palindromic, or false otherwise. 
// A palindromic number reads the same forwards and backwards.

function isPalindromicNumber(num) {
  return isPalindrome(num.toString());
}

function isPalindrome(string) {
  for (let i = 0; i < string.length / 2; i += 1) {
    if (string[i] !== string[string.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

console.log(isPalindromicNumber(34543));        // true
console.log(isPalindromicNumber(123210));       // false
console.log(isPalindromicNumber(22));           // true
console.log(isPalindromicNumber(5));            // true