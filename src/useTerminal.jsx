import React, { useState } from 'react';
import { About, Education, Projects, Contact, Skills } from './CommandComponents';
import { SnakeGame } from './SnakeGame';
import { TicTacToe } from './TicTacToe';
import { Smile } from 'lucide-react';

export const Banner = () => (
  <pre className="text-white text-[4px] md:text-[9px] mb-6 leading-[1.1] font-bold overflow-x-hidden select-none">
    {`
    ██╗   ██╗ █████╗ ██████╗ ██╗   ██╗███╗   ██╗    ███████╗██╗  ██╗ █████╗ ██████╗ ███╗   ███╗ █████╗ 
    ██║   ██║██╔══██╗██╔══██╗██║   ██║████╗  ██║    ██╔════╝██║  ██║██╔══██╗██╔══██╗████╗ ████║██╔══██╗
    ██║   ██║███████║██████╔╝██║   ██║██╔██╗ ██║    ███████╗███████║███████║██████╔╝██╔████╔██║███████║
    ╚██╗ ██╔╝██╔══██║██╔══██╗██║   ██║██║╚██╗██║    ╚════██║██╔══██║██╔══██║██╔══██╗██║╚██╔╝██║██╔══██║
     ╚████╔╝ ██║  ██║██║  ██║╚██████╔╝██║ ╚████║    ███████║██║  ██║██║  ██║██║  ██║██║ ╚═╝ ██║██║  ██║
      ╚═══╝  ╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═══╝    ╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝     ╚═╝╚═╝  ╚═╝ 
    `}
  </pre>
);

export const useTerminal = () => {
  const [history, setHistory] = useState([
    { label: 'component', content: <Banner /> },
    { label: 'system', content: 'SYSTEM READY. TYPE "HELP" TO VIEW COMMANDS.' }
  ]);
  const [isRoot, setIsRoot] = useState(false);
  const [isWaitingForPassword, setIsWaitingForPassword] = useState(false);

  const executeCommand = (command) => {
    const cmd = command.toLowerCase().trim();

    // Handle Password Entry for Sudo
    if (isWaitingForPassword) {
      if (cmd === 'guest') {
        setIsRoot(true);
        setIsWaitingForPassword(false);
        setHistory(prev => [...prev, { label: 'system', content: 'ACCESS GRANTED. Welcome, root.' }]);
      } else {
        setIsWaitingForPassword(false);
        setHistory(prev => [...prev, { label: 'error', content: 'Inccorrect password. Attempt logged.' }]);
      }
      return;
    }

    // Standard User Command Logging
    setHistory(prev => [...prev, { label: 'user', content: command }]);

    switch (cmd) {
      case 'help':
        setHistory(prev => [...prev, { label: 'system', content: 'Commands: about, projects, education, contact, clear, (and in case you are bored 😁) snake, tictactoe(ttt). (There are secrets hidden in the shell...)' }]);
        break;

      // --- CREATIVE HIDDEN COMMANDS ---
      case 'sudo':
        setIsWaitingForPassword(true);
        setHistory(prev => [...prev, { label: 'system', content: '[sudo] password for guest: ' }]);
        break;

      case 'ls -a':
        setHistory(prev => [...prev, { label: 'system', content: '.bashrc  .secret_key  about.sh  projects.sh  system_logs.txt' }]);
        break;

      case 'cat .secret_key':
        setHistory(prev => [...prev, { label: 'system', content: '0xDEADBEEF: You found the easter egg! Try typing "matrix" or "neofetch".' }]);
        break;

      case 'whoami':
        setHistory(prev => [...prev, { label: 'system', content: isRoot ? 'root (The Architect)' : 'guest_user_v1' }]);
        break;

      case 'neofetch':
        setHistory(prev => [...prev, { label: 'system', content: `OS: TerminalOS v3.0\nKernel: React 18.2\nUptime: 4 mins\nShell: zsh\nResolution: ${window.innerWidth}x${window.innerHeight}` }]);
        break;

      case 'matrix':
        // Dispatches a global event for your MatrixRain component to listen to
        window.dispatchEvent(new Event('toggle-matrix'));
        setHistory(prev => [...prev, { label: 'system', content: 'Reality simulation initiated.' }]);
        break;

      case 'date':
        setHistory(prev => [...prev, { label: 'system', content: new Date().toString() }]);
        break;

      // --- COMPONENT COMMANDS ---
      case 'about':
        setHistory(prev => [...prev, { label: 'component', content: <About /> }]);
        break;
      case 'projects':
        setHistory(prev => [...prev, { label: 'component', content: <Projects /> }]);
        break;
      case 'education':
        setHistory(prev => [...prev, { label: 'component', content: <Education /> }]);
        break;
      case 'contact':
        setHistory(prev => [...prev, { label: 'component', content: <Contact /> }]);
        break;

      case 'skills':
        setHistory(prev => [...prev, { label: 'component', content: <Skills /> }]);
        break;

      case 'snake':
        setHistory(prev => [...prev, { label: 'component', content: <SnakeGame /> }]);
        break;

      case 'tictactoe':
      case 'ttt':
        setHistory(prev => [...prev, { label: 'component', content: <TicTacToe /> }]);
        break;

      case 'clear':
        setHistory([]);
        break;

      default:
        setHistory(prev => [...prev, { label: 'error', content: `sh: command not found: ${cmd}` }]);
    }
  };

  return { history, executeCommand, isRoot, isWaitingForPassword };
};