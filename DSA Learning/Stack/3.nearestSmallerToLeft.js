// Nearest smaller to left - https://www.youtube.com/watch?v=T5s96ynzArg&list=PL_z_8CaSLPWdeOezg68SKkeLN4-T_jNHd&index=3

function nearestSmallerToLeft(arr) {
  let stack = [];
  let res = [];

  for (let i = 0; i < arr.length; i++) {
    while (stack.length > 0 && stack[stack.length - 1] >= arr[i]) {
      stack.pop();
    }

    if (stack.length === 0) {
      res.push(-1);
    } else {
      res.push(stack[stack.length - 1]);
    }

    stack.push(arr[i]);
  }

  return res;
}

console.log(nearestSmallerToLeft([4, 5, 2, 10, 8]));
console.log(nearestSmallerToLeft([2, 1]));
