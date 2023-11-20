// Read through the following code. Currently, it does not log the expected result. Explain why this happens, 
// then refactor the code so that it works as expected.

const person = { name: 'Victor' };
let otherPerson = { name: 'Victor' };

console.log(person === otherPerson);    // false -- expected: true

otherPerson = person;
console.log(person === otherPerson);    // true