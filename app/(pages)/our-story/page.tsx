import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Our Story | PROSONΛ',
  description: 'Developing the next generation of brand ecosystems and autonomous demand engines.',
  openGraph: {
    title: 'Our Story | PROSONΛ',
    description: 'Developing the next generation of brand ecosystems and autonomous demand engines.',
    images: ['/logo.svg'],
  },
};

export default function OurStory() {
  return (
    <>
      <section className="min-h-screen flex flex-col items-center justify-center bg-bg px-8 pt-32 pb-20 hero-grid relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center z-10">
          <span className="font-label-caps text-label-caps text-purple bg-purple/5 px-4 py-1.5 rounded-full inline-block mb-8 tracking-widest uppercase">
            WHY WE BUILT PROSONA
          </span>
          <h1 className="font-h1 text-[48px] md:text-[64px] leading-[1.05] text-primary mb-8 tracking-tight">
            Building the Operating System for Modern Growth.
          </h1>
          <p className="font-h3 text-h3 text-slate-600 mb-8 max-w-2xl mx-auto font-normal leading-relaxed">
            We started Prosona with a simple conviction: beautiful brands shouldn&apos;t exist in a vacuum. A true brand system must generate demand, capture reach, and drive predictable revenue.
          </p>
          <p className="text-slate-500 max-w-2xl mx-auto mb-12 font-body-lg leading-relaxed">
            By pairing surgical brand precision with automated AI engines, we help founders and category leaders build identity systems that grow themselves.
          </p>
          <Link href="/contact" className="bg-purple text-white px-10 py-4 rounded-lg font-medium text-lg shadow-lg hover:scale-105 transition-transform inline-block">
            Start Your Growth System
          </Link>
        </div>
      </section>
    </>
  );
}
