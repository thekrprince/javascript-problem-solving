// Sort Colors -> The optimal problem is solved in 4th number file
// This too beats 100% on leetcode

function sortColors(arr) {
  let zeroCount = 0;
  let oneCount = 0;
  let twoCount = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      zeroCount++;
    } else if (arr[i] === 1) {
      oneCount++;
    } else {
      twoCount++;
    }
  }

  for (let j = 0; j < zeroCount; j++) {
    arr[j] = 0;
  }

  for (let k = zeroCount; k < oneCount + zeroCount; k++) {
    arr[k] = 1;
  }

  for (let l = oneCount + zeroCount; l < twoCount + oneCount + zeroCount; l++) {
    arr[l] = 2;
  }
}

let arr1 = [2, 0, 2, 1, 1, 0];
let arr2 = [2, 0, 1];
let arr3 = [2, 1];

sortColors(arr1);
console.log(arr1);

sortColors(arr2);
console.log(arr2);

sortColors(arr3);
console.log(arr3);
