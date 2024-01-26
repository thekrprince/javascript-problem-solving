// Implement different examples of asynchronous code

// 2. Promises

function promiseExample(arrr) {
  return new Promise((resolve) => {
    let sum = 0;
    for (let i = 0; i < arrr.length; i++) {
      sum += arrr[i];
    }
    resolve(sum);
  });
}

function mainPromise(arr) {
  promiseExample(arr).then((res) => console.log(res));
}

mainPromise([10, 20, 30, 40]);
