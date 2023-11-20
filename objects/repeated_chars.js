// Implement a function that takes a String as an argument and returns an object that contains a count of the repeated characters.
// Note that repeatedCharacters does a bit more than simply count the frequency of each character: it determines the counts, but 
// only returns counts for characters that have a count of 2 or more. It also ignores the case.

function repeatedCharacters(str) {
  let repeats = {};
  for (let i = 0; i < str.length; i += 1) {
    if (repeats[str[i].toLowerCase()]) {
      repeats[str[i].toLowerCase()] += 1;
    } else {
      repeats[str[i].toLowerCase()] = 1;
    }
  }

  for (let key in repeats) {
    if (repeats[key] === 1) {
      delete repeats[key];
    }
  }
  return repeats;
}

console.log(repeatedCharacters('Programming'));    // { r: 2, g: 2, m: 2 }
console.log(repeatedCharacters('Combination'));    // { o: 2, i: 2, n: 2 }
console.log(repeatedCharacters('Pet'));            // {}
console.log(repeatedCharacters('Paper'));          // { p: 2 }
console.log(repeatedCharacters('Baseless'));       // { s: 3, e: 2 }