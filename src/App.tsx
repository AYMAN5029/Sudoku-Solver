import React, { useState } from 'react';
import { SudokuGrid } from './components/SudokuGrid';
import { NumberControls } from './components/NumberControls';
import { Grid } from './types';
import { solveSudoku, isValidMove } from './utils/sudoku';
import { Sparkles } from 'lucide-react';

function createEmptyGrid(): Grid {
  return Array(9).fill(null).map(() =>
    Array(9).fill(null).map(() => ({ value: null }))
  );
}

function App() {
  const [grid, setGrid] = useState<Grid>(createEmptyGrid());
  const [selectedCell, setSelectedCell] = useState<{ row: number; col: number } | null>(null);

  const handleCellChange = (row: number, col: number, value: number | null) => {
    if (value === null || isValidMove(grid, row, col, value)) {
      const newGrid = grid.map((r, i) =>
        r.map((cell, j) => ({
          value: i === row && j === col ? value : cell.value
        }))
      );
      setGrid(newGrid);
    }
  };

  const handleNumberSelect = (num: number) => {
    if (selectedCell) {
      handleCellChange(selectedCell.row, selectedCell.col, num);
    }
  };

  const handleClear = () => {
    if (selectedCell) {
      handleCellChange(selectedCell.row, selectedCell.col, null);
    }
  };

  const handleSolve = () => {
    const gridCopy = grid.map(row => row.map(cell => ({ ...cell })));
    if (solveSudoku(gridCopy)) {
      setGrid(gridCopy);
    }
  };

  const handleReset = () => {
    setGrid(createEmptyGrid());
    setSelectedCell(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex flex-col items-center py-12">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 flex items-center gap-2 mb-2">
          <Sparkles className="w-8 h-8 text-blue-500" />
          Sudoku Solver
        </h1>
        <p className="text-gray-600">Fill in the numbers and let the magic happen</p>
      </div>

      <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-2xl">
        <SudokuGrid
          grid={grid}
          onCellChange={handleCellChange}
          selectedCell={selectedCell}
          setSelectedCell={setSelectedCell}
        />
        
        <NumberControls
          onNumberSelect={handleNumberSelect}
          onClear={handleClear}
        />

        <div className="mt-8 flex gap-4 justify-center">
          <button
            onClick={handleSolve}
            className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 
                     transition-colors duration-200 font-semibold"
          >
            Solve Puzzle
          </button>
          <button
            onClick={handleReset}
            className="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 
                     transition-colors duration-200 font-semibold"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;