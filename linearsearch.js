const findIndex = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return;
};

const verifyResult = (index) => {
  index >= 0
    ? console.log(`Target is found at index ${index}`)
    : console.log('Target not found');
};

let num = [10, 22, 67, 45, 18, 99];
let res = findIndex(num, 18);
verifyResult(res);
