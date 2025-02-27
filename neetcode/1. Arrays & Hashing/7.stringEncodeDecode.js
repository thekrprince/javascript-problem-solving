/*
Design an algorithm to encode a list of strings to a single string. The encoded string is then decoded back to the original list of strings.
*/

class Solution {
  encode(strs) {
    let encoded = "";
    for (let s of strs) {
      encoded += s.length + "#" + s;
    }
    console.log(encoded);
    return encoded;
  }

  decode(str) {
    let decoded = [];
    let i = 0;

    while (i < str.length) {
      let j = i;
      while (str[j] !== "#") {
        j += 1;
      }
      let len = parseInt(str.substring(i, j));
      decoded.push(str.substring(j + 1, j + 1 + len));
      i = j + 1 + len;
    }
    console.log(decoded);
    return decoded;
  }
}

const solution = new Solution();
let input1 = ["neet", "code", "love", "you"];
let encodedRes = solution.encode(input1);
let decodedRes = solution.decode(encodedRes);
