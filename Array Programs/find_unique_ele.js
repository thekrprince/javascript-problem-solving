// In an array, find a element which is unique or not repeated

var distinctArr = [];

function findUniqueElement(arr) {
  for (var i = 0; i < arr.length; i++) {
    var flag = 0;
    for (var j = 0; j < arr.length; j++) {
      if (i === j) continue;
      if (arr[i] === arr[j]) {
        flag = 1;
        break;
      }
    }

    if (flag === 0) {
      distinctArr.push(arr[i]);
    }
  }
  return distinctArr;
}

var num = [5, 2, 5, 7, 8, 3, 7, 2];
var result = findUniqueElement(num);
console.log(result);
