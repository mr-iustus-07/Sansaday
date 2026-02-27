"use client";

import { useState, useEffect, useRef, useCallback } from "react";

export const useAudio = (url: string = "/audio/sandy-birthday01.mp3") => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Initialize audio object only on client side
    audioRef.current = new Audio(url);
    audioRef.current.loop = true;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [url]);

  const togglePlay = useCallback(() => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      // Browsers require a user interaction to play audio
      audioRef.current.play().catch((err) => {
        console.warn("Audio play blocked by browser:", err);
      });
    }
    setIsPlaying(!isPlaying);
  }, [isPlaying]);

  return { isPlaying, togglePlay };
};