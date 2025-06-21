// Stock Span Problem - https://www.youtube.com/watch?v=p9T-fE1g1pU&list=PL_z_8CaSLPWdeOezg68SKkeLN4-T_jNHd&index=6
// For each day in arr, find the number of consecutive days before it (including itself) where the price was less than or equal to today's price.

function stockSpanProblem(arr) {
  let stack = [];
  let res = [];

  for (let i = 0; i < arr.length; i++) {
    while (stack.length > 0 && stack[stack.length - 1][0] <= arr[i]) {
      stack.pop();
    }

    if (stack.length === 0) {
      res.push(-1);
    } else {
      res.push(stack[stack.length - 1][1]);
    }

    stack.push([arr[i], i]);
  }

  for (let j = 0; j < arr.length; j++) {
    res[j] = j - res[j];
  }

  return res;
}

console.log(stockSpanProblem([100, 80, 60, 70, 60, 75, 85]));
