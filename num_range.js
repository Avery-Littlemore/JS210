function numberRange(num) {
  if (0 <= num && num <= 50 ) {
    console.log('Number is between 0 and 50');
  } else if (51 <= num && num <= 100) {
    console.log('Number is between 50 and 100');
  } else if (num > 100) {
    console.log('Number is above 100');
  } else {
    console.log('Number is below 0');
  }
}

numberRange(25);
numberRange(75);
numberRange(125);
numberRange(-25);