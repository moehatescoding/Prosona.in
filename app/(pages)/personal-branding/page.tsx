import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Personal Branding & Executive Authority | PROSONΛ',
  description: 'Turn executive presence into a scalable lead pipeline, investor confidence, and industry authority.',
  openGraph: {
    title: 'Personal Branding & Executive Authority | PROSONΛ',
    description: 'Turn executive presence into a scalable lead pipeline, investor confidence, and industry authority.',
    images: ['/logo.svg'],
  },
};

const pillars = [
  {
    num: '01',
    title: 'Authority Positioning',
    desc: 'Define your unique point of view. We distill your experience into sharp, memorable content themes that command respect in your category.',
  },
  {
    num: '02',
    title: 'Automated Pipeline Engine',
    desc: 'Turn profile views into qualified inbound leads and high-value strategic connections through structured content publishing.',
  },
  {
    num: '03',
    title: 'Omnichannel Executive Reach',
    desc: 'Maintain active, authentic presence across LinkedIn, key podcasts, and industry publications without spending hours drafting content.',
  },
];

export default function PersonalBranding() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="bg-bg pt-[140px] pb-24 px-8 hero-grid flex flex-col items-center text-center relative overflow-hidden">
        <div className="max-w-5xl mx-auto z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple/20 bg-purple/5 text-purple mb-8 font-label-caps text-[10px] tracking-[2px]">
            <span className="w-1.5 h-1.5 rounded-full bg-purple animate-pulse" />
            EXECUTIVE AUTHORITY SYSTEM
          </div>

          <h1 className="font-h1 text-[48px] md:text-[68px] leading-[1.05] text-primary max-w-4xl mx-auto mb-8 tracking-tight">
            Turn Personal Authority Into Business Pipeline.
          </h1>

          <p className="font-h3 text-h3 text-slate-500 max-w-2xl mx-auto mb-12 font-normal leading-relaxed">
            People buy from people. We help founders, CEOs, and industry leaders build recognizable authority systems that generate dealflow, talent, and trust.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-purple text-white px-10 py-4 rounded-lg font-medium text-lg shadow-[0_4px_14px_0_rgba(91,44,107,0.35)] hover:shadow-[0_6px_20px_rgba(91,44,107,0.25)] hover:-translate-y-0.5 transition-all duration-200"
            >
              Build Your Executive Brand →
            </Link>
          </div>
        </div>
      </section>

      {/* PILLARS SECTION */}
      <section className="py-24 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="font-label-caps text-label-caps text-purple tracking-[3px] mb-2 block uppercase font-bold">THE METHODOLOGY</span>
            <h2 className="font-h2 text-[36px] md:text-[44px] text-primary tracking-tight">How Executive Personal Branding Drives Growth</h2>
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

      {/* BOTTOM CTA */}
      <section className="py-24 px-8 bg-bg">
        <div className="max-w-5xl mx-auto bg-purple text-white rounded-3xl p-12 md:p-20 text-center relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="font-h1 text-[36px] md:text-[48px] mb-6 tracking-tight">Ready to command authority in your space?</h2>
            <p className="font-h3 text-white/80 max-w-xl mx-auto mb-10 font-normal leading-relaxed">
              Enquire for a discrete executive brand consultation with our studio team.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-purple px-10 py-4 rounded-lg font-bold text-lg hover:scale-105 transition-transform"
            >
              Enquire For Executive Branding
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
