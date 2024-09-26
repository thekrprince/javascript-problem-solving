/*
Given an array of strings strs, group the anagrams together. You can return the answer in any order.
*/

function groupAnagrams(strs) {
  let mappedAnagram = {};

  for (let val of strs) {
    let sortedWord = val.split("").sort().join("");
    if (!mappedAnagram[sortedWord]) {
      mappedAnagram[sortedWord] = [];
    }
    mappedAnagram[sortedWord].push(val);
  }

  return Object.values(mappedAnagram);
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
