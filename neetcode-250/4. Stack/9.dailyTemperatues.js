//  LC 739 - https://leetcode.com/problems/daily-temperatures/description/

function dailyTemperatures(temperatures) {
  let stack = [];
  let res = new Array(temperatures.length).fill(0);

  for (let i = temperatures.length; i >= 0; i--) {
    while (stack.length > 0 && stack[stack.length - 1] <= temperatures[i]) {
      stack.pop();
    }

    if (stack.length > 0) {
      res[i] = stack[stack.length - 1][1] - i;
    }

    stack.push([temperatures[i], i]);
  }

  return res;
}

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));
