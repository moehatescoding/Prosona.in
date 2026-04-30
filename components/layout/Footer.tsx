import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="w-full py-16 px-8 border-t border-border bg-white font-body-md">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
        <div className="space-y-6 lg:col-span-1">
          <div className="text-lg font-bold tracking-widest text-purple font-h1">PROSONΛ</div>
          <p className="text-slate-500 text-sm leading-relaxed max-w-xs font-body-md">Developing the next generation of brand ecosystems using surgical precision and automated intelligence.</p>
          <div className="flex gap-4">
            <a className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center hover:border-purple transition-colors" href="#"><span className="material-symbols-outlined text-sm">share</span></a>
            <a className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center hover:border-purple transition-colors" href="#"><span className="material-symbols-outlined text-sm">language</span></a>
            <a className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center hover:border-purple transition-colors" href="#"><span className="material-symbols-outlined text-sm">alternate_email</span></a>
          </div>
        </div>
        <div>
          <h4 className="font-bold text-primary mb-6 font-h3">Systems</h4>
          <ul className="space-y-3 font-body-md">
            <li><Link href="/fnb" className="text-slate-500 hover:text-purple hover:translate-x-1 transition-all inline-block">F&B</Link></li>
            <li><Link href="/automation" className="text-slate-500 hover:text-purple hover:translate-x-1 transition-all inline-block">Automation</Link></li>
            <li><Link href="/brand-systems" className="text-slate-500 hover:text-purple hover:translate-x-1 transition-all inline-block">Brand Systems</Link></li>
            <li><Link href="/blog" className="text-slate-500 hover:text-purple hover:translate-x-1 transition-all inline-block">Blog</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-primary mb-6 font-h3">Company</h4>
          <ul className="space-y-3 font-body-md">
            <li><Link href="/about" className="text-slate-500 hover:text-purple hover:translate-x-1 transition-all inline-block">About Prosona</Link></li>
            <li><Link href="/work" className="text-slate-500 hover:text-purple hover:translate-x-1 transition-all inline-block">Our Work</Link></li>
            <li><Link href="/how-it-works" className="text-slate-500 hover:text-purple hover:translate-x-1 transition-all inline-block">How It Works</Link></li>
            <li><Link href="/contact" className="text-slate-500 hover:text-purple hover:translate-x-1 transition-all inline-block">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-primary mb-6 font-h3">Legal</h4>
          <ul className="space-y-3 font-body-md">
            <li><Link href="/privacy" className="text-slate-500 hover:text-purple hover:translate-x-1 transition-all inline-block">Privacy Policy</Link></li>
            <li><Link href="/terms" className="text-slate-500 hover:text-purple hover:translate-x-1 transition-all inline-block">Terms of Service</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-primary mb-6 font-h3">Subscribe</h4>
          <p className="text-slate-500 text-sm mb-4 font-body-md">Stay ahead with AI brand insights.</p>
          <form className="flex gap-2">
            <input className="bg-white border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-purple w-full font-body-md" placeholder="Email" type="email" />
            <button className="bg-purple text-white p-2 rounded-lg"><span className="material-symbols-outlined text-sm">send</span></button>
          </form>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-400 text-xs font-body-md">
        <div>© 2026 Prosona. All rights reserved.</div>
        <div className="flex gap-6">
          <a className="hover:text-primary transition-colors" href="#">Instagram</a>
          <a className="hover:text-primary transition-colors" href="#">LinkedIn</a>
          <a className="hover:text-primary transition-colors" href="#">X / Twitter</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
