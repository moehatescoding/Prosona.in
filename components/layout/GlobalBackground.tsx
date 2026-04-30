import React from "react";

export default function GlobalBackground() {
  return (
    <>
      {/* Base Background Color Layer */}
      <div className="fixed inset-0 bg-[#FAF9F7] z-[-2] pointer-events-none" />

      {/* Subtle Radial Gradients */}
      <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden mix-blend-multiply">
        {/* Top Left - Hero Area */}
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[60%] rounded-full opacity-[0.06] blur-[120px] bg-purple" />
        
        {/* Mid Right - Content Sections */}
        <div className="absolute top-[40%] -right-[15%] w-[45%] h-[50%] rounded-full opacity-[0.05] blur-[100px] bg-purple" />
        
        {/* Bottom Left - Footer Area */}
        <div className="absolute -bottom-[20%] -left-[5%] w-[60%] h-[50%] rounded-full opacity-[0.07] blur-[140px] bg-purple" />
      </div>

      {/* Very Subtle Noise/Grain Texture */}
      {/* Using an SVG noise filter generator inline for zero external dependencies */}
      <svg
        className="fixed inset-0 w-full h-full pointer-events-none z-[9999] opacity-[0.25] mix-blend-overlay"
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id="noiseFilter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves="3"
            stitchTiles="stitch"
          />
          <feColorMatrix type="matrix" values="1 0 0 0 0, 0 1 0 0 0, 0 0 1 0 0, 0 0 0 0.1 0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noiseFilter)" />
      </svg>
    </>
  );
}
