import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Brand Audit Services | PROSONΛ',
  description: 'A sharp, structured audit of your brand conducted by practitioners with 20+ years of real industry experience. Not a report. A conversation that changes how you see your brand.',
  openGraph: {
    title: 'Brand Audit Services | PROSONΛ',
    description: 'A sharp, structured audit of your brand conducted by practitioners with 20+ years of real industry experience.',
    images: ['/logo.svg'],
  },
};

const auditAreas = [
  {
    icon: 'brush',
    title: 'Brand Identity',
    desc: 'Visual consistency, logo system, color and type — does it hold together across every touchpoint?',
  },
  {
    icon: 'forum',
    title: 'Messaging & Positioning',
    desc: 'Are you saying the right thing to the right people in the right tone?',
  },
  {
    icon: 'language',
    title: 'Digital Presence',
    desc: 'Website, social, SEO — what does your brand look like to a stranger finding you for the first time?',
  },
  {
    icon: 'inventory_2',
    title: 'Packaging & Labels',
    desc: 'Does your physical product communicate quality and trust the moment someone picks it up?',
  },
  {
    icon: 'shopping_cart',
    title: 'Platform Presence',
    desc: 'How you show up on quick commerce, Amazon, and search — and whether it&apos;s working.',
  },
  {
    icon: 'trending_up',
    title: 'Growth Gaps',
    desc: 'Where you are leaking brand value today and what to address first.',
  },
];

const steps = [
  {
    num: '01',
    title: 'Apply',
    desc: 'Fill out a short form. Tell us about your brand, your category, and your biggest challenge right now.',
  },
  {
    num: '02',
    title: 'We prepare',
    desc: 'Our team audits your brand across every major touchpoint before the call. No generic checklists.',
  },
  {
    num: '03',
    title: 'You get clarity',
    desc: 'A focused 30-minute session with senior practitioners. Findings, priorities, and honest direction.',
  },
];

const deliverables = [
  'A one-page audit summary delivered within 24 hours',
  'Your top brand gaps ranked by business impact',
  'Quick wins you can act on this week',
  'A prioritized roadmap for what to fix and in what order',
  "An honest outside perspective from people who've built brands at scale",
];

