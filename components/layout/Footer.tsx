"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const footerLinks = {
  branding: [
    { label: 'F&amp;B', href: '/fnb' },
    { label: 'FMCG', href: '/fmcg' },
    { label: 'Brand Systems', href: '/brand-systems' },
    { label: 'Building Brands', href: '/building-brands' },
  ],
  grow: [
    { label: 'Personal Branding', href: '/personal-branding' },
    { label: 'Automation', href: '/automation' },
    { label: 'Brand Audits', href: '/brand-audits' },
  ],
  tools: [
    { label: 'AI Brand Kit', href: '/ai-brand-kit' },
    { label: 'Brand Templates', href: '/brand-templates' },
    { label: 'Integrations', href: '/integrations' },
  ],
  company: [
    { label: 'Blog', href: '/blog' },
    { label: 'Product Updates', href: '/product-updates' },
    { label: 'Our Story', href: '/our-story' },
    { label: 'Contact', href: '/contact' },
  ],
};

const LinkColumn = ({ title, links }: { title: string; links: { label: string; href: string }[] }) => (
  <div className="flex flex-col gap-5">
    <h4 className="font-label-caps text-[11px] tracking-[0.15em] text-slate-400 uppercase font-semibold">
      {title}
    </h4>
    <ul className="flex flex-col gap-3">
      {links.map((link) => (
        <li key={link.href}>
          <Link
            href={link.href}
            className="text-slate-500 text-[14px] hover:text-purple transition-colors duration-200"
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail('');
    // Handle subscription logic here if needed
  };

  return (
    <footer className="w-full bg-white border-t border-border font-body-md overflow-hidden">
      
      {/* ── Top Section: 5 Columns ── */}
      <div className="max-w-7xl mx-auto px-8 py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 md:gap-16">
        
        {/* Column 1 — Brand */}
        <div className="lg:col-span-1 flex flex-col gap-6">
          <Link href="/" className="inline-flex">
            <Image
              src="/logo.svg"
              alt="PROSONΛ"
              className="h-10 md:h-12 w-auto"
              width={195}
              height={80}
              priority
            />
          </Link>
          
          <p className="text-slate-500 text-sm leading-[1.6] max-w-[240px]">
            Developing the next generation of brand ecosystems using surgical precision and automated intelligence.
          </p>
          
          <a 
            href="mailto:contact@prosona.in" 
            className="text-primary text-[14px] font-medium hover:text-purple transition-colors"
          >
            contact@prosona.in
          </a>
          
          {/* Social Icon Buttons */}
          <div className="flex gap-3 pt-2">
            <a 
              href="https://instagram.com/prosona.in" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-slate-400 hover:text-purple hover:border-purple transition-all"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a 
              href="https://linkedin.com/company/prosona" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-slate-400 hover:text-purple hover:border-purple transition-all"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a 
              href="https://x.com/prosona_in" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-slate-400 hover:text-purple hover:border-purple transition-all"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Column 2 — Branding */}
        <LinkColumn title="Branding" links={footerLinks.branding} />

        {/* Column 3 — Grow */}
        <LinkColumn title="Grow" links={footerLinks.grow} />

        {/* Column 4 — Tools */}
        <LinkColumn title="Tools" links={footerLinks.tools} />

        {/* Column 5 — Company */}
        <LinkColumn title="Company" links={footerLinks.company} />
      </div>

      {/* ── Middle Section: Newsletter Strip ── */}
      <div className="w-full border-t border-b border-border">
        <div className="max-w-7xl mx-auto px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-primary text-[15px] font-medium">
            Stay ahead with AI brand insights.
          </p>
          <form 
            onSubmit={handleSubscribe}
            className="flex items-center w-full md:w-auto max-w-md gap-2"
          >
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              required
              className="flex-1 md:w-72 bg-[#fcfcfc] border border-border rounded-lg px-4 py-2.5 text-sm outline-none focus:border-purple focus:ring-1 focus:ring-purple/10 transition-all"
            />
            <button 
              type="submit"
              className="bg-purple text-white p-2.5 rounded-lg hover:bg-purple/90 active:scale-95 transition-all shadow-sm"
              aria-label="Subscribe"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </form>
        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div className="max-w-7xl mx-auto px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-slate-400 text-[12px] tracking-wide">
        <div className="flex items-center gap-1">
          <span>© 2026 Prosona. All rights reserved.</span>
        </div>
        
        <div className="flex items-center gap-1.5 font-medium text-slate-500">
          Made in India 
          <svg width="12" height="12" viewBox="0 0 24 24" fill="#4B2DA8" className="mt-[1px]">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
        </div>

        <div className="flex items-center gap-6">
          <a href="https://instagram.com/prosona.in" target="_blank" rel="noopener noreferrer" className="hover:text-purple transition-colors">Instagram</a>
          <a href="https://linkedin.com/company/prosona" target="_blank" rel="noopener noreferrer" className="hover:text-purple transition-colors">LinkedIn</a>
          <a href="https://x.com/prosona_in" target="_blank" rel="noopener noreferrer" className="hover:text-purple transition-colors">X</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
