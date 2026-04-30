import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Content Automation | PROSONΛ',
  description: 'AI-powered content systems that learn your brand voice and generate high-performing posts.',
  openGraph: {
    title: 'Content Automation | PROSONΛ',
    description: 'AI-powered content systems that learn your brand voice and generate high-performing posts.',
    images: ['/logo.svg'],
  },
};

export default function Automation() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="bg-bg py-xl lg:py-48 px-gutter">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <span className="inline-block bg-purple-light px-4 py-1.5 rounded-full text-label-caps font-label-caps text-primary uppercase mb-lg tracking-widest">CONTENT AUTOMATION</span>
          <h1 className="font-h1 text-[36px] sm:text-[44px] md:text-[50px] lg:text-[56px] xl:text-[60px] leading-[1.1] text-primary mb-lg max-w-none tracking-tight lg:whitespace-nowrap">Post Consistently. Without the Effort.</h1>
          <p className="font-body-lg text-on-surface-variant max-w-2xl mb-xl">We build AI-powered content systems that learn your brand voice and generate high-performing posts, so you can focus on building your business while we handle the distribution.</p>
          <div className="flex gap-md">
            <button className="bg-lime text-on-surface font-semibold px-8 py-4 rounded-lg shadow-sm hover:opacity-90 transition-all flex items-center gap-2">
              See How It Works <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
          <div className="mt-xl w-full max-w-5xl rounded-xl overflow-hidden tinted-border shadow-sm">
            <img className="w-full h-auto grayscale-[20%]" alt="Content automation workflow dashboard" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDCtsrGrxwS_oXGiMrDeQXWI2VS-63Q1Z_Za5mZbECo-y6S8H9ZIta5gzcGByrMTNklF1oCNGhu9EKTqwuu9rtcAAYGYfXFmdK6HXUv5CZiAQDwOMLgi9gDr-pS8Lid87_VLN1KbtS-KBLxriDwqiXuvPdL249xF8jH5jJj4H93tgk7xl6occZ_jaz6yS6zVjgxrPz35Ia3j_FqH5bILs7bbfcEWQGhiDF69ffLUz0eDUWesOInpTc4Qif01As_Jko6HeArftfUBqw" />
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-white py-xl lg:py-32 px-gutter">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-xl">
            <span className="font-label-caps text-label-caps text-primary tracking-[3px] mb-sm block">THE PROCESS</span>
            <h2 className="font-h2 text-[40px] text-primary tracking-tight">Simple. Consistent. On brand.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
            {/* Step 01 */}
            <div className="bg-white p-lg rounded-xl tinted-border hover:bg-purple-light transition-colors duration-300">
              <span className="text-primary font-h1 opacity-20 block mb-sm">01</span>
              <h3 className="font-h3 text-primary mb-sm">We learn.</h3>
              <p className="font-body-md text-on-surface-variant">Our system ingests your previous successful posts, brand guidelines, and tone of voice to create a unique AI model just for you.</p>
            </div>
            {/* Step 02 */}
            <div className="bg-white p-lg rounded-xl tinted-border hover:bg-purple-light transition-colors duration-300">
              <span className="text-primary font-h1 opacity-20 block mb-sm">02</span>
              <h3 className="font-h3 text-primary mb-sm">AI generates.</h3>
              <p className="font-body-md text-on-surface-variant">Using your custom model, we produce a full month of captions, graphics, and video scripts in a single batch processing cycle.</p>
            </div>
            {/* Step 03 */}
            <div className="bg-white p-lg rounded-xl tinted-border hover:bg-purple-light transition-colors duration-300">
              <span className="text-primary font-h1 opacity-20 block mb-sm">03</span>
              <h3 className="font-h3 text-primary mb-sm">You approve.</h3>
              <p className="font-body-md text-on-surface-variant">Review the entire calendar through our sleek approval portal. One click to schedule, and the system handles the rest.</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="bg-purple-light py-xl lg:py-32 px-gutter">
        <div className="max-w-5xl mx-auto bg-white p-xl rounded-xl tinted-border grid grid-cols-1 md:grid-cols-2 gap-xl">
          <div>
            <span className="font-label-caps text-label-caps text-primary mb-sm block tracking-widest">CAPABILITIES</span>
            <h2 className="font-h2 text-primary mb-md tracking-tight">Everything you need to scale.</h2>
            <p className="font-body-md text-on-surface-variant mb-lg">A full-service automation suite designed for founders and creators who want to stay relevant without spending hours on social media.</p>
            <img className="rounded-lg w-full aspect-video object-cover tinted-border" alt="Automation technology" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDaE3BQJxhcQd8voIH6vhvYqrO9ukd-0uIINMNIXSAf_dQcUrdt7Aj3thPOCA8KRzn7jg7m3b7eTBY1VtRiFvcoix6kl0cEiP4tNcnfC1bCg_21favpHehRXVeSC7iYhj-K89KDbmbky5RAtJ60FbkQbi_3PBvLczbM8FoI7MletdCSC3lbNaGqXXXYGH1ftcj-cElzMdnaA4LdBc76bKXDT5klXMZH9OzLkhhgBK0CCb8gpI9S_5FiIzjjjNtDiR4OWxJr956FT_A" />
          </div>
          <div className="flex flex-col justify-center">
            <ul className="space-y-md">
              <li className="flex items-center gap-md border-b border-border pb-md">
                <span className="material-symbols-outlined text-primary">check_circle</span>
                <span className="font-body-lg text-primary">Monthly content calendar</span>
              </li>
              <li className="flex items-center gap-md border-b border-border pb-md">
                <span className="material-symbols-outlined text-primary">check_circle</span>
                <span className="font-body-lg text-primary">AI-curated captions & hashtags</span>
              </li>
              <li className="flex items-center gap-md border-b border-border pb-md">
                <span className="material-symbols-outlined text-primary">check_circle</span>
                <span className="font-body-lg text-primary">Video scripts & storyboards</span>
              </li>
              <li className="flex items-center gap-md border-b border-border pb-md">
                <span className="material-symbols-outlined text-primary">check_circle</span>
                <span className="font-body-lg text-primary">Custom visual templates</span>
              </li>
              <li className="flex items-center gap-md border-b border-border pb-md">
                <span className="material-symbols-outlined text-primary">check_circle</span>
                <span className="font-body-lg text-primary">Cross-platform scheduling</span>
              </li>
              <li className="flex items-center gap-md">
                <span className="material-symbols-outlined text-primary">check_circle</span>
                <span className="font-body-lg text-primary">Weekly performance audits</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="bg-white py-xl lg:py-32 px-gutter">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-xl">
            <span className="font-label-caps text-label-caps text-primary tracking-[3px] mb-sm block">PLANS</span>
            <h2 className="font-h2 text-[40px] text-primary tracking-tight">Simple pricing for serious scale.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-lg max-w-4xl mx-auto">
            {/* Starter Plan */}
            <div className="bg-white p-xl rounded-xl tinted-border flex flex-col h-full hover:translate-y-[-4px] transition-transform duration-300">
              <div className="mb-lg">
                <h3 className="font-h3 text-primary mb-xs">Starter</h3>
                <p className="font-body-md text-on-surface-variant">Perfect for solo founders.</p>
              </div>
              <div className="mb-xl">
                <span className="text-[48px] font-h1 text-primary">₹9,999</span>
                <span className="text-on-surface-variant">/month</span>
              </div>
              <ul className="space-y-sm mb-xl flex-grow text-on-surface-variant">
                <li className="flex items-center gap-sm"><span className="material-symbols-outlined text-[18px]">done</span> 12 Posts per month</li>
                <li className="flex items-center gap-sm"><span className="material-symbols-outlined text-[18px]">done</span> Caption generation</li>
                <li className="flex items-center gap-sm"><span className="material-symbols-outlined text-[18px]">done</span> Basic visual assets</li>
                <li className="flex items-center gap-sm"><span className="material-symbols-outlined text-[18px]">done</span> Email support</li>
              </ul>
              <button className="w-full border-2 border-primary text-primary font-semibold py-3 rounded-lg hover:bg-primary hover:text-white transition-colors">Choose Starter</button>
            </div>
            {/* Growth Plan */}
            <div className="relative bg-white p-xl rounded-xl border-2 border-primary flex flex-col h-full hover:translate-y-[-4px] transition-transform duration-300">
              <div className="absolute top-0 right-8 -translate-y-1/2">
                <span className="bg-lime text-on-surface px-4 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase">MOST POPULAR</span>
              </div>
              <div className="mb-lg">
                <h3 className="font-h3 text-primary mb-xs">Growth</h3>
                <p className="font-body-md text-on-surface-variant">For growing teams & studios.</p>
              </div>
              <div className="mb-xl">
                <span className="text-[48px] font-h1 text-primary">₹14,999</span>
                <span className="text-on-surface-variant">/month</span>
              </div>
              <ul className="space-y-sm mb-xl flex-grow text-on-surface-variant">
                <li className="flex items-center gap-sm font-medium text-primary"><span className="material-symbols-outlined text-[18px]">done</span> Daily content posting</li>
                <li className="flex items-center gap-sm"><span className="material-symbols-outlined text-[18px]">done</span> Video script writing</li>
                <li className="flex items-center gap-sm"><span className="material-symbols-outlined text-[18px]">done</span> Advanced analytics</li>
                <li className="flex items-center gap-sm"><span className="material-symbols-outlined text-[18px]">done</span> Priority Slack support</li>
                <li className="flex items-center gap-sm"><span className="material-symbols-outlined text-[18px]">done</span> Brand voice refinement</li>
              </ul>
              <button className="w-full bg-primary text-white font-semibold py-3 rounded-lg hover:opacity-90 transition-opacity">Choose Growth</button>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-primary text-white py-xl px-gutter overflow-hidden relative">
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between gap-xl">
          <div className="max-w-2xl">
            <h2 className="font-h2 text-white mb-md tracking-tight">Ready to put your content on autopilot?</h2>
            <p className="font-body-lg text-primary-fixed opacity-90">Join 50+ businesses scaling their presence without the overhead of a full creative agency.</p>
          </div>
          <button className="bg-lime text-on-surface font-semibold px-12 py-5 rounded-lg whitespace-nowrap active:scale-95 transition-transform">Get Started Today</button>
        </div>
        {/* Abstract background shape */}
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-purple rounded-full opacity-20 blur-3xl"></div>
      </section>
    </>
  );
}
