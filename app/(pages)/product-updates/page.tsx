import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Product Updates | PROSONΛ',
};

export default function ProductUpdates() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-bg p-8">
      <div className="max-w-2xl text-center">
        <h1 className="font-h1 text-[48px] text-primary mb-6">Product Updates</h1>
        <p className="font-h3 text-h3 text-slate-500 mb-12">What&apos;s new at Prosona.</p>
        <a href="/" className="bg-purple text-white px-8 py-4 rounded-lg font-medium">Back to Home</a>
      </div>
    </div>
  );
}
