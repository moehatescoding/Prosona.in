import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Brand Kit | PROSONΛ',
  description: 'Your entire brand, distilled into an AI-ready kit.',
};

export default function AIBrandKit() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-bg p-8">
      <div className="max-w-2xl text-center">
        <h1 className="font-h1 text-[48px] text-primary mb-6">AI Brand Kit</h1>
        <p className="font-h3 text-h3 text-slate-500 mb-12">Coming Soon. The next generation of brand assets.</p>
        <a href="/contact" className="bg-purple text-white px-8 py-4 rounded-lg font-medium">Get Early Access</a>
      </div>
    </div>
  );
}
