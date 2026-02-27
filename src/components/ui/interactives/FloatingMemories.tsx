"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { memories as initialMemories } from "../../../data/friendship-data";

interface Memory {
  id: string;
  mediaUrl: string;
  title: string;
}

interface FloatingMemoryItem {
  memory: Memory;
  randomX: number;
  randomY: number;
  duration: number;
}

export default function FloatingMemories() {
  const [floatingMemories] = useState<FloatingMemoryItem[]>(() => {
    // We'll take a subset of memories to float in the background
    const floaters = (initialMemories || []).slice(0, 6);
    
    // Generate random values once during mount
    return floaters.map((memory: Memory) => ({
      memory,
      randomX: Math.random() * 80 + 10,
      randomY: Math.random() * 80 + 10,
      duration: 15 + Math.random() * 10,
    }));
  });

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {floatingMemories.map(({ memory, randomX, randomY, duration }, i) => {
        
        return (
          <motion.div
            key={memory.id}
            initial={{ x: `${randomX}%`, y: `${randomY}%`, opacity: 0 }}
            animate={{
              // Creating a non-linear "floating" path
              y: [`${randomY}%`, `${randomY - 10}%`, `${randomY + 5}%`, `${randomY}%`],
              x: [`${randomX}%`, `${randomX + 5}%`, `${randomX - 5}%`, `${randomX}%`],
              opacity: [0, 0.4, 0.4, 0], // Fade in and out to prevent visual clutter
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 2,
            }}
            className="absolute w-32 h-32 md:w-48 md:h-48"
          >
            <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl grayscale opacity-60">
              <Image
                src={memory.mediaUrl}
                alt={memory.title}
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}