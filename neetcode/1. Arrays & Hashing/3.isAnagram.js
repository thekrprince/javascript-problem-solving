class Solution {
  isAnagram(s, t) {
    if (s.length !== t.length) return false;

    let sCount = {};
    let tCount = {};

    for (let val of s) {
      if (sCount[val]) {
        sCount[val] += 1;
      } else {
        sCount[val] = 1;
      }
    }

    for (let val of t) {
      if (tCount[val]) {
        tCount[val] += 1;
      } else {
        tCount[val] = 1;
      }
    }

    for (let key in sCount) {
      if (sCount[key] !== tCount[key]) return false;
    }

    return true;
  }
}

const solution = new Solution();
const res = solution.isAnagram("racecar", "carrace");
console.log(res);
