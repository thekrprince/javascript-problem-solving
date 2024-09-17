function debounce(func, timeout = 1000) {
  let timer;
  return (...args) => {
    console.log(args);
    clearTimeout(timer);
    timer = setTimeout(() => func(...args), timeout);
  };
}

function addNumBy5(num) {
  console.log(num + 5);
}

const d = debounce(() => addNumBy5(1));
d("6");
