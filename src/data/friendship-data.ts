import { Memory, FriendshipStats } from "../types/index";

/**
 * THE DATASET: Your Friendship History
 * Feel free to fill this with as many memories as you can!
 */
export const memories: Memory[] = [
  {
    id: "1",
    date: "2023-09-13",
    title: "The Genesis",
    description: "The day we first met . Who knew this would happen?",
    mediaUrl: "/photos/sandy01.jpeg",
    type: "photo",
    sentimentScore: 0.7, // Lower because we were still 'testing' each other lol
    tags: ["beginnings", "college"]
  },
  {
    id: "2",
    date: "2023-09-24",
    title: "The day we first talk",
    description: "I think this was a Wrong date 😂.",
    mediaUrl: "/photos/sandy02.jpeg",
    type: "photo",
    sentimentScore: 0.95,
    tags: ["daily-talks", "sharing-secrets"]
  },
  {
    id: "3",
    date: "2024-05-31",
    title: "The NYE Breakdown",
    description: "Crying and laughing at the same time. Validating each other's existence since '24.",
    mediaUrl: "/photos/sandy03.jpeg",
    type: "photo",
    sentimentScore: 0.88,
    tags: ["emotional", "milestone"]
  },
  {
    id: "4",
    date: "2025-10-13",
    title: "We Dance Together",
    description: "That one time we danced together on stage. A moment of pure joy and connection.",

    mediaUrl: "/photos/sandy04.jpeg",
    type: "photo",
    sentimentScore: 0.92,
    tags: ["dance", "fun", "stage"]
  },
  {
    id: "5",
    date: "till .....",
    title: "Promise of Forever",
    description: "A promise to be there for each other through all of life's moments Even its hard times.",

    mediaUrl: "/photos/sandy05.jpeg",
    type: "photo",
    sentimentScore: 0.92,
    tags: ["dance", "fun", "stage"]
  }
];

/**
 * THE ANALYTICS: Quantitative Friendship Metrics
 * Use these for your charts and counters.
 */
export const stats: FriendshipStats = {
  daysTogether: 842, // You can calculate this dynamically if you want
  estimatedLaughs: 14500,
  coffeesConsumed: 312,
  lateNightCalls: 612,
  growthRate: 100 // Always scaling!
};

/**
 * THE CHART DATA: For your "DS Flex" Analytics.tsx
 * Perfect for Recharts or a custom SVG path.
 */
export const friendshipGrowth = [
  { year: 2023, bondStrength: 25, label: "Friends", laughs: 100 },
  { year: 2024, bondStrength: 50, label: "Buddies", laughs: 500 },
  { year: 2025, bondStrength: 75, label: "Besties", laughs: 1200 },
  { year: 2026, bondStrength: 100, label: "Soulmates", laughs: 3000 },
];

/**
 * THE QUOTES: For the "Letter" or small callouts
 */
export const friendshipQuotes = [
  "You're the family I got to choose.",
  "Life is shorter, but our inside jokes are forever.",
  "Thanks for being my unpaid therapist."
];