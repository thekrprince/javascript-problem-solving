// Bubble Sort

function bubbleSort(arr) {
  for (var i = arr.length; i > 0; i--) {
    for (var j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
}

let array = [67, 43, 27, 99, 56, 12, 32];
let sortedArr = bubbleSort(array);
console.log(sortedArr);
