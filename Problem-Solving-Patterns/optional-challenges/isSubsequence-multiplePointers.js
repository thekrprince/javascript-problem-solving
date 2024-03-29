/*
  Write a function called isSubsequence which takes in 2 strings and checks whether the characters in the
  1st string form a subsequence of the characters in the 2nd string. In other words, the function should
  check whether the characters in the 1st string appear somewhere in the 2nd string, without their order
  changing.

  Solved using multiple pointers
*/

function isSubsequence(str1, str2) {
  var i = 0;
  var j = 0;

  if (!str1) return true;

  while (j < str2.length) {
    if (str1[i] === str2[j]) i++;
    if (i === str1.length) return true;
    j++;
  }
  return false;
}

var res = isSubsequence("hello", "hello world");
console.log(res); // true

var res2 = isSubsequence("sing", "stnig");
console.log(res2); // false

var res3 = isSubsequence("sing", "sting");
console.log(res3); // true

var res4 = isSubsequence("abc", "acb");
console.log(res4); // false
