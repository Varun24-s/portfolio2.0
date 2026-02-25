import React, { useState, useEffect, useCallback } from 'react';

export const SnakeGame = () => {
  const GRID_SIZE = 15;
  const [snake, setSnake] = useState([{ x: 8, y: 8 }]);
  const [food, setFood] = useState({ x: 5, y: 5 });
  const [dir, setDir] = useState({ x: 0, y: -1 });
  const [gameOver, setGameOver] = useState(false);

  const moveSnake = useCallback(() => {
    if (gameOver) return;
    const newSnake = [...snake];
    const head = { x: newSnake[0].x + dir.x, y: newSnake[0].y + dir.y };

    // Wall Collision
    if (head.x < 0 || head.x >= GRID_SIZE || head.y < 0 || head.y >= GRID_SIZE) {
      setGameOver(true); return;
    }

    newSnake.unshift(head);
    if (head.x === food.x && head.y === food.y) {
      setFood({ x: Math.floor(Math.random() * GRID_SIZE), y: Math.floor(Math.random() * GRID_SIZE) });
    } else {
      newSnake.pop();
    }
    setSnake(newSnake);
  }, [snake, dir, food, gameOver]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      switch (e.key) {
        case 'ArrowUp': if (dir.y !== 1) setDir({ x: 0, y: -1 }); break;
        case 'ArrowDown': if (dir.y !== -1) setDir({ x: 0, y: 1 }); break;
        case 'ArrowLeft': if (dir.x !== 1) setDir({ x: -1, y: 0 }); break;
        case 'ArrowRight': if (dir.x !== -1) setDir({ x: 1, y: 0 }); break;
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    const interval = setInterval(moveSnake, 500);
    return () => { clearInterval(interval); window.removeEventListener('keydown', handleKeyDown); };
  }, [moveSnake, dir]);

  return (
    <div className="p-4 border border-zinc-800 rounded bg-zinc-950 inline-block">
      <div className="relative border border-zinc-800 bg-black" style={{ width: 225, height: 225 }}>
        {snake.map((s, i) => (
          <div key={i} className="absolute bg-green-500 border border-black" style={{ width: 15, height: 15, left: s.x * 15, top: s.y * 15 }} />
        ))}
        <div className="absolute bg-red-500 rounded-full" style={{ width: 15, height: 15, left: food.x * 15, top: food.y * 15 }} />
        {gameOver && <div className="absolute inset-0 bg-black/80 flex items-center justify-center text-red-500 font-bold">GAME OVER</div>}
      </div>
      <p className="text-[10px] text-zinc-500 mt-2 uppercase">Score: {snake.length - 1} | Use Arrow Keys</p>
    </div>
  );
};