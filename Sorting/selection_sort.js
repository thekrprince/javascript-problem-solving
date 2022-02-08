// Selection sort

// Find the min value index and swap it

function selectionSort(arr) {
  var minIndex;

  for (let i = 0; i < arr.length; i++) {
    minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      var temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
  }

  return arr;
}

var sortedArr = selectionSort([67, 12, 55, 32, 29, 100, 64]);
console.log(sortedArr);
