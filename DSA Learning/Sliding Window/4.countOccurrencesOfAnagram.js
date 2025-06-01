// Count Occurrence of an Anagram - Optimal Solution

function countOccurrences(s, a) {
  let i = 0;
  let j = 0;
  let k = a.length;
  let countOfOccurrences = 0;

  let map = {};
  for (let val of a) {
    map[val] = (map[val] || 0) + 1;
  }

  let count = Object.keys(map).length;

  while (j < s.length) {
    if (s[j] in map) {
      map[s[j]]--;
      if (map[s[j]] === 0) {
        count--;
      }
    }

    if (j - i + 1 < k) {
      j++;
    } else if (j - i + 1 === k) {
      if (count === 0) {
        countOfOccurrences++;
      }
      if (s[i] in map) {
        map[s[i]]++;
        if (map[s[i]] === 1) {
          count++;
        }
      }
      i++;
      j++;
    }
  }

  return countOfOccurrences++;
}

console.log(countOccurrences("aabaabaa", "aaba"));
