"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

import Tilt from '@/components/ui/Tilt';

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path: string) => pathname === path;

  // Close mobile menu when route changes
  React.useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header className="fixed top-0 w-full h-16 bg-white border-b border-border z-50 flex items-center">
      <div className="flex justify-between items-center px-8 w-full max-w-7xl mx-auto">
        <Link href="/" className="flex items-center mr-6">
          <Image 
            src="/logo.svg" 
            alt="Prosona Logo" 
            className="h-14 w-auto" 
            width={195} 
            height={80} 
            priority 
          />
        </Link>
        <nav className="hidden md:flex gap-8 font-h3 font-medium text-sm tracking-tight items-center">
          <Link href="/" className={`${isActive('/') ? 'text-purple border-b-2 border-purple pb-1' : 'text-slate-600 hover:text-purple transition-opacity duration-200'}`}>Home</Link>
          <Link href="/fnb" className={`${isActive('/fnb') ? 'text-purple border-b-2 border-purple pb-1' : 'text-slate-600 hover:text-purple transition-opacity duration-200'}`}>F&B</Link>
          <Link href="/automation" className={`${isActive('/automation') ? 'text-purple border-b-2 border-purple pb-1' : 'text-slate-600 hover:text-purple transition-opacity duration-200'}`}>Automation</Link>
          <Link href="/brand-systems" className={`${isActive('/brand-systems') ? 'text-purple border-b-2 border-purple pb-1' : 'text-slate-600 hover:text-purple transition-opacity duration-200'}`}>Brand Systems</Link>
          <Link href="/blog" className={`${isActive('/blog') ? 'text-purple border-b-2 border-purple pb-1' : 'text-slate-600 hover:text-purple transition-opacity duration-200'}`}>Blog</Link>
          <Link href="/contact" className={`${isActive('/contact') ? 'text-purple border-b-2 border-purple pb-1' : 'text-slate-600 hover:text-purple transition-opacity duration-200'}`}>Contact</Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link 
            href="/contact"
            className="hidden md:block bg-purple text-white px-6 py-2.5 rounded-lg text-sm font-medium shadow-[0_4px_14px_0_rgba(91,44,107,0.39)] hover:shadow-[0_6px_20px_rgba(91,44,107,0.23)] hover:-translate-y-0.5 active:shadow-[0_2px_4px_rgba(91,44,107,0.4)] active:translate-y-[1px] transition-all duration-200"
          >
            Get Started
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
        <div className="absolute top-16 left-0 w-full bg-white border-b border-border shadow-lg py-4 px-8 flex flex-col gap-4 font-h3 text-lg md:hidden">
          <Link href="/" className={`${isActive('/') ? 'text-purple font-semibold' : 'text-slate-600'}`}>Home</Link>
          <Link href="/fnb" className={`${isActive('/fnb') ? 'text-purple font-semibold' : 'text-slate-600'}`}>F&B</Link>
          <Link href="/automation" className={`${isActive('/automation') ? 'text-purple font-semibold' : 'text-slate-600'}`}>Automation</Link>
          <Link href="/brand-systems" className={`${isActive('/brand-systems') ? 'text-purple font-semibold' : 'text-slate-600'}`}>Brand Systems</Link>
          <Link href="/blog" className={`${isActive('/blog') ? 'text-purple font-semibold' : 'text-slate-600'}`}>Blog</Link>
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
  );
};

export default Navbar;
