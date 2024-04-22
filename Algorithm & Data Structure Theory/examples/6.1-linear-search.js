function linearSearch(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }
  return -1;
}

const arr = [98, 12, 78, 33, 91, 44, 39, 67, 51];
const res = linearSearch(arr, 788);
console.log(res);
