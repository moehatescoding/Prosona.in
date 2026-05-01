import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Building Brands | PROSONΛ',
  description: 'Everything Your Brand Needs. Built Once. Built Right. From strategy to marketplace listing, we build the entire brand ecosystem.',
  openGraph: {
    title: 'Building Brands | PROSONΛ',
    description: 'From your first logo to your last mile delivery — we build brands from the ground up.',
    images: ['/logo.svg'],
  },
};

const fullStack = [
  { label: 'STRATEGY', title: 'Brand Strategy', desc: 'Before anything is designed, we define who you are, who you\'re for, and what makes you different. Positioning, voice, and competitive space.' },
  { label: 'IDENTITY', title: 'Name & Identity', desc: 'Naming, logo design, color system, typography — the visual and verbal foundation everything else is built on.' },
  { label: 'PRODUCT', title: 'Packaging & Labels', desc: 'Shelf-ready, platform-compliant, FSSAI-aware packaging design that makes your product impossible to ignore.' },
  { label: 'WEB', title: 'Website & Presence', desc: 'A brand website built to convert — not just look good. Clean, fast, and aligned with your brand system from day one.' },
  { label: 'DIGITAL', title: 'App & Digital Product', desc: 'If your brand needs an app or ordering flow — we scope, design, and build it as part of the brand, not bolted on after.' },
  { label: 'COMMERCE', title: 'Marketplace Listing', desc: 'Amazon, Flipkart, Zepto — your brand listed, catalogued, and optimized across every platform that matters.' },
  { label: 'SOCIAL', title: 'Content System', desc: 'Profile setup, templates, and a content calendar to hit the ground running from launch day.' },
  { label: 'SYSTEM', title: 'Brand Guidelines', desc: 'A complete brand bible — every rule and asset — so your brand stays consistent as you grow and hire.' },
];

const phases = [
  { phase: '01', title: 'Discovery', desc: 'We learn your business, your market, your ambition. One deep session. No briefs, no forms.' },
  { phase: '02', title: 'Strategy', desc: 'We define your positioning, your audience, and your brand personality before a single pixel is designed.' },
  { phase: '03', title: 'Design & Build', desc: 'Logo, identity, packaging, website, listings — built in sequence, reviewed together, refined until it\'s right.' },
  { phase: '04', title: 'Launch Prep', desc: 'Platform setup, social profiles, marketplace listings — everything ready for day one.' },
  { phase: '05', title: 'Handover & Beyond', desc: 'You get every file, every guideline, every asset. And we\'re available if you grow into something bigger.' },
];

const faqs = [
  { q: 'What do I need to get started?', a: 'Typically, a clear product concept or MVP is enough. We help with the rest, from naming to full go-to-market identity.' },
  { q: 'Can I just get a logo or website?', a: 'We specialize in cohesive systems. While we can tackle focused projects, our best work happens when we control the full brand stack to ensure consistency.' },
  { q: 'Do you handle in-house implementation?', a: 'Yes. Everything from packaging design to setting up your Amazon Seller Central is handled by our internal team.' },
  { q: 'Who owns the assets after handover?', a: 'You do. Upon final payment, you receive full intellectual property ownership of all logos, designs, and code created for your brand.' },
  { q: 'Do you build for global markets?', a: 'Absolutely. We ensure your brand complies with regional requirements and resonates with international audiences across digital and retail channels.' },
];

