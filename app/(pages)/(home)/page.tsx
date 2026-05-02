import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Hero from './components/Hero';

export const metadata: Metadata = {
  title: 'Prosona | AI-Powered Brand Systems for F&B and FMCG',
  description: 'Prosona builds AI-powered brand systems for food and consumer brands — so their brand runs without them.',
  openGraph: {
    title: 'Prosona | AI-Powered Brand Systems for F&B and FMCG',
    description: 'Prosona builds AI-powered brand systems for food and consumer brands — so their brand runs without them.',
    images: ['/logo.svg'],
  },
};

// ─── Services data ─────────────────────────────────────────────────────────────
const services = [
  {
    number: '01',
    name: 'Brand Systems',
    tagline: 'Identity that scales without you.',
    description:
      'A complete visual and verbal identity system — logo, typography, tone of voice, colour, usage guidelines — built for product brands that need to stay consistent across every touchpoint.',
    whoFor: 'F&B and FMCG brands launching or rebranding.',
    outcome: 'Your team can execute brand assets independently. No brief needed every time.',
  },
  {
    number: '02',
    name: 'Growth Systems',
    tagline: 'Content and visibility on autopilot.',
    description:
      'Structured content workflows, social playbooks, and automation layers that produce consistent brand presence — without the founder writing every caption.',
    whoFor: 'Brands with traction but inconsistent output.',
    outcome: 'Three months of content direction built and deployed. You review, not produce.',
  },
  {
    number: '03',
    name: 'AI Brand Infrastructure',
    tagline: 'Operational systems that run your brand.',
    description:
      'Brand prompt libraries, AI-assisted asset generation workflows, templated campaigns, and SOPs — so your brand operates like a team, even if you\'re a team of one.',
    whoFor: 'Scaling brands that can\'t hire a full creative team yet.',
    outcome: 'A brand that produces on-demand without constant agency dependency.',
  },
];

// ─── Process steps ─────────────────────────────────────────────────────────────
const process = [
  {
    step: '01',
    name: 'Audit',
    description: 'We map your brand gaps — identity, messaging, presence, and consistency. Honest, structured, no fluff.',
  },
  {
    step: '02',
    name: 'Strategy',
    description: 'We define your positioning, audience, and the system architecture that will run your brand.',
  },
  {
    step: '03',
    name: 'Build',
    description: 'We create your identity, assets, content workflows, and automation layers from the ground up.',
  },
  {
    step: '04',
    name: 'Deploy',
    description: 'We hand over a brand system your team can run — with SOPs, templates, and AI tools built in.',
  },
];

