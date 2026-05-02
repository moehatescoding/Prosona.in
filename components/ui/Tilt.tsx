"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface TiltProps {
  children: React.ReactNode;
  className?: string;
}

export default function Tilt({ children, className = "" }: TiltProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // On mobile: render a plain div — no hooks active in render, no framer overhead
  if (isMobile) {
    return <div className={className}>{children}</div>;
  }

  return <TiltDesktop className={className}>{children}</TiltDesktop>;
}

function TiltDesktop({ children, className = "" }: TiltProps) {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const smoothX = useSpring(x, springConfig);
  const smoothY = useSpring(y, springConfig);

  const rotateX = useTransform(smoothY, [-1, 1], [-8, 8]);
  const rotateY = useTransform(smoothX, [-1, 1], [8, -8]);

  const shadowX = useTransform(smoothX, [-1, 1], [10, -10]);
  const shadowY = useTransform(smoothY, [-1, 1], [10, -10]);
  const shadowValue = useTransform(
    [shadowX, shadowY],
    ([sX, sY]) => `rgba(91, 44, 107, 0.08) ${sX}px ${sY}px 24px`
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const xPct = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const yPct = ((e.clientY - rect.top) / rect.height) * 2 - 1;
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
      style={{ perspective: 1000, transformStyle: "preserve-3d" }}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          boxShadow: shadowValue,
        }}
        whileHover={{ scale: 1.03 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="w-full h-full rounded-[inherit]"
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
