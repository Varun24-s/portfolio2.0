import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const BootScreen = ({ onComplete, theme = 'dark' }) => {
  const [logs, setLogs] = useState([]);
  const [progress, setProgress] = useState(0);

  const fullLogs = [
    "VARUN_OS(v3.1.0) - BOOT_SEQUENCE_INITIATED",
    "PROCESSOR: MANIT_CSE_CORE_2027",
    "MEM_CHECK: 16384MB....................... [PASSED]",
    "V_FILESYSTEM: /root/varun-sharma/portfolio",
    "PROTOCOL: ESTABLISHING_ENCRYPTED_TCP_LINK",
    "DRIVERS: C++, REACT, NODE_JS, MERN_STACK",
    "SECURITY: RSA_4096_ENCRYPTION_ACTIVE",
    "STATUS: SYSTEM_GO_FOR_GUI_LAUNCH",
  ];

  useEffect(() => {
    let logIndex = 0;
    const logInterval = setInterval(() => {
      if (logIndex < fullLogs.length) {
        setLogs(prev => [...prev, {
          text: fullLogs[logIndex],
          id: Math.random().toString(16).slice(2, 6).toUpperCase()
        }]);
        logIndex++;
      } else {
        clearInterval(logInterval);
      }
    }, 250);

    // Progress bar simulation
    const progInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progInterval);
          setTimeout(onComplete, 800);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 400);

    return () => {
      clearInterval(logInterval);
      clearInterval(progInterval);
    };
  }, [onComplete]);

  const isDark = theme === 'dark';

  return (
    <div className={`fixed inset-0 z-[100] flex flex-col justify-between p-6 md:p-12 font-mono transition-colors duration-500
      ${isDark ? 'bg-black text-blue-500' : 'bg-zinc-50 text-zinc-800'}`}>
      
      {/* Top Section: System Info */}
      <div className="space-y-1 overflow-hidden">
        <div className="flex justify-between border-b border-current pb-2 mb-4 opacity-50">
          <span>VARUN_SH_BIOS_V4.2</span>
          <span className="hidden md:block">REL: FEB_2026</span>
        </div>

        {logs.map((log, index) => (
          <motion.div 
            initial={{ x: -10, opacity: 0 }} 
            animate={{ x: 0, opacity: 1 }} 
            key={index}
            className="flex items-center gap-4 text-[10px] md:text-xs"
          >
            <span className="opacity-30">0x{log.id}</span>
            <span className={isDark ? 'text-zinc-300' : 'text-zinc-600'}>{log.text}</span>
            {index === logs.length - 1 && (
              <motion.span 
                animate={{ opacity: [0, 1] }} 
                transition={{ repeat: Infinity, duration: 0.4 }}
                className="inline-block w-2 h-4 bg-current"
              />
            )}
          </motion.div>
        ))}
      </div>

      {/* Bottom Section: Progress & Branding */}
      <div className="space-y-4">
        <div className="flex flex-col gap-2">
          <div className="flex justify-between text-[10px] uppercase tracking-widest font-bold">
            <span>Loading_Environment</span>
            <span>{Math.min(progress, 100)}%</span>
          </div>
          <div className={`h-1 w-full relative ${isDark ? 'bg-zinc-900' : 'bg-zinc-200'}`}>
            <motion.div 
              className="absolute top-0 left-0 h-full bg-blue-600 shadow-[0_0_10px_rgba(37,99,235,0.5)]"
              animate={{ width: `${Math.min(progress, 100)}%` }}
            />
          </div>
        </div>

        <div className="flex justify-between items-end">
          <div className="opacity-40 text-[9px]">
            © 2026 VARUN_SHARMA. ALL_SYSTEMS_OPERATIONAL.<br/>
            BHOPAL_SEC_NODE_79
          </div>
          <div className="text-right italic font-black text-xl md:text-3xl tracking-tighter opacity-20 select-none">
            MANIT_CSE
          </div>
        </div>
      </div>

      {/* Retro Noise Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.015] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </div>
  );
};

export default BootScreen;