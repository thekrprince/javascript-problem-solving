/*
  Write a function called averagePair. Given a sorted array of integers and a target average, determine
  if there is a pair of values in the array where the average of the pair equals the target average.
  There may be more than one pair that matches the average target.

  Solved using multiple pointers
*/

function averagePair(arr, num) {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    let avg = (arr[start] + arr[end]) / 2;
    if (avg === num) return true;
    else if (avg < num) start++;
    else end--;
  }

  return false;
}

var res = averagePair([1, 2, 3], 3);
console.log(res);

var res2 = averagePair([1, 2, 3], 2.5);
console.log(res2);

var res3 = averagePair([-1, 0, 3, 4, 5, 6], 4.1);
console.log(res3);

var res4 = averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8);
console.log(res4);
