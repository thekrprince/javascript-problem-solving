// Binary Search Tree
// Search if target is present in list or not

function binarySearch(list, target) {
  var first = 0;
  var last = list.length - 1;
  var midpoint;

  while (first <= last) {
    midpoint = Math.floor((first + last) / 2);

    if (target === list[midpoint]) {
      return midpoint;
    } else if (target > list[midpoint]) {
      first = midpoint + 1;
    } else {
      last = midpoint - 1;
    }
  }

  return;
}

var arr = [21, 26, 33, 44, 49, 51, 55, 57, 74, 78, 88, 101, 150];

var res = binarySearch(arr, 21);
console.log(`Target is found at index ${res}`);
