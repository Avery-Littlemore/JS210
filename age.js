// Modify the age.js program you wrote in the exercises for the Input/Output chapter.
// The updated code should use a for loop to display the future ages.



let rlSync = require('readline-sync');
let age = parseInt(rlSync.question("How old are you?\n"));

console.log(`You are ${age} years old.`)

for (let inc = 10; inc < 50; inc += 10 ) {
  console.log(`In ${inc} years, you will be ${age + inc} years old`)  
}
// console.log(`In 10 years, you will be ${age + 10} years old`)
// console.log(`In 20 years, you will be ${age + 20} years old`)
// console.log(`In 30 years, you will be ${age + 30} years old`)
// console.log(`In 40 years, you will be ${age + 40} years old`)