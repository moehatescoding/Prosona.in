import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Hero from './components/Hero';
import Tilt from '@/components/ui/Tilt';

export const metadata: Metadata = {
  title: 'PROSONΛ | Systems That Turn Attention Into Revenue',
  description: 'AI-powered systems that build your brand and drive your growth. Scalable demand, automated visibility, and category-defining brand engines.',
  openGraph: {
    title: 'PROSONΛ | Systems That Turn Attention Into Revenue',
    description: 'AI-powered systems that build your brand and drive your growth. Scalable demand, automated visibility, and category-defining brand engines.',
    images: ['/logo.svg'],
  },
};

export default function Home() {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Hero Section */}
      <Hero />

      {/* Services Section */}
      <section className="py-xl bg-white/60 backdrop-blur-xl px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="font-h2 text-[32px] md:text-[44px] text-primary tracking-tight">Every growth &amp; brand system your business needs.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1 - Autopilot */}
            <Tilt className="h-full">
              <div className="uiverse-card group h-full">
                <div className="uiverse-card-inner p-lg flex flex-col justify-end">
                  <div className="w-12 h-12 rounded-xl bg-purple/5 flex items-center justify-center mb-6 text-purple group-hover:bg-purple group-hover:text-white transition-colors">
                    <span className="material-symbols-outlined">bolt</span>
                  </div>
                  <h3 className="font-h3 text-h3 mb-4 text-primary uppercase tracking-tight">Autopilot</h3>
                  <p className="text-slate-500 mb-8 leading-relaxed font-body-md">Your always-on growth engine — content, distribution, and performance running itself.</p>
                  <ul className="space-y-3 font-body-md mt-auto">
                    <li className="flex items-center gap-2 text-sm text-slate-600"><span className="material-symbols-outlined text-xs">check</span> AI Content Creation</li>
                    <li className="flex items-center gap-2 text-sm text-slate-600"><span className="material-symbols-outlined text-xs">check</span> Multi-channel Sync</li>
                    <li className="flex items-center gap-2 text-sm text-slate-600"><span className="material-symbols-outlined text-xs">check</span> Performance Tracking</li>
                  </ul>
                </div>
              </div>
            </Tilt>

            {/* Card 2 - Demand Systems */}
            <Tilt className="h-full">
              <div className="uiverse-card group h-full">
                <div className="uiverse-card-inner p-lg flex flex-col justify-end">
                  <div className="w-12 h-12 rounded-xl bg-purple/5 flex items-center justify-center mb-6 text-purple group-hover:bg-purple group-hover:text-white transition-colors">
                    <span className="material-symbols-outlined">trending_up</span>
                  </div>
                  <h3 className="font-h3 text-h3 mb-4 text-primary uppercase tracking-tight">Demand Systems</h3>
                  <p className="text-slate-500 mb-8 leading-relaxed font-body-md">Automated acquisition engines built to convert high-intent traffic into qualified revenue.</p>
                  <ul className="space-y-3 font-body-md mt-auto">
                    <li className="flex items-center gap-2 text-sm text-slate-600"><span className="material-symbols-outlined text-xs">check</span> Scalable Conversion</li>
                    <li className="flex items-center gap-2 text-sm text-slate-600"><span className="material-symbols-outlined text-xs">check</span> Intent Acquisition</li>
                    <li className="flex items-center gap-2 text-sm text-slate-600"><span className="material-symbols-outlined text-xs">check</span> Revenue Engine</li>
                  </ul>
                </div>
              </div>
            </Tilt>

            {/* Card 3 - Visibility Systems */}
            <Tilt className="h-full">
              <div className="uiverse-card group h-full">
                <div className="uiverse-card-inner p-lg flex flex-col justify-end">
                  <div className="w-12 h-12 rounded-xl bg-purple/5 flex items-center justify-center mb-6 text-purple group-hover:bg-purple group-hover:text-white transition-colors">
                    <span className="material-symbols-outlined">travel_explore</span>
                  </div>
                  <h3 className="font-h3 text-h3 mb-4 text-primary uppercase tracking-tight">Visibility Systems</h3>
                  <p className="text-slate-500 mb-8 leading-relaxed font-body-md">AI search optimization &amp; search placement that keeps your brand discoverable 24/7.</p>
                  <ul className="space-y-3 font-body-md mt-auto">
                    <li className="flex items-center gap-2 text-sm text-slate-600"><span className="material-symbols-outlined text-xs">check</span> AI Search Ranking</li>
                    <li className="flex items-center gap-2 text-sm text-slate-600"><span className="material-symbols-outlined text-xs">check</span> Omnichannel Reach</li>
                    <li className="flex items-center gap-2 text-sm text-slate-600"><span className="material-symbols-outlined text-xs">check</span> Search Dominance</li>
                  </ul>
                </div>
              </div>
            </Tilt>

            {/* Card 4 - F&B */}
            <Tilt className="h-full">
              <div className="uiverse-card group h-full">
                <div className="uiverse-card-inner p-lg flex flex-col justify-end">
                  <div className="w-12 h-12 rounded-xl bg-purple/5 flex items-center justify-center mb-6 text-purple group-hover:bg-purple group-hover:text-white transition-colors">
                    <span className="material-symbols-outlined">restaurant</span>
                  </div>
                  <h3 className="font-h3 text-h3 mb-4 text-primary">F&amp;B</h3>
                  <p className="text-slate-500 mb-8 leading-relaxed font-body-md">Specialized revenue and brand systems for restaurants &amp; café brands. Drive loyalty and local demand.</p>
                  <ul className="space-y-3 font-body-md mt-auto">
                    <li className="flex items-center gap-2 text-sm text-slate-600"><span className="material-symbols-outlined text-xs">check</span> Revenue-Focused Menus</li>
                    <li className="flex items-center gap-2 text-sm text-slate-600"><span className="material-symbols-outlined text-xs">check</span> Local Map Dominance</li>
                    <li className="flex items-center gap-2 text-sm text-slate-600"><span className="material-symbols-outlined text-xs">check</span> Repeat Customer Loops</li>
                  </ul>
                </div>
              </div>
            </Tilt>

            {/* Card 5 - FMCG */}
            <Tilt className="h-full">
              <div className="uiverse-card group h-full">
                <div className="uiverse-card-inner p-lg flex flex-col justify-end">
                  <div className="w-12 h-12 rounded-xl bg-purple/5 flex items-center justify-center mb-6 text-purple group-hover:bg-purple group-hover:text-white transition-colors">
                    <span className="material-symbols-outlined">shopping_basket</span>
                  </div>
                  <h3 className="font-h3 text-h3 mb-4 text-primary">FMCG</h3>
                  <p className="text-slate-500 mb-8 leading-relaxed font-body-md">High-converting retail and quick-commerce brand engines built to dominate shelf space and digital carts.</p>
                  <ul className="space-y-3 font-body-md mt-auto">
                    <li className="flex items-center gap-2 text-sm text-slate-600"><span className="material-symbols-outlined text-xs">check</span> Q-Commerce Onboarding</li>
                    <li className="flex items-center gap-2 text-sm text-slate-600"><span className="material-symbols-outlined text-xs">check</span> Shelf &amp; Cart Dominance</li>
                    <li className="flex items-center gap-2 text-sm text-slate-600"><span className="material-symbols-outlined text-xs">check</span> 30-Day Go-Live</li>
                  </ul>
                </div>
              </div>
            </Tilt>

            {/* Card 6 - Brand Systems */}
            <Tilt className="h-full">
              <div className="uiverse-card group h-full">
                <div className="uiverse-card-inner p-lg flex flex-col justify-end">
                  <div className="w-12 h-12 rounded-xl bg-purple/5 flex items-center justify-center mb-6 text-purple group-hover:bg-purple group-hover:text-white transition-colors">
                    <span className="material-symbols-outlined">layers</span>
                  </div>
                  <h3 className="font-h3 text-h3 mb-4 text-primary uppercase tracking-tight">Brand Systems</h3>
                  <p className="text-slate-500 mb-8 leading-relaxed font-body-md">Scalable visual &amp; strategic foundations designed for rapid market expansion and category dominance.</p>
                  <ul className="space-y-3 font-body-md mt-auto">
                    <li className="flex items-center gap-2 text-sm text-slate-600"><span className="material-symbols-outlined text-xs">check</span> Scalable Guidelines</li>
                    <li className="flex items-center gap-2 text-sm text-slate-600"><span className="material-symbols-outlined text-xs">check</span> Dynamic Asset Libraries</li>
                    <li className="flex items-center gap-2 text-sm text-slate-600"><span className="material-symbols-outlined text-xs">check</span> Multi-touchpoint Cohesion</li>
                  </ul>
                </div>
              </div>
            </Tilt>

            {/* Card 7 - Personal Branding */}
            <Tilt className="h-full">
              <div className="uiverse-card group h-full">
                <div className="uiverse-card-inner p-lg flex flex-col justify-end">
                  <div className="w-12 h-12 rounded-xl bg-purple/5 flex items-center justify-center mb-6 text-purple group-hover:bg-purple group-hover:text-white transition-colors">
                    <span className="material-symbols-outlined">person_pin</span>
                  </div>
                  <h3 className="font-h3 text-h3 mb-4 text-primary uppercase tracking-tight">Personal Branding</h3>
                  <p className="text-slate-500 mb-8 leading-relaxed font-body-md">Turn executive authority into scalable lead pipeline, investor trust, and industry influence.</p>
                  <ul className="space-y-3 font-body-md mt-auto">
                    <li className="flex items-center gap-2 text-sm text-slate-600"><span className="material-symbols-outlined text-xs">check</span> Executive Authority</li>
                    <li className="flex items-center gap-2 text-sm text-slate-600"><span className="material-symbols-outlined text-xs">check</span> Lead Pipeline Engine</li>
                    <li className="flex items-center gap-2 text-sm text-slate-600"><span className="material-symbols-outlined text-xs">check</span> Audience Expansion</li>
                  </ul>
                </div>
              </div>
            </Tilt>

            {/* Card 8 - Brand Audit */}
            <Tilt className="h-full">
              <div className="uiverse-card group h-full">
                <div className="uiverse-card-inner p-lg flex flex-col justify-end">
                  <div className="w-12 h-12 rounded-xl bg-purple/5 flex items-center justify-center mb-6 text-purple group-hover:bg-purple group-hover:text-white transition-colors">
                    <span className="material-symbols-outlined">fact_check</span>
                  </div>
                  <h3 className="font-h3 text-h3 mb-4 text-primary uppercase tracking-tight">Brand Audit</h3>
                  <p className="text-slate-500 mb-8 leading-relaxed font-body-md">Diagnose growth gaps, conversion friction, and revenue leakage across your entire presence.</p>
                  <ul className="space-y-3 font-body-md mt-auto">
                    <li className="flex items-center gap-2 text-sm text-slate-600"><span className="material-symbols-outlined text-xs">check</span> Revenue Friction Audit</li>
                    <li className="flex items-center gap-2 text-sm text-slate-600"><span className="material-symbols-outlined text-xs">check</span> Growth Gap Analysis</li>
                    <li className="flex items-center gap-2 text-sm text-slate-600"><span className="material-symbols-outlined text-xs">check</span> Prioritized Action Plan</li>
                  </ul>
                </div>
              </div>
            </Tilt>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-xl bg-purple-light/60 backdrop-blur-xl px-8 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
          <div className="space-y-2">
            <div className="font-h1 text-[48px] md:text-[60px] text-purple leading-none tracking-tighter">3×</div>
            <div className="font-label-caps text-[11px] text-purple/70 uppercase tracking-widest">Content Output</div>
          </div>
          <div className="space-y-2">
            <div className="font-h1 text-[48px] md:text-[60px] text-purple leading-none tracking-tighter">Top 3</div>
            <div className="font-label-caps text-[11px] text-purple/70 uppercase tracking-widest">AI Search Ranking</div>
          </div>
          <div className="space-y-2">
            <div className="font-h1 text-[48px] md:text-[60px] text-purple leading-none tracking-tighter">100%</div>
            <div className="font-label-caps text-[11px] text-purple/70 uppercase tracking-widest">Brand Consistency</div>
          </div>
          <div className="space-y-2">
            <div className="font-h1 text-[48px] md:text-[60px] text-purple leading-none tracking-tighter">2×</div>
            <div className="font-label-caps text-[11px] text-purple/70 uppercase tracking-widest">Lead Growth</div>
          </div>
          <div className="space-y-2 col-span-2 md:col-span-1">
            <div className="font-h1 text-[48px] md:text-[60px] text-purple leading-none tracking-tighter">50%</div>
            <div className="font-label-caps text-[11px] text-purple/70 uppercase tracking-widest">Faster Launch</div>
          </div>
        </div>
      </section>

      {/* Client Marquee */}
      <section className="py-sm border-y border-border bg-white/60 backdrop-blur-xl overflow-hidden relative z-10">
        <div className="marquee-container">
          <div className="marquee-content animate-scroll">
            <span className="text-2xl font-bold tracking-widest text-[#C4BAC8] font-h1">KOVA</span>
            <span className="text-2xl font-bold tracking-widest text-[#C4BAC8] font-h1">NORDE</span>
            <span className="text-2xl font-bold tracking-widest text-[#C4BAC8] font-h1">AXIOM</span>
            <span className="text-2xl font-bold tracking-widest text-[#C4BAC8] font-h1">VEER</span>
            <span className="text-2xl font-bold tracking-widest text-[#C4BAC8] font-h1">MODERN</span>
            <span className="text-2xl font-bold tracking-widest text-[#C4BAC8] font-h1">ELARA</span>
          </div>
          <div aria-hidden="true" className="marquee-content animate-scroll">
            <span className="text-2xl font-bold tracking-widest text-[#C4BAC8] font-h1">KOVA</span>
            <span className="text-2xl font-bold tracking-widest text-[#C4BAC8] font-h1">NORDE</span>
            <span className="text-2xl font-bold tracking-widest text-[#C4BAC8] font-h1">AXIOM</span>
            <span className="text-2xl font-bold tracking-widest text-[#C4BAC8] font-h1">VEER</span>
            <span className="text-2xl font-bold tracking-widest text-[#C4BAC8] font-h1">MODERN</span>
            <span className="text-2xl font-bold tracking-widest text-[#C4BAC8] font-h1">ELARA</span>
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-xl bg-bg/40 backdrop-blur-sm px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <h2 className="font-h2 text-h2 text-primary tracking-tight">Latest Perspectives</h2>
            <Link className="text-purple font-medium flex items-center gap-1 group font-body-md" href="/blog">
              Explore Blog <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Tilt className="h-full">
              <div className="bg-white/80 rounded-2xl overflow-hidden border border-border group cursor-pointer blog-card-hover h-full shadow-sm hover:shadow-md">
                <div className="h-48 overflow-hidden">
                  <Image 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    alt="Blog 1" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdQm_U2ktoez25vf2lQuShNUE5w_ZfIrldg8jOF2yjZd933cFWpy7tgWUDsP3PoplcLHSwf1LFL6K6qDYeKeOW7SSEqOQYJkAtsQpuALkiCdcjOQHZ2dxWq7pUd-sqyCKSnOvVqV9TkELj58eA6KZBAXj5K8Q2bxG6x-zdKefkdvjUxCkd-55S1o0wCmstWrX4OTxOd2MwNiQ6IPJdLSmiTp40g855hxuPNfUw9yS8l-UX4WMQ3Ns77-dZAeqCsN8k90Y-Oq-egOM" 
                    width={400}
                    height={250}
                  />
                </div>
                <div className="p-sm">
                  <span className="font-label-caps text-[10px] text-purple bg-purple/5 px-2 py-0.5 rounded tracking-widest">DEMAND</span>
                  <h3 className="font-h3 text-xl mt-3 text-primary leading-tight">The System Behind Consistent Demand</h3>
                </div>
              </div>
            </Tilt>
            <Tilt className="h-full">
              <div className="bg-white/80 rounded-2xl overflow-hidden border border-border group cursor-pointer blog-card-hover h-full shadow-sm hover:shadow-md">
                <div className="h-48 overflow-hidden">
                  <Image 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    alt="Blog 2" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3bCau-AQ9ZayQ2EPszjNPQOybGm2iJCmNBmrtizpzPU12vBDgKtH9sSReknDGjCX8pi-2jtQH3ETUiDT5c0IccRZCLGSaMqgKYtXM9sriVhVN5t1k5n9B--EYZ2XP4JO2fbU4mopnu1QwDmyOyOCdZTEFm1X02yXWYlmyzPmEBCahkfglhIkyYxtebkcJdi7MJo8Cj9390ScVK2Hh0lqI34ekta825t5KRIoFQylGDsoiyo7OGne4a-qHlaFwRyUCvR9caaHiU0o" 
                    width={400}
                    height={250}
                  />
                </div>
                <div className="p-sm">
                  <span className="font-label-caps text-[10px] text-purple bg-purple/5 px-2 py-0.5 rounded tracking-widest">VISIBILITY</span>
                  <h3 className="font-h3 text-xl mt-3 text-primary leading-tight">How AI Search Is Changing Brand Visibility</h3>
                </div>
              </div>
            </Tilt>
            <Tilt className="h-full">
              <div className="bg-white/80 rounded-2xl overflow-hidden border border-border group cursor-pointer blog-card-hover h-full shadow-sm hover:shadow-md">
                <div className="h-48 overflow-hidden">
                  <Image 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    alt="Blog 3" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDs_-RVT_cFdqS4XUIjUGyHFKHuoi-x6yAu5wwh1IyjvXYMSVey_kOiKroF-xANOP4YmE32275uJTi1LSyHJA8-LGZj4wMBDZhRunFgo8-vXNYvv1plKTR0-D9PO3qtI7LRDdXre4foR9I2qPJst1K5vbZcXveSV6DCo0q7UCzzO2DBjV_6WuS3nmQvw6VzgbsIhaduzY6jOz6rm5sCO0QXMk0avy0xfkm-3RvlOEAPlmQYf5cSqk_gPDx_79NgC0hnbdY90CD8_zA" 
                    width={400}
                    height={250}
                  />
                </div>
                <div className="p-sm">
                  <span className="font-label-caps text-[10px] text-purple bg-purple/5 px-2 py-0.5 rounded tracking-widest">AUTOPILOT</span>
                  <h3 className="font-h3 text-xl mt-3 text-primary leading-tight">Content Autopilot: The New Growth Standard</h3>
                </div>
              </div>
            </Tilt>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-xl bg-purple-light/60 backdrop-blur-xl px-8 text-center relative overflow-hidden z-10">
        <div className="max-w-3xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple/20 bg-white/80 text-purple mb-8 font-label-caps text-[10px] tracking-[2px] shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
            AI-FIRST GROWTH &amp; BRAND STUDIO
          </div>
          <h2 className="font-h2 text-[32px] md:text-[48px] text-primary mb-8 leading-tight tracking-tight">Your brand shouldn&apos;t just look good — it should bring in business.</h2>
          <Link 
            href="/contact"
            className="inline-block bg-purple text-white px-10 py-5 rounded-lg font-bold text-lg shadow-[0_4px_14px_0_rgba(91,44,107,0.39)] hover:shadow-[0_6px_20px_rgba(91,44,107,0.23)] hover:-translate-y-0.5 active:shadow-[0_2px_4px_rgba(91,44,107,0.4)] active:translate-y-[1px] transition-all duration-200 font-body-md"
          >
            Build Your Growth System →
          </Link>
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 z-[-1]"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 z-[-1]"></div>
      </section>
    </div>
  );
}
