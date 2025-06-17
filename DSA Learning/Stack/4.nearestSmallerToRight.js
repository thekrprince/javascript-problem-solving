// Nearest Smaller to Right - https://www.youtube.com/watch?v=nc1AYFyvOR4&list=PL_z_8CaSLPWdeOezg68SKkeLN4-T_jNHd&index=5

function nearestSmallerToRight(arr) {
  let stack = [];
  let res = [];

  for (let i = arr.length - 1; i >= 0; i--) {
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

  return res.reverse();
}

console.log(nearestSmallerToRight([4, 5, 2, 10, 8]));
console.log(nearestSmallerToRight([2, 1]));
