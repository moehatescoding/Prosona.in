"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 200, mass: 0.8 };
  const smoothX = useSpring(x, springConfig);
  const smoothY = useSpring(y, springConfig);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (isMobile || !ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Normalized values between -1 and 1
    const xPct = (e.clientX - rect.left) / width * 2 - 1;
    const yPct = (e.clientY - rect.top) / height * 2 - 1;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  // Depth multipliers: higher = foreground, lower = background
  const transformBgX = useTransform(smoothX, [-1, 1], [-5, 5]);
  const transformBgY = useTransform(smoothY, [-1, 1], [-5, 5]);

  const transformMidX = useTransform(smoothX, [-1, 1], [-15, 15]);
  const transformMidY = useTransform(smoothY, [-1, 1], [-15, 15]);

  const transformFgX = useTransform(smoothX, [-1, 1], [-30, 30]);
  const transformFgY = useTransform(smoothY, [-1, 1], [-30, 30]);

  return (
    <section 
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="min-h-screen bg-bg flex flex-col justify-center px-8 py-20 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center z-10">
        <div className="space-y-8">
          <div className="inline-block">
            <span className="font-label-caps text-label-caps text-purple bg-[rgba(91,44,107,0.05)] px-3 py-1 rounded-full uppercase tracking-widest">
              AI-POWERED BRAND SYSTEMS
            </span>
          </div>
          <h1 className="font-h1 text-[42px] md:text-[56px] lg:text-[68px] leading-[1.05] text-primary tracking-tight">
            <div>Build a Brand</div>
            <div>Worth Remembering.</div>
          </h1>
          <p className="font-h3 text-h3 text-slate-600 max-w-lg"><br /></p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Link 
              href="/contact"
              className="bg-purple text-white px-8 py-4 rounded-lg font-medium shadow-[0_4px_14px_0_rgba(91,44,107,0.39)] hover:shadow-[0_6px_20px_rgba(91,44,107,0.23)] hover:-translate-y-0.5 active:shadow-[0_2px_4px_rgba(91,44,107,0.4)] active:translate-y-[1px] transition-all duration-200"
            >
              Start Your System →
            </Link>
            <Link 
              href="/contact"
              className="border border-border px-8 py-4 rounded-lg font-medium text-primary hover:bg-[rgba(91,44,107,0.04)] shadow-sm hover:shadow-md hover:-translate-y-0.5 active:shadow-sm active:translate-y-[1px] transition-all duration-200"
            >
              See Our Work
            </Link>
          </div>
        </div>
        <div className="relative" style={{ perspective: 1200 }}>
          <div className="bento-grid relative">
            <motion.div 
              style={{ x: isMobile ? 0 : transformBgX, y: isMobile ? 0 : transformBgY }}
              className="col-span-1 row-span-2 rounded-2xl overflow-hidden bg-white p-2 border border-border shadow-sm transform -rotate-2 hover:rotate-0 transition-transform duration-500"
            >
              <img className="w-full h-full object-cover rounded-xl grayscale hover:grayscale-0 transition-all duration-700" alt="Brand Identity" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZMOsmZM3il2kWaxXlw2Ffpghmm39fkM-W8ijgsABwK23TJN_v4YfHd-uytqyXxq71cPxpW4reegm6nodrcB-X_lPSLGBd2yP5wwdatLwCgYOUrzHBPPTjCvmJv3OFvgJ8b5S0B3URQLyPNCKdC-kRuckUupnTTgwN7tbDiuLmZvvUlRevx9BNp7_uZHLby2NaQcjkvNo0vUMYrI5JF7wqtzXPe9pLucOt5RhR36oYyNght2_OkYhvr1E-LJe5MzkszVx4h6RhCPs" />
              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur px-3 py-1.5 rounded-lg border border-border text-[10px] font-bold tracking-widest uppercase">Brand Identity</div>
            </motion.div>
            
            <motion.div 
              style={{ x: isMobile ? 0 : transformMidX, y: isMobile ? 0 : transformMidY }}
              className="col-span-1 rounded-2xl overflow-hidden bg-white p-2 border border-border shadow-sm translate-y-8 transform rotate-3 hover:rotate-0 transition-transform duration-500 z-10"
            >
              <img className="w-full h-full object-cover rounded-xl grayscale hover:grayscale-0 transition-all duration-700" alt="Analytics" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6JFVLIbEVEg8u9WMlMORrRT5JZ994HlNrIsE0_gGMXIoezhpZvPWGl5JZiyVZH962AJd0xZRghqzre9eMUtR4ZGh6OtE_4JMLhY4Kpdak7kwZw_rN_b96PHWrmDkexwcFnLJQfn7ho0T_j0ydKEi8Gz0W02EOQHclYDmhIJGOBR-M0dD-BzW7I--D5udkUGQ5AVXU1SYQayuP7cPMoZivYyNT7I3b0laRYnILeimpTB17odlPkqmdws9TdQpNaWfDQm6d5BKc-XU" />
              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur px-3 py-1.5 rounded-lg border border-border text-[10px] font-bold tracking-widest uppercase">Analytics</div>
            </motion.div>
            
            <motion.div 
              style={{ x: isMobile ? 0 : transformFgX, y: isMobile ? 0 : transformFgY }}
              className="col-span-1 rounded-2xl overflow-hidden bg-white p-2 border border-border shadow-sm -translate-y-4 transform -rotate-1 hover:rotate-0 transition-transform duration-500 z-20 relative"
            >
              <img className="w-full h-full object-cover rounded-xl grayscale hover:grayscale-0 transition-all duration-700" alt="Restaurant Menu" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAio1yTRfo4rvaUlxu049Wdvz9fp7UMbyUSFiWZGCHZdrYuXagcyhb-JeYYXVlp5oQ_K8ZZzmnfEucc-B3y2KdA3JHHyB9aWNEag1qUaFup5uGxM4E7uGuR0YDFU6HSZvetRUVxTm6QBwLTSBzGNtGm6xVaMhCc8Ycy3lePCPSTBBAf8zHZnIEfrMVkxFlQhusDTRU4SbcoOOO80uXRn7xZn_XPpVkRKApxsj2Om9PEghGh-QE4uQS96yKOQd23Y9p7B7-zlyQgcDU" />
              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur px-3 py-1.5 rounded-lg border border-border text-[10px] font-bold tracking-widest uppercase">Restaurant Menu</div>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="text-[10px] tracking-widest uppercase font-label-caps">Scroll</span>
        <span className="material-symbols-outlined animate-bounce">expand_more</span>
      </div>
    </section>
  );
}
