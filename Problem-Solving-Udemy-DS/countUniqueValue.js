/* Implement a function called countUniqueValues which accepts a sorted array, and counts the unique
values in the array. There can be negative numbers in the array, but it will always be sorted. */

function countUniqueValues(arr) {
  if (arr.length === 0) return 0;
  var i = 0;
  for (var j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }

  return i + 1;
}

var res = countUniqueValues([1, 1, 1, 55, 66, 66]);
console.log(res);
