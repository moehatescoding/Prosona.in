import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'FMCG Brand Growth | PROSONΛ',
  description: 'We build, list, and scale FMCG brands across India's fastest-growing quick commerce platforms with precision and velocity.',
  openGraph: {
    title: 'FMCG Brand Growth | PROSONΛ',
    description: 'We build, list, and scale FMCG brands across India's fastest-growing quick commerce platforms with precision and velocity.',
    images: ['/logo.svg'],
  },
};

const platforms = [
  'Blinkit', 'Zepto', 'Swiggy Instamart', 'BigBasket Now',
  'JioMart', 'Flipkart Minutes', 'Amazon Fresh', 'Dunzo',
  'Nykaa', '1mg', 'Meesho', 'ONDC',
];

const services = [
  {
    icon: 'inventory_2',
    title: 'Platform Listing & Onboarding',
    desc: 'Get your SKUs listed, catalogued, and live across all major platforms fast. We handle inventory sync, metadata, and compliance so you go live in days, not months.',
  },
  {
    icon: 'trending_up',
    title: 'Quick Commerce Growth',
    desc: 'Ranking, visibility, and ad strategy built specifically for q-commerce algorithms. Optimised for high-intent shoppers and instant discovery on Blinkit, Zepto & more.',
  },
  {
    icon: 'verified',
    title: 'Brand Compliance & Packaging',
    desc: 'FSSAI-ready labels, platform-compliant packaging, and audit support. Ensure your brand meets every regulatory hurdle with ease and speed.',
  },
];

const stats = [
  { value: '17+', label: 'Active Platforms' },
  { value: '3×', label: 'Avg. Sales Lift' },
  { value: '30-Day', label: 'Go-Live Guarantee' },
];

export default function FMCG() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-[140px] pb-32 px-8 overflow-hidden bg-bg hero-grid">
        {/* Soft orb */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple/5 rounded-full blur-[120px] -translate-y-1/3 translate-x-1/4 pointer-events-none" />

        <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10">
          <div className="mb-8 px-4 py-1.5 bg-purple/5 border border-purple/10 rounded-full inline-flex">
            <span className="font-label-caps text-label-caps text-purple uppercase tracking-widest">
              FMCG &amp; Quick Commerce
            </span>
          </div>

          <h1 className="font-h1 text-[52px] md:text-[68px] leading-[1.05] text-primary max-w-4xl mb-6 tracking-tight">
            Get Your Brand on Every Cart That Matters.
          </h1>

          <p className="font-h3 text-h3 text-slate-500 max-w-2xl mb-12 font-normal">
            We build, list, and scale FMCG brands across India&apos;s fastest-growing
            quick commerce platforms with precision and velocity.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link
              href="/contact"
              className="bg-purple text-white px-10 py-4 rounded-lg font-medium text-lg shadow-[0_4px_14px_0_rgba(91,44,107,0.35)] hover:shadow-[0_6px_20px_rgba(91,44,107,0.25)] hover:-translate-y-0.5 transition-all duration-200"
            >
              Enquire Now
            </Link>
            <Link
              href="#how-it-works"
              className="border border-border px-10 py-4 rounded-lg font-medium text-primary hover:bg-purple/5 transition-all duration-200"
            >
              See How It Works
            </Link>
          </div>
        </div>

        {/* Abstract product image */}
        <div className="absolute top-0 right-0 -z-10 opacity-10 pointer-events-none">
          <img
            className="w-[600px] h-auto object-contain"
            alt="FMCG abstract visual"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWVMmAWj0fOA_2F9Kwza5uUexgc7R-V4Riy_sZxt7OgmZ4p-zuEKXKgskQv4oEWmc34ywE6faNJYw2LB974Q1F9cem9l7oDTeRtRqVR0cNOAyvNdjqAamRRn-hCa1LnhFQjck--GdcvLOhlUJN1nJyBlX14CRW3XlTNBoGtdsPXJ9ia1VxstgSvQiArMMfyAeN5LaxUaD1ZQiBjsmWbf6f9yowfFhWY87STY7RDx_20CEy0lGk-zxAArnz3FWacGCW5IC4L3lY0eI"
          />
        </div>
      </section>

      {/* Platform Marquee */}
      <section className="py-12 bg-white border-y border-border overflow-hidden">
        <div className="flex flex-col items-center gap-8">
          <span className="font-label-caps text-label-caps text-slate-400 uppercase tracking-[3px]">
            Platforms we work with
          </span>
          <div className="relative w-full flex overflow-hidden">
            <div className="animate-scroll flex gap-12 items-center whitespace-nowrap px-12" style={{ width: 'fit-content' }}>
              {[...platforms, ...platforms].map((p, i) => (
                <span key={i} className="text-[#C4BAC8] font-h3 tracking-tight font-medium text-xl">
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Cards */}
      <section id="how-it-works" className="py-24 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="font-h2 text-[32px] md:text-[44px] text-primary tracking-tight">
              What we do for FMCG brands
            </h2>
            <p className="text-slate-500 mt-4 max-w-xl mx-auto font-h3 font-normal">
              End-to-end q-commerce infrastructure — from first listing to full-scale growth.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((s) => (
              <div
                key={s.title}
                className="bg-white border border-border rounded-2xl p-8 flex flex-col h-full hover:shadow-lg transition-all duration-300 group"
              >
                <div className="mb-8 h-12 w-12 rounded-xl bg-purple/5 flex items-center justify-center group-hover:bg-purple group-hover:text-white transition-colors text-purple">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                    {s.icon}
                  </span>
                </div>
                <h3 className="font-h3 text-h3 text-primary mb-4">{s.title}</h3>
                <p className="text-slate-500 mb-8 flex-grow leading-relaxed">{s.desc}</p>
                <Link
                  href="/contact"
                  className="w-full border border-purple text-purple py-3 rounded-lg font-medium text-center hover:bg-purple hover:text-white transition-all duration-200 block"
                >
                  Enquire
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stat Strip */}
      <section className="py-20 bg-purple/5">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col gap-2">
                <span className="font-h1 text-[56px] font-bold text-purple leading-none tracking-tighter">
                  {s.value}
                </span>
                <span className="font-label-caps text-label-caps text-slate-500 uppercase tracking-widest">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-32 px-8 text-center relative overflow-hidden bg-white">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple/20 bg-purple/5 text-purple mb-8 font-label-caps text-[10px] tracking-[2px]">
            <span className="w-1.5 h-1.5 rounded-full bg-purple animate-pulse" />
            FULL-STACK Q-COMMERCE STUDIO
          </div>
          <h2 className="font-h2 text-[36px] md:text-[48px] text-primary mb-6 tracking-tight">
            Ready to move fast?
          </h2>
          <p className="font-h3 text-h3 text-slate-500 mb-12 max-w-2xl mx-auto font-normal leading-relaxed">
            From first listing to full-scale growth — we handle the entire q-commerce
            journey so you can focus on building products people love.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-purple text-white px-12 py-5 rounded-lg font-medium text-lg shadow-[0_4px_14px_0_rgba(91,44,107,0.35)] hover:shadow-[0_6px_20px_rgba(91,44,107,0.25)] hover:-translate-y-0.5 transition-all duration-200"
          >
            Start Your FMCG Journey →
          </Link>
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-purple/5 blur-[120px] rounded-full -mb-48 pointer-events-none" />
      </section>
    </>
  );
}
