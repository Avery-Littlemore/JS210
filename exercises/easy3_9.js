// Write a function that takes a string consisting of one or more space separated words and 
// returns an object that shows the number of words of different sizes.

// Words consist of any sequence of non-space characters.

function wordSizes(str) {
  let sizes = {};
  let eachWord = str.split(' ');
  for (let i = 0; i < eachWord.length; i += 1) {
    if (sizes[eachWord[i].length]) {
      sizes[eachWord[i].length] += 1;
    } else {
      sizes[eachWord[i].length] = 1;
    }
  }
  return sizes;
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));                                            // {}