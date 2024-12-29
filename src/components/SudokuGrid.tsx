import React from 'react';
import { Cell } from '../types';

interface SudokuGridProps {
  grid: Cell[][];
  onCellChange: (row: number, col: number, value: number | null) => void;
  selectedCell: { row: number; col: number } | null;
  setSelectedCell: (cell: { row: number; col: number } | null) => void;
}

export function SudokuGrid({ grid, onCellChange, selectedCell, setSelectedCell }: SudokuGridProps) {
  return (
    <div className="grid grid-cols-9 gap-[1px] bg-gray-300 p-[1px] rounded-lg shadow-xl">
      {grid.map((row, rowIndex) =>
        row.map((cell, colIndex) => {
          const isSelected = selectedCell?.row === rowIndex && selectedCell?.col === colIndex;
          const isInSameBox =
            selectedCell &&
            Math.floor(rowIndex / 3) === Math.floor(selectedCell.row / 3) &&
            Math.floor(colIndex / 3) === Math.floor(selectedCell.col / 3);
          const isInSameRowOrCol =
            selectedCell &&
            (rowIndex === selectedCell.row || colIndex === selectedCell.col);

          return (
            <div
              key={`${rowIndex}-${colIndex}`}
              className={`
                w-12 h-12 flex items-center justify-center text-xl font-semibold
                cursor-pointer transition-colors duration-200
                ${isSelected ? 'bg-blue-200' : isInSameBox ? 'bg-blue-50' : isInSameRowOrCol ? 'bg-gray-100' : 'bg-white'}
                ${colIndex % 3 === 2 && colIndex !== 8 ? 'border-r-2 border-gray-400' : ''}
                ${rowIndex % 3 === 2 && rowIndex !== 8 ? 'border-b-2 border-gray-400' : ''}
                hover:bg-blue-100
              `}
              onClick={() => setSelectedCell({ row: rowIndex, col: colIndex })}
            >
              {cell.value || ''}
            </div>
          );
        })
      )}
    </div>
  );
}