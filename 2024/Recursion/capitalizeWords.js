/*
Write a recursive function called capitalizeWords. Given an array of words, return a new array containing each word capitalized.
*/

function capitalizeWords(arrayOfWords) {
  if (arrayOfWords.length === 1) {
    return [arrayOfWords[0].toUpperCase()];
  }
  let res = capitalizeWords(arrayOfWords.slice(0, -1));
  res.push(arrayOfWords.slice(arrayOfWords.length - 1)[0].toUpperCase());
  return res;
}

let words = ["i", "am", "learning", "recursion"];
console.log(capitalizeWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']
