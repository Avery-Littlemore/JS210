function isNegZero(num) {
  if (1/num > 0) {
    return false
  } else if (1/num < 0) {
    return true
  }
}

console.log(isNegZero(0))
console.log(isNegZero(-0))