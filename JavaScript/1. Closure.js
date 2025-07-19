// GFE - https://www.greatfrontend.com/questions/javascript/make-counter?practice=practice&tab=coding
function counter(defaultVal = 0) {
  let count = defaultVal;

  return () => {
    count += 1;
    return count;
  };
}

const res = counter();
console.log(res());
console.log(res());
console.log(res());
console.log(res());

function counter1(defaultVal = 0) {
  let count = defaultVal;

  return () => {
    return count++;
  };
}

const res1 = counter1();
console.log(res1());
console.log(res1());
console.log(res1());
console.log(res1());
