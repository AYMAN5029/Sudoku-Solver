# Sudoku Solver

This program solves a Sudoku puzzle using a **backtracking algorithm**. It finds a solution to the partially filled 9x9 Sudoku grid while adhering to Sudoku's rules:

1. Each number from 1-9 must appear exactly once in each row, column, and 3x3 sub-grid.
2. Unassigned cells are represented by `0`.

## How It Works

1. **Input Grid**:  
   The Sudoku grid is defined in the code with `0` representing empty cells.  
   Example:  
   ```c
   int grid[N][N] = { 
       { 0, 2, 0, 4, 8, 0, 0, 0, 0 },
       { 4, 0, 0, 0, 0, 0, 0, 0, 0 },
       ...
   };
   ```

2. **Algorithm**:
   - The program uses **backtracking** to try each number from 1 to 9 in empty cells.
   - It checks if placing a number is valid using the `isSafe` function.
   - If a valid number is found, it proceeds recursively; otherwise, it backtracks and tries another number.

3. **Output**:
   - If a solution exists, the solved Sudoku grid is printed.
   - If no solution exists, a message is displayed: `No solution exists`.

## Compilation and Execution

1. Save the code in a file, e.g., `sudoku_solver.c`.
2. Compile the code using GCC:
   ```bash
   gcc sudoku_solver.c -o sudoku_solver
   ```
3. Run the program:
   ```bash
   ./sudoku_solver
   ```

## Example Input and Output

### Input Grid:
```
0 2 0 4 8 0 0 0 0
4 0 0 0 0 0 0 0 0
0 0 0 0 6 0 1 0 0
0 0 0 5 0 0 0 0 3
0 0 0 0 0 0 0 0 2
0 0 0 0 0 0 6 0 7
8 0 0 0 4 0 0 3 0
0 6 9 0 0 0 0 0 0
0 0 5 0 3 0 2 0 0
```

### Output Grid:
```
6 2 1 4 8 7 3 5 9
4 5 7 3 1 9 8 2 6
9 3 8 2 6 5 1 7 4
7 1 6 5 2 8 4 9 3
5 9 3 7 4 6 1 8 2
2 8 4 9 1 3 6 5 7
8 7 2 6 4 1 9 3 5
3 6 9 8 5 2 7 4 1
1 4 5 7 3 9 2 6 8
```

## Notes

- The grid size (`N`) is fixed at 9x9 for standard Sudoku.
- The algorithm is optimized for solving standard puzzles but may be slower for highly constrained or invalid grids.
