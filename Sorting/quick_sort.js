/******************************
 *
 * QUICK SORT
 * Like merge sort, exploits the fact that arrays of 0 or 1 element are always sorted
 * Works by selecting one element (called the "pivot") and finding the index where the pivot should end up in the sorted array
 * Once the pivot is positioned appropriately, quick sort can be applied on either side of the pivot
 *
 * PIVOT HELPER
 * => In order to implement merge sort, it's useful to 1st implement a function responsible arranging elements in an array either side of a pivot.
 * => Given an array, this helper function should designate an element as the pivot.
 * => It should then rearrange elements in the array so that all values less than the pivot are moved to the left of the pivot, and all values greater than the pivot are moved to the right of the pivot.
 * => The order of elements on the either side of the pivot doesn't matter.
 * => The helper should do this in place, that is, it should not create a new array.
 * => When complete, the helper should return the index of the pivot.
 *
 * PICKING A PIVOT
 * => The runtime of quick sort depends in part on how one selects the pivot.
 * => Ideally, the pivot should be chosen so that it's roughly the median value in the data set you're sorting
 *
 * PIVOT PSEUDOCODE
 * 1. Accept 3 arguments: an array, a start index, and an end index (these can default to 0 and the array length minus 1, respectively).
 * 2. Grab the pivot from the start of the array.
 * 3. Store the current pivot index in a variable (this will keep track of where the pivot should end up).
 * 4. Loop through the array from the start until the end
 *      -> If the pivot is greater than the current element, increment the pivot index variable and then swap the current element with the element at the pivot index.
 * 5. Swap the starting element (i.e the pivot) with the pivot index.
 * 6. Return the pivot index.
 *
 * QUICKSORT PSEUDOCODE
 * 1. Call the pivot helper on the array
 * 2. When the helper returns the updated pivot index, recursively call the pivot helper on the subarray to the left of that index, and the subarray to the right of that index.
 * 3. Base case occurs when considered subarray is less than 2 elements.
 *
 *****************************/

function pivot(arr, start = 0, end = arr.length + 1) {
  function swap(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  var pivot = arr[start];
  var swapIdx = start;

  for (var i = start + 1; i < end; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }
  swap(arr, start, swapIdx);
  return swapIdx;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  var pivotIndex = pivot(arr, left, right);

  if (left < right) {
    // left
    quickSort(arr, left, pivotIndex - 1);
    // right
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

const sortedArray = quickSort([11, 7, 4, 29, 22]);
console.log(sortedArray);
