/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
*/

function isParenthesisValid(str) {
  let stack = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "[" || str[i] === "{" || str[i] === "(") {
      stack.push(str[i]);
    } else {
      if (stack.length === 0) {
        return false;
      } else {
        const lastIndexBracket = stack.pop();
        const currentIndexBracket = str[i];

        if (
          (lastIndexBracket === "[" && currentIndexBracket === "]") ||
          (lastIndexBracket === "{" && currentIndexBracket === "}") ||
          (lastIndexBracket === "(" && currentIndexBracket === ")")
        ) {
          continue;
        } else {
          return false;
        }
      }
    }
  }

  if (stack.length === 0) return true;

  return false;
}

const res = isParenthesisValid("()[]{}");
console.log(res);
const res1 = isParenthesisValid("[");
console.log(res1);
