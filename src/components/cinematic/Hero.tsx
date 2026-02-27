"use client";

import { motion } from "framer-motion";
import Typewriter from "../ui/typography/Typewriter";
import { ShinyText } from "../ui/typography/ShinyText";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Decorative Element */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0 bg-[url('/photos/hero-bg.jpg')] bg-cover bg-center grayscale blur-sm"
      />
      
      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <span className="uppercase tracking-[0.3em] text-sm text-pink-500 font-inter mb-4 block">
            A digital journey for
          </span>
        </motion.div>

        <h1 className="text-6xl md:text-8xl font-serif italic mb-6">
          <ShinyText text="To the Best Person I Ever Meet" />
        </h1>

        <div className="max-w-2xl mx-auto h-12">
          <Typewriter 
            text="Today isn't just a date on the calendar. It's a celebration of you." 
            delay={1.5}
          />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 4 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <p className="text-white/30 text-xs tracking-widest uppercase animate-bounce">
            Scroll to begin
          </p>
        </motion.div>
      </div>
    </section>
  );
}