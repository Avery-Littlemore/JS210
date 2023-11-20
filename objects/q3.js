// Write a function named copyProperties that takes two Objects as arguments. 
// The function should copy all properties from the first object to the second. 
// The function should return the number of properties copied.

function copyProperties(obj1, obj2) {
  keys1 = Object.keys(obj1);
  console.log(keys1);

  let i;
  for (i = 0; i < keys1.length; i += 1) {
    obj2[keys1[i]] = obj1[keys1[i]];
  }
  console.log(i);
  return i;
}

let hal = {
  model: 9000,
  enabled: true,
};

let sal = {};
copyProperties(hal, sal);  // 2
console.log(sal);                       // { model: 9000, enabled: true }