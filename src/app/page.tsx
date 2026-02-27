"use client";

import { useEffect, useState } from "react";
import Hero from "../components/cinematic/Hero";
import Timeline from "../components/cinematic/Timeline";
import Analytics from "../components/cinematic/Analytics";
import Letter from "../components/cinematic/Letter";
import Preloader from "../components/ui/feedback/Preloader";
import ScrollIndicator from "../components/ui/feedback/ScrollIndicator";
import ParticleCanvas from "../components/effects/ParticleCanvas";

export default function BirthdayPage() {
  const [loading, setLoading] = useState(true);

  // Simulate a loading sequence for the cinematic feel
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Preloader />;

  return (
    <div className="relative overflow-x-hidden">
      {/* Background Ambience */}
      <ParticleCanvas />
      
      {/* UI Overlays */}
      <ScrollIndicator />

      {/* Main Narrative Flow */}
      <section id="hero">
        <Hero />
      </section>

      <section id="timeline" className="py-20">
        <Timeline />
      </section>

      <section id="analytics" className="py-20">
        <Analytics />
      </section>

      <section id="letter" className="min-h-screen flex items-center justify-center">
        <Letter />
      </section>

      {/* Footer / Final Touch */}
      <footer className="py-10 text-center text-white/40 font-inter text-sm">
        Made with 💛 for the bestie.
      </footer>
    </div>
  );
}