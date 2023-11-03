function reverse(array) {
  if (array.length === 0) {
    return "Array is empty";
  }
  if (array.length === 1) {
    return array;
  }

  let start = 0;
  let end = array.length - 1;

  while (start < end) {
    [array[start], array[end]] = [array[end], array[start]];
    start++;
    end--;
  }

  return array;
}

const result = reverse([67, 32, 78, 10, 0]);
console.log(result); // [10, 89, 78, 32, 67]
