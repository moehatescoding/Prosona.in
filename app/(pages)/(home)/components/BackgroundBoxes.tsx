"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function BackgroundBoxes() {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // 60% outline, 40% filled
  // Opacities very subtle, z-index -1 so it stays behind content.
  // We place these absolute inside a relative container.
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      
      {/* Box 1: Hero area, floating, Outline */}
      <motion.div 
        className="absolute top-[10%] left-[5%] w-64 h-64 rounded-xl border border-purple opacity-[0.08]"
        animate={isMobile ? {} : { y: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Box 2: Hero area right, Filled, Static */}
      <div className="absolute top-[15%] -right-[5%] w-80 h-40 rounded-xl bg-purple opacity-[0.03] blur-[2px]" />

      {/* Box 3: Mid section left, Outline, Static */}
      <div className="absolute top-[35%] -left-[10%] w-72 h-72 rounded-xl border border-purple opacity-[0.08]" />

      {/* Box 4: Mid section right, Filled, floating */}
      <motion.div 
        className="absolute top-[45%] right-[10%] w-48 h-48 rounded-xl bg-purple opacity-[0.04]"
        animate={isMobile ? {} : { y: [0, 40, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      {/* Box 5: Lower mid left, Outline, Static */}
      <div className="absolute top-[65%] left-[15%] w-56 h-32 rounded-lg border border-purple opacity-[0.06] blur-[1px]" />

      {/* Box 6: Lower section right, Outline, floating */}
      <motion.div 
        className="absolute top-[75%] -right-[5%] w-96 h-64 rounded-xl border border-purple opacity-[0.08]"
        animate={isMobile ? {} : { x: [0, -20, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      {/* Box 7: Footer area center-left, Filled, Static */}
      <div className="absolute bottom-[5%] left-[20%] w-40 h-40 rounded-xl bg-purple opacity-[0.03]" />

      {/* Box 8: Very top off-screen, Outline */}
      <div className="absolute -top-[5%] right-[30%] w-48 h-48 rounded-xl border border-purple opacity-[0.08]" />

    </div>
  );
}
