/*
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
*/

function isPalindrome(s) {
  const res = s.replace(/[^A-Z0-9a-z]/gi, "");
  console.log(res);
  let left = 0;
  let right = res.length - 1;

  while (left < right) {
    if (res[left].toLowerCase() !== res[right].toLowerCase()) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}

console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));
