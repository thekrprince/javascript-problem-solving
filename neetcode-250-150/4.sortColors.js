// Sort Colors -> Also known as Sort 0, 1, and 2 - link: https://leetcode.com/problems/sort-colors/
// Video link to understand - https://www.youtube.com/watch?v=tp8JIuCXBaU by Tuf

function sortColors(arr) {
  let low = 0;
  let mid = 0;
  let high = arr.length - 1;

  while (mid <= high) {
    if (arr[mid] === 0) {
      [arr[low], arr[mid]] = [arr[mid], arr[low]];
      low++;
      mid++;
    } else if (arr[mid] === 1) {
      mid++;
    } else {
      [arr[mid], arr[high]] = [arr[high], arr[mid]];
      high--;
    }
  }
}

let arr1 = [2, 0, 2, 1, 1, 0];
let arr2 = [2, 0, 1];

sortColors(arr1);
console.log(arr1);

sortColors(arr2);
console.log(arr2);
