import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | PROSONΛ',
  description: 'Start your brand system. Connect with us to explore AI-first brand transformation.',
  openGraph: {
    title: 'Contact | PROSONΛ',
    description: 'Start your brand system. Connect with us to explore AI-first brand transformation.',
    images: ['/logo.svg'],
  },
};

export default function Contact() {
  return (
    <>
      <div className="flex flex-col md:flex-row min-h-screen">
        <div className="w-full bg-bg p-8 md:p-24 flex flex-col justify-between relative overflow-hidden md:w-1/2 min-h-[50vh]">
          <div className="z-10 mt-16 md:mt-0">
            <span className="font-label-caps text-label-caps text-purple mb-6 block tracking-widest">CONNECT WITH US</span>
            <h1 className="font-h1 text-[56px] text-primary max-w-md mb-12 tracking-tight leading-tight">Start your brand system.</h1>
            <div className="space-y-10">
              {/* Info Row 1 */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-border">
                  <span className="material-symbols-outlined text-purple">mail</span>
                </div>
                <div>
                  <p className="font-label-caps text-label-caps text-slate-500 mb-1 tracking-widest">EMAIL</p>
                  <p className="font-body-lg text-body-lg text-on-surface">contact@prosona.in</p>
                </div>
              </div>
              {/* Info Row 2 */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-border">
                  <span className="material-symbols-outlined text-purple">schedule</span>
                </div>
                <div>
                  <p className="font-label-caps text-label-caps text-slate-500 mb-1 tracking-widest">RESPONSE TIME</p>
                  <p className="font-body-lg text-body-lg text-on-surface">Under 24 hours</p>
                </div>
              </div>
              {/* Info Row 3 */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-border">
                  <span className="material-symbols-outlined text-purple">location_on</span>
                </div>
                <div>
                  <p className="font-label-caps text-label-caps text-slate-500 mb-1 tracking-widest">LOCATION</p>
                  <p className="font-body-lg text-body-lg text-on-surface">Remote First • India HQ</p>
                </div>
              </div>
            </div>
          </div>
          {/* Large Decorative Icon */}
          <div className="absolute -bottom-20 -right-10 opacity-[0.06] pointer-events-none select-none">
            <span className="font-h1 text-[400px] leading-none text-purple font-light">Λ</span>
          </div>
        </div>
        
        {/* Right Column: Minimal Form */}
        <div className="w-full md:w-1/2 bg-white md:border-l border-t md:border-t-0 border-border p-8 md:p-24 flex flex-col justify-center">
          <div className="max-w-xl w-full mx-auto">
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="font-label-caps text-[10px] text-slate-400 tracking-widest">FULL NAME</label>
                  <input className="w-full border-b border-slate-200 border-t-0 border-x-0 bg-transparent py-3 px-0 focus:ring-0 focus:border-purple outline-none transition-colors font-body-md" placeholder="John Doe" type="text" />
                </div>
                <div className="space-y-2">
                  <label className="font-label-caps text-[10px] text-slate-400 tracking-widest">EMAIL ADDRESS</label>
                  <input className="w-full border-b border-slate-200 border-t-0 border-x-0 bg-transparent py-3 px-0 focus:ring-0 focus:border-purple outline-none transition-colors font-body-md" placeholder="john@example.com" type="email" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="font-label-caps text-[10px] text-slate-400 tracking-widest">COMPANY</label>
                  <input className="w-full border-b border-slate-200 border-t-0 border-x-0 bg-transparent py-3 px-0 focus:ring-0 focus:border-purple outline-none transition-colors font-body-md" placeholder="Brand Inc." type="text" />
                </div>
                <div className="space-y-2">
                  <label className="font-label-caps text-[10px] text-slate-400 tracking-widest">SERVICE INTEREST</label>
                  <select className="w-full border-b border-slate-200 border-t-0 border-x-0 bg-transparent py-3 px-0 focus:ring-0 focus:border-purple outline-none transition-colors font-body-md appearance-none cursor-pointer">
                    <option value="" disabled selected>Select a service</option>
                    <option>F&B Branding</option>
                    <option>FMCG Branding</option>
                    <option>Brand Systems</option>
                    <option>Building Brands</option>
                    <option>Personal Branding</option>
                    <option>Automation Systems</option>
                    <option>Brand Audits</option>
                    <option>Digital Strategy</option>
                    <option>Full AI Transformation</option>
                    <option>AI Brand Kit</option>
                    <option>Brand Templates</option>
                    <option>Integrations</option>
                  </select>
                </div>
              </div>
              <div className="space-y-2">
                <label className="font-label-caps text-[10px] text-slate-400 tracking-widest">ESTIMATED BUDGET</label>
                <select className="w-full border-b border-slate-200 border-t-0 border-x-0 bg-transparent py-3 px-0 focus:ring-0 focus:border-purple outline-none transition-colors font-body-md appearance-none">
                  <option>$10k — $25k</option>
                  <option>$25k — $50k</option>
                  <option>$50k — $100k</option>
                  <option>$100k+</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="font-label-caps text-[10px] text-slate-400 tracking-widest">MESSAGE</label>
                <textarea className="w-full border-b border-slate-200 border-t-0 border-x-0 bg-transparent py-3 px-0 focus:ring-0 focus:border-purple outline-none transition-colors font-body-md resize-none" placeholder="Tell us about your project goals..." rows={4}></textarea>
              </div>
              <div className="pt-8">
                <button className="group flex items-center gap-4 bg-purple text-white px-10 py-5 rounded-lg text-sm font-semibold tracking-wider hover:opacity-90 transition-all active:scale-95" type="submit">
                  Send It 
                  <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
