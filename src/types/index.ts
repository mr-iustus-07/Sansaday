/**
 * Core Data Types for the Birthday Experience
 * Designed for a mix of Sentiment Data and Multimedia Memories
 */

export type MemoryType = 'photo' | 'video' | 'milestone';

export interface Memory {
  id: string;
  date: string; // e.g., "2023-08-15"
  title: string;
  description: string;
  mediaUrl: string;
  type: MemoryType;
  
  // The "DS" Flex: Metadata for your Analytics charts
  sentimentScore: number; // 0 to 1 (how "happy" or "intense" the memory is)
  location?: {
    lat: number;
    lng: number;
    name: string;
  };
  tags: string[]; // e.g., ["travel", "food", "inside-joke"]
}

export interface FriendshipStats {
  daysTogether: number;
  estimatedLaughs: number;
  coffeesConsumed: number;
  lateNightCalls: number;
  growthRate: number; // Percentage for the Analytics chart
}

export interface SectionProps {
  id: string;
  title?: string;
  isCinematic?: boolean;
}

// Framer Motion Variant Types for reuse in components
export interface MotionProps {
  initial?: object;
  animate?: object;
  transition?: object;
  whileInView?: object;
}

/**
 * Audio Interface for the AudioPlayer component
 */
export interface Track {
  url: string;
  title: string;
  artist?: string;
}