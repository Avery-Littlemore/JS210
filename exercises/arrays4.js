// The concat function from the previous exercise could only concatenate a maximum of two arrays. 
// For this exercise, you are going to extend that functionality. Refactor the concat function to 
// allow for the concatenation of two or more arrays or values.

function concat(array1, ...theArgs) {
  let newArr = array1.slice();
  for (const arg of theArgs) {
    if (Array.isArray(arg)) {
      for (let i = 0; i < arg.length; i += 1) {
        newArr.push(arg[i]);
      }
    } else {
      newArr.push(arg);
    }
  }
  console.log(newArr);
  return newArr;
}

concat([1, 2, 3], [4, 5, 6], [7, 8, 9]);    // [1, 2, 3, 4, 5, 6, 7, 8, 9]
concat([1, 2], 'a', ['one', 'two']);        // [1, 2, "a", "one", "two"]
concat([1, 2], ['three'], 4);               // [1, 2, "three", 4]