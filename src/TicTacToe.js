import React, { useState } from "react";
import Button from '@mui/material/Button';


function TicTacToe() {
  const [board, setBoard] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);
  const decideWinner = (board) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (board[a] != null && board[a] === board[b] && board[b] === board[c]) {
        console.log("winner is", board[a]);
        return board[a];
      }
    }
    return null;
  };

  const winner = decideWinner(board);
  const [isXturn, setisXturn] = useState(true);
  const handleClick = (i) => {
    console.log(i);
    console.log(board);
    if (winner === null && board[i] === null) {
      const copyBoard = [...board];
      copyBoard[i] = isXturn ? "x" : "o";
      setBoard(copyBoard);
      setisXturn(!isXturn);
    }
  };
  return (
    <>
      <div className="full-game">
        <div className="board">
          {board.map((val, i) => {
            return (
              <GameBox key={i} val={val} onPlayerClick={() => handleClick(i)} />
            );
          })}
        </div>
        {winner ? <h2>Winner is {winner}</h2> : null}
        <Button variant="outlined" color="error" onClick={() => {
          setBoard([
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
          ]);
          setisXturn(true);
        }}>
        Restart
      </Button>
      </div>
      
    </>
  );
}

function GameBox({ val, onPlayerClick }) {
  // const [val , setVal] = useState(null)
  const styles = { color: val === "x" ? "green" : "red" };
  return (
    <div onClick={() => onPlayerClick()} style={styles} className="game-box">
      {val}
    </div>
  );
}

export default TicTacToe;
