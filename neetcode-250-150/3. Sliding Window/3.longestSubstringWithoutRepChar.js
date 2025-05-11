// Longest Substring Without Repeating Characters - https://leetcode.com/problems/longest-repeating-character-replacement/

function longestSubstringWithoutRepChar(s) {
  let i = 0;
  let longestSub = 0;
  let map = {};

  for (let j = 0; j < s.length; j++) {
    const rightChar = s[j];
    map[rightChar] = (map[rightChar] || 0) + 1;
    let mapSize = Object.keys(map).length;

    if (j - i + 1 === mapSize) {
      longestSub = Math.max(longestSub, j - i + 1);
    } else if (j - i + 1 > mapSize) {
      while (j - i + 1 > mapSize) {
        const leftChar = s[i];
        map[leftChar]--;

        if (map[leftChar] === 0) {
          delete map[leftChar];
        }
        i++;
      }
    }
  }

  return longestSub;
}

console.log("---------------V0----------------");
console.log(longestSubstringWithoutRepChar("zxyzxyz"));
console.log(longestSubstringWithoutRepChar("xxxxx"));
console.log(longestSubstringWithoutRepChar("pwwkew"));

// Using Sliding Window and Set
function longestSubstringWithoutRepCharV1(s) {
  let i = 0;
  let longestSub = 0;
  let charSet = new Set();

  for (let j = 0; j < s.length; j++) {
    while (charSet.has(s[j])) {
      charSet.delete(s[i]);
      i++;
    }
    charSet.add(s[j]);
    longestSub = Math.max(longestSub, j - i + 1);
  }

  return longestSub;
}

console.log("---------------V1----------------");
console.log(longestSubstringWithoutRepCharV1("zxyzxyz"));
console.log(longestSubstringWithoutRepCharV1("xxxxx"));
console.log(longestSubstringWithoutRepCharV1("pwwkew"));
