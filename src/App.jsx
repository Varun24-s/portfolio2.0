import React, { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Terminal from './Terminal';
import BootScreen from './BootScreen';
import MatrixRain from './MatrixRain';

function App() {
    const [isBooting, setIsBooting] = useState(true);
    const [isMobile, setIsMobile] = useState(false);
    const [theme, setTheme] = useState('dark'); // 'dark' | 'light'
    const constraintsRef = useRef(null);

    // Toggle function passed down to Terminal
    const toggleTheme = () => setTheme(prev => prev === 'dark' ? 'light' : 'dark');

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
        <div className={`
            relative min-h-screen transition-colors duration-500 font-mono overflow-hidden
            ${theme === 'dark' 
                ? 'bg-black text-white selection:bg-blue-500 selection:text-white' 
                : 'bg-zinc-50 text-black selection:bg-blue-200 selection:text-black'}
        `}>
            
            {/* Dynamic CRT Scanline Overlay */}
            <div className={`
                fixed inset-0 pointer-events-none z-[100] opacity-[0.03] 
                ${theme === 'dark' 
                    ? 'bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,118,0.06))]' 
                    : 'bg-[linear-gradient(rgba(255,255,255,0)_50%,rgba(0,0,0,0.05)_50%)]'}
                bg-[length:100%_2px,3px_100%]
            `} />

            <AnimatePresence mode="wait">
                {isBooting ? (
                    <BootScreen 
                        key="boot" 
                        onComplete={() => setIsBooting(false)} 
                        theme={theme} 
                    />
                ) : (
                    <motion.div 
                        initial={{ opacity: 0 }} 
                        animate={{ opacity: 1 }}
                        className="relative h-screen w-full flex flex-col"
                        ref={constraintsRef}
                    >
                        {/* Matrix Rain reacts to theme color */}
                        {/* <MatrixRain color={theme === 'dark' ? '#00FF00' : '#CBD5E1'} opacity={theme === 'dark' ? 0.15 : 0.4} /> */}
                        
                        {/* Status Bar / Top Decal */}
                        <div className={`
                            absolute top-0 w-full p-4 flex justify-between items-start z-0 select-none transition-colors duration-500
                            ${theme === 'dark' ? 'text-zinc-900' : 'text-zinc-200'}
                        `}>
                            <div>
                                <h1 className="text-xl md:text-3xl font-black tracking-tighter leading-none">
                                    WELCOME@PORTFOLIO
                                </h1>
                                <p className="text-[10px] uppercase tracking-[0.2em]">
                                    Node: BHOPAL_PROD_07
                                </p>
                            </div>
                            <div className="text-right text-[10px] hidden md:block">
                                <p>OS: BHOPAL_OS v2.6.0</p>
                                <p>KERNEL: CSE-STABLE-LATEST</p>
                                <p className="text-blue-500 font-bold mt-1">MODE: {theme.toUpperCase()}</p>
                            </div>
                        </div>

                        <div className="flex-grow z-10 relative flex items-center justify-center p-2 md:p-6">
                            <motion.div
                                drag={!isMobile}
                                dragMomentum={false}
                                dragConstraints={constraintsRef}
                                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                                animate={{ scale: 1, opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                className={`
                                    z-20 w-full max-w-[95vw] md:max-w-5xl 
                                    transition-shadow duration-500
                                    ${theme === 'dark' 
                                        ? 'shadow-[0_0_50px_rgba(0,0,0,0.8)]' 
                                        : 'shadow-[0_20px_60px_rgba(0,0,0,0.1)]'}
                                    ${!isMobile ? 'cursor-grab active:cursor-grabbing' : 'cursor-default'}
                                `}
                            >
                                {/* Pass theme props down */}
                                <Terminal theme={theme} toggleTheme={toggleTheme} />
                            </motion.div>
                        </div>

                        {/* Bottom Decoration */}
                        <div className={`
                            absolute bottom-4 left-6 z-0 hidden md:block transition-colors duration-500
                            ${theme === 'dark' ? 'text-zinc-900' : 'text-zinc-200'}
                        `}>
                            <p className="text-[10px] font-bold">
                                [ LOG_SESSION_ACTIVE ] <span className="animate-pulse">_</span>
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default App;