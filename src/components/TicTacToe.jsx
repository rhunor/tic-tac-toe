import React, { useState } from 'react';
import './TicTacToe.css';

const TicTacToe = () => {
  const initialBoard = Array(9).fill(null);
  const [board, setBoard] = useState(initialBoard);
  const [isXNext, setIsXNext] = useState(true);

  const checkWinner = (board) => {
    const winCombinations = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6],
    ];

    for (const [a, b, c] of winCombinations) {
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }

    return null;
  };

  const handleCellClick = (index) => {
    if (checkWinner(board) || board[index]) {
      return;
    }

    const updatedBoard = [...board];
    updatedBoard[index] = isXNext ? 'X' : 'O';
    setBoard(updatedBoard);
    setIsXNext(!isXNext);
  };

  const renderCell = (index) => {
    return (
      <div className="cell" onClick={() => handleCellClick(index)}>
        {board[index]}
      </div>
    );
  };

  const resetGame = () => {
    setBoard(initialBoard);
    setIsXNext(true);
  };

  const winner = checkWinner(board);

  return (
    <div className="tic-tac-toe">
      <div className="board">
        {board.map((cell, index) => renderCell(index))}
      </div>
      {winner ? (
        <div className="winner">Winner: {winner}</div>
      ) : (
        <div className="next-player">Next player: {isXNext ? 'X' : 'O'}</div>
      )}
      <button onClick={resetGame}>Reset Game</button>
    </div>
  );
};

export default TicTacToe;
