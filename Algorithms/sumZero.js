// Find the sum which gives the zero in result.

function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

var res = sumZero([-4, -3, -2, -1, 0, 1, 3, 8, 10]);
console.log(res);
