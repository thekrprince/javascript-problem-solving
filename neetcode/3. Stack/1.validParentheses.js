/**
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 */

function validParenthesis(s) {
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "[" || s[i] === "{" || s[i] === "(") {
      stack.push(s[i]);
    } else {
      if (stack.length === 0) {
        return false;
      } else {
        const lastEle = stack.pop();
        if (
          (s[i] === ")" && lastEle === "(") ||
          (s[i] === "]" && lastEle === "[") ||
          (s[i] === "}" && lastEle === "{")
        ) {
          continue;
        } else {
          return false;
        }
      }
    }
  }

  if (stack.length === 0) {
    return true;
  }

  return false;
}

console.log(validParenthesis("([])"));
console.log(validParenthesis("()[]{}"));
console.log(validParenthesis("()]{}"));
