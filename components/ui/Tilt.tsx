"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface TiltProps {
  children: React.ReactNode;
  className?: string;
}

export default function Tilt({ children, className = "" }: TiltProps) {
  const ref = useRef<HTMLDivElement>(null);

  // Values range from -1 to 1 depending on mouse position relative to center
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth the raw mouse values with spring physics
  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const smoothX = useSpring(x, springConfig);
  const smoothY = useSpring(y, springConfig);

  // Transform smoothed values into rotation degrees (Max 8 deg)
  const rotateX = useTransform(smoothY, [-1, 1], [-8, 8]);
  const rotateY = useTransform(smoothX, [-1, 1], [8, -8]);

  // Transform smoothed values into a slight shadow shift
  const shadowX = useTransform(smoothX, [-1, 1], [10, -10]);
  const shadowY = useTransform(smoothY, [-1, 1], [10, -10]);
  
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isMobile || !ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    // Calculate values from -1 to 1 based on center of the element
    const xPct = (mouseX / width) * 2 - 1;
    const yPct = (mouseY / height) * 2 - 1;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
      style={{
        perspective: 1000,
        transformStyle: "preserve-3d",
      }}
    >
      <motion.div
        style={{
          rotateX: isMobile ? 0 : rotateX,
          rotateY: isMobile ? 0 : rotateY,
          boxShadow: isMobile
            ? "none"
            : useTransform(
                [shadowX, shadowY],
                ([sX, sY]) => `rgba(91, 44, 107, 0.08) ${sX}px ${sY}px 24px`
              ),
        }}
        whileHover={{ scale: isMobile ? 1 : 1.03 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="w-full h-full rounded-[inherit]"
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
