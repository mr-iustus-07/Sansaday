"use client";

import { motion } from "framer-motion";
import { GlassCard} from "../ui/layout/GlassCard";
import HeartPath from "../ui/shapes/HeartPath";

export default function Letter() {
  return (
    <section className="min-h-screen py-20 px-6 flex flex-col items-center justify-center relative">
      <div className="absolute top-20 opacity-20">
        <HeartPath />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="w-full max-w-3xl"
      >
        <GlassCard className="relative overflow-hidden p-12 md:p-20">
          {/* Subtle Decorative Gradient */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-pink-500/10 rounded-full blur-3xl" />
          
          <article className="relative z-10 space-y-8 font-inter leading-relaxed text-white/90">
            <h2 className="text-3xl font-serif italic text-pink-400 mb-10">
              To my bestest buddy,
            </h2>
            
            <p className="text-lg">
              Some people come into our lives and quietly become a part of our everyday world. Not with noise. Not with drama. Just with presence.

You are one of those rare people.

There are so many things I could say today, but none of them feel big enough to fully describe what your friendship means to me. You’ve become a constant — someone I don’t have to pretend around, someone I don’t have to explain myself to.

With you, conversations feel easy.
Silence feels safe.
Laughter feels louder.
And even difficult days feel lighter.

You have this beautiful way of caring deeply without making it look heavy. You feel things honestly. You love sincerely. You react fully. And that’s something I truly admire about you.
              I didnt have a fancy store-bought gift to give you this year. But I realized that our friendship isn&apos;t something you can find on a shelf. 
              It&apos;s found in the many conversations, the shared silence that isn&apos;t awkward, and the way you know exactly what I&apos;m thinking without me saying a word. You&apos;ve seen me at my best and helped me through my worst.
            </p>

            <p className="text-lg font-serif italic text-pink-200">
              &ldquo;A best friend is like a four-leaf clover: hard to find and lucky to have you.&rdquo;
            </p>
            <p className="text-lg">
You are soft, but strong.
Emotional, but brave.
Sensitive, but incredibly resilient.

I’ve seen the way you carry yourself. The way you protect the people you care about. The way you try, even when you’re tired. And I hope you know how special that makes you.

On your birthday, I don’t just wish you happiness for today. I wish you peace in your heart. Confidence in your steps. Courage in your decisions. And a year filled with moments that make you smile without even realizing it.

I hope life gives you back the warmth you naturally give to others.
I hope you always find reasons to laugh loudly.
And I hope you never doubt how important you are.

Thank you for being you. Not perfect. Not flawless. Just real.

The world feels different with you in it. And I’m grateful that I get to call you my best friend. 
           </p>

            <div className="pt-10">
              <p className="text-sm uppercase tracking-widest text-white/40 mb-2">With all my heart,</p>
              <p className="text-2xl font-serif italic text-pink-500">Vijay</p>
            </div>
          </article>
        </GlassCard>
      </motion.div>

      {/* Final Celebration Trigger */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="mt-16 px-8 py-3 rounded-full border border-pink-500/30 text-pink-500 text-sm tracking-tighter hover:bg-pink-500/10 transition-colors"
      >
        Back to the top?
      </motion.button>
    </section>
  );
}