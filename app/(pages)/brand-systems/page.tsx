import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Brand Systems | PROSONΛ',
  description: 'Identity That Scales Without You. A complete brand system designed for the AI era.',
  openGraph: {
    title: 'Brand Systems | PROSONΛ',
    description: 'Identity That Scales Without You. A complete brand system designed for the AI era.',
    images: ['/logo.svg'],
  },
};

export default function BrandSystems() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="min-h-[819px] flex flex-col items-center justify-center text-center px-gutter py-xl bg-bg">
        <div className="max-w-4xl mx-auto">
          <span className="font-label-caps text-label-caps text-primary uppercase mb-lg inline-block tracking-widest">BRAND SYSTEMS</span>
          <h1 className="font-h1 text-[60px] leading-[1.1] text-primary mb-lg max-w-3xl mx-auto tracking-tight">
            Identity That Scales Without You.
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-xl">
            Not just a logo. A complete brand system designed for the AI era. We build autonomous visual languages that evolve with your product and maintain perfect consistency across every digital touchpoint.
          </p>
          <div className="flex gap-md justify-center">
            <button className="bg-secondary-container text-on-secondary-container px-lg py-sm rounded-lg font-h3 text-body-md hover:opacity-90 transition-all font-bold">Start Your System</button>
            <button className="border border-primary text-primary px-lg py-sm rounded-lg font-h3 text-body-md hover:bg-primary/5 transition-all font-medium">View Process</button>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION: Alternating Rows */}
      <section className="py-xl px-gutter max-w-7xl mx-auto space-y-xl">
        {/* Row 1: Brand Kit */}
        <div className="grid md:grid-cols-2 gap-xl items-center">
          <div className="order-2 md:order-1">
            <div className="bg-white p-lg rounded-xl airy-border shadow-sm">
              <span className="inline-block px-sm py-1 bg-surface-container-low text-primary text-[10px] tracking-widest uppercase font-bold rounded-full mb-md">Phase 01</span>
              <h2 className="font-h2 text-h2 text-primary mb-md tracking-tight">Brand Kit</h2>
              <p className="font-body-md text-on-surface-variant mb-lg">
                The essential foundation for high-growth startups. We deliver a comprehensive asset library including dynamic logos, typography systems, and color hierarchies optimized for both OLED screens and traditional media.
              </p>
              <div className="flex items-baseline gap-xs mb-lg">
                <span className="text-h3 font-bold text-primary">₹19,999</span>
                <span className="text-label-caps tracking-widest text-on-surface-variant">one-time investment</span>
              </div>
              <ul className="space-y-sm mb-lg">
                <li className="flex items-center gap-xs text-on-surface font-body-md">
                  <span className="material-symbols-outlined text-primary text-body-md">check_circle</span>
                  <span>Dynamic Identity Guidelines</span>
                </li>
                <li className="flex items-center gap-xs text-on-surface font-body-md">
                  <span className="material-symbols-outlined text-primary text-body-md">check_circle</span>
                  <span>Multi-Platform Asset Export</span>
                </li>
              </ul>
              <button className="w-full py-sm rounded-lg bg-primary text-white font-medium hover:opacity-95 transition-all">Reserve Your Kit</button>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="relative aspect-video rounded-xl overflow-hidden shadow-xl airy-border">
              <img className="w-full h-full object-cover" alt="Brand Guidelines" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjJKBH0q8EBkh-5ML3CFQ1A8Labg1CW-yfHXeVd3uIhGNswHhPL_by4A2pcasXnvg0k789ka0B2eFjoq7dvagJn5oG00bgpJY_nkZMNWZ3W0HqQv-4rvpgE31tChSSGhv9PitGRRSIGPtlv_FWL1NrWZogE94nUPWbIDxthQIEYX8tfdC36vY-X02ah_JbnfmBP5OPXZ5FM9Rc86t8awbuqTbvCtMCE0xgkirCtHeKtBrTLX3hBznkvbzZuPbxQ1VGXvSiy3jJ9YI" />
            </div>
          </div>
        </div>

        {/* Row 2: AI Search Presence */}
        <div className="grid md:grid-cols-2 gap-xl items-center">
          <div className="order-1">
            <div className="relative aspect-video rounded-xl overflow-hidden shadow-xl airy-border">
              <img className="w-full h-full object-cover" alt="AI Search Interface" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAC8Y6OGChhaw9tVhqjEmX8GWJJ3SmvBPBywLa5DCPEp23OFSE6wOrhRUJTMscaTrVUmqmJXRCqhk3BcWwC0V1cXM5PP-moIOWT1okYGooy34jDu6uiBZhKrdViHeTkXrsW1AoGjP2FgOs3XPSSfLo6e1f7Xf8CkXxxCd1dK6Ea_7VUOnXPeUY9gIycehbDjr3v5mm0mxs9iXtgLhnJoBYLEkXfDSmgcymKituU48k_HwFu7C519vMo31gqme-tSOrBeFqSpDK4_nI" />
            </div>
          </div>
          <div className="order-2">
            <div className="bg-white p-lg rounded-xl airy-border shadow-sm">
              <span className="inline-block px-sm py-1 bg-surface-container-low text-primary text-[10px] tracking-widest uppercase font-bold rounded-full mb-md">Phase 02</span>
              <h2 className="font-h2 text-h2 text-primary mb-md tracking-tight">AI Search Presence</h2>
              <p className="font-body-md text-on-surface-variant mb-lg">
                In an era of Perplexity and ChatGPT, your brand must be readable by machines. We optimize your visual and semantic data to ensure AI models represent your brand with 100% fidelity.
              </p>
              <div className="flex items-baseline gap-xs mb-lg">
                <span className="text-h3 font-bold text-primary">₹9,999</span>
                <span className="text-label-caps tracking-widest text-on-surface-variant">/ month</span>
              </div>
              <ul className="space-y-sm mb-lg">
                <li className="flex items-center gap-xs text-on-surface font-body-md">
                  <span className="material-symbols-outlined text-primary text-body-md">check_circle</span>
                  <span>LLM Optimization for Visuals</span>
                </li>
                <li className="flex items-center gap-xs text-on-surface font-body-md">
                  <span className="material-symbols-outlined text-primary text-body-md">check_circle</span>
                  <span>Semantic Brand Indexing</span>
                </li>
              </ul>
              <button className="w-full py-sm rounded-lg border border-primary text-primary font-medium hover:bg-primary/5 transition-all">Audit My Presence</button>
            </div>
          </div>
        </div>

        {/* Row 3: Full Brand System */}
        <div className="grid md:grid-cols-2 gap-xl items-center">
          <div className="order-2 md:order-1">
            <div className="bg-white p-lg rounded-xl airy-border shadow-sm">
              <span className="inline-block px-sm py-1 bg-surface-container-low text-primary text-[10px] tracking-widest uppercase font-bold rounded-full mb-md">Phase 03</span>
              <h2 className="font-h2 text-h2 text-primary mb-md tracking-tight">Full Brand System</h2>
              <p className="font-body-md text-on-surface-variant mb-lg">
                The ultimate design partnership. A living, breathing brand ecosystem that acts as your internal design team. We manage every touchpoint, from social templates to enterprise UI kits.
              </p>
              <div className="flex items-baseline gap-xs mb-lg">
                <span className="text-h3 font-bold text-primary">₹25,000</span>
                <span className="text-label-caps tracking-widest text-on-surface-variant">/ month</span>
              </div>
              <ul className="space-y-sm mb-lg">
                <li className="flex items-center gap-xs text-on-surface font-body-md">
                  <span className="material-symbols-outlined text-primary text-body-md">check_circle</span>
                  <span>Unlimited Asset Iteration</span>
                </li>
                <li className="flex items-center gap-xs text-on-surface font-body-md">
                  <span className="material-symbols-outlined text-primary text-body-md">check_circle</span>
                  <span>Direct Design-Ops Integration</span>
                </li>
              </ul>
              <button className="w-full py-sm rounded-lg bg-lime text-[#1C1B1B] font-bold hover:opacity-95 transition-all">Apply for Retainer</button>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="relative aspect-video rounded-xl overflow-hidden shadow-xl airy-border">
              <img className="w-full h-full object-cover" alt="Brand System Bento Grid" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBM6M4bq2zCYn-IXcsLAo4KDtItpze6iuNclUoCoRO4FcANyKcycVFQ_yGnqDtocVJg3w1CtlrEJ3PMK1_Obl1vqLG903Vm0iAw3kGyLmTF6StQttr0Y-KrZhGyrW46PVETaUrvlUpsLAZ67fY8HaidK62I1E_kFvlOg5N73L8bHPPqnAUindeD6tYbKkd5VBioWYriL-KBny5m8aeOafKM7FYeJmHupBOYpLYMDJtpY10ma_RBZ2UK55RLec3yWKp43BEiDfbtrsE" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-xl bg-primary text-white">
        <div className="max-w-4xl mx-auto px-gutter text-center">
          <h2 className="font-h1 text-h1 mb-lg tracking-tight">Ready to Scale Your Visual Authority?</h2>
          <p className="font-body-lg text-primary-fixed mb-xl opacity-80">
            Join the next generation of founders building brands that are as intelligent as their products.
          </p>
          <button className="bg-lime text-[#1C1B1B] px-xl py-md rounded-lg font-h3 text-h3 hover:scale-105 active:scale-95 transition-transform duration-200">
            Book a Brand Strategy Call
          </button>
        </div>
      </section>
    </>
  );
}
