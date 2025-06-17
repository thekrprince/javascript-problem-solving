// Nearest Greater to left - https://www.youtube.com/watch?v=T5s96ynzArg&list=PL_z_8CaSLPWdeOezg68SKkeLN4-T_jNHd&index=3

function nearestGreaterToLeft(arr) {
  let stack = [];
  let res = [];

  for (let i = 0; i < arr.length; i++) {
    if (stack.length === 0) {
      res.push(-1);
    } else if (stack.length > 0 && stack[stack.length - 1] > arr[i]) {
      res.push(stack[stack.length - 1]);
    } else if (stack.length > 0 && stack[stack.length - 1] <= arr[i]) {
      while (stack[stack.length - 1] <= arr[i]) {
        stack.pop();
      }
      if (stack.length === 0) {
        res.push(-1);
      } else {
        res.push(stack[stack.length - 1]);
      }
    }

    stack.push(arr[i]);
  }

  return res;
}

const res1 = nearestGreaterToLeft([4, 2, 3, 1]);
console.log(res1);

const res2 = nearestGreaterToLeft([1, 3, 2, 4]);
console.log(res2);
