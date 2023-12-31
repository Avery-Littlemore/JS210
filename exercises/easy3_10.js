// Modify the wordSizes function from the previous exercise to exclude non-letters when determining word size. 
// For instance, the word size of "it's" is 3, not 4.

function wordSizes(str) {
  let sizes = {};
  if (str.length === 0) {
    return sizes;
  }
  let eachWord = str.split(' ');
  for (let i = 0; i < eachWord.length; i += 1) {
    let wordSize = eachWord[i].replace(/\W/g, '').length;
    // console.log(wordSize);
    if (sizes[wordSize]) {
      sizes[wordSize] += 1;
    } else {
      sizes[wordSize] = 1;
    }
  }
  return sizes;
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 2 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 3 }
console.log(wordSizes("What's up doc?"));                              // { "5": 1, "2": 1, "3": 1 }
console.log(wordSizes(''));                                            // {}