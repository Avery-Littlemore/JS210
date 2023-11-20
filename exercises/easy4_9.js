// Write a function that counts the number of occurrences of each element in a given array. 
// Once counted, log each element alongside the number of occurrences.

const vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'suv', 'motorcycle', 'car', 'truck'];

function countOccurrences(arr) {
  obj = {};
  counter = 0;
  while (counter < arr.length) {
    if (obj[arr[counter]]) {
      obj[arr[counter]] += 1;
    } else {
      obj[arr[counter]] = 1;
    }
    counter += 1;
  }
  Object.keys(obj).forEach(key => console.log(`${key} => ${obj[key]}`));
}

countOccurrences(vehicles);

// console output
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2
// suv => 1