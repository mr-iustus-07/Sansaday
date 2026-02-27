"use client";

import { motion } from "framer-motion";

export function ShinyText({ text, className }: { text: string; className?: string }) {
  return (
    <motion.span
      initial={{ backgroundPosition: "-200% 0" }}
      animate={{ backgroundPosition: "200% 0" }}
      transition={{
        repeat: Infinity,
        duration: 3,
        ease: "linear",
      }}
      className={`
        inline-block
        bg-gradient-to-r from-transparent via-white to-transparent
        bg-[length:200%_100%]
        bg-clip-text text-transparent
        text-white/80
        ${className}
      `}
      style={{
        backgroundImage: "linear-gradient(110deg, #fff 45%, #ec4899 50%, #fff 55%)",
        backgroundSize: "200% 100%",
      }}
    >
      {text}
    </motion.span>
  );
}