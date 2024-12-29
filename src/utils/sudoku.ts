export function isValidMove(
  grid: { value: number | null }[][],
  row: number,
  col: number,
  num: number
): boolean {
  // Check row
  for (let x = 0; x < 9; x++) {
    if (grid[row][x].value === num) return false;
  }

  // Check column
  for (let x = 0; x < 9; x++) {
    if (grid[x][col].value === num) return false;
  }

  // Check 3x3 box
  const boxRow = Math.floor(row / 3) * 3;
  const boxCol = Math.floor(col / 3) * 3;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (grid[boxRow + i][boxCol + j].value === num) return false;
    }
  }

  return true;
}

export function solveSudoku(grid: { value: number | null }[][]): boolean {
  let row = -1;
  let col = -1;
  let isEmpty = false;

  // Find empty cell
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (grid[i][j].value === null) {
        row = i;
        col = j;
        isEmpty = true;
        break;
      }
    }
    if (isEmpty) break;
  }

  // No empty cell found, puzzle solved
  if (!isEmpty) return true;

  // Try digits 1-9
  for (let num = 1; num <= 9; num++) {
    if (isValidMove(grid, row, col, num)) {
      grid[row][col].value = num;
      if (solveSudoku(grid)) return true;
      grid[row][col].value = null;
    }
  }

  return false;
}