import React from 'react';
import Square from './Square.js';

const Board = () => {
  return (
    <div>
      <div>
        <Square />
        <Square />
        <Square />
      </div>
      <div>
        <Square />
        <Square />
        <Square />
      </div>
      <div>
        <Square />
        <Square />
        <Square />
      </div>
    </div>
  );
};

export default Board;
