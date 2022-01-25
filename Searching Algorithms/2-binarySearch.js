function binarySearch(arr, searchVal) {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);

  while (arr[middle] !== searchVal && start <= end) {
    if (searchVal > arr[middle]) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
    middle = Math.floor((start + end) / 2);
  }
  if (arr[middle] === searchVal) {
    return middle;
  }
  return -1;
}

const res = binarySearch([11, 13, 65, 77, 88, 92, 95, 101, 123, 145], 92);
console.log(res);
