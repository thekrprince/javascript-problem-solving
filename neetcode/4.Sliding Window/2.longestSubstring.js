/*
Given a string s, find the length of the longest substring without repeating characters.
*/

function lengthOfLongestSubstring(str) {
  if (str.length === 0) return 0;

  let map = {};
  let maxLength = 0;
  let left = 0;

  for (let r = 0; r < str.length; r++) {
    const currentChar = str[r];
    if (map[currentChar] >= left) {
      left = map[currentChar] + 1;
    }

    map[currentChar] = r;
    maxLength = Math.max(maxLength, r - left + 1);
  }
  return maxLength;
}

console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));
