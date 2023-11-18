// Given a string that consists of some words and an assortment of non-alphabetic characters, 
// write a function that returns that string with all of the non-alphabetic characters replaced 
// by spaces. If one or more non-alphabetic characters occur in a row, you should only have one 
// space in the result (i.e., the result string should never have consecutive spaces).

const ALPHABET = 'abcdefghijklmnopqrstuvwxyz'

function cleanUp(string) {
  let cleanString = '';
  for (let i = 0; i < string.length; i += 1) {
    if (ALPHABET.includes(string[i].toLowerCase())) {
      cleanString += string[i]
    } else if (cleanString.slice(-1) !== ' ') {
      cleanString += ' ';
    }
  }
  console.log(cleanString);
}

cleanUp("---what's my +*& line?");    // " what s my line "