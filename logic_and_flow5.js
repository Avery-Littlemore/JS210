// Write a function that takes a number argument, and returns true if the number is prime, or false if it is not.
// You may assume that the input is always a non-negative integer.

function isPrime(num) {
  if (num <= 1) {
    console.log(false);
    return
  }
  for (let i = num - 1; i >= 0; i -= 1) {
    if (i === 1) {
      continue;
    } else if (num % i === 0) {
      console.log(false);
      return
    }
  }
  console.log(true);
}

isPrime(1);   // false
isPrime(2);   // true
isPrime(3);   // true
isPrime(43);  // true
isPrime(55);  // false
isPrime(0);   // false