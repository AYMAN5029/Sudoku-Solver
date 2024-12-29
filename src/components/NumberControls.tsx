import React from 'react';

interface NumberControlsProps {
  onNumberSelect: (num: number) => void;
  onClear: () => void;
}

export function NumberControls({ onNumberSelect, onClear }: NumberControlsProps) {
  return (
    <div className="mt-8">
      <div className="grid grid-cols-5 gap-2 max-w-md mx-auto">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
          <button
            key={num}
            onClick={() => onNumberSelect(num)}
            className="w-12 h-12 bg-white rounded-lg shadow-md hover:bg-blue-50 
                     transition-colors duration-200 text-xl font-semibold"
          >
            {num}
          </button>
        ))}
        <button
          onClick={onClear}
          className="w-12 h-12 bg-red-100 rounded-lg shadow-md hover:bg-red-200 
                   transition-colors duration-200 text-sm font-semibold"
        >
          Clear
        </button>
      </div>
    </div>
  );
}