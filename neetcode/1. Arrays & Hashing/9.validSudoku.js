/*
Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
Note:

A Sudoku board (partially filled) could be valid but is not necessarily solvable.
Only the filled cells need to be validated according to the mentioned rules.
*/

// Brute force approach
function validSudoku(sudokuBox) {
  // Rows validation
  for (let r = 0; r < sudokuBox.length; r++) {
    let tempArray = [];
    for (let c = 0; c < sudokuBox.length; c++) {
      if (sudokuBox[r][c] !== ".") {
        if (tempArray.includes(sudokuBox[r][c])) {
          return false;
        }
        tempArray.push(sudokuBox[r][c]);
      }
    }
  }

  // Column validation
  for (let c = 0; c < sudokuBox.length; c++) {
    let tempArray = [];
    for (let r = 0; r < sudokuBox.length; r++) {
      if (sudokuBox[c][r] !== ".") {
        if (tempArray.includes(sudokuBox[c][r])) {
          return false;
        }
        tempArray.push(sudokuBox[c][r]);
      }
    }
  }

  // Box validation
  for (let sr = 0; sr < sudokuBox.length; sr += 3) {
    let er = sr + 2;
    for (let sc = 0; sc < sudokuBox.length; sc += 3) {
      let ec = sc + 2;
      if (!validBox(sudokuBox, sr, er, sc, ec)) {
        return false;
      }
    }
  }

  function validBox(box, startingRow, endingRow, startingCol, endingCol) {
    let tempRes = [];
    for (let i = startingRow; i <= endingRow; i++) {
      for (let j = startingCol; j <= endingCol; j++) {
        if (box[i][j] !== ".") {
          if (tempRes.includes(box[i][j])) {
            return false;
          }
          tempRes.push(box[i][j]);
        }
      }
    }
    return true;
  }

  return true;
}

const board1 = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

const res = validSudoku(board1);
console.log(res);
