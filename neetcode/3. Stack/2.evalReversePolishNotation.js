/* Evaluate Reverse Polish Notation - https://neetcode.io/problems/evaluate-reverse-polish-notation */

function evalRPN(tokens) {
  let stack = [];

  for (let i = 0; i < tokens.length; i++) {
    if (tokens[i] === "+") {
      stack.push(stack.pop() + stack.pop());
    } else if (tokens[i] === "-") {
      const a = stack.pop();
      const b = stack.pop();
      stack.push(b - a);
    } else if (tokens[i] === "*") {
      stack.push(stack.pop() * stack.pop());
    } else if (tokens[i] === "/") {
      const a = stack.pop();
      const b = stack.pop();
      stack.push(Math.trunc(b / a));
    } else {
      stack.push(parseInt(tokens[i]));
    }
  }

  return stack[0];
}

const res = evalRPN(["1", "2", "+", "3", "*", "4", "-"]);
console.log(res);
const res1 = evalRPN([
  "10",
  "6",
  "9",
  "3",
  "+",
  "-11",
  "*",
  "/",
  "*",
  "17",
  "+",
  "5",
  "+",
]);
console.log(res1);
