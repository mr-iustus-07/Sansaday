import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    // Allows Next.js to optimize images from these domains
    // (Useful if you're hosting photos on Cloudinary, S3, or Instagram)
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Permissive for dev; tighten this for production!
      },
    ],
    // High-end devices (Retina displays) need these breakpoints
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/avif', 'image/webp'], // AVIF is 20% smaller than WebP
  },
  // Since we're using a lot of Framer Motion and complex UI, 
  // we want to ensure strict mode is on for debugging
  reactStrictMode: true,
  
  // Experimental features for the App Router "Main Stage"
  experimental: {
    // Optimizes package imports for faster dev/build times
    optimizePackageImports: ['framer-motion', 'lucide-react'],
  },
};

export default nextConfig;