// Noob way

function reverseString(str) {
  if (str.length <= 1) {
    return str;
  }
  return reverseString(str.slice(1)) + str.charAt(0);
}

function isPalindrome(rev, orig) {
  if (rev !== orig) {
    return "Not palindrome";
  }
  return "Palindrome";
}

let orgString = "madam";
const reversedStr = reverseString(orgString);
const checkPalindrome = isPalindrome(reversedStr, orgString);
console.log(checkPalindrome);
