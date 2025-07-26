// Reverse the words of the string without using any in-built functions

function wordReverse(s) {
  const words = [];
  let word = "";

  for (let i = 0; i <= s.length; i++) {
    if (s[i] === " " || i === s.length) {
      words.push(word);
      word = "";
    } else {
      word += s[i];
    }
  }

  let reversed = "";
  for (let j = words.length - 1; j >= 0; j--) {
    reversed += words[j];
    if (j != 0) {
      reversed += " ";
    }
  }

  return reversed;
}

let str1 = "My name is Prince";
const res = wordReverse(str1);
console.log(res);
