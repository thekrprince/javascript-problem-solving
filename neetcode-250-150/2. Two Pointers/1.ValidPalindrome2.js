// Valid Palindrome 2 - https://leetcode.com/problems/valid-palindrome-ii/description/

const isPalindrome = (s) => {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (s[left] !== s[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
};

function validPalindrome(s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (s[left] !== s[right]) {
      let leftSkip = s.substr(left + 1, right);
      let rightSkip = s.substr(left, right - 1);

      return isPalindrome(leftSkip) || isPalindrome(rightSkip);
    }

    left++;
    right--;
  }
}

let str1 = "abca";
console.log(validPalindrome(str1));

let str2 = "abdda";
console.log(validPalindrome(str2));

let str3 = "deeeee";
console.log(validPalindrome(str3));
