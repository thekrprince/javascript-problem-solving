// Longest Substring With No Repeating Characters

function longestSubstringWithNoRepeatingChar(str) {
  let i = 0;
  let j = 0;
  let longestSub = 0;
  let map = {};

  while (j < str.length) {
    const char = str[j];
    map[char] = (map[char] || 0) + 1;

    const mapSize = Object.keys(map).length;

    if (mapSize < j - i + 1) {
      while (mapSize < j - i + 1) {
        const leftChar = str[i];
        map[leftChar]--;
        if (map[leftChar] === 0) {
          delete map[leftChar];
        }
        i++;
      }
      j++;
    } else if (mapSize === j - i + 1) {
      longestSub = Math.max(longestSub, j - i + 1);
      j++;
    }
  }

  return longestSub;
}

console.log(longestSubstringWithNoRepeatingChar("pwwkew"));
