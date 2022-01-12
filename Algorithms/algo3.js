// Write a function called same, which accepts 2 arrays. The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same.
// =============== Input ===============
//  same([1, 2, 3], [4, 1, 9]) -> true
// same([1,2,3], [1,9]) -> false
// same([1, 2, 1], [4, 4, 1]) -> false
// =====================================

// ============= Solution ===============
// If arr1's length not equal to arr2's length then return false
// If length is equal then find how many duplicates are there in arr1 and store it in count variable

// ====================== Method 1 - Naive ===========================
function same2(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    if (correctIndex === -1) {
      return false;
    }
    arr2.splice(correctIndex, 1);
  }
  return true;
}

var result = same2([1, 2, 3], [4, 1, 9]);
console.log(result);
