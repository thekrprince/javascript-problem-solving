// Longest Substring With K Unique Characters

function longestSubstringWithUniqueCharacter(str, k) {
  let i = 0;
  let j = 0;
  let longestSub = 0;

  let map = {};

  while (j < str.length) {
    map[str[j]] = (map[str[j]] || 0) + 1;

    if (Object.keys(map).length < k) {
      j++;
    } else if (Object.keys(map).length === k) {
      longestSub = Math.max(longestSub, j - i + 1);
      j++;
    } else {
      while (Object.keys(map).length > k) {
        map[str[i]] = map[str[i]] - 1;

        if (map[str[i]] === 0) {
          delete map[str[i]];
        }
        i++;
      }
      j++;
    }
  }

  return longestSub;
}

console.log(longestSubstringWithUniqueCharacter("aabacbebebe", 3));

// Same code with little optimization
function longestSubstringWithUniqueCharacter1(str, k) {
  let i = 0;
  let j = 0;
  let longestSub = 0;
  let uniqueCount = 0;

  let map = {};

  while (j < str.length) {
    const char = str[j];
    map[char] = (map[char] || 0) + 1;

    if (map[char] === 1) uniqueCount++;

    if (uniqueCount < k) {
      j++;
    } else if (uniqueCount === k) {
      longestSub = Math.max(longestSub, j - i + 1);
      j++;
    } else {
      while (uniqueCount > k) {
        const leftChar = str[i];
        map[leftChar] = map[leftChar] - 1;
        if (map[leftChar] === 0) {
          delete map[leftChar];
          uniqueCount--;
        }
        i++;
      }
      j++;
    }
  }

  return longestSub;
}

console.log(longestSubstringWithUniqueCharacter1("aabacbebebe", 3));
console.log(longestSubstringWithUniqueCharacter1("aaaa", 1));
console.log(longestSubstringWithUniqueCharacter1("abcba", 2));
