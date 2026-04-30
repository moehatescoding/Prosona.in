import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'F&B Brand Systems | PROSONΛ',
  description: 'Specialized brand systems for Restaurants & Café Brands. From menu engineering to digital presence.',
  openGraph: {
    title: 'F&B Brand Systems | PROSONΛ',
    description: 'Specialized brand systems for Restaurants & Café Brands. From menu engineering to digital presence.',
    images: ['/logo.svg'],
  },
};

export default function FnB() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-[120px] pb-xl px-8 bg-bg">
        <div className="max-w-7xl mx-auto text-center md:text-left">
          <span className="font-label-caps text-label-caps text-primary-container bg-primary-fixed/30 px-sm py-xs rounded-full inline-block mb-md tracking-widest">
            F&B BRAND SYSTEMS
          </span>
          <h1 className="font-h1 text-[60px] leading-[1.05] text-primary mb-lg max-w-3xl tracking-tight">
            Your Restaurant, Running on Brand.
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-lg">
            We build brand systems for restaurants, cafés, and cloud kitchens that drive loyalty and automate growth. From visual identity to search visibility, we ensure your brand works as hard as your kitchen.
          </p>
          <button className="bg-lime text-on-surface px-lg py-sm rounded-lg font-h3 text-body-md font-bold hover:translate-y-[-2px] transition-transform duration-200 shadow-sm">
            Build My F&B Brand →
          </button>
        </div>
      </section>

      {/* Services Rows */}
      {/* Row 1 */}
      <section className="py-xl px-8 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-xl items-center">
          <div className="order-2 md:order-1">
            <img alt="Restaurant identity sheet" className="rounded-xl shadow-lg w-full aspect-[4/3] object-cover tinted-border" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQE7mDrcG13uJY4FUqJtcZGImLOST2_9-2RzDxZliVfbFkEdm83-iLEoefSJCJOQWw0rHL1E9FgD7A1CXsDsh5i3LLgvLD1KSXnUWhqviuhZre414KBNct1fhTcUT4E30GGFyBZm9VuRfVRiFVr1HIkK0wLcgyOJ8l4outVRoNhCVbCuADaBLwquHJbRHCZlgUMeXhJ16hiGJuhevqjueMPSKyKdB078pLFwv2EZsMEvtGFjsUmpMd_dn5CxujtbkbENmyX6Xk41Q" />
          </div>
          <div className="order-1 md:order-2">
            <span className="font-label-caps text-label-caps text-secondary font-bold mb-xs block tracking-widest">01 F&B Brand Identity</span>
            <h2 className="font-h2 text-h2 text-primary mb-md tracking-tight">Signature Identity Systems</h2>
            <ul className="space-y-sm mb-lg">
              <li className="flex items-center gap-xs font-body-md text-on-surface">
                <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                Custom Logo Design & Variations
              </li>
              <li className="flex items-center gap-xs font-body-md text-on-surface">
                <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                Digital & Physical Menu Architectures
              </li>
              <li className="flex items-center gap-xs font-body-md text-on-surface">
                <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                Packaging & Collateral Design
              </li>
            </ul>
            <div className="p-md bg-surface-container-low rounded-lg inline-block tinted-border">
              <p className="font-label-caps text-slate-500 mb-unit tracking-widest">INVESTMENT</p>
              <p className="font-h3 text-primary">Starting at ₹15,000</p>
            </div>
          </div>
        </div>
      </section>

      {/* Row 2 */}
      <section className="py-xl px-8 bg-bg">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-xl items-center">
          <div>
            <span className="font-label-caps text-label-caps text-secondary font-bold mb-xs block tracking-widest">02 Social Content Autopilot</span>
            <h2 className="font-h2 text-h2 text-primary mb-md tracking-tight">Visual Storytelling on Repeat</h2>
            <p className="font-body-md text-on-surface-variant mb-lg">
              Stop worrying about what to post. Our AI-enhanced content systems create a month of aesthetic food photography and engaging reels in a single session.
            </p>
            <div className="p-md bg-white rounded-lg inline-block tinted-border">
              <p className="font-label-caps text-slate-500 mb-unit tracking-widest">RECURRING</p>
              <p className="font-h3 text-primary">Starting at ₹12,000/month</p>
            </div>
          </div>
          <div>
            <img alt="Content calendar for restaurant" className="rounded-xl shadow-lg w-full aspect-[4/3] object-cover tinted-border" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDeYhItvcJQOjM5BDSTKjl0UNYMk0IX23P0LDMKf1ZPmGs_OGP4M_pb4_bSdDR55L_-kAFAS9WGkZDLX39xrxy1h3KA_c7yTZej1mXdzZ5D9WTZd5olxiC4ZxRuvj9g1pMEkSDG3fYQjbPoIFmttKdCZJcHqHHq9w0A8lha6FYolU35kIbCKNBT0bP8QRgEjHbYjMrEr-S7CwsEFuE7oIkQEAF3ZuLo3WyD1OIPhR8sfY2agb6m2pw-E17JgpKa-mNQgm4_VNAdhs8" />
          </div>
        </div>
      </section>

      {/* Row 3 */}
      <section className="py-xl px-8 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-xl items-center">
          <div className="order-2 md:order-1">
            <img alt="Zomato and Google presence" className="rounded-xl shadow-lg w-full aspect-[4/3] object-cover tinted-border" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5-uHyKdSpZVM4gnUoONsPpzEcHsxQZUwACjTTv-C6ngYr4_jq3-5ExnZDTlKPLClzNW6tF1qoJ4fG7Ch2l8g8ScPNuVDCTe_O01tQ4bBPBxbF6RKlg_-WxioITBgw8eW76CsdkVd5lpK2QDo_T-xD14E-_RRy384eSvJbHLyOOCztR9dTtbPlmPOViuAEjhdYJ78Qm6Exo5xuuJwy1BJWqOV6FO8Nr5Onsr4FnKRqm1guH8Jq0IeiuHBH9xwyNTZBHD3wkNabfpI" />
          </div>
          <div className="order-1 md:order-2">
            <span className="font-label-caps text-label-caps text-secondary font-bold mb-xs block tracking-widest">03 Visibility & AI Search</span>
            <h2 className="font-h2 text-h2 text-primary mb-md tracking-tight">Dominate the Local Map</h2>
            <p className="font-body-md text-on-surface-variant mb-lg">
              We optimize your profiles for the way people search today. Whether it's Zomato algorithms or AI-driven local search, we make sure you're the first choice.
            </p>
            <div className="p-md bg-surface-container-low rounded-lg inline-block tinted-border">
              <p className="font-label-caps text-slate-500 mb-unit tracking-widest">MANAGEMENT</p>
              <p className="font-h3 text-primary">Starting at ₹8,000/month</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-xl px-8">
        <div className="max-w-5xl mx-auto bg-primary-container rounded-[32px] p-xl text-center relative overflow-hidden">
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-fixed/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
          <div className="relative z-10">
            <div className="inline-flex items-center gap-sm bg-white/10 px-md py-xs rounded-full text-on-primary-container font-label-caps mb-lg border border-white/20 tracking-widest">
              <span className="material-symbols-outlined text-sm">autorenew</span>
              Your brand shouldn't need you to run it.
            </div>
            <h2 className="font-h2 text-h1 text-white mb-lg tracking-tight">Ready to automate your F&B brand?</h2>
            <div className="flex flex-col md:flex-row justify-center gap-md">
              <button className="bg-lime text-on-surface px-lg py-sm rounded-lg font-h3 text-body-md font-bold hover:scale-105 transition-all">
                Talk to Our Studio
              </button>
              <button className="border border-white/30 text-white px-lg py-sm rounded-lg font-h3 text-body-md font-medium hover:bg-white/10 transition-all">
                View Portfolio
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
