"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => pathname === path;
  const isServicesActive = ['/fnb', '/fmcg', '/brand-systems', '/building-brands', '/personal-branding', '/automation', '/brand-audits', '/ai-brand-kit', '/brand-templates', '/integrations'].includes(pathname);
  const isExploreActive = ['/blog', '/product-updates', '/latest-features', '/our-story'].includes(pathname);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      <header className={`fixed top-4 left-4 right-4 md:left-0 md:right-0 md:mx-auto max-w-[1024px] z-50 bg-white/70 backdrop-blur-md backdrop-saturate-150 border border-border flex items-center transition-all duration-300 rounded-full px-8 py-1.5 ${scrolled ? 'shadow-md bg-white/80' : 'shadow-sm'}`}>
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
            <Link href="/" className={`relative hover:text-purple transition-colors duration-200 ${isActive('/') ? 'text-purple' : ''}`}>
              Home
              {isActive('/') && <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-purple" />}
            </Link>

            {/* Services Dropdown */}
            <div className="relative group py-4">
              <button className={`flex items-center gap-1.5 hover:text-purple transition-colors duration-200 ${isServicesActive ? 'text-purple' : ''}`}>
                Services <span className="text-[10px] text-slate-400">▼</span>
                {isServicesActive && <span className="absolute bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-purple" />}
              </button>
              
              {/* Services Mega Menu */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 w-[680px] bg-white border border-border rounded-2xl shadow-lg p-6 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 z-50 flex gap-6">
                {/* Column 1 */}
                <div className="flex-1 flex flex-col gap-1">
                  <h4 className="text-[10px] tracking-[0.15em] text-slate-400 uppercase font-bold mb-2 px-3">BRANDING (CORE SERVICES)</h4>
                  <Link href="/fnb" className="flex items-start gap-3 p-3 rounded-[10px] hover:bg-purple/5 group/item transition-colors">
                    <span className="text-xl leading-none mt-0.5">🍽</span>
                    <div>
                      <div className="text-sm font-semibold text-[#1a1630] group-hover/item:text-purple transition-colors">F&B</div>
                      <div className="text-xs text-slate-500 mt-0.5">Food & Beverage brand identity</div>
                    </div>
                  </Link>
                  <Link href="/fmcg" className="flex items-start gap-3 p-3 rounded-[10px] hover:bg-purple/5 group/item transition-colors">
                    <span className="text-xl leading-none mt-0.5">🛒</span>
                    <div>
                      <div className="text-sm font-semibold text-[#1a1630] group-hover/item:text-purple transition-colors">FMCG</div>
                      <div className="text-xs text-slate-500 mt-0.5">Fast-moving consumer goods</div>
                    </div>
                  </Link>
                  <Link href="/brand-systems" className="flex items-start gap-3 p-3 rounded-[10px] hover:bg-purple/5 group/item transition-colors">
                    <span className="text-xl leading-none mt-0.5">🎨</span>
                    <div>
                      <div className="text-sm font-semibold text-[#1a1630] group-hover/item:text-purple transition-colors">Brand Systems</div>
                      <div className="text-xs text-slate-500 mt-0.5">Design systems & guidelines</div>
                    </div>
                  </Link>
                  <Link href="/building-brands" className="flex items-start gap-3 p-3 rounded-[10px] hover:bg-purple/5 group/item transition-colors">
                    <span className="text-xl leading-none mt-0.5">🏢</span>
                    <div>
                      <div className="text-sm font-semibold text-[#1a1630] group-hover/item:text-purple transition-colors">Building Brands</div>
                      <div className="text-xs text-slate-500 mt-0.5">End-to-end brand strategy</div>
                    </div>
                  </Link>
                </div>

                {/* Column 2 */}
                <div className="flex-1 flex flex-col gap-1">
                  <h4 className="text-[10px] tracking-[0.15em] text-slate-400 uppercase font-bold mb-2 px-3">GROW (VALUE EXPANSION)</h4>
                  <Link href="/personal-branding" className="flex items-start gap-3 p-3 rounded-[10px] hover:bg-purple/5 group/item transition-colors">
                    <span className="text-xl leading-none mt-0.5">👤</span>
                    <div>
                      <div className="text-sm font-semibold text-[#1a1630] group-hover/item:text-purple transition-colors">Personal Branding</div>
                      <div className="text-xs text-slate-500 mt-0.5">Build your professional persona</div>
                    </div>
                  </Link>
                  <Link href="/automation" className="flex items-start gap-3 p-3 rounded-[10px] hover:bg-purple/5 group/item transition-colors">
                    <span className="text-xl leading-none mt-0.5">⚙️</span>
                    <div>
                      <div className="text-sm font-semibold text-[#1a1630] group-hover/item:text-purple transition-colors">Automation</div>
                      <div className="text-xs text-slate-500 mt-0.5">Brand workflows at scale</div>
                    </div>
                  </Link>
                  <Link href="/brand-audits" className="flex items-start gap-3 p-3 rounded-[10px] hover:bg-purple/5 group/item transition-colors">
                    <span className="text-xl leading-none mt-0.5">📊</span>
                    <div>
                      <div className="text-sm font-semibold text-[#1a1630] group-hover/item:text-purple transition-colors">Brand Audits</div>
                      <div className="text-xs text-slate-500 mt-0.5">Diagnose & sharpen your brand</div>
                    </div>
                  </Link>
                </div>

                {/* Column 3 */}
                <div className="flex-1 flex flex-col gap-1">
                  <h4 className="text-[10px] tracking-[0.15em] text-slate-400 uppercase font-bold mb-2 px-3">TOOLS (PRODUCTIZED VALUE)</h4>
                  <Link href="/ai-brand-kit" className="flex items-start gap-3 p-3 rounded-[10px] hover:bg-purple/5 group/item transition-colors">
                    <span className="text-xl leading-none mt-0.5">🤖</span>
                    <div>
                      <div className="text-sm font-semibold text-[#1a1630] group-hover/item:text-purple transition-colors">AI Brand Kit</div>
                      <div className="text-xs text-slate-500 mt-0.5">Auto-generate brand assets</div>
                    </div>
                  </Link>
                  <Link href="/brand-templates" className="flex items-start gap-3 p-3 rounded-[10px] hover:bg-purple/5 group/item transition-colors">
                    <span className="text-xl leading-none mt-0.5">📁</span>
                    <div>
                      <div className="text-sm font-semibold text-[#1a1630] group-hover/item:text-purple transition-colors">Brand Templates</div>
                      <div className="text-xs text-slate-500 mt-0.5">Ready-to-use brand files</div>
                    </div>
                  </Link>
                  <Link href="/integrations" className="flex items-start gap-3 p-3 rounded-[10px] hover:bg-purple/5 group/item transition-colors">
                    <span className="text-xl leading-none mt-0.5">🔗</span>
                    <div>
                      <div className="text-sm font-semibold text-[#1a1630] group-hover/item:text-purple transition-colors">Integrations</div>
                      <div className="text-xs text-slate-500 mt-0.5">Connect your brand stack</div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            {/* Explore Dropdown */}
            <div className="relative group py-4">
              <button className={`flex items-center gap-1.5 hover:text-purple transition-colors duration-200 ${isExploreActive ? 'text-purple' : ''}`}>
                Explore <span className="text-[10px] text-slate-400">▼</span>
                {isExploreActive && <span className="absolute bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-purple" />}
              </button>
              
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 w-[260px] bg-white border border-border rounded-2xl shadow-lg p-3 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 z-50 flex flex-col gap-1">
                <Link href="/blog" className="flex items-start gap-3 p-3 rounded-[10px] hover:bg-purple/5 group/item transition-colors">
                  <span className="text-xl leading-none mt-0.5">📝</span>
                  <div>
                    <div className="text-sm font-semibold text-[#1a1630] group-hover/item:text-purple transition-colors">Blog</div>
                    <div className="text-xs text-slate-500 mt-0.5">Insights & articles</div>
                  </div>
                </Link>
                <Link href="/product-updates" className="flex items-start gap-3 p-3 rounded-[10px] hover:bg-purple/5 group/item transition-colors">
                  <span className="text-xl leading-none mt-0.5">🚀</span>
                  <div>
                    <div className="text-sm font-semibold text-[#1a1630] group-hover/item:text-purple transition-colors">Product Updates</div>
                    <div className="text-xs text-slate-500 mt-0.5">What's new at Prosona</div>
                  </div>
                </Link>
                <Link href="/latest-features" className="flex items-start gap-3 p-3 rounded-[10px] hover:bg-purple/5 group/item transition-colors">
                  <span className="text-xl leading-none mt-0.5">✨</span>
                  <div>
                    <div className="text-sm font-semibold text-[#1a1630] group-hover/item:text-purple transition-colors">Latest Features</div>
                    <div className="text-xs text-slate-500 mt-0.5">Fresh out of the lab</div>
                  </div>
                </Link>
                <Link href="/our-story" className="flex items-start gap-3 p-3 rounded-[10px] hover:bg-purple/5 group/item transition-colors">
                  <span className="text-xl leading-none mt-0.5">🏛</span>
                  <div>
                    <div className="text-sm font-semibold text-[#1a1630] group-hover/item:text-purple transition-colors">Our Story</div>
                    <div className="text-xs text-slate-500 mt-0.5">Who we are & why we built this</div>
                  </div>
                </Link>
              </div>
            </div>

            <Link href="/contact" className={`relative hover:text-purple transition-colors duration-200 ${isActive('/contact') ? 'text-purple' : ''}`}>
              Contact
              {isActive('/contact') && <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-purple" />}
            </Link>
          </nav>

          {/* RIGHT: CTA BUTTON */}
          <div className="flex items-center gap-4">
            <Link 
              href="/contact"
              className="hidden md:block gradient-button"
            >
              <span className="gradient-text">Get Started</span>
            </Link>
            <button 
              className="md:hidden text-primary focus:outline-none flex items-center justify-center p-2"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="material-symbols-outlined text-3xl">
                {isOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-[110%] left-0 w-full bg-white border border-border shadow-lg py-4 px-8 flex flex-col gap-4 font-h3 text-lg md:hidden rounded-2xl">
            <Link href="/" className={`${isActive('/') ? 'text-purple font-semibold' : 'text-slate-600'}`}>Home</Link>
            <div className="flex flex-col gap-2 border-l-2 border-slate-100 pl-4 py-2">
              <span className="text-xs text-slate-400 font-semibold tracking-wider uppercase">Services</span>
              <Link href="/fnb" className="text-slate-600 hover:text-purple transition-colors">F&B</Link>
              <Link href="/fmcg" className="text-slate-600 hover:text-purple transition-colors">FMCG</Link>
              <Link href="/brand-systems" className="text-slate-600 hover:text-purple transition-colors">Brand Systems</Link>
            </div>
            <div className="flex flex-col gap-2 border-l-2 border-slate-100 pl-4 py-2">
              <span className="text-xs text-slate-400 font-semibold tracking-wider uppercase">Explore</span>
              <Link href="/blog" className="text-slate-600 hover:text-purple transition-colors">Blog</Link>
            </div>
            <Link href="/contact" className={`${isActive('/contact') ? 'text-purple font-semibold' : 'text-slate-600'}`}>Contact</Link>
            <Link 
              href="/contact"
              className="mt-4 bg-purple text-white px-6 py-3 rounded-lg text-center font-medium shadow-sm active:scale-95 transition-all"
            >
              Get Started
            </Link>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
