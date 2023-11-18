// Create a function that computes the Greatest Common Divisor of two positive integers.

function gcd(num1, num2) {
  let max = 1;
  for (let i = 2; i <= num2; i += 1) {
    if (num1 % i === 0) {
      max = i;
    }
  }
  console.log(max);
  return max;
}

gcd(12, 4);   // 4
gcd(15, 10);  // 5
gcd(9, 2);    // 1

gcd(12, gcd(4, 8));  // 4
gcd(gcd(12, 4), 8);  // 4