export default function BrandAudits() {
  return (
    <>
      {/* Hero */}
      <section className="bg-bg pt-[140px] pb-24 px-8 flex flex-col items-center text-center overflow-hidden relative hero-grid">
        <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-full max-w-4xl opacity-5 pointer-events-none">
          <img
            className="w-full grayscale"
            alt="Brand audit abstract visual"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDw9-HOcXjymnsOQS8vVy0ezDPMqrw7vLy4tdzq2DtgDqLn4OUNpmRUXrbwaHHkiX-JfDqgYrDG9Ah9PjlQZQERjvmnpAMuO_LO-lv0aOJQpYWJWxCL1hraPTMzd04_ZDz3EgYUTy5-vNXq_GGPjVHOknAMsWblh5uNRQfhOENFwg1BUa_Tso2uYmb6k8dExHS9Mj4-GGwXwBgIZUYz-GbxycbO-xwAna0ht5FQMrpyafrRbcgKzPNrbtSL_ImfoBtlJbzgAPppyI"
          />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple/20 bg-purple/5 text-purple mb-8 font-label-caps text-[10px] tracking-[2px]">
            <span className="w-1.5 h-1.5 rounded-full bg-purple animate-pulse" />
            BY APPOINTMENT ONLY
          </div>

          <h1 className="font-h1 text-[48px] md:text-[68px] leading-[1.05] text-primary max-w-[900px] mx-auto mb-8 tracking-tight">
            A Second Opinion From People Who&apos;ve Seen It All.
          </h1>

          <p className="font-h3 text-h3 text-slate-500 max-w-[720px] mx-auto mb-12 font-normal leading-relaxed">
            A sharp, structured audit of your brand conducted by practitioners with 20+ years of real industry experience. Not a report. A conversation that changes how you see your brand.
          </p>

          <Link
            href="/contact"
            className="inline-block bg-purple text-white px-10 py-4 rounded-lg font-medium text-lg shadow-[0_4px_14px_0_rgba(91,44,107,0.35)] hover:shadow-[0_6px_20px_rgba(91,44,107,0.25)] hover:-translate-y-0.5 transition-all duration-200"
          >
            Apply for an Audit
          </Link>
        </div>
      </section>

      {/* Differentiation */}
      <section className="bg-white py-24 px-8 border-y border-border">
        <div className="max-w-[800px] mx-auto text-center">
          <h2 className="font-h2 text-[36px] md:text-[44px] text-primary mb-6 tracking-tight">
            This isn&apos;t a free consultation.
          </h2>
          <p className="font-h3 text-h3 text-slate-500 leading-[1.8] font-normal">
            Most audits are thinly veiled sales pitches. Ours isn&apos;t. We spend real time with your brand before we ever get on a call — reviewing your presence, your packaging, your positioning, and your platforms. When we sit down with you, we already know what&apos;s broken and what&apos;s worth keeping.
          </p>
        </div>
      </section>

      {/* Examination Grid */}
      <section className="bg-bg py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-h2 text-[32px] md:text-[44px] text-primary tracking-tight">
              What we examine
            </h2>
            <p className="text-slate-500 mt-4 max-w-xl mx-auto font-h3 font-normal">
              Every dimension of your brand, reviewed by people who&apos;ve done it at scale.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {auditAreas.map((area) => (
              <div
                key={area.title}
                className="bg-white p-8 rounded-2xl border border-border hover:border-purple/30 hover:shadow-md transition-all duration-300 group"
              >
                <span
                  className="material-symbols-outlined text-purple mb-6 text-3xl block group-hover:scale-110 transition-transform"
                  style={{ fontVariationSettings: "'FILL' 0, 'wght' 300" }}
                >
                  {area.icon}
                </span>
                <h3 className="font-h3 text-h3 text-primary mb-3">{area.title}</h3>
                <p className="text-slate-500 leading-relaxed">{area.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="bg-white py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-h2 text-[32px] md:text-[44px] text-primary tracking-tight">How it works</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-8 left-[16.5%] right-[16.5%] h-[1px] bg-purple/10" />

            {steps.map((step) => (
              <div key={step.num} className="relative z-10">
                <div className="w-10 h-10 rounded-full bg-purple/5 border border-purple/20 flex items-center justify-center mb-6">
                  <span className="font-label-caps text-purple text-[11px] tracking-widest">{step.num}</span>
                </div>
                <h3 className="font-h3 text-h3 text-primary mb-3">{step.title}</h3>
                <p className="text-slate-500 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="bg-purple/5 py-24 px-8">
        <div className="max-w-7xl mx-auto text-center flex flex-col items-center">
          <h2 className="font-h2 text-[32px] md:text-[44px] text-primary mb-12 tracking-tight">
            After the call, you receive:
          </h2>
          <ul className="space-y-5 text-left max-w-[700px] w-full">
            {deliverables.map((item, i) => (
              <li key={i} className="flex items-start gap-6 font-h3 text-h3 text-primary font-normal">
                <span className="text-purple mt-1 font-bold shrink-0">—</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-8 py-24">
        <div className="max-w-7xl mx-auto bg-purple rounded-3xl py-24 px-8 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -ml-32 -mb-32 pointer-events-none" />

          <div className="relative z-10">
            <h2 className="font-h1 text-[40px] md:text-[52px] mb-6 tracking-tight">
              Ready for an honest look at your brand?
            </h2>
            <p className="font-h3 text-h3 text-white/75 max-w-[640px] mx-auto mb-12 font-normal leading-relaxed">
              We take a limited number of audit requests each month. Fill out the form and we&apos;ll confirm your slot within 48 hours.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-purple px-10 py-4 rounded-lg font-medium text-lg hover:scale-[1.02] active:scale-[0.99] transition-transform"
            >
              Apply for Your Audit
            </Link>
            <p className="mt-8 text-[11px] text-white/50 font-label-caps uppercase tracking-widest">
              We review every application. Serious brands only.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
