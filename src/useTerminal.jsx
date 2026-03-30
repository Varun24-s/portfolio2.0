import React, { useState } from 'react';
import { About, Education, Projects, Contact, Skills, HelpMenu, DownloadCV } from './CommandComponents';
import { SnakeGame } from './SnakeGame';
import { TicTacToe } from './TicTacToe';
import { Smile } from 'lucide-react';

export const Banner = () => (
  <pre className="
    text-white 
    text-[5px]          /* Base size for ultra-small screens */
    xs:text-[6px]       /* Small shift */
    md:text-[9px]       /* Desktop size */
    leading-none 
    mb-6 
    font-mono           /* Forces monospace */
    font-bold 
    whitespace-pre      /* Prevents line breaks */
    overflow-visible    /* Ensures it doesn't clip if scaling */
    select-none 
    flex justify-center /* Centers the art if it's smaller than the container */
">
    {`
██╗   ██╗ █████╗ ██████╗ ██╗   ██╗███╗   ██╗    ███████╗██╗  ██╗ █████╗ ██████╗ ███╗   ███╗ █████╗ 
██║   ██║██╔══██╗██╔══██╗██║   ██║████╗  ██║    ██╔════╝██║  ██║██╔══██╗██╔══██╗████╗ ████║██╔══██╗
██║   ██║███████║██████╔╝██║   ██║██╔██╗ ██║    ███████╗███████║███████║██████╔╝██╔████╔██║███████║
╚██╗ ██╔╝██╔══██║██╔══██╗██║   ██║██║╚██╗██║    ╚════██║██╔══██║██╔══██║██╔══██╗██║╚██╔╝██║██╔══██║
 ╚████╔╝ ██║  ██║██║  ██║╚██████╔╝██║ ╚████║    ███████║██║  ██║██║  ██║██║  ██║██║ ╚═╝ ██║██║  ██║
  ╚═══╝  ╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═══╝    ╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝     ╚═╝╚═╝  ╚═╝ 
    `.trim()}
  </pre>
);

export const useTerminal = () => {
  const [history, setHistory] = useState([]);
  const [isRoot, setIsRoot] = useState(false);
  const [isWaitingForPassword, setIsWaitingForPassword] = useState(false);

  const getDeviceName = () => {
  const ua = navigator.userAgent;
  if (ua.includes("Windows")) return "Windows User";
  if (ua.includes("Macintosh")) return "macOS User";
  if (ua.includes("Linux")) return "Linux User";
  if (ua.includes("Android")) return "Android Mobile";
  if (ua.includes("iPhone")) return "iPhone User";
  return "Unknown Lifeform";
};

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
        setHistory(prev => [...prev, {
          label: 'component',
          content: <HelpMenu />
        }]);
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
  const device = getDeviceName();
  const sessionId = Math.random().toString(16).slice(2, 8).toUpperCase();
  
  setHistory(prev => [...prev, { 
    label: 'system', 
    content: isRoot 
      ? `USER: root (The Architect)\nHOST: ${device}\nSTATUS: SESSION_ACTIVE [${sessionId}]` 
      : `USER: guest_user_v1\nHOST: ${device}\nPRIVILEGE: LIMITED_ACCESS`
  }]);
  break;

      case 'neofetch':
        setHistory(prev => [...prev, { label: 'system', content: `OS: TerminalOS v3.0\nKernel: React 18.2\nUptime: 4 mins\nShell: zsh\nResolution: ${window.innerWidth}x${window.innerHeight}` }]);
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

      case 'download':
      case 'cv':
        setHistory(prev => [...prev, { label: 'component', content: <DownloadCV /> }]);
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