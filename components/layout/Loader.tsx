"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Loader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // We want the loader to disappear when the page is ready,
    // but also respect the minimum animation time.
    // The animation takes: 7 letters * 0.08s + 0.6s (duration) + 0.2s (subtitle delay) + 0.5s (hold) + 0.6s (exit) ≈ 2.5 seconds total minimum.
    // Let's use a timeout to let the entrance and hold play out, then fade out.
    // Actually, framer motion's exit animations happen when AnimatePresence removes the element.
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1400);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
          className="fixed inset-0 z-[9999] bg-[#FAF9F7] flex flex-col items-center justify-center pointer-events-none"
        >
          <div className="flex flex-col items-center justify-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: [0.2, 0.65, 0.3, 0.9],
              }}
              className="flex justify-center pb-2 mb-2"
            >
              <Image 
                src="/logo.svg" 
                alt="Prosona Logo" 
                width={244} 
                height={100} 
                priority 
                className="h-[100px] w-auto object-contain"
              />
            </motion.div>
            
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
