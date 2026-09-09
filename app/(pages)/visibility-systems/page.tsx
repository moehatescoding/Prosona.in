import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Visibility Systems | PROSONΛ',
  description: 'AI search placement & search dominance. Keep your brand discoverable across ChatGPT, Perplexity, and modern search engines 24/7.',
  openGraph: {
    title: 'Visibility Systems | PROSONΛ',
    description: 'AI search placement & search dominance. Keep your brand discoverable across ChatGPT, Perplexity, and modern search engines 24/7.',
    images: ['/logo.svg'],
  },
};

const capabilities = [
  {
    icon: 'travel_explore',
    title: 'AI Search Optimization (GEO)',
    desc: 'Generative Engine Optimization that ensures ChatGPT, Perplexity, Claude, and Google Gemini recommend your brand when customers query your sector.',
  },
  {
    icon: 'hub',
    title: 'Omnichannel Signal Presence',
    desc: 'Structured semantic data and cross-platform publishing that feed search algorithms and AI knowledge bases with accurate, highly authoritative brand data.',
  },
  {
    icon: 'shield_with_heart',
    title: 'Search Placement Dominance',
    desc: 'Capture top-of-funnel discovery across traditional search, social search, and platform directories so you stay top of mind in every buyer search.',
  },
];

export default function VisibilitySystems() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="bg-bg pt-[140px] pb-24 px-8 hero-grid flex flex-col items-center text-center relative overflow-hidden">
        <div className="max-w-5xl mx-auto z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple/20 bg-purple/5 text-purple mb-8 font-label-caps text-[10px] tracking-[2px]">
            <span className="w-1.5 h-1.5 rounded-full bg-purple animate-pulse" />
            AI SEARCH &amp; DISCOVERY ENGINE
          </div>

          <h1 className="font-h1 text-[48px] md:text-[68px] leading-[1.05] text-primary max-w-4xl mx-auto mb-8 tracking-tight">
            Be Found Everywhere Your Buyers Look &amp; Ask.
          </h1>

          <p className="font-h3 text-h3 text-slate-500 max-w-2xl mx-auto mb-12 font-normal leading-relaxed">
            Search has changed. We engineer AI search readability and omnichannel discovery systems so your brand dominates both AI recommendations and conventional search engines.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-purple text-white px-10 py-4 rounded-lg font-medium text-lg shadow-[0_4px_14px_0_rgba(91,44,107,0.35)] hover:shadow-[0_6px_20px_rgba(91,44,107,0.25)] hover:-translate-y-0.5 transition-all duration-200"
            >
              Build Your Visibility System →
            </Link>
            <Link
              href="#overview"
              className="border border-border px-10 py-4 rounded-lg font-medium text-primary hover:bg-purple/5 transition-all duration-200"
            >
              Learn How AI Search Works
            </Link>
          </div>
        </div>
      </section>

      {/* STAT STRIP */}
      <section className="py-16 bg-purple/5 border-y border-border">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="space-y-2">
              <div className="font-h1 text-[56px] font-bold text-purple leading-none tracking-tighter">Top 3</div>
              <div className="font-label-caps text-label-caps text-slate-500 uppercase tracking-widest">AI Engine Recommendation Rank</div>
            </div>
            <div className="space-y-2">
              <div className="font-h1 text-[56px] font-bold text-purple leading-none tracking-tighter">100%</div>
              <div className="font-label-caps text-label-caps text-slate-500 uppercase tracking-widest">Semantic Brand Fidelity</div>
            </div>
            <div className="space-y-2">
              <div className="font-h1 text-[56px] font-bold text-purple leading-none tracking-tighter">24/7</div>
              <div className="font-label-caps text-label-caps text-slate-500 uppercase tracking-widest">Autonomous Search Placement</div>
            </div>
          </div>
        </div>
      </section>

      {/* CAPABILITIES GRID */}
      <section id="overview" className="py-24 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="font-label-caps text-label-caps text-purple tracking-[3px] mb-2 block uppercase font-bold">NEXT-GEN SEARCH</span>
            <h2 className="font-h2 text-[36px] md:text-[44px] text-primary tracking-tight">How We Secure Category Dominance</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {capabilities.map((c) => (
              <div key={c.title} className="bg-bg p-8 rounded-2xl border border-border hover:border-purple/30 hover:shadow-md transition-all duration-300 flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-purple/5 flex items-center justify-center mb-6 text-purple">
                  <span className="material-symbols-outlined">{c.icon}</span>
                </div>
                <h3 className="font-h3 text-h3 text-primary mb-3">{c.title}</h3>
                <p className="text-slate-500 leading-relaxed font-body-md">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISON / WHY IT MATTERS */}
      <section className="py-24 px-8 bg-bg">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="font-h2 text-[32px] md:text-[40px] text-primary tracking-tight">The Shift From Keyword Ranking to AI Authority</h2>
          <p className="font-h3 text-slate-600 font-normal leading-relaxed">
            Buyers no longer click through ten blue links. They ask AI engines for top recommendations. If your brand system isn&apos;t structured semantically for LLM retrieval, you are effectively invisible to modern buyers.
          </p>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="py-24 px-8">
        <div className="max-w-5xl mx-auto bg-purple text-white rounded-3xl p-12 md:p-20 text-center relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="font-h1 text-[36px] md:text-[48px] mb-6 tracking-tight">Dominate search in the AI era.</h2>
            <p className="font-h3 text-white/80 max-w-xl mx-auto mb-10 font-normal leading-relaxed">
              We&apos;ll audit your current AI search visibility score and outline an action plan in 48 hours.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-purple px-10 py-4 rounded-lg font-bold text-lg hover:scale-105 transition-transform"
            >
              Request Visibility Audit
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
