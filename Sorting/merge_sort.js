/******************************
 *
 * MERGE SORT
 * It's a combination of two things - merging and sorting
 * Exploits the fact that arrays of 0 or 1 element are always sorted
 * Works by decomposing an array into smaller arrays of 0 or 1 elements, then building up a newly sorted array
 * Use Divide & Conquer method
 *
 * HELPER
 * => In order to implement merge sort, it's useful to 1st implement a function responsible for merging two sorted arrays.
 * => Given 2 arrays which are sorted, this helper function should create a new array which is also sorted, and consists of all of the elements in the 2 input arrays.
 * => The function should run in O(n+m) time and O(n+m) space and should not modify the parameters passed to it.
 *
 * PSEUDOCODE - Merge
 * 1. Create an empty array, take a look at the smallest values in each input array.
 * 2. While there are still values we haven't looked at...
 *      -> If the value in the 1st array is smaller than the value in the 2nd array, push the value in the 1st array into our results and move on to the next value in the 1st array.
 *      -> If the value in the 1st array is larger than the value in the 2nd array, push the value in the 2nd array into our results and move on to the next value in the 2nd array.
 *      -> Once we exhaust one array, push in all remaining values from the other array.
 *
 * MERGESORT PSEUDOCODE
 * 1. Break up the array into halves until you have arrays that are empty or have one element.
 * 2. Once you have smaller sorted arrays, merge those arrays with other sorted arrays until you are back at the full length of the array.
 * 3. Once the arrays has been merged back together, return the merged and sorted array.
 *
 *****************************/

function merge(arr1, arr2) {
  let results = [];
  let arr1index = 0;
  let arr2index = 0;

  while (arr1index < arr1.length && arr2index < arr2.length) {
    if (arr2[arr2index] > arr2[arr1index]) {
      results.push(arr1[arr1index]);
      arr1index++;
    } else {
      results.push(arr2[arr2index]);
      arr2index++;
    }
  }
  while (arr1index < arr1.length) {
    results.push(arr1[arr1index]);
    arr1index++;
  }
  while (arr2index < arr2.length) {
    results.push(arr2[arr2index]);
    arr2index++;
  }

  return results;
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  var midPoint = Math.floor(arr.length / 2);
  var left = mergeSort(arr.slice(0, midPoint));
  var right = mergeSort(arr.slice(midPoint));
  return merge(left, right);
}

const sortedArray = mergeSort([65, 78, 33, 21, 19, 1, 111]);
console.log(sortedArray);
