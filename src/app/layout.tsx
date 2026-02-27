import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css"; 
import CustomCursor from "../components/ui/interactives/CustomCursor";
import BackgroundMusic from "../components/effects/AudioPlayer";

const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter" 
});

const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  variable: "--font-playfair",
  style: 'italic'
});

export const metadata: Metadata = {
  title: "A Little Something for You.. ✨",
  description: "A digital journey through our favorite memories.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased bg-[#0a0a0a] text-white selection:bg-pink-500/30`}
      >
        {/* 1. The Atmosphere Layer */}
        <div className="fixed inset-0 z-[-1] bg-[radial-gradient(circle_at_50%_50%,_rgba(120,0,120,0.15),transparent)] pointer-events-none" />
        
        {/* 2. Custom Cursor (Cinematic Touch) */}
        <CustomCursor />

        {/* 3. The Soundtrack (Hidden controller) */}
        <BackgroundMusic src="/audio/birthday-track.mp3" />

        <main className="relative min-h-screen">
          {children}
        </main>

        {/* 4. Global Grainy Overlay (Film Aesthetic) */}
        <div className="fixed inset-0 pointer-events-none z-[9999] opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-100 contrast-150" />
      </body>
    </html>
  );
}