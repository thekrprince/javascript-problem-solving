function debounceFn(fn, delay) {
  let timer;

  return function (...args) {
    clearTimeout(timer);

    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

let val = "";

function printTheInput(e) {
  val += e.target.value;
  document.getElementById("p-val").innerText = val;
}

const debouncedInput = debounceFn(printTheInput, 500);
document
  .getElementById("searchinput")
  .addEventListener("input", debouncedInput);
