/* 
Write a recursive function called someRecursive which accepts an array and a callback. 
The function returns true if a single value in the array returns true when passed to the callback. Otherwise it returns false.
*/

function isOdd(val) {
  return val % 2 !== 0 ? true : false;
}

function someRecursive(arr, callback) {
  if (arr.length === 0) return false;
  if (callback(arr[0])) return true;
  return someRecursive(arr.slice(1), callback);
}

const res = someRecursive([4, 8, 6, 12], isOdd);
console.log(res);

const res1 = someRecursive([1, 8, 17, 4], isOdd);
console.log(res1);
