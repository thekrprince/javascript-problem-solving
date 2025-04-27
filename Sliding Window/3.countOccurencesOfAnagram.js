// Count occurrences of Anagram
// Solved using my way, not so optimal one, check the next one

function countOccurrencesOfAnagram(str, a) {
  let i = 0;
  let j = 0;
  let k = a.length;
  let countOccurrences = 0;

  function compareAnagrams(s1, s2) {
    let obj1 = {};
    let obj2 = {};

    for (let val of s1) {
      obj1[val] = (obj1[val] || 0) + 1;
    }

    for (let val of s2) {
      obj2[val] = (obj2[val] || 0) + 1;
    }

    for (let key in obj1) {
      if (obj1[key] !== obj2[key]) {
        return false;
      }
    }

    return true;
  }

  while (j < str.length) {
    if (j - i + 1 < k) {
      j++;
    }

    if (j - i + 1 === k) {
      const isEqual = compareAnagrams(str.substr(i, k), a);
      countOccurrences = isEqual ? countOccurrences + 1 : countOccurrences;
      i++;
      j++;
    }
  }

  return countOccurrences;
}

let res = countOccurrencesOfAnagram("aabaabaa", "aaba");
console.log(res);
