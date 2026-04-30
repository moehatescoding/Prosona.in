import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | Prosona',
  description: 'Terms and conditions for using Prosona services.',
};

export default function TermsPage() {
  return (
    <section className="py-20 px-6 relative z-10">
      <div className="max-w-3xl mx-auto">
        <span className="font-label-caps text-label-caps text-primary-container bg-primary-fixed/30 px-sm py-xs rounded-full inline-block mb-md tracking-widest">
          LEGAL
        </span>
        <h1 className="font-h1 text-[48px] md:text-[60px] leading-[1.05] text-primary mb-12 tracking-tight">
          Terms of Service
        </h1>
        
        <div className="space-y-8 font-body-md text-slate-500 leading-relaxed">
          <p>
            By accessing this website, you agree to the following terms.
          </p>

          <div>
            <h2 className="font-h3 text-xl text-primary mb-4">Use of Website</h2>
            <p>
              You agree to use this website only for lawful purposes and in a way that does not harm the website or its users.
            </p>
          </div>

          <div>
            <h2 className="font-h3 text-xl text-primary mb-4">Intellectual Property</h2>
            <p>
              All content on this website, including design, text, and visuals, belongs to Prosona and may not be copied or reused without permission.
            </p>
          </div>

          <div>
            <h2 className="font-h3 text-xl text-primary mb-4">Limitation of Liability</h2>
            <p>
              We are not liable for any damages resulting from the use of this website.
            </p>
          </div>

          <div>
            <h2 className="font-h3 text-xl text-primary mb-4">Changes</h2>
            <p>
              We may update these terms at any time without prior notice.
            </p>
          </div>

          <div>
            <h2 className="font-h3 text-xl text-primary mb-4">Contact</h2>
            <p>
              For any questions, contact us at contact@prosona.in.
            </p>
          </div>
          
          <div className="pt-8 mt-8 border-t border-slate-200">
            <p className="text-sm">Last updated: May 1, 2026</p>
          </div>
        </div>
      </div>
    </section>
  );
}
