// Merge and sort two given arrays

function mergeAndSort(arr1, arr2) {
  let length = arr1.length + arr2.length;
  let result = [];

  let j = 0;
  let k = 0;

  for (let i = 0; i < length; i++) {
    if (arr1[j] > arr2[k]) {
      result.push(arr2[k]);
      k++;
    } else if (arr1[j] < arr2[k]) {
      result.push(arr1[j]);
      j++;
    } else if (arr1[j] === arr2[k]) {
      result.push(arr1[j]);
      result.push(arr2[k]);
      j++;
      k++;
    }
    console.log(result);
    console.log("j", j);
    console.log("k", k);
  }

  console.log(result);
}

const res = mergeAndSort([1, 3, 10, 15], [4, 8, 12, 24]);
const res1 = mergeAndSort([0, 3, 4, 31], [4, 6, 30, 31, 33]);
