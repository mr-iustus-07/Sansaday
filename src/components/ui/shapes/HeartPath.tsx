"use client";

import { motion } from "framer-motion";

export default function HeartPath() {
  return (
    <div className="flex items-center justify-center">
      <svg
        width="100"
        height="100"
        viewBox="0 0 100 100"
        fill="none"
        xmlns=" https://www.w3.org/TR/SVG/"
        className="drop-shadow-[0_0_8px_rgba(236,72,153,0.5)]"
      >
        <motion.path
          d="M50 85C50 85 10 60 10 35C10 20 25 10 40 20C45 23 50 30 50 30C50 30 55 23 60 20C75 10 90 20 90 35C90 60 50 85 50 85Z"
          stroke="#ec4899" // Pink-500
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            delay: 0.5
          }}
        />
      </svg>
    </div>
  );
}