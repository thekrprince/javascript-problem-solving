// Time complexity -> O(log(m * n))
// Space complexity -> O(1)

function searchATwoDMatrix(matrix, target) {
  let n = matrix.length;
  let m = matrix[0].length;
  let low = 0;
  let high = n * m - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let row = Math.floor(mid / m);
    let col = Math.floor(mid % m);
    console.log("low", low);
    console.log("high", high);
    console.log("mid", mid);
    console.log("row", row);
    console.log("col", col);
    if (matrix[row][col] === target) {
      return true;
    } else if (matrix[row][col] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return false;
}

console.log(
  searchATwoDMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    21
  )
);