export default function BuildingBrands() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-[140px] pb-32 px-8 overflow-hidden bg-bg hero-grid">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10">
          <div className="mb-8 px-4 py-1.5 bg-purple/5 border border-purple/10 rounded-full inline-flex">
            <span className="font-label-caps text-label-caps text-purple uppercase tracking-widest">
              End-to-End Brand Building
            </span>
          </div>

          <h1 className="font-h1 text-[52px] md:text-[68px] leading-[1.05] text-primary max-w-4xl mb-6 tracking-tight">
            Everything Your Brand Needs. Built Once. Built Right.
          </h1>

          <p className="font-h3 text-h3 text-slate-500 max-w-2xl mb-12 font-normal leading-relaxed">
            From your first logo to your last mile delivery — we build brands from the ground up so you never have to stitch it together yourself.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link
              href="/contact"
              className="bg-purple text-white px-10 py-4 rounded-lg font-medium text-lg shadow-[0_4px_14px_0_rgba(91,44,107,0.35)] hover:shadow-[0_6px_20px_rgba(91,44,107,0.25)] hover:-translate-y-0.5 transition-all duration-200"
            >
              Start Building
            </Link>
            <Link
              href="#full-stack"
              className="border border-border px-10 py-4 rounded-lg font-medium text-primary hover:bg-purple/5 transition-all duration-200"
            >
              See What&apos;s Included
            </Link>
          </div>
        </div>
      </section>

      {/* Reality Check */}
      <section className="bg-white py-12 border-y border-border">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <p className="font-h3 text-slate-500 italic font-normal">
            &quot;Most brands fail not because of a bad product — but because nobody built the brand around it.&quot;
          </p>
        </div>
      </section>

      {/* What we build */}
      <section id="full-stack" className="py-24 px-8 bg-bg">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="font-h2 text-[32px] md:text-[44px] text-primary mb-4 tracking-tight">
              Every piece. In the right order.
            </h2>
            <p className="text-slate-500 max-w-2xl font-h3 font-normal">
              We don&apos;t hand you a logo and leave. We build the entire system a brand needs to exist, compete, and grow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {fullStack.map((item) => (
              <div
                key={item.title}
                className="bg-white p-8 rounded-2xl border border-border hover:border-purple/30 hover:shadow-md transition-all duration-300 flex flex-col gap-4"
              >
                <span className="font-label-caps text-purple bg-purple/5 px-2 py-1 w-fit rounded text-[10px] tracking-widest uppercase">
                  {item.label}
                </span>
                <h3 className="font-h3 text-h3 text-primary">{item.title}</h3>
                <p className="text-slate-500 leading-relaxed text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="bg-white py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="font-h2 text-[32px] md:text-[44px] text-primary tracking-tight">How we work</h2>
          </div>

          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-purple/10" />

            <div className="space-y-24">
              {phases.map((p, i) => (
                <div key={p.phase} className={`relative flex flex-col md:flex-row items-center justify-between ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className={`hidden md:block w-5/12 ${i % 2 === 0 ? 'text-right pr-12' : 'text-left pl-12'}`}>
                    <span className="font-label-caps text-slate-400 text-[11px] tracking-widest">PHASE {p.phase}</span>
                  </div>
                  
                  <div className="absolute left-[-4px] md:left-1/2 md:-translate-x-1/2 w-2 h-2 rounded-full bg-purple ring-8 ring-white" />

                  <div className={`w-full md:w-5/12 ${i % 2 === 0 ? 'pl-12' : 'pr-12 md:text-right'} flex flex-col gap-2`}>
                    <div className="md:hidden">
                       <span className="font-label-caps text-slate-400 text-[10px] tracking-widest">PHASE {p.phase}</span>
                    </div>
                    <h3 className="font-h3 text-h3 text-primary">{p.title}</h3>
                    <p className="text-slate-500 leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Who this is for */}
      <section className="py-24 px-8 bg-bg">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-h2 text-[32px] md:text-[44px] text-primary text-center mb-16 tracking-tight">Who this is for</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-border shadow-sm flex flex-col gap-6">
              <div className="w-12 h-12 rounded-full bg-purple/5 flex items-center justify-center text-purple">
                <span className="material-symbols-outlined">rocket_launch</span>
              </div>
              <h3 className="font-h3 text-h3 text-primary">The First-Time Founder</h3>
              <p className="text-slate-500 leading-relaxed">You have a product idea and you want to build a brand around it properly — not patch it together over time.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-border shadow-sm flex flex-col gap-6 border-t-4 border-t-purple">
              <div className="w-12 h-12 rounded-full bg-purple/5 flex items-center justify-center text-purple">
                <span className="material-symbols-outlined">shopping_bag</span>
              </div>
              <h3 className="font-h3 text-h3 text-primary">The D2C Launcher</h3>
              <p className="text-slate-500 leading-relaxed">You&apos;re going direct to consumer and you know the brand experience is everything between you and the customer.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-border shadow-sm flex flex-col gap-6">
              <div className="w-12 h-12 rounded-full bg-purple/5 flex items-center justify-center text-purple">
                <span className="material-symbols-outlined">storefront</span>
              </div>
              <h3 className="font-h3 text-h3 text-primary">The Retail Challenger</h3>
              <p className="text-slate-500 leading-relaxed">You&apos;re entering a crowded shelf or marketplace and need a brand that earns attention in two seconds.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-h2 text-[32px] md:text-[44px] text-primary text-center mb-16 tracking-tight">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details key={faq.q} className="group bg-bg rounded-2xl border border-border">
                <summary className="list-none p-6 cursor-pointer flex justify-between items-center">
                  <span className="font-h3 text-lg font-semibold text-primary">{faq.q}</span>
                  <span className="material-symbols-outlined group-open:rotate-180 transition-transform text-slate-400">expand_more</span>
                </summary>
                <div className="px-6 pb-6 text-slate-500 leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-8 pb-24">
        <div className="max-w-7xl mx-auto bg-purple/5 rounded-[32px] p-16 md:p-24 text-center border border-purple/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple/5 rounded-full blur-3xl -mr-32 -mt-32" />
          <div className="relative z-10">
            <h2 className="font-h2 text-[36px] md:text-[48px] text-primary mb-6 tracking-tight">Your brand starts with one conversation.</h2>
            <p className="text-slate-500 max-w-xl mx-auto mb-12 font-h3 font-normal leading-relaxed">
              Tell us what you&apos;re building. We&apos;ll tell you exactly how we&apos;d approach it.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-purple text-white px-12 py-5 rounded-lg font-bold text-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
            >
              Start Building Your Brand
            </Link>
            <p className="mt-8 text-slate-400 text-sm font-medium uppercase tracking-[2px]">No decks. No retainers upfront. Just a real conversation.</p>
          </div>
        </div>
      </section>
    </>
  );
}
