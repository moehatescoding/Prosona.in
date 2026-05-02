"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ElectricBadge from "@/components/ui/ElectricBadge";
import BackgroundBeams from "./BackgroundBeams";

// ─── Mobile Hero ───────────────────────────────────────────────────────────────
function HeroMobile() {
  return (
    <section className="min-h-screen bg-bg hero-grid flex flex-col justify-center px-6 pt-28 pb-16 relative overflow-hidden">
      <div className="max-w-xl mx-auto w-full flex flex-col gap-8 z-10">
        <ElectricBadge>FOR F&amp;B AND FMCG BRANDS</ElectricBadge>

        <h1 className="font-h1 text-[40px] leading-[1.08] text-primary tracking-tight">
          Your brand shouldn&apos;t need you to run it.
        </h1>

        <p className="text-slate-500 text-[16px] leading-[1.7] max-w-md">
          We build AI-powered brand systems for food and consumer brands — so your identity, content, and presence run consistently without constant effort.
        </p>

        <div className="flex flex-col gap-3 pt-2">
          <Link
            href="/contact"
            className="bg-purple text-white px-7 py-4 rounded-lg font-semibold text-center shadow-[0_4px_14px_0_rgba(91,44,107,0.35)] active:scale-[0.98] transition-all duration-200"
          >
            Build My Brand System →
          </Link>
          <Link
            href="/work"
            className="border border-border px-7 py-4 rounded-lg font-medium text-primary text-center hover:bg-[rgba(91,44,107,0.04)] transition-all duration-200"
          >
            View Our Work →
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─── Desktop Hero ──────────────────────────────────────────────────────────────
function HeroDesktop() {
  return (
    <section className="min-h-screen bg-bg hero-grid flex flex-col justify-center px-8 pt-32 pb-24 relative overflow-hidden">
      <BackgroundBeams />
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center z-10">

        {/* Left — Copy */}
        <div className="space-y-8">
          <ElectricBadge>FOR F&amp;B AND FMCG BRANDS</ElectricBadge>

          <h1 className="font-h1 text-[52px] lg:text-[64px] leading-[1.06] text-primary tracking-tight">
            Your brand shouldn&apos;t need you{" "}
            <span className="text-purple">to run it.</span>
          </h1>

          <p className="text-slate-500 text-[17px] leading-[1.75] max-w-lg">
            We build AI-powered brand systems for food and consumer brands — so your identity, content, and presence run consistently without constant effort.
          </p>

          <div className="flex items-center gap-4 pt-2">
            <Link
              href="/contact"
              className="bg-purple text-white px-8 py-4 rounded-lg font-semibold shadow-[0_4px_24px_0_rgba(91,44,107,0.35)] hover:shadow-[0_6px_30px_rgba(91,44,107,0.28)] hover:-translate-y-0.5 active:translate-y-[1px] transition-all duration-200"
            >
              Build My Brand System →
            </Link>
            <Link
              href="/work"
              className="text-primary font-medium hover:text-purple transition-colors duration-200 flex items-center gap-1.5"
            >
              View Our Work
              <span className="material-symbols-outlined text-base">arrow_forward</span>
            </Link>
          </div>
        </div>

        {/* Right — Proof visual */}
        <div className="relative flex items-center justify-center">
          <div className="relative w-full max-w-md">
            {/* Main image */}
            <div className="rounded-2xl overflow-hidden border border-border shadow-xl bg-white p-2 transform rotate-1">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZMOsmZM3il2kWaxXlw2Ffpghmm39fkM-W8ijgsABwK23TJN_v4YfHd-uytqyXxq71cPxpW4reegm6nodrcB-X_lPSLGBd2yP5wwdatLwCgYOUrzHBPPTjCvmJv3OFvgJ8b5S0B3URQLyPNCKdC-kRuckUupnTTgwN7tbDiuLmZvvUlRevx9BNp7_uZHLby2NaQcjkvNo0vUMYrI5JF7wqtzXPe9pLucOt5RhR36oYyNght2_OkYhvr1E-LJe5MzkszVx4h6RhCPs"
                alt="Brand system in action"
                width={500}
                height={380}
                className="w-full h-[320px] object-cover rounded-xl"
                priority
              />
            </div>
            {/* Floating tag */}
            <div className="absolute -bottom-4 -left-4 bg-white border border-border rounded-xl px-4 py-3 shadow-lg">
              <div className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold mb-0.5">System Active</div>
              <div className="text-sm font-bold text-primary">Brand running on autopilot</div>
            </div>
            {/* Floating tag 2 */}
            <div className="absolute -top-4 -right-4 bg-purple text-white rounded-xl px-4 py-3 shadow-lg">
              <div className="text-[10px] uppercase tracking-widest mb-0.5 opacity-70">Industry</div>
              <div className="text-sm font-bold">F&amp;B · FMCG</div>
            </div>
          </div>
        </div>

      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
        <span className="text-[10px] tracking-widest uppercase font-label-caps">Scroll</span>
        <span className="material-symbols-outlined animate-bounce">expand_more</span>
      </div>
    </section>
  );
}

// ─── Root ──────────────────────────────────────────────────────────────────────
export default function Hero() {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  if (isMobile === null) return null;
  return isMobile ? <HeroMobile /> : <HeroDesktop />;
}
