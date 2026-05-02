"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const navLinks = [
  { label: 'Work', href: '/work' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/our-story' },
  { label: 'Contact', href: '/contact' },
];

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const isActive = (path: string) => pathname === path;

  return (
    <>
      <header
        className={`fixed top-4 left-4 right-4 md:left-0 md:right-0 md:mx-auto max-w-[1024px] z-50 bg-purple-light/40 backdrop-blur-xl border border-purple/10 flex items-center transition-all duration-300 rounded-full px-6 md:px-8 py-1.5 ${scrolled ? 'shadow-lg bg-purple-light/70 border-purple/20' : 'shadow-sm'}`}
      >
        <div className="flex justify-between items-center w-full">

          {/* LEFT: LOGO */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.svg"
              alt="Prosona Logo"
              className="h-10 md:h-12 w-auto"
              width={195}
              height={80}
              priority
            />
          </Link>

          {/* CENTER: NAV LINKS */}
          <nav className="hidden md:flex gap-8 font-h3 font-medium text-sm tracking-tight items-center text-[#1a1630]">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative hover:text-purple transition-colors duration-200 ${isActive(link.href) ? 'text-purple' : ''}`}
              >
                {link.label}
                {isActive(link.href) && (
                  <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-purple" />
                )}
              </Link>
            ))}
          </nav>

          {/* RIGHT: CTA */}
          <div className="flex items-center gap-4">
            <Link href="/contact" className="hidden md:block gradient-button">
              <span className="gradient-text">Get Started</span>
            </Link>
            <button
              className="md:hidden text-primary focus:outline-none flex items-center justify-center p-2"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <span className="material-symbols-outlined text-3xl">
                {isOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-[110%] left-0 w-full bg-purple-light/95 backdrop-blur-xl border border-purple/10 shadow-lg py-6 px-8 flex flex-col gap-5 font-h3 text-base md:hidden rounded-2xl">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${isActive(link.href) ? 'text-purple font-semibold' : 'text-slate-600'}`}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact" className="mt-2 gradient-button text-center w-full">
              <span className="gradient-text">Get Started</span>
            </Link>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
