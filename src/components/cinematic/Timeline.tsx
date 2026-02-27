"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { memories } from "../../data/friendship-data";
import { useRef } from "react";
import Image from "next/image";

interface Memory {
  id: string;
  mediaUrl: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
}

export default function Timeline() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section ref={containerRef} className="relative py-20">
      {/* Central Progress Line */}
      <motion.div 
        style={{ scaleY }}
        className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-pink-500 to-transparent origin-top hidden md:block"
      />

      <div className="max-w-6xl mx-auto px-6">
        {memories.map((memory: Memory, i: number) => (
          <div key={memory.id} className={`flex flex-col md:flex-row items-center justify-between mb-32 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
            
            {/* Image Side */}
            <motion.div 
              initial={{ opacity: 0, x: i % 2 === 0 ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-[45%] aspect-video relative rounded-2xl overflow-hidden shadow-2xl border border-white/10"
            >
              <Image 
                src={memory.mediaUrl} 
                alt={memory.title}
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </motion.div>

            {/* Content Side */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="w-full md:w-[45%] mt-8 md:mt-0 text-center md:text-left"
            >
              <span className="text-pink-500 font-inter text-sm tracking-widest">{memory.date}</span>
              <h3 className="text-3xl font-serif italic my-4">{memory.title}</h3>
              <p className="text-white/60 font-inter leading-relaxed">{memory.description}</p>
              
              <div className="flex flex-wrap gap-2 mt-6 justify-center md:justify-start">
                {memory.tags.map((tag: string) => (
                  <span key={tag} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase tracking-tighter text-white/40">
                    #{tag}
                  </span>
                ))}
              </div>
            </motion.div>

          </div>
        ))}
      </div>
    </section>
  );
}