// Write a function that will take a short line of text, and write it to the console log within a box.

function logInBox(str) {
  if (str.length > 0) {
    let firstAndLastLine = '-'.repeat(str.length);
    let secondAndFourthLine = ' '.repeat(str.length);
    let middleLine = str;
    console.log('+-' + firstAndLastLine + '-+')
    console.log('| ' + secondAndFourthLine + ' |')
    console.log('| ' + middleLine + ' |')
    console.log('| ' + secondAndFourthLine + ' |')
    console.log('+-' + firstAndLastLine + '-+')
  } else { 
    console.log('+--+')
    console.log('|  |')
    console.log('|  |')
    console.log('|  |')
    console.log('+--+')
  }
}

logInBox('To boldly go where no one has gone before.');
// +--------------------------------------------+
// |                                            |
// | To boldly go where no one has gone before. |
// |                                            |
// +--------------------------------------------+
logInBox('');
// +--+
// |  |
// |  |
// |  |
// +--+