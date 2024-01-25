function sumOfArray(arr) {
  if (arr.length === 1) {
    return arr[0];
  }
  return arr[arr.length - 1] + sumOfArray(arr.splice(0, arr.length - 1));
}

const res = sumOfArray([12, 100, 67, 5]);
console.log(res);
