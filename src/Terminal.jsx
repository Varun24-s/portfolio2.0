import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTerminal } from './useTerminal';
import { Banner } from './useTerminal';

const Terminal = () => {
  const [input, setInput] = useState('');
  const scrollRef = useRef(null);
  const { history, executeCommand, isRoot, isWaitingForPassword } = useTerminal();

  // Auto-scroll logic stays the same
//   useEffect(() => {
//     if (scrollRef.current) {
//       scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
//     }
//   }, [history]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input) return;
    executeCommand(input);
    setInput('');
  };

  const handleKeyDown = (e) => {
  // If user is playing snake, prevent the cursor from moving in the input
  if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
     // Check if the last history item is a snake game
     const isSnakeActive = history[history.length - 1]?.content?.type?.name === 'SnakeGame';
     if (isSnakeActive) e.preventDefault();
  }
};

  return (
    // 1. Added 'flex flex-col' to make the container manage its children's height
    <div className={`w-full max-w-[100vw] h-[80vh] flex flex-col bg-black border rounded-lg overflow-hidden transition-all duration-500 shadow-2xl font-mono ${
      isRoot ? 'border-red-900 shadow-red-900/20' : 'border-zinc-800'
    }`}>
      
      {/* Top Bar - Added 'shrink-0' to keep height fixed */}
      <div className="shrink-0 bg-zinc-900 px-4 py-2 border-b border-zinc-800 flex items-center justify-between">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500" />
        </div>
        <span className="text-zinc-600 text-[10px] uppercase tracking-widest font-bold">
          {isRoot ? 'ROOT@SESSION' : 'GUEST@PORTFOLIO'}
        </span>
      </div>

      <div className="px-4 py-6 border-b border-zinc-800 flex flex-col items-start gap-1">
        <div className="shrink-0">
          <Banner />
        </div>  
        <div className="text-zinc-500 text-sm italic">
            TYPE "help" TO VIEW COMMANDS. 
        </div>
      </div>

      {/* Terminal Content - Added 'flex-1' and 'min-h-0' */}
      <div 
        ref={scrollRef} 
        className="flex-1 min-h-0 overflow-y-auto p-6 flex flex-col gap-2 custom-scrollbar"
      >
        {history.map((line, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, y: 5 }} 
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col"
          >
            {line.label === 'user' && (
              <div className="flex gap-2 mb-1 font-bold">
                <span className={isRoot ? "text-red-500" : "text-green-500"}>➜</span>
                <span className="text-zinc-300 italic">$ {line.content}</span>
              </div>
            )}
            
            {line.label === 'system' && <span className="text-zinc-500 leading-relaxed italic">{line.content}</span>}
            {line.label === 'error' && <span className="text-red-500 font-bold">!! {line.content}</span>}
            {line.label === 'component' && <div className="py-2">{line.content}</div>}
          </motion.div>
        ))}

        {/* Input Field - Added 'shrink-0' to prevent it from disappearing */}
        <form onSubmit={handleSubmit} className="flex gap-2 mt-2 items-center shrink-0 pb-2">
          <span className={`font-bold transition-colors ${isRoot ? 'text-red-500' : 'text-green-500'}`}>
            {isWaitingForPassword ? 'Password:' : '➜'}
          </span>
          
          <input
            autoFocus
            type={isWaitingForPassword ? "password" : "text"}
            className="bg-transparent outline-none border-none text-white w-full caret-white flex-1"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            autoComplete="off"
            spellCheck="false"
          />
        </form>
      </div>
    </div>
  );
};

export default Terminal;