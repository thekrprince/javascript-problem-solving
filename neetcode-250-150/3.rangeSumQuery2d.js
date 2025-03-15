// Range Sum Query 2D - Immutable - https://leetcode.com/problems/range-sum-query-2d-immutable/description/

var NumMatrix = function (matrix) {
  this.matrix = matrix;
  let row = matrix.length,
    col = matrix[0].length;
  this.prefixesSum = new Array(row + 1)
    .fill(0)
    .map(() => Array(col + 1).fill(0));

  for (let r = 0; r < row; r++) {
    for (let c = 0; c < col; c++) {
      const left = this.prefixesSum[r + 1][c];
      const above = this.prefixesSum[r][c + 1];
      const topLeft = this.prefixesSum[r][c];

      this.prefixesSum[r + 1][c + 1] = matrix[r][c] + left + above - topLeft;
    }
  }
};

NumMatrix.prototype.sumRegion = function (row1, col1, row2, col2) {
  (row1 = row1 + 1), (col1 = col1 + 1), (row2 = row2 + 1), (col2 = col2 + 1);

  const bottomRight = this.prefixesSum[row2][col2];
  const above = this.prefixesSum[row1 - 1][col2];
  const left = this.prefixesSum[row2][col1 - 1];
  const topLeft = this.prefixesSum[row1 - 1][col1 - 1];

  return bottomRight - above - left + topLeft;
};

const obj = new NumMatrix([
  [3, 0, 1, 4, 2],
  [5, 6, 3, 2, 1],
  [1, 2, 0, 1, 5],
  [4, 1, 0, 1, 7],
  [1, 0, 3, 0, 5],
]);

const sum1 = obj.sumRegion(2, 1, 4, 3);
const sum2 = obj.sumRegion(1, 1, 2, 2);
const sum3 = obj.sumRegion(1, 2, 2, 4);

console.log(sum1);
console.log(sum2);
console.log(sum3);
