// The Math methods that deal with angle measurements all expect and return values in radians instead of degrees. 
// Mathematically, radians are easier to work with, so nearly all languages use radians for circle and arc calculations. 
// Use the Math.PI property to create a function that converts radians to degrees.

let radiansToDegrees = radians => radians / (Math.PI / 180);

// console.log(radiansToDegrees(5));