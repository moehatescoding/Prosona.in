import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Demand Systems | PROSONΛ',
  description: 'Automated acquisition engines built to convert high-intent traffic into predictable, qualified revenue.',
  openGraph: {
    title: 'Demand Systems | PROSONΛ',
    description: 'Automated acquisition engines built to convert high-intent traffic into predictable, qualified revenue.',
    images: ['/logo.svg'],
  },
};

const pillars = [
  {
    num: '01',
    title: 'High-Intent Acquisition',
    desc: 'Capture buyers actively seeking solutions in your category. We map demand channels and engineer friction-free paths from first impression to transaction.',
  },
  {
    num: '02',
    title: 'Conversion Architecture',
    desc: 'Transform passive attention into active pipeline. High-velocity landing pages, automated lead qualification, and dynamic offer positioning.',
  },
  {
    num: '03',
    title: 'Revenue Loops',
    desc: 'Turn single conversions into recurring momentum. Automated nurturing, win-back flows, and referral mechanics that lower customer acquisition costs.',
  },
];

const metrics = [
  { val: '2.4×', label: 'Avg. Pipeline Acceleration' },
  { val: '38%', label: 'Lower Acquisition Friction' },
  { val: '24/7', label: 'Automated Revenue Funnel' },
];

export default function DemandSystems() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="bg-bg pt-[140px] pb-24 px-8 hero-grid flex flex-col items-center text-center relative overflow-hidden">
        <div className="max-w-5xl mx-auto z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple/20 bg-purple/5 text-purple mb-8 font-label-caps text-[10px] tracking-[2px]">
            <span className="w-1.5 h-1.5 rounded-full bg-purple animate-pulse" />
            REVENUE ACQUISITION ENGINE
          </div>

          <h1 className="font-h1 text-[48px] md:text-[68px] leading-[1.05] text-primary max-w-4xl mx-auto mb-8 tracking-tight">
            Turn High-Intent Traffic Into Predictable Demand.
          </h1>

          <p className="font-h3 text-h3 text-slate-500 max-w-2xl mx-auto mb-12 font-normal leading-relaxed">
            Stop relying on hope. We build proprietary demand engines that systematically attract, qualify, and convert your ideal customers on autopilot.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-purple text-white px-10 py-4 rounded-lg font-medium text-lg shadow-[0_4px_14px_0_rgba(91,44,107,0.35)] hover:shadow-[0_6px_20px_rgba(91,44,107,0.25)] hover:-translate-y-0.5 transition-all duration-200"
            >
              Build Your Demand System →
            </Link>
            <Link
              href="#pillars"
              className="border border-border px-10 py-4 rounded-lg font-medium text-primary hover:bg-purple/5 transition-all duration-200"
            >
              Explore Architecture
            </Link>
          </div>
        </div>
      </section>

      {/* METRICS STRIP */}
      <section className="py-16 bg-purple/5 border-y border-border">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {metrics.map((m) => (
              <div key={m.label} className="space-y-2">
                <div className="font-h1 text-[56px] font-bold text-purple leading-none tracking-tighter">{m.val}</div>
                <div className="font-label-caps text-label-caps text-slate-500 uppercase tracking-widest">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PILLARS SECTION */}
      <section id="pillars" className="py-24 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="font-label-caps text-label-caps text-purple tracking-[3px] mb-2 block uppercase font-bold">SYSTEM ARCHITECTURE</span>
            <h2 className="font-h2 text-[36px] md:text-[44px] text-primary tracking-tight">Three Pillars of Sustainable Demand</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((p) => (
              <div key={p.num} className="bg-bg p-8 rounded-2xl border border-border hover:border-purple/30 hover:shadow-md transition-all duration-300">
                <span className="text-purple font-h1 opacity-30 text-3xl block mb-4 font-bold">{p.num}</span>
                <h3 className="font-h3 text-h3 text-primary mb-3">{p.title}</h3>
                <p className="text-slate-500 leading-relaxed font-body-md">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CAPABILITIES LIST */}
      <section className="py-24 px-8 bg-bg">
        <div className="max-w-5xl mx-auto bg-white p-12 md:p-16 rounded-3xl border border-border shadow-sm">
          <h2 className="font-h2 text-[32px] md:text-[40px] text-primary mb-8 tracking-tight text-center">Engineered For Conversion</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4 p-4 rounded-xl bg-purple/5">
              <span className="material-symbols-outlined text-purple">check_circle</span>
              <div>
                <h4 className="font-semibold text-primary">Intent Channel Mapping</h4>
                <p className="text-slate-500 text-sm mt-1">Targeting audiences at the precise moment of purchase readiness.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 rounded-xl bg-purple/5">
              <span className="material-symbols-outlined text-purple">check_circle</span>
              <div>
                <h4 className="font-semibold text-primary">High-Velocity Landing Pages</h4>
                <p className="text-slate-500 text-sm mt-1">Blazing-fast visual experiences optimized for maximum conversion rates.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 rounded-xl bg-purple/5">
              <span className="material-symbols-outlined text-purple">check_circle</span>
              <div>
                <h4 className="font-semibold text-primary">Automated Lead Nurturing</h4>
                <p className="text-slate-500 text-sm mt-1">Multi-touch email and messaging workflows that convert prospects over time.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 rounded-xl bg-purple/5">
              <span className="material-symbols-outlined text-purple">check_circle</span>
              <div>
                <h4 className="font-semibold text-primary">Attribution &amp; Signal Tracking</h4>
                <p className="text-slate-500 text-sm mt-1">Full-funnel telemetry showing exact return on every growth initiative.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="py-24 px-8">
        <div className="max-w-5xl mx-auto bg-purple text-white rounded-3xl p-12 md:p-20 text-center relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="font-h1 text-[36px] md:text-[48px] mb-6 tracking-tight">Ready to build your demand engine?</h2>
            <p className="font-h3 text-white/80 max-w-xl mx-auto mb-10 font-normal leading-relaxed">
              Let&apos;s map out your custom acquisition architecture in a 30-minute strategy session.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-purple px-10 py-4 rounded-lg font-bold text-lg hover:scale-105 transition-transform"
            >
              Get Started Today
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
