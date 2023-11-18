// Write a function named checkGoldbach that uses Goldbach's 
// Conjecture to log every pair of primes that sum to the number 
// supplied as an argument. The conjecture states that "you can 
// express every even integer greater than 2 as the sum of two primes". 
// The function takes as its only parameter, an integer expectedSum, 
// and logs all combinations of two prime numbers whose sum is expectedSum. 
// Log the prime pairs with the smaller number first. If expectedSum 
// is odd or less than 4, your function should log null.

function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = num - 1; i >= 0; i -= 1) {
    if (i === 1) {
      continue;
    } else if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function checkGoldbach(num) {
  let oneFound = false;
  for (i = 1; i < (num / 2 + 1); i += 1) {
    if (isPrime(i) && isPrime(num - i)) {
      oneFound = true;
      console.log(i, num - i)
    }
  }
  if (!oneFound) {
    console.log(null);
  }
}


checkGoldbach(3);
// logs: null

checkGoldbach(4);
// logs: 2 2

checkGoldbach(12);
// logs: 5 7

checkGoldbach(100);
// logs:
// 3 97
// 11 89
// 17 83
// 29 71
// 41 59
// 47 53