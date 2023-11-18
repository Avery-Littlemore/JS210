function multiply(firstNum, secondNum) {
  console.log(`${firstNum} * ${secondNum} = ${firstNum * secondNum}`)
}

let rlSync = require('readline-sync');
let firstNum = Number(rlSync.question(console.log('Enter the first number: ')));
let secondNum = Number(rlSync.question(console.log('Enter the second number: ')));
multiply(firstNum, secondNum);