# Sudoku Solver

A modern, interactive Sudoku puzzle solver built with React, TypeScript, and Tailwind CSS. This application features a beautiful UI with a gradient background, interactive grid selection, and an automatic solving algorithm.

![Sudoku Solver Screenshot](https://i.imgur.com/5qTeKRm.png)

## Demo

https://sudoku-solver-app-deploy.netlify.app/

## Features

- 🎮 Interactive 9x9 Sudoku grid
- 🎯 Real-time validation of moves
- ✨ Automatic puzzle solving
- 🎨 Modern, responsive design
- 🔍 Visual highlighting of related cells
- 🔄 Reset functionality

## Technologies Used

- React 18
- TypeScript
- Tailwind CSS
- Vite
- Lucide React Icons

## Project Structure

```
src/
├── components/
│   ├── NumberControls.tsx    # Number input controls
│   └── SudokuGrid.tsx        # Main grid component
├── utils/
│   └── sudoku.ts            # Sudoku solving algorithms
├── types.ts                 # TypeScript interfaces
└── App.tsx                  # Main application component
```

## How It Works

### Grid Interaction
- Click any cell to select it
- Use the number pad below to input values
- Related cells (row, column, and 3x3 box) are highlighted
- Invalid moves are prevented automatically

### Solving Algorithm
The solver uses a backtracking algorithm to find the solution:
1. Find an empty cell
2. Try numbers 1-9 in that cell
3. Check if the number is valid
4. If valid, recursively try to solve the rest of the puzzle
5. If no solution is found, backtrack and try the next number

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open http://localhost:5173 in your browser

## Usage

1. Start with an empty grid or input your puzzle
2. Click any cell to select it
3. Use the number pad to input values
4. Click "Solve Puzzle" to automatically solve
5. Use "Reset" to clear the grid

## Screenshots

### Main Interface
![Main Interface](https://i.imgur.com/vPTODOh.png)

### Solving in Progress
![Solving Progress](https://i.imgur.com/2kVkXfU.png)

