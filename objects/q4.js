// Write a function named wordCount that takes a single String as an argument. 
// The function should return an Object that contains the counts of each word that
// appears in the provided String. In the returned Object, you should use the words as 
// keys, and the counts as values.

function wordCount(str) {
  let words = str.split(' ');
  let obj = {}
  for (let i = 0; i < words.length; i += 1) {
    if (obj[words[i]]) {
      obj[words[i]] += 1;
    } else {
      obj[words[i]] = 1;
    }
  }
  console.log(obj);
  return obj;
}

wordCount('box car cat bag box');  // { box: 2, car: 1, cat: 1, bag: 1 }