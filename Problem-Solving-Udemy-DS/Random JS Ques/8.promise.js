function promise(x) {
  return new Promise((resolve) => {
    function sum() {
      return x + 2;
    }
    resolve(sum());
  });
}

function mainPromise() {
  promise(5).then((res) => console.log(res));
}

mainPromise();
