function longestCommonPrefix(strs) {
  let res = "";

  for (let i = 0; i < strs[0].length; i++) {
    for (let j = 0; j < strs.length; j++) {
      if (strs[0][i] !== strs[j][i]) {
        return res;
      }
    }

    res += strs[0][i];
  }
  return res;
}

const res1 = longestCommonPrefix(["flower", "flow", "flight"]);
console.log(res1);

const res2 = longestCommonPrefix(["dog", "racecar", "car"]);
console.log(res2);
