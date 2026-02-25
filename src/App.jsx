import React, { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Terminal from './Terminal';
import BootScreen from './BootScreen';
import MatrixRain from './MatrixRain';

function App() {
    const [isBooting, setIsBooting] = useState(true);
    const [isMobile, setIsMobile] = useState(false);
    const constraintsRef = useRef(null); // Reference for the drag area

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
        <div className="relative min-h-screen bg-black text-white selection:bg-blue-500 selection:text-white overflow-hidden font-mono">
            
            {/* CRT Scanline Overlay */}
            <div className="fixed inset-0 pointer-events-none z-[100] opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,118,0.06))] bg-[length:100%_2px,3px_100%]" />

            <AnimatePresence mode="wait">
                {isBooting ? (
                    <BootScreen key="boot" onComplete={() => setIsBooting(false)} />
                ) : (
                    <motion.div 
                        initial={{ opacity: 0 }} 
                        animate={{ opacity: 1 }}
                        className="relative h-screen w-full flex flex-col"
                        ref={constraintsRef}
                    >
                        <MatrixRain />
                        
                        {/* Status Bar / Top Decal */}
                        <div className="absolute top-0 w-full p-4 flex justify-between items-start z-0 select-none">
                            <div>
                                <h1 className="text-xl md:text-3xl font-black tracking-tighter text-zinc-500 leading-none">
                                    WELCOME@PORTFOLIO
                                </h1>
                                <p className="text-zinc-900 text-[10px] uppercase tracking-[0.2em]">
                                    Node: BHOPAL_PROD_07
                                </p>
                            </div>
                            <div className="text-right text-zinc-900 text-[10px] hidden md:block">
                                <p>OS: BHOPAL_OS v2.6.0</p>
                                <p>KERNEL: CSE-STABLE-LATEST</p>
                            </div>
                        </div>

                        <div className="flex-grow z-10 relative flex items-center justify-center p-2 md:p-6">
                            <motion.div
                                drag={!isMobile}
                                dragMomentum={false}
                                // Constrain drag to the actual screen limits
                                dragConstraints={constraintsRef}
                                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                                animate={{ scale: 1, opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                className={`
                                    z-20 w-full max-w-[95vw] md:max-w-5xl 
                                    shadow-[0_0_50px_rgba(0,0,0,0.5)]
                                    ${!isMobile ? 'cursor-grab active:cursor-grabbing' : 'cursor-default'}
                                `}
                            >
                                <Terminal />
                            </motion.div>
                        </div>

                        {/* Bottom Decoration */}
                        <div className="absolute bottom-4 left-6 z-0 hidden md:block">
                            <p className="text-zinc-900 text-[10px] font-bold">
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