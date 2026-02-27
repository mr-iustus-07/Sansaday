"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Preloader() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 1 : 100));
    }, 30); // Adjust speed to match your 3.5s page timeout
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[10000] bg-[#050505] flex flex-col items-center justify-center"
    >
      <div className="relative flex flex-col items-center">
        {/* Animated Text */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-white font-serif italic text-2xl mb-8 tracking-widest"
        >
          Its Your Birthday...
        </motion.h2>

        {/* Progress Bar Container */}
        <div className="w-64 h-[2px] bg-white/10 rounded-full overflow-hidden relative">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            className="absolute inset-y-0 left-0 bg-pink-500 shadow-[0_0_15px_rgba(236,72,153,0.5)]"
          />
        </div>

        {/* Percentage Counter */}
        <motion.span 
          className="mt-4 text-white/40 font-inter text-[10px] tracking-[0.2em] uppercase"
        >
          {progress}%
        </motion.span>
      </div>

      {/* Background Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/5 blur-[120px] rounded-full" />
    </motion.div>
  );
}