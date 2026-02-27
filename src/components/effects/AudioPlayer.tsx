"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AudioPlayer({ src }: { src: string }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      <audio ref={audioRef} src={src} loop />
      
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={togglePlay}
        className="glass w-12 h-12 rounded-full flex items-center justify-center border border-white/20 shadow-xl"
      >
        <div className="flex items-end gap-[2px] h-4">
          {[1, 2, 3, 4].map((i) => (
            <motion.div
              key={i}
              animate={{
                height: isPlaying ? [4, 16, 8, 14, 4] : 4,
              }}
              transition={{
                repeat: Infinity,
                duration: 0.6,
                delay: i * 0.1,
              }}
              className="w-[3px] bg-pink-500 rounded-full"
            />
          ))}
        </div>
      </motion.button>

      <AnimatePresence>
        {!isPlaying && (
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            className="absolute right-16 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md px-3 py-1 rounded-lg border border-white/10 text-[10px] uppercase tracking-widest text-white/60 whitespace-nowrap pointer-events-none"
          >
            Play Soundtrack
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}