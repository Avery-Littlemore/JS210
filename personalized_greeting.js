function greeting(firstOrLast) {
  let rlSync = require('readline-sync');
  let ans = rlSync.question(console.log(`What is your ${firstOrLast} name?`));
  return ans;
}

let firstName = greeting('first');
let lastName = greeting('last');
console.log(`Good Morning, ${firstName} ${lastName}!`);