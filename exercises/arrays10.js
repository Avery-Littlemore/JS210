// The array comparison function that we implemented in the Arrays lesson
// implicitly assumed that when comparing two arrays, any matching values must also have matching index positions. 
// The objective of this exercise is to reimplement the function so that two arrays containing the same values—but in 
// a different order—are considered equal. For example, [1, 2, 3] === [3, 2, 1] should return true.

function areArraysEqual(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  
  let counter = 0;
  let maxCount = array1.length;
  while (counter < maxCount) {
    let occurrence = array2.indexOf(array1[0])
    if (occurrence !== -1) {
      array1.shift();
      array2.splice(occurrence, 1)
    } else {
      return false;
    }
    counter += 1;
  }
  return true;
}

console.log(areArraysEqual([1, 2, 3], [1, 2, 3]));                  // true
console.log(areArraysEqual([1, 2, 3], [3, 2, 1]));                  // true
console.log(areArraysEqual(['a', 'b', 'c'], ['b', 'c', 'a']));      // true
console.log(areArraysEqual(['1', 2, 3], [1, 2, 3]));                // false
console.log(areArraysEqual([1, 1, 2, 3], [3, 1, 2, 1]));            // true
console.log(areArraysEqual([1, 2, 3, 4], [1, 1, 2, 3]));            // false
console.log(areArraysEqual([1, 1, 2, 2], [4, 2, 3, 1]));            // false
console.log(areArraysEqual([1, 1, 2], [1, 2, 2]));                  // false
console.log(areArraysEqual([1, 1, 1], [1, 1]));                     // false
console.log(areArraysEqual([1, 1], [1, 1]));                        // true
console.log(areArraysEqual([1, '1'], ['1', 1]));                    // true