export default function Home() {
  return (
    <div className="relative w-full overflow-hidden">

      {/* ── Hero ── */}
      <Hero />

      {/* ── Services ── */}
      <section id="services" className="py-32 px-6 md:px-8 bg-white/70 backdrop-blur-xl relative z-10">
        <div className="max-w-6xl mx-auto">

          <div className="mb-20">
            <p className="font-label-caps text-[11px] tracking-[0.2em] text-purple uppercase mb-4">What We Build</p>
            <h2 className="font-h2 text-[32px] md:text-[44px] text-primary tracking-tight max-w-xl leading-tight">
              Three systems. One goal:<br />a brand that runs without you.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
            {services.map((service) => (
              <div key={service.number} className="bg-[#faf9f7] p-8 md:p-10 flex flex-col gap-6">
                <div className="flex items-start justify-between">
                  <span className="font-label-caps text-[11px] tracking-[0.2em] text-purple/50">{service.number}</span>
                </div>
                <div>
                  <h3 className="font-h3 text-[22px] text-primary mb-2">{service.name}</h3>
                  <p className="text-purple text-[13px] font-medium tracking-tight italic">{service.tagline}</p>
                </div>
                <p className="text-slate-500 text-[14px] leading-[1.75]">{service.description}</p>
                <div className="mt-auto pt-6 border-t border-border space-y-3">
                  <div>
                    <span className="text-[11px] font-semibold tracking-widest text-slate-400 uppercase">For</span>
                    <p className="text-[13px] text-slate-600 mt-1">{service.whoFor}</p>
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold tracking-widest text-slate-400 uppercase">Outcome</span>
                    <p className="text-[13px] text-slate-700 font-medium mt-1">{service.outcome}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <Link
              href="/contact"
              className="bg-purple text-white px-10 py-4 rounded-lg font-semibold shadow-[0_4px_24px_0_rgba(91,44,107,0.3)] hover:shadow-[0_6px_30px_rgba(91,44,107,0.25)] hover:-translate-y-0.5 transition-all duration-200"
            >
              Build My Brand System →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className="py-32 px-6 md:px-8 bg-purple-light/40 backdrop-blur-xl relative z-10">
        <div className="max-w-6xl mx-auto">

          <div className="mb-20">
            <p className="font-label-caps text-[11px] tracking-[0.2em] text-purple uppercase mb-4">How We Work</p>
            <h2 className="font-h2 text-[32px] md:text-[44px] text-primary tracking-tight">
              How We Build Your Brand System
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-0 md:gap-px bg-transparent md:bg-border">
            {process.map((item, i) => (
              <div key={item.step} className={`bg-[#faf9f7] md:bg-transparent p-8 relative ${i < process.length - 1 ? 'border-b border-border md:border-b-0' : ''}`}>
                <div className="mb-6">
                  <span className="font-label-caps text-[40px] font-bold text-purple/10 leading-none">{item.step}</span>
                </div>
                <h3 className="font-h3 text-[18px] text-primary mb-3">{item.name}</h3>
                <p className="text-slate-500 text-[14px] leading-[1.7]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Work ── */}
      <section className="py-32 px-6 md:px-8 bg-white/70 backdrop-blur-xl relative z-10">
        <div className="max-w-6xl mx-auto">

          <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <p className="font-label-caps text-[11px] tracking-[0.2em] text-purple uppercase mb-4">Our Work</p>
              <h2 className="font-h2 text-[32px] md:text-[44px] text-primary tracking-tight">
                Results, not aesthetics.
              </h2>
            </div>
            <Link href="/work" className="text-purple font-medium flex items-center gap-1.5 group shrink-0">
              See all work
              <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </Link>
          </div>

          {/* Featured case study */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-border rounded-2xl overflow-hidden shadow-sm">
            <div className="bg-[#faf9f7] overflow-hidden">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdQm_U2ktoez25vf2lQuShNUE5w_ZfIrldg8jOF2yjZd933cFWpy7tgWUDsP3PoplcLHSwf1LFL6K6qDYeKeOW7SSEqOQYJkAtsQpuALkiCdcjOQHZ2dxWq7pUd-sqyCKSnOvVqV9TkELj58eA6KZBAXj5K8Q2bxG6x-zdKefkdvjUxCkd-55S1o0wCmstWrX4OTxOd2MwNiQ6IPJdLSmiTp40g855hxuPNfUw9yS8l-UX4WMQ3Ns77-dZAeqCsN8k90Y-Oq-egOM"
                alt="Kova — Brand System"
                width={700}
                height={480}
                className="w-full h-72 lg:h-full object-cover"
              />
            </div>
            <div className="bg-[#faf9f7] p-10 flex flex-col justify-between gap-8">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-[11px] font-semibold tracking-widest text-purple bg-purple/8 px-3 py-1 rounded-full uppercase">F&amp;B</span>
                  <span className="text-[11px] text-slate-400">Featured Project</span>
                </div>
                <h3 className="font-h2 text-[28px] text-primary mb-3">Kova</h3>
                <p className="text-slate-400 text-sm font-medium mb-6">Modern café chain · Delhi NCR</p>
                <div className="space-y-4">
                  <div>
                    <p className="text-[11px] font-semibold tracking-widest text-slate-400 uppercase mb-1">The Problem</p>
                    <p className="text-slate-600 text-[14px] leading-[1.7]">Three locations, three different brand experiences. No system, no guidelines — every menu reprint was a new design from scratch.</p>
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold tracking-widest text-slate-400 uppercase mb-1">What We Did</p>
                    <p className="text-slate-600 text-[14px] leading-[1.7]">Built a complete brand system — identity, menu templates, social playbook, and an AI content workflow for weekly posts.</p>
                  </div>
                </div>
              </div>
              <div className="border-t border-border pt-6">
                <p className="text-[11px] font-semibold tracking-widest text-slate-400 uppercase mb-3">Outcome</p>
                <p className="text-primary font-semibold text-[16px] leading-snug">Brand running consistently across all 3 locations. Zero agency dependency. Content produced in-house using the system.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Trust / Founder ── */}
      <section className="py-32 px-6 md:px-8 bg-purple-light/40 backdrop-blur-xl relative z-10">
        <div className="max-w-6xl mx-auto">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

            {/* Founder */}
            <div>
              <p className="font-label-caps text-[11px] tracking-[0.2em] text-purple uppercase mb-6">Who We Are</p>
              <h2 className="font-h2 text-[28px] md:text-[36px] text-primary tracking-tight mb-6 leading-tight">
                We&apos;re a brand studio obsessed with one thing: systems that don&apos;t break.
              </h2>
              <p className="text-slate-500 text-[15px] leading-[1.75] mb-8">
                Prosona was built because we kept seeing the same problem — brilliant product founders spending more time on brand firefighting than building. We exist to end that.
              </p>
              <p className="text-slate-500 text-[15px] leading-[1.75] mb-10">
                We work with a small number of F&amp;B and FMCG brands at a time, so the work is deep, not templated.
              </p>
              <Link href="/our-story" className="text-purple font-medium flex items-center gap-1.5 group w-fit">
                Our story
                <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </Link>
            </div>

            {/* Testimonials */}
            <div className="flex flex-col gap-6">
              <blockquote className="bg-white border border-border rounded-2xl p-8 shadow-sm">
                <p className="text-slate-600 text-[15px] leading-[1.75] mb-6 italic">
                  &ldquo;Before Prosona, every time we opened a new outlet it was a brand reset. Now we just follow the playbook. It&apos;s the best investment we&apos;ve made in the last two years.&rdquo;
                </p>
                <div>
                  <p className="font-semibold text-primary text-[14px]">Rohan Mehta</p>
                  <p className="text-slate-400 text-[12px]">Founder, Kova Café · Delhi</p>
                </div>
              </blockquote>
              <blockquote className="bg-white border border-border rounded-2xl p-8 shadow-sm">
                <p className="text-slate-600 text-[15px] leading-[1.75] mb-6 italic">
                  &ldquo;We launched on Blinkit and Amazon without a brand. Prosona built everything in 6 weeks — and we looked like we&apos;d been around for five years.&rdquo;
                </p>
                <div>
                  <p className="font-semibold text-primary text-[14px]">Priya Anand</p>
                  <p className="text-slate-400 text-[12px]">Co-founder, Veer Naturals · FMCG</p>
                </div>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="py-32 px-6 md:px-8 bg-white/70 backdrop-blur-xl relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-label-caps text-[11px] tracking-[0.2em] text-purple uppercase mb-6">Ready When You Are</p>
          <h2 className="font-h2 text-[32px] md:text-[48px] text-primary tracking-tight mb-6 leading-tight">
            Ready to stop rebuilding your brand every time?
          </h2>
          <p className="text-slate-500 text-[16px] leading-[1.75] mb-10 max-w-xl mx-auto">
            Let&apos;s create a system that runs without you.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-purple text-white px-12 py-5 rounded-lg font-bold text-[16px] shadow-[0_4px_24px_0_rgba(91,44,107,0.35)] hover:shadow-[0_6px_30px_rgba(91,44,107,0.28)] hover:-translate-y-0.5 active:translate-y-[1px] transition-all duration-200"
          >
            Start the conversation →
          </Link>
          <p className="text-slate-400 text-[12px] mt-6">Engagements typically start from ₹1.5L</p>
        </div>
      </section>

    </div>
  );
}
