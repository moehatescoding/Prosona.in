import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Our Work',
  description: 'Case studies from F&B and FMCG brand system builds by Prosona.',
};

const projects = [
  {
    name: 'Kova',
    industry: 'F&B',
    location: 'Delhi NCR',
    type: 'Café Chain',
    problem: 'Three locations, three different brand experiences. No guidelines, no system — every menu reprint was a fresh design from scratch.',
    work: 'Full brand system — identity, logo refinement, typography, colour palette, menu templates, packaging guidelines, social playbook, and an AI content workflow for weekly posts.',
    outcome: 'Brand running consistently across all 3 locations with zero agency dependency. Content now produced in-house using the system.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDdQm_U2ktoez25vf2lQuShNUE5w_ZfIrldg8jOF2yjZd933cFWpy7tgWUDsP3PoplcLHSwf1LFL6K6qDYeKeOW7SSEqOQYJkAtsQpuALkiCdcjOQHZ2dxWq7pUd-sqyCKSnOvVqV9TkELj58eA6KZBAXj5K8Q2bxG6x-zdKefkdvjUxCkd-55S1o0wCmstWrX4OTxOd2MwNiQ6IPJdLSmiTp40g855hxuPNfUw9yS8l-UX4WMQ3Ns77-dZAeqCsN8k90Y-Oq-egOM',
    tag: 'Brand System',
  },
  {
    name: 'Veer Naturals',
    industry: 'FMCG',
    location: 'Pan India',
    type: 'Health F&B Brand',
    problem: 'Launched on Blinkit and Amazon without a proper brand identity. Listings looked amateur against established competitors, leading to low conversion.',
    work: 'Built a complete brand identity from scratch — wordmark, packaging design language, listing image templates, and a brand story for all channels.',
    outcome: 'Launched across 3 platforms looking like an established brand. Listing CTR improved and brand now has a consistent presence across all retail touchpoints.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC3bCau-AQ9ZayQ2EPszjNPQOybGm2iJCmNBmrtizpzPU12vBDgKtH9sSReknDGjCX8pi-2jtQH3ETUiDT5c0IccRZCLGSaMqgKYtXM9sriVhVN5t1k5n9B--EYZ2XP4JO2fbU4mopnu1QwDmyOyOCdZTEFm1X02yXWYlmyzPmEBCahkfglhIkyYxtebkcJdi7MJo8Cj9390ScVK2Hh0lqI34ekta825t5KRIoFQylGDsoiyo7OGne4a-qHlaFwRyUCvR9caaHiU0o',
    tag: 'Identity + Packaging',
  },
  {
    name: 'Elara Foods',
    industry: 'FMCG',
    location: 'Mumbai',
    type: 'Artisanal Food Brand',
    problem: 'Strong product, weak brand. Social presence was inconsistent — some posts felt premium, others looked like they were made in Canva in five minutes.',
    work: 'Developed a content system and AI brand infrastructure — prompt libraries, post templates, tone of voice guide, and a 3-month content calendar with weekly automation.',
    outcome: 'Brand voice now consistent across Instagram, Amazon, and WhatsApp business. Founder spends 30 minutes per week on content instead of 3 hours.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDs_-RVT_cFdqS4XUIjUGyHFKHuoi-x6yAu5wwh1IyjvXYMSVey_kOiKroF-xANOP4YmE32275uJTi1LSyHJA8-LGZj4wMBDZhRunFgo8-vXNYvv1plKTR0-D9PO3qtI7LRDdXre4foR9I2qPJst1K5vbZcXveSV6DCo0q7UCzzO2DBjV_6WuS3nmQvw6VzgbsIhaduzY6jOz6rm5sCO0QXMk0avy0xfkm-3RvlOEAPlmQYf5cSqk_gPDx_79NgC0hnbdY90CD8_zA',
    tag: 'Growth System',
  },
];

export default function WorkPage() {
  return (
    <div className="relative w-full overflow-hidden">

      {/* Hero */}
      <section className="pt-40 pb-20 px-6 md:px-8 bg-bg hero-grid relative z-10">
        <div className="max-w-6xl mx-auto">
          <p className="font-label-caps text-[11px] tracking-[0.2em] text-purple uppercase mb-6">Our Work</p>
          <h1 className="font-h1 text-[44px] md:text-[60px] text-primary tracking-tight leading-[1.06] mb-6 max-w-2xl">
            Results, not aesthetics.
          </h1>
          <p className="text-slate-500 text-[16px] leading-[1.75] max-w-lg">
            Every project starts with a brand problem. We solve it with a system — not a one-time design.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section className="py-16 px-6 md:px-8 bg-white/70 backdrop-blur-xl relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col gap-px bg-border divide-y-0">
          {projects.map((project, i) => (
            <div
              key={project.name}
              className={`bg-[#faf9f7] grid grid-cols-1 lg:grid-cols-2 gap-px ${i % 2 === 1 ? '' : ''}`}
            >
              {/* Image */}
              <div className={`overflow-hidden ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                <Image
                  src={project.image}
                  alt={`${project.name} — ${project.industry} brand system`}
                  width={700}
                  height={500}
                  className="w-full h-72 lg:h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className={`p-10 lg:p-14 flex flex-col justify-between gap-8 ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div>
                  <div className="flex items-center gap-3 mb-8">
                    <span className="text-[11px] font-semibold tracking-widest text-purple bg-purple/8 px-3 py-1 rounded-full uppercase">{project.industry}</span>
                    <span className="text-[11px] font-semibold tracking-widest text-slate-400 bg-slate-100 px-3 py-1 rounded-full uppercase">{project.tag}</span>
                  </div>

                  <h2 className="font-h2 text-[32px] text-primary mb-1">{project.name}</h2>
                  <p className="text-slate-400 text-sm mb-8">{project.type} · {project.location}</p>

                  <div className="space-y-6">
                    <div>
                      <p className="text-[11px] font-semibold tracking-widest text-slate-400 uppercase mb-2">The Problem</p>
                      <p className="text-slate-600 text-[14px] leading-[1.75]">{project.problem}</p>
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold tracking-widest text-slate-400 uppercase mb-2">What We Did</p>
                      <p className="text-slate-600 text-[14px] leading-[1.75]">{project.work}</p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-border pt-6">
                  <p className="text-[11px] font-semibold tracking-widest text-slate-400 uppercase mb-2">Outcome</p>
                  <p className="text-primary font-semibold text-[15px] leading-snug">{project.outcome}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 px-6 md:px-8 bg-purple-light/40 backdrop-blur-xl relative z-10 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-h2 text-[28px] md:text-[38px] text-primary tracking-tight mb-4 leading-tight">
            Your brand could be next.
          </h2>
          <p className="text-slate-500 text-[15px] leading-[1.75] mb-10">
            We work with a small number of brands at a time. If you&apos;re building something in F&amp;B or FMCG, let&apos;s talk.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-purple text-white px-10 py-4 rounded-lg font-semibold shadow-[0_4px_24px_0_rgba(91,44,107,0.3)] hover:shadow-[0_6px_30px_rgba(91,44,107,0.25)] hover:-translate-y-0.5 transition-all duration-200"
          >
            Start the conversation →
          </Link>
        </div>
      </section>

    </div>
  );
}
