"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Particle {
  id: number;
  x: number;
  y: number;
  angle: number;
  velocity: number;
  size: number;
}

export default function HeartBurst() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const newParticles: Particle[] = [];
      const count = 8; // Number of hearts per burst
      const burstId = Date.now();

      for (let i = 0; i < count; i++) {
        newParticles.push({
          id: burstId + i,
          x: e.clientX,
          y: e.clientY,
          angle: (i * (360 / count) + Math.random() * 20) * (Math.PI / 180),
          velocity: 100 + Math.random() * 100,
          size: 12 + Math.random() * 12,
        });
      }

      setParticles((prev) => [...prev, ...newParticles]);

      // Cleanup: Remove particles after animation finishes (1s)
      setTimeout(() => {
        setParticles((prev) => prev.filter((p) => !newParticles.includes(p)));
      }, 1000);
    };

    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
      <AnimatePresence>
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            initial={{ 
              x: particle.x, 
              y: particle.y, 
              opacity: 1, 
              scale: 0,
              rotate: 0 
            }}
            animate={{
              x: particle.x + Math.cos(particle.angle) * particle.velocity,
              y: particle.y + Math.sin(particle.angle) * particle.velocity,
              opacity: 0,
              scale: 1,
              rotate: 45,
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute text-pink-500/80"
            style={{ fontSize: particle.size }}
          >
            <HeartSVG />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

const HeartSVG = () => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
  </svg>
);