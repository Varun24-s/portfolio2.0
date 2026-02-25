import React, { useState, useEffect } from 'react';

export const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [isCPUMoving, setIsCPUMoving] = useState(false);

  const calculateWinner = (squares) => {
    const lines = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) return squares[a];
    }
    return null;
  };

  // --- MINIMAX LOGIC ---
  const minimax = (newBoard, player) => {
    const availSpots = newBoard.map((s, i) => s === null ? i : null).filter(s => s !== null);
    const winner = calculateWinner(newBoard);

    if (winner === 'X') return { score: -10 };
    if (winner === 'O') return { score: 10 };
    if (availSpots.length === 0) return { score: 0 };

    const moves = [];
    for (let i = 0; i < availSpots.length; i++) {
      const move = {};
      move.index = availSpots[i];
      newBoard[availSpots[i]] = player;

      if (player === 'O') {
        const result = minimax(newBoard, 'X');
        move.score = result.score;
      } else {
        const result = minimax(newBoard, 'O');
        move.score = result.score;
      }

      newBoard[availSpots[i]] = null;
      moves.push(move);
    }

    let bestMove;
    if (player === 'O') {
      let bestScore = -10000;
      for (let i = 0; i < moves.length; i++) {
        if (moves[i].score > bestScore) {
          bestScore = moves[i].score;
          bestMove = i;
        }
      }
    } else {
      let bestScore = 10000;
      for (let i = 0; i < moves.length; i++) {
        if (moves[i].score < bestScore) {
          bestScore = moves[i].score;
          bestMove = i;
        }
      }
    }
    return moves[bestMove];
  };

  // --- CPU EFFECT ---
  useEffect(() => {
    const winner = calculateWinner(board);
    const isDraw = !winner && board.every(s => s !== null);

    if (!xIsNext && !winner && !isDraw) {
      setIsCPUMoving(true);
      const timer = setTimeout(() => {
        // AI calculates the best possible move
        const bestMove = minimax([...board], 'O');
        makeMove(bestMove.index, 'O');
        setIsCPUMoving(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [xIsNext]);

  const makeMove = (i, player) => {
    const nextBoard = board.slice();
    nextBoard[i] = player;
    setBoard(nextBoard);
    setXIsNext(player === 'O');
  };

  const handlePlayerClick = (i) => {
    if (isCPUMoving || board[i] || calculateWinner(board)) return;
    makeMove(i, 'X');
  };

  const winner = calculateWinner(board);
  const isDraw = !winner && board.every(s => s !== null);

  return (
    <div className="p-4 border border-zinc-800 rounded bg-zinc-950 inline-block shadow-2xl">
      <div className="flex justify-between items-center mb-3">
        <p className={`text-[10px] font-mono font-bold uppercase ${winner ? 'text-red-500' : 'text-zinc-500'}`}>
          {winner ? `Result: ${winner === 'O' ? 'System Wins' : 'You Win'}` : isDraw ? "Result: Draw" : isCPUMoving ? "Calculating..." : "Awaiting Input (X)"}
        </p>
      </div>

      <div className="grid grid-cols-3 gap-1">
        {board.map((square, i) => (
          <button
            key={i}
            disabled={isCPUMoving || winner || isDraw}
            className={`w-14 h-14 border border-zinc-800 flex items-center justify-center text-xl transition-all
              ${!square && !winner ? 'hover:bg-zinc-900 cursor-pointer' : 'cursor-default'}
              ${square === 'X' ? 'text-green-500' : 'text-red-500'}`}
            onClick={() => handlePlayerClick(i)}
          >
            {square}
          </button>
        ))}
      </div>

      <button 
        onClick={() => { setBoard(Array(9).fill(null)); setXIsNext(true); }}
        className="mt-4 w-full py-1 text-[10px] bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-zinc-800 transition-all uppercase"
      >
        Reset Matrix
      </button>
    </div>
  );
};