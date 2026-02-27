"use client";

import { useState, useEffect } from "react";
import { useScroll, useSpring, useTransform } from "framer-motion";

export const useScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  
  // We use a spring here so the "progress" value doesn't jitter
  // It makes the data transitions feel "liquid"
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [rawPercent, setRawPercent] = useState(0);

  useEffect(() => {
    // Sync the motion value to a standard state for non-Framer components
    return scrollYProgress.onChange((latest) => {
      setRawPercent(Math.floor(latest * 100));
    });
  }, [scrollYProgress]);

  return {
    scrollValue: smoothProgress, // Use this for Framer Motion style props
    percent: rawPercent,        // Use this for text/display logic
  };
};