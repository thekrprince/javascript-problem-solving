/* Write a function which should take a string and return the reverse string but the space should be on the same position
  I/P => "This is a normal string"
  O/P => "gnir ts l amrona sisihT"
*/

function reverseStr(str) {
  const arrConvert = str.split('').reverse();

  for (let i = 0; i < arrConvert.length; i++) {
    if (arrConvert[i] === ' ') {
      arrConvert.splice(i, 1);
    }
    if (str.charAt(i) === ' ') {
      arrConvert.splice(i, 0, str.charAt(i));
    }
  }

  return arrConvert.join('');
}

const sentence = 'This is a normal string';
const result = reverseStr(sentence);
console.log(result);
