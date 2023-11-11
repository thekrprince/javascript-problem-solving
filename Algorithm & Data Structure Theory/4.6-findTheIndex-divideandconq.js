/*
Given a sorted array of integers, write a function called search,
that accepts a value passed to the function is located. If the value is not found, return -1.
This can be solved using Binary search.
*/

function findTheIndex(arr, num) {
  if (arr.length === 0) {
    return `Array is empty`;
  }
  let min = 0;
  let max = arr.length - 1;

  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    if (num > arr[middle]) {
      min = middle + 1;
    } else if (num < arr[middle]) {
      max = middle - 1;
    } else {
      return middle;
    }
  }
  return -1;
}

const result = findTheIndex([2, 3, 5, 11, 17, 33, 49], 17);
console.log(result);
