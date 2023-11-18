// Write a program to determine a student’s grade based on the average of three scores you get from the user. 
// Use these rules to compute the grade:

// If the average score is greater than or equal to 90 then the grade is 'A'
// If the average score is greater than or equal to 70 and less than 90 then the grade is 'B'
// If the average score is greater than or equal to 50 and less than 70 then the grade is 'C'
// If the average score is less than 50 then the grade is 'F'
// You may assume that all input values are valid positive integers.

function determineGrade(array) {
  let sum = array.reduce((numStr, acc) => Number(numStr) + Number(acc), 0);
  let average = sum / 3;
  if (average >= 90) {
    return 'A'
  } else if (average >= 70) {
    return 'B'
  } else if (average >= 50) {
    return 'C'
  } else {
    return 'F'
  }
}

let scores = [];

for (let i = 1; i < 4; i += 1) {
  scores.push(prompt(`Enter score ${i}: `));
}

console.log(`Based on the average of your 3 scores, your letter grade is ${determineGrade(scores)}`)

// // prompts to get the 3 scores
// Enter score 1: 90
// Enter score 2: 50
// Enter score 3: 78

// // log to the console
// Based on the average of your 3 scores your letter grade is "B".