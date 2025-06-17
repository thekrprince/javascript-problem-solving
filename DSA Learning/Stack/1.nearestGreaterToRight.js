// Nearest greater to right - https://www.youtube.com/watch?v=NXOOYYwpbg4&list=PL_z_8CaSLPWdeOezg68SKkeLN4-T_jNHd&index=2
// Find the nearest greater in the right side and if not found, add -1 for that in the result

function findNearestGreaterInRight(arr) {
  let stack = [];
  let res = [];

  for (let i = arr.length - 1; i >= 0; i--) {
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

  return res.reverse();
}

const res1 = findNearestGreaterInRight([1, 3, 2, 4]);
console.log(res1);
