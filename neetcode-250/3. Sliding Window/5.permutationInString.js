// Permutation In String - https://leetcode.com/problems/permutation-in-string/description/
// This question is same as anagram

function checkInclusion(s1, s2) {
  let k = s1.length;
  const s1Obj = {};

  for (let val of s1) {
    s1Obj[val] = (s1Obj[val] || 0) + 1;
  }

  let count = Object.keys(s1Obj).length;
  let i = 0;
  let j = 0;

  while (j < s2.length) {
    let leftChar = s2[j];
    if (s1Obj[leftChar]) {
      s1Obj[leftChar]--;

      if (s1Obj[leftChar] === 0) {
        count--;
      }
    }

    if (j - i + 1 < k) {
      j++;
    } else if (j - i + 1 === k) {
      if (count === 0) return true;

      const rightChar = s2[i];

      if (rightChar in s1Obj) {
        s1Obj[rightChar]++;

        if (s1Obj[rightChar] === 1) {
          count++;
        }
      }
      i++;
      j++;
    }
  }

  return false;
}

console.log(checkInclusion("ab", "eidbaooo"));
console.log(checkInclusion("ab", "eidboaoo"));
