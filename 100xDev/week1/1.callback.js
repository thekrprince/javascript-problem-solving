// Implement different examples of asynchronous code

// 1. Callback
function add(arrr) {
  let sum = 0;
  for (let i = 0; i < arrr.length; i++) {
    sum += arrr[i];
  }
  console.log(sum);
}

function main(arr) {
  add(arr);
  console.log(arr.length);
}

main([2, 4, 8, 7]);
