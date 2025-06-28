// LC 787 - https://leetcode.com/problems/asteroid-collision/description/
function asteroidCollision(asteroids) {
  let stack = [];

  for (let asteroid of asteroids) {
    let isDestroyed = false;

    while (stack.length > 0 && stack[stack.length - 1] > 0 && asteroid < 0) {
      if (stack[stack.length - 1] > -asteroid) {
        isDestroyed = true;
        break;
      } else if (stack[stack.length - 1] === -asteroid) {
        isDestroyed = true;
        stack.pop();
        break;
      } else {
        stack.pop();
      }
    }

    if (!isDestroyed) {
      stack.push(asteroid);
    }
  }

  return stack;
}

console.log(asteroidCollision([2, 4, -4, -1])); // [2]
console.log(asteroidCollision([5, 5])); // [5, 5]
console.log(asteroidCollision([7, -3, 9])); // [7, 9]
