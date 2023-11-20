// Write a function that takes a sorted array of integers as an argument, 
// and returns an array that includes all the missing integers (in order) 
// between the first and last elements of the argument.

// P: 
// - Take array of consecutive numbers as input
// - Find where there is a gap in the consecutive numbers
// - return a new array with the numbers to fill that gap
// Input: array of numbers
// output: new array of numbers

// A: 
// - create function missing with one input: array of numbers
  // - initialize newArr with let and set to empty array
  // - iterate through input array
  //   - if current element is last in the array, go next
  //   - else if current element is one fewer than next element, go next
  //   - else
  //     - set gapCounter to current element
  //     - until gapCounter === next element
  //       - push gapCounter into newArr
  //       - increment gapCounter
  // - return newArr

function missing(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (i === arr.length - 1) {
      continue;
    } else if (arr[i] + 1 === arr[i + 1]) {
      continue;
    } else {
      let gapCounter = arr[i] + 1;
      while (gapCounter < arr[i+1]) {
        newArr.push(gapCounter);
        gapCounter += 1;
      }
    }
  }
  console.log(newArr);
}

missing([-3, -2, 1, 5]);                  // [-1, 0, 2, 3, 4]
missing([1, 2, 3, 4]);                    // []
missing([1, 5]);                          // [2, 3, 4]
missing([6]);                             // []