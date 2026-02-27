"use client";

import { ReactNode } from "react";

export default function FullPageScroll({ children }: { children: ReactNode }) {
  return (
    <div className="h-screen w-full overflow-y-auto overflow-x-hidden snap-y snap-mandatory scroll-smooth">
      {/* Note: This requires each child section to have 
          the Tailwind class "snap-start h-screen" 
      */}
      {children}
    </div>
  );
}