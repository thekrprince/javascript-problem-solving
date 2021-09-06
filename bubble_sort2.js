// Bubble sort using ES6

function bubbleSort(arr) {
  const swap_arr = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap_arr(arr, j, j + 1);
      }
    }
  }
  return arr;
}

let sortedArray = bubbleSort([22, 7, 16, 56, 33]);
console.log(sortedArray);
