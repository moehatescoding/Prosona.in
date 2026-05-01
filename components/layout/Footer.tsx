"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const footerLinks = {
  branding: [
    { label: 'F&B', href: '/fnb' },
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
  <div>
    <h4 className="font-label-caps text-[11px] tracking-[0.15em] text-slate-400 uppercase mb-5 font-semibold">
      {title}
    </h4>
    <ul className="space-y-3">
      {links.map((link) => (
        <li key={link.href}>
          <Link
            href={link.href}
            className="text-slate-500 text-sm hover:text-purple transition-colors duration-200"
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
  };

  return (
    <footer className="w-full bg-white border-t border-border font-body-md">

      {/* ── Top section: 5 columns ── */}
      <div className="max-w-7xl mx-auto px-8 pt-16 pb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

        {/* Col 1 — Brand */}
        <div className="lg:col-span-1 flex flex-col gap-5">
          <Link href="/" className="inline-flex">
            <Image
              src="/logo.svg"
              alt="Prosona Logo"
              width={130}
              height={52}
              className="h-10 w-auto"
              priority
            />
          </Link>

          <p className="text-slate-500 text-sm leading-relaxed max-w-[220px]">
            Developing the next generation of brand ecosystems using surgical precision and automated intelligence.
          </p>

          <a
            href="mailto:contact@prosona.in"
            className="text-purple text-sm font-medium hover:underline"
          >
            contact@prosona.in
          </a>

          {/* Social icons */}
          <div className="flex gap-3">
            {/* Instagram */}
            <a
              href="https://instagram.com/prosona.in"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-slate-400 hover:border-purple hover:text-purple transition-all duration-200"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/company/prosona"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-slate-400 hover:border-purple hover:text-purple transition-all duration-200"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>

            {/* X / Twitter */}
            <a
              href="https://x.com/prosona_in"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (Twitter)"
              className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-slate-400 hover:border-purple hover:text-purple transition-all duration-200"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Col 2 — Branding */}
        <LinkColumn title="Branding" links={footerLinks.branding} />

        {/* Col 3 — Grow */}
        <LinkColumn title="Grow" links={footerLinks.grow} />

        {/* Col 4 — Tools */}
        <LinkColumn title="Tools" links={footerLinks.tools} />

        {/* Col 5 — Company */}
        <LinkColumn title="Company" links={footerLinks.company} />
      </div>

      {/* ── Newsletter strip ── */}
      <div className="border-t border-b border-border">
        <div className="max-w-7xl mx-auto px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-600 font-medium">
            Stay ahead with AI brand insights.
          </p>
          <form
            onSubmit={handleSubscribe}
            className="flex items-center gap-2 w-full md:w-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="border border-border rounded-lg px-4 py-2 text-sm text-primary placeholder:text-slate-400 focus:outline-none focus:border-purple bg-white w-full md:w-64 transition-colors"
            />
            <button
              type="submit"
              aria-label="Subscribe"
              className="bg-purple text-white p-2.5 rounded-lg hover:bg-purple/90 active:scale-95 transition-all"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
          </form>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="max-w-7xl mx-auto px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-slate-400 text-xs">
        {/* Left */}
        <span>© 2026 Prosona. All rights reserved.</span>

        {/* Center — Made in India */}
        <span className="flex items-center gap-1.5">
          Made in India
          <svg width="12" height="12" viewBox="0 0 24 24" fill="#4B2DA8" className="inline-block">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
        </span>

        {/* Right — social links */}
        <div className="flex gap-5">
          <a href="https://instagram.com/prosona.in" target="_blank" rel="noopener noreferrer" className="hover:text-purple transition-colors">Instagram</a>
          <a href="https://linkedin.com/company/prosona" target="_blank" rel="noopener noreferrer" className="hover:text-purple transition-colors">LinkedIn</a>
          <a href="https://x.com/prosona_in" target="_blank" rel="noopener noreferrer" className="hover:text-purple transition-colors">X</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
