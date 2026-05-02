import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Three focused brand system offers for F&B and FMCG brands. Identity, growth, and AI infrastructure.',
};

export default function ServicesPage() {
  return (
    <div className="relative w-full overflow-hidden">

      {/* Header */}
      <section className="pt-40 pb-20 px-6 md:px-8 bg-bg hero-grid relative z-10">
        <div className="max-w-6xl mx-auto">
          <p className="font-label-caps text-[11px] tracking-[0.2em] text-purple uppercase mb-6">What We Build</p>
          <h1 className="font-h1 text-[44px] md:text-[60px] text-primary tracking-tight leading-[1.06] mb-6 max-w-2xl">
            Three systems. Built for product brands.
          </h1>
          <p className="text-slate-500 text-[16px] leading-[1.75] max-w-lg">
            We don&apos;t offer design services. We build brand systems — infrastructure that runs your identity, content, and presence without constant intervention.
          </p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-0 bg-white/70 backdrop-blur-xl relative z-10">
        <div className="max-w-6xl mx-auto">

          {/* Service 01 */}
          <div className="border-b border-border py-20 px-6 md:px-8 grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-3">
              <span className="font-label-caps text-[11px] tracking-[0.2em] text-purple/50">01</span>
              <h2 className="font-h2 text-[28px] md:text-[34px] text-primary mt-3 leading-tight">Brand Systems</h2>
              <p className="text-purple text-sm font-medium italic mt-2">Identity that scales without you.</p>
            </div>
            <div className="md:col-span-9 grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="md:col-span-2 space-y-5">
                <p className="text-slate-500 text-[15px] leading-[1.8]">
                  A complete visual and verbal identity system built for product brands. Logo, typography, tone of voice, colour palette, and usage guidelines — all documented so your team can execute without a brief every time.
                </p>
                <p className="text-slate-500 text-[15px] leading-[1.8]">
                  Whether you&apos;re launching your first brand or bringing consistency to a brand that&apos;s grown faster than its identity — this is where we start.
                </p>
                <div className="pt-4 space-y-3">
                  {['Visual identity system', 'Brand guidelines document', 'Typography + colour system', 'Tone of voice guide', 'Logo usage rules', 'Packaging direction'].map((item) => (
                    <div key={item} className="flex items-center gap-3 text-[14px] text-slate-600">
                      <div className="w-1 h-1 rounded-full bg-purple shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <p className="text-[11px] font-semibold tracking-widest text-slate-400 uppercase mb-2">Built For</p>
                  <p className="text-slate-600 text-[14px]">F&amp;B and FMCG brands launching or rebranding.</p>
                </div>
                <div>
                  <p className="text-[11px] font-semibold tracking-widest text-slate-400 uppercase mb-2">Outcome</p>
                  <p className="text-primary font-medium text-[14px]">Your team executes independently. No brief needed every time.</p>
                </div>
                <div>
                  <p className="text-[11px] font-semibold tracking-widest text-slate-400 uppercase mb-2">Timeline</p>
                  <p className="text-slate-600 text-[14px]">4–6 weeks</p>
                </div>
              </div>
            </div>
          </div>

          {/* Service 02 */}
          <div className="border-b border-border py-20 px-6 md:px-8 grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-3">
              <span className="font-label-caps text-[11px] tracking-[0.2em] text-purple/50">02</span>
              <h2 className="font-h2 text-[28px] md:text-[34px] text-primary mt-3 leading-tight">Growth Systems</h2>
              <p className="text-purple text-sm font-medium italic mt-2">Content and visibility on autopilot.</p>
            </div>
            <div className="md:col-span-9 grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="md:col-span-2 space-y-5">
                <p className="text-slate-500 text-[15px] leading-[1.8]">
                  Structured content workflows, social playbooks, and automation layers that produce consistent brand presence — without the founder writing every caption or briefing an agency every week.
                </p>
                <p className="text-slate-500 text-[15px] leading-[1.8]">
                  We build the system once. You run it — or hand it to your team.
                </p>
                <div className="pt-4 space-y-3">
                  {['Content strategy + calendar', 'Social media playbook', 'Platform-specific templates', 'Content SOP for in-house team', 'Automation setup', 'Monthly content direction'].map((item) => (
                    <div key={item} className="flex items-center gap-3 text-[14px] text-slate-600">
                      <div className="w-1 h-1 rounded-full bg-purple shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <p className="text-[11px] font-semibold tracking-widest text-slate-400 uppercase mb-2">Built For</p>
                  <p className="text-slate-600 text-[14px]">Brands with traction but inconsistent output.</p>
                </div>
                <div>
                  <p className="text-[11px] font-semibold tracking-widest text-slate-400 uppercase mb-2">Outcome</p>
                  <p className="text-primary font-medium text-[14px]">Three months of content direction built and deployed. You review, not produce.</p>
                </div>
                <div>
                  <p className="text-[11px] font-semibold tracking-widest text-slate-400 uppercase mb-2">Timeline</p>
                  <p className="text-slate-600 text-[14px]">3–5 weeks</p>
                </div>
              </div>
            </div>
          </div>

          {/* Service 03 */}
          <div className="py-20 px-6 md:px-8 grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-3">
              <span className="font-label-caps text-[11px] tracking-[0.2em] text-purple/50">03</span>
              <h2 className="font-h2 text-[28px] md:text-[34px] text-primary mt-3 leading-tight">AI Brand Infrastructure</h2>
              <p className="text-purple text-sm font-medium italic mt-2">Operational systems that run your brand.</p>
            </div>
            <div className="md:col-span-9 grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="md:col-span-2 space-y-5">
                <p className="text-slate-500 text-[15px] leading-[1.8]">
                  Brand prompt libraries, AI-assisted asset generation workflows, templated campaigns, and SOPs — so your brand operates like a team, even if you&apos;re a team of one.
                </p>
                <p className="text-slate-500 text-[15px] leading-[1.8]">
                  This is the layer on top of identity and content that makes everything repeatable and on-demand.
                </p>
                <div className="pt-4 space-y-3">
                  {['AI prompt library for brand voice', 'Asset generation workflows', 'Templated campaign formats', 'Brand operations SOP', 'Tool setup and integration', 'Team training + handover'].map((item) => (
                    <div key={item} className="flex items-center gap-3 text-[14px] text-slate-600">
                      <div className="w-1 h-1 rounded-full bg-purple shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <p className="text-[11px] font-semibold tracking-widest text-slate-400 uppercase mb-2">Built For</p>
                  <p className="text-slate-600 text-[14px]">Scaling brands that can&apos;t hire a full creative team yet.</p>
                </div>
                <div>
                  <p className="text-[11px] font-semibold tracking-widest text-slate-400 uppercase mb-2">Outcome</p>
                  <p className="text-primary font-medium text-[14px]">A brand that produces on-demand without constant agency dependency.</p>
                </div>
                <div>
                  <p className="text-[11px] font-semibold tracking-widest text-slate-400 uppercase mb-2">Timeline</p>
                  <p className="text-slate-600 text-[14px]">4–8 weeks</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-28 px-6 md:px-8 bg-purple-light/40 backdrop-blur-xl relative z-10 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-h2 text-[28px] md:text-[40px] text-primary tracking-tight mb-4 leading-tight">
            Not sure which system you need?
          </h2>
          <p className="text-slate-500 text-[15px] leading-[1.75] mb-10">
            Most brands need more than one layer. We&apos;ll audit what you have and recommend what to build first.
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
