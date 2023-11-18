// Build a program that asks the user to enter the length and width of a room in meters, 
// and then logs the area of the room to the console in both square meters and square feet.
// Note: 1 square meter == 10.7639 square feet
// Do not worry about validating the input at this time. Use the readlineSync.prompt method to collect user input.
// Enter the length of the room in meters:
// 10
// Enter the width of the room in meters:
// 7
// The area of the room is 70.00 square meters (753.47 square feet).

const CONVERSION_SQUARE_METERS_TO_FEET = 10.7639
let rlSync = require('readline-sync');

console.log('Enter the length of the room in meters: ')
let roomLength = rlSync.prompt();

console.log('Enter the width of the room in meters: ')
let roomWidth = rlSync.prompt();

let metersSquared = (roomLength * roomWidth).toFixed(2);
let feetSquared = (metersSquared * CONVERSION_SQUARE_METERS_TO_FEET).toFixed(2);

console.log(`The area of the room is ${metersSquared} square meters (${feetSquared} square feet).`);