"use client";

import { motion } from "framer-motion";
import { useAudio } from "../../../hooks/useAudio"; // We'll build this hook next
import { cn } from "../../../lib/utils";

export default function AudioToggle() {
  const { isPlaying, togglePlay } = useAudio();

  return (
    <div className="fixed top-8 right-8 z-[100]">
      <motion.button
        onClick={togglePlay}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={cn(
          "group relative flex items-center justify-center w-14 h-14 rounded-full transition-all duration-500",
          "bg-white/5 border border-white/10 backdrop-blur-md hover:border-pink-500/50",
          isPlaying ? "shadow-[0_0_20px_rgba(236,72,153,0.3)]" : "shadow-xl"
        )}
      >
        {/* Visualizer Bars */}
        <div className="flex items-end justify-center gap-[3px] w-6 h-5">
          {[0, 1, 2, 3].map((i) => (
            <motion.span
              key={i}
              animate={
                isPlaying
                  ? {
                      height: [
                        "20%",
                        i % 2 === 0 ? "100%" : "60%",
                        i % 2 === 0 ? "40%" : "80%",
                        "20%",
                      ],
                    }
                  : { height: "20%" }
              }
              transition={{
                repeat: Infinity,
                duration: 0.6 + i * 0.1,
                ease: "easeInOut",
              }}
              className={cn(
                "w-1 rounded-full bg-pink-500 transition-colors duration-300",
                !isPlaying && "bg-white/30"
              )}
            />
          ))}
        </div>

        {/* Outer Ring Animation (Visible only when playing) */}
        {isPlaying && (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1.5, opacity: 0 }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="absolute inset-0 border border-pink-500 rounded-full"
          />
        )}
      </motion.button>

      {/* Subtle tooltip */}
      <motion.span
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: 1, x: 0 }}
        className="absolute right-16 top-1/2 -translate-y-1/2 pointer-events-none whitespace-nowrap text-[10px] uppercase tracking-[0.2em] text-white/40"
      >
        {isPlaying ? "Sound On" : "Sound Off"}
      </motion.span>
    </div>
  );
}