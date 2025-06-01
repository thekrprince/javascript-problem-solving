function minimumWindowSubstring(s, t) {
  let map = {};
  for (let val of t) {
    map[val] = (map[val] || 0) + 1;
  }

  let count = Object.keys(map).length;
  let i = 0;
  let j = 0;
  let minLen = Infinity;

  while (j < s.length) {
    if (map.hasOwnProperty(s[j])) {
      map[s[j]]--;

      if (map[s[j]] === 0) {
        count--;
      }
    }

    while (count === 0) {
      minLen = Math.min(minLen, j - i + 1);

      if (map.hasOwnProperty(s[i])) {
        map[s[i]]++;
        if (map[s[i]] > 0) {
          count++;
        }
      }
      i++;
    }
    j++;
  }
  return minLen === Infinity ? 0 : minLen;
}

console.log(minimumWindowSubstring("TOTMTAPTAT", "TTA"));
console.log(minimumWindowSubstring("ADOBECODEBANC", "ABC"));
console.log(minimumWindowSubstring("A", "AA"));
