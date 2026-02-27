"use client";

import { motion } from "framer-motion";
import { stats, friendshipGrowth } from "../../data/friendship-data";
import { GlassCard } from "../ui/layout/GlassCard";

export default function Analytics() {
  const parsedGrowth = friendshipGrowth.map((d) => ({
  ...d,
  bondStrength:
    typeof d.bondStrength === "number"
      ? d.bondStrength
      : parseInt(d.bondStrength as string, 10),
}));

const maxBond = Math.max(...parsedGrowth.map((d) => d.bondStrength));
  return (
    <section className="py-24 px-6 max-w-6xl mx-auto">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-serif italic text-pink-400 mb-4">Friendship Metrics</h2>
        <p className="text-white/50 font-inter">Quantifying the unquantifiable.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Metric Cards */}
        {[
          { label: "Days Connected", value: stats.daysTogether as number | string },
          { label: "Phone Calls", value: stats.lateNightCalls as number | string },
          { label: "Laughter Score", value: "∞" as number | string }
        ].map((stat, i) => (
          <GlassCard key={i} className="text-center py-10">
            <p className="text-sm uppercase tracking-widest text-white/40 mb-2">{stat.label}</p>
            <motion.span 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              className="text-5xl font-serif text-pink-500"
            >
              {stat.value}
            </motion.span>
          </GlassCard>
        ))}

        {/* The DS Flex: Friendship Growth Graph */}
        <GlassCard className="md:col-span-3 h-80 relative flex items-end justify-between px-10 pb-10 overflow-hidden">
          <div className="absolute top-8 left-8">
            <h3 className="text-lg font-serif italic text-white/80">Bond Strength Over Time</h3>
          </div>
          
          {parsedGrowth.map((data, i) => (
            <div key={i} className="flex flex-col items-center gap-4 flex-1">
              <motion.div 
                initial={{ height: 0 }}
                whileInView={{height: `${(data.bondStrength / maxBond) * 100}%`,}}
                transition={{ duration: 1, delay: i * 0.1, ease: "easeOut" }}
                className="w-12 md:w-20 bg-gradient-to-t from-pink-600 to-pink-400 rounded-t-lg relative group"
              >
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-xs font-inter text-pink-300">
                  {data.bondStrength}%
                </div>
              </motion.div>
              <span className="text-xs font-inter text-white/40 uppercase tracking-tighter">{data.year}</span>
            </div>
          ))}
        </GlassCard>
      </div>
    </section>
  );
}