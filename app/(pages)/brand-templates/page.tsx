import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Brand Templates | PROSONΛ',
};

export default function BrandTemplates() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-bg p-8">
      <div className="max-w-2xl text-center">
        <h1 className="font-h1 text-[48px] text-primary mb-6">Brand Templates</h1>
        <p className="font-h3 text-h3 text-slate-500 mb-12">Custom templates for every touchpoint. Launching soon.</p>
        <a href="/contact" className="bg-purple text-white px-8 py-4 rounded-lg font-medium">Notify Me</a>
      </div>
    </div>
  );
}
