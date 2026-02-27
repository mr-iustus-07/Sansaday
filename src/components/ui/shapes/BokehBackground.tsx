"use client";

import { motion } from "framer-motion";

export default function BokehBackground() {
  const orbs = [
    { color: "bg-pink-500/20", size: "w-[400px] h-[400px]", top: "10%", left: "5%", duration: 20 },
    { color: "bg-purple-500/10", size: "w-[500px] h-[500px]", top: "40%", left: "60%", duration: 25 },
    { color: "bg-blue-500/10", size: "w-[300px] h-[300px]", top: "70%", left: "20%", duration: 18 },
  ];

  return (
    <div className="fixed inset-0 -z-20 overflow-hidden pointer-events-none">
      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          animate={{
            x: [0, 50, -30, 0],
            y: [0, -40, 60, 0],
          }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            ease: "linear",
          }}
          className={`absolute rounded-full blur-[100px] ${orb.color} ${orb.size}`}
          style={{ top: orb.top, left: orb.left }}
        />
      ))}
    </div>
  );
}