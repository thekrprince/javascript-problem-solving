function debounce(func, timeout = 200) {
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

const d = debounce(() => addNumBy5(1), 5000);
d("6");
