"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const footerLinks = {
  work: [
    { label: 'Our Work', href: '/work' },
    { label: 'F&B Projects', href: '/work' },
    { label: 'FMCG Projects', href: '/work' },
  ],
  services: [
    { label: 'Brand Systems', href: '/services' },
    { label: 'Growth Systems', href: '/services' },
    { label: 'AI Infrastructure', href: '/services' },
  ],
  company: [
    { label: 'Our Story', href: '/our-story' },
    { label: 'Blog', href: '/blog' },
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

  return (
    <footer className="w-full bg-white border-t border-border font-body-md overflow-hidden">
      
      {/* ── Top Section: 4 Columns ── */}
      <div className="max-w-7xl mx-auto px-8 py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16">
        
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

        {/* Column 2 — Work */}
        <LinkColumn title="Work" links={footerLinks.work} />

        {/* Column 3 — Services */}
        <LinkColumn title="Services" links={footerLinks.services} />

        {/* Column 4 — Company */}
        <LinkColumn title="Company" links={footerLinks.company} />
      </div>

      {/* ── Middle Section: CTA Strip ── */}
      <div className="w-full border-t border-b border-border">
        <div className="max-w-7xl mx-auto px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-primary text-[18px] font-semibold mb-1">
              Ready to stop rebuilding your brand every time?
            </p>
            <p className="text-slate-400 text-[14px]">
              Let&apos;s create a system that runs without you.
            </p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 bg-purple text-white px-8 py-3.5 rounded-lg font-semibold text-sm hover:bg-purple/90 active:scale-95 transition-all shadow-sm whitespace-nowrap"
          >
            Start the conversation →
          </Link>
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
