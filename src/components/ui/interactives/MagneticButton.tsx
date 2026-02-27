"use client";

import { useRef, useState, ReactNode } from "react";
import { motion } from "framer-motion";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  strength?: number; // How "strong" the magnet is
}

export default function MagneticButton({
  children,
  className = "",
  strength = 0.35,
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!buttonRef.current) return;

    const { clientX, clientY } = e;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();

    // Calculate the center point of the button
    const centerX = left + width / 2;
    const centerY = top + height / 2;

    // Calculate distance from center to cursor
    const distanceX = clientX - centerX;
    const distanceY = clientY - centerY;

    // Apply the magnetic "pull"
    setPosition({ 
      x: distanceX * strength, 
      y: distanceY * strength 
    });
  };

  const handleMouseLeave = () => {
    // Snap back to origin
    setPosition({ x: 0, y: 0 });
  };

  return (
    <div
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative inline-block"
    >
      <motion.div
        animate={{ x: position.x, y: position.y }}
        transition={{ 
          type: "spring", 
          stiffness: 150, 
          damping: 15, 
          mass: 0.1 
        }}
        className={className}
      >
        {children}
      </motion.div>
    </div>
  );
}