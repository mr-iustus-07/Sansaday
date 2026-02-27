"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollIndicator() {
  const { scrollYProgress } = useScroll();
  
  // Spring makes the scroll bar movement feel "organic" rather than robotic
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 h-32 w-[2px] bg-white/10 z-[100] rounded-full hidden md:block">
      {/* Background track */}
      <div className="absolute inset-0 w-full h-full bg-white/5" />
      
      {/* Active progress */}
      <motion.div
        style={{ scaleY }}
        className="absolute top-0 left-0 w-full h-full bg-pink-500 origin-top rounded-full shadow-[0_0_8px_rgba(236,72,153,0.8)]"
      />

      {/* Floating Dot */}
      <motion.div 
        style={{ top: `${scrollYProgress.get() * 100}%` }}
        className="absolute left-1/2 -translate-x-1/2 w-2 h-2 bg-white rounded-full border border-pink-500"
      />
    </div>
  );
}