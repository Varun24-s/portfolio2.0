import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const BootScreen = ({ onComplete }) => {
  const [percent, setPercent] = useState(0);
  const [phase, setPhase] = useState("INITIALIZING");

  useEffect(() => {
    const timer = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 1000);
          return 100;
        }
        const next = prev + Math.floor(Math.random() * 8) + 2;
        return next > 100 ? 100 : next;
      });
    }, 150);

    return () => clearInterval(timer);
  }, [onComplete]);

  // Sync phase text to percentage
  useEffect(() => {
    if (percent > 80) setPhase("GUI_RENDER_READY");
    else if (percent > 50) setPhase("V_FILESYSTEM_MOUNTED");
    else if (percent > 20) setPhase("DECRYPTING_BIO_CORE");
  }, [percent]);

  return (
    <div className="fixed inset-0 bg-black z-[100] flex flex-col items-center justify-center font-mono text-blue-500 overflow-hidden">
      
      {/* Background Grid Decoration */}
      
      {/* Moving Scanner Line */}
      <motion.div 
        animate={{ y: [-100, 1000] }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 w-full h-[2px] bg-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.8)] z-10 opacity-30"
      />

      {/* Central Visual Element */}
      <div className="relative flex flex-col items-center gap-8 w-full max-w-xl p-6">
        
        {/* The "Brain" Circle */}
        <div className="relative h-48 w-48 flex items-center justify-center">
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 border-2 border-dashed border-blue-900 rounded-full"
          />
          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute inset-4 border border-blue-700/50 rounded-full border-t-blue-400"
          />
          <div className="flex flex-col items-center">
            <span className="text-4xl font-black tracking-tighter">{percent}%</span>
            <span className="text-[8px] opacity-50 tracking-[0.3em]">STABILITY: HIGH</span>
          </div>
        </div>

        {/* Data Readout Panels */}
        <div className="w-full grid grid-cols-2 gap-4 text-[10px]">
          <div className="border border-blue-900/50 p-2 bg-blue-500/5">
            <p className="text-blue-400 mb-1 border-b border-blue-900/50 pb-1">KERNEL_METRICS</p>
            <p>LATENCY: 0.00{Math.floor(Math.random()*9)}ms</p>
            <p>NODE: BHOPAL_79</p>
            <p>OS: VARUN_V3.1</p>
          </div>
          <div className="border border-blue-900/50 p-2 bg-blue-500/5">
            <p className="text-blue-400 mb-1 border-b border-blue-900/50 pb-1">STATUS_LOG</p>
            <AnimatePresence mode="wait">
              <motion.p 
                key={phase}
                initial={{ opacity: 0, x: 5 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-white"
              >
                {phase}...
              </motion.p>
            </AnimatePresence>
            <p className="opacity-40">AUTO_RECOVERY: ON</p>
          </div>
        </div>

        {/* Branding Footer */}
        <div className="flex flex-col items-center gap-1">
          <div className="flex gap-1">
             {[...Array(20)].map((_, i) => (
               <div key={i} className={`h-1 w-2 ${i < percent/5 ? 'bg-blue-500 shadow-[0_0_5px_rgba(59,130,246,1)]' : 'bg-blue-900/30'}`} />
             ))}
          </div>
        </div>
      </div>

      {/* Decorative Glitch Text in corners */}
      <div className="absolute top-10 left-10 opacity-20 text-[8px] rotate-90">0xDEADBEEF</div>
      <div className="absolute bottom-10 right-10 opacity-20 text-[8px]">CORE_TEMP: 32°C</div>

      {/* Grainy Noise Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </div>
  );
};

export default BootScreen;