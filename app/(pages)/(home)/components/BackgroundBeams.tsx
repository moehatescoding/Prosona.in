"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function BackgroundBeams() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Skip entirely on mobile — saves all SVG + framer-motion rendering cost
  if (isMobile) return null;

  const beams = [
    { x1: "20%", y1: "100%", x2: "80%", y2: "-10%", d: 25, delay: 0 },
    { x1: "40%", y1: "110%", x2: "110%", y2: "10%", d: 30, delay: 2 },
    { x1: "0%", y1: "90%", x2: "60%", y2: "-20%", d: 28, delay: 5 },
    { x1: "50%", y1: "100%", x2: "-10%", y2: "20%", d: 35, delay: 1 },
    { x1: "10%", y1: "105%", x2: "90%", y2: "0%", d: 22, delay: 8 },
    { x1: "30%", y1: "100%", x2: "100%", y2: "-30%", d: 40, delay: 3 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <svg
        className="absolute w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <radialGradient id="beamGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#534AB7" stopOpacity="1" />
            <stop offset="100%" stopColor="#534AB7" stopOpacity="0" />
          </radialGradient>
          <filter id="beamBlur" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="100" />
          </filter>
        </defs>
        
        {beams.map((b, i) => (
          <motion.line
            key={i}
            x1={b.x1}
            y1={b.y1}
            x2={b.x2}
            y2={b.y2}
            stroke="url(#beamGradient)"
            strokeWidth="240"
            strokeLinecap="round"
            filter="url(#beamBlur)"
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0.04, 0.08, 0.04],
              x1: [b.x1, (parseFloat(b.x1) + 8) + "%", b.x1],
              y2: [b.y2, (parseFloat(b.y2) + 8) + "%", b.y2],
            }}
            transition={{
              duration: b.d,
              repeat: Infinity,
              delay: b.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </svg>
    </div>
  );
}
