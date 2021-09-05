// Binary Search Tree
// Check if target exists and return True/False as Output

function recursiveBinarySearch(arr, target) {
  var midpoint;

  if (arr.length === 0) {
    return false;
  } else {
    midpoint = Math.floor(arr.length / 2);

    if (target === arr[midpoint]) {
      return true;
    } else {
      if (target > arr[midpoint]) {
        var slicedArray = arr.slice(midpoint + 1);
        return recursiveBinarySearch(slicedArray, target);
      } else {
        var slicedArray = arr.slice(0, midpoint - 1);
        return recursiveBinarySearch(slicedArray, target);
      }
    }
  }
}

function verify(res) {
  console.log(`Target found ${res}`);
}

var numbers = [1, 3, 4, 14, 18, 22, 55, 63, 68, 71, 83, 92];

var result = recursiveBinarySearch(numbers, 55);
verify(result);
