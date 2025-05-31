// Longest Repeating Character Replacement - https://leetcode.com/problems/longest-repeating-character-replacement/description/

function longestSubstringWithCharReplacement(s, k) {
  let i = 0;
  let maxLen = 0;
  let charMap = {};
  let maxFreq = 0;

  for (let j = 0; j < s.length; j++) {
    const rightChar = s[j];
    charMap[rightChar] = (charMap[rightChar] || 0) + 1;
    maxFreq = Math.max(maxFreq, charMap[rightChar]);

    let diff = j - i + 1 - maxFreq;

    if (diff <= k) {
      maxLen = Math.max(maxLen, j - i + 1);
    } else {
      charMap[s[i]]--;
      i++;
    }
  }

  return maxLen;
}

console.log(longestSubstringWithCharReplacement("XYYX", 2));
console.log(longestSubstringWithCharReplacement("AAABABB", 1));
console.log(longestSubstringWithCharReplacement("AABABBA", 1));
