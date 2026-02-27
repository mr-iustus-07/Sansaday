import { Variants } from "framer-motion";

// Standard "Rise and Fade" for cards and text blocks
export const fadeInRise: Variants = {
  hidden: { 
    opacity: 0, 
    y: 40,
    filter: "blur(10px)" 
  },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)",
    transition: { 
      type: "spring", 
      damping: 25, 
      stiffness: 100 
    } 
  },
};

// Orchestrates staggered children (perfect for the Timeline list)
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

// Subtle hover effect for GlassCards
export const cardHover = {
  scale: 1.02,
  transition: { 
    type: "spring", 
    stiffness: 400, 
    damping: 10 
  },
};

// The "Letter" entrance animation (unfolding feel)
export const letterReveal: Variants = {
  hidden: { 
    opacity: 0, 
    scale: 0.9, 
    rotateX: -15 
  },
  visible: { 
    opacity: 1, 
    scale: 1, 
    rotateX: 0,
    transition: { 
      duration: 1.2, 
      ease: [0.16, 1, 0.3, 1] // Custom quintic ease-out
    }
  },
};

// For the "DS Analytics" bars/charts
export const chartGrow: Variants = {
  hidden: { scaleY: 0, originY: 1 },
  visible: { 
    scaleY: 1, 
    transition: { 
      duration: 1.5, 
      ease: "circOut" 
    } 
  },
};