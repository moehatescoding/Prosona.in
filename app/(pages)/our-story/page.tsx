import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Story | PROSONΛ',
};

export default function OurStory() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-bg p-8">
      <div className="max-w-2xl text-center">
        <h1 className="font-h1 text-[48px] text-primary mb-6">Our Story</h1>
        <p className="font-h3 text-h3 text-slate-500 mb-12">Developing the next generation of brand ecosystems.</p>
        <a href="/contact" className="bg-purple text-white px-8 py-4 rounded-lg font-medium">Join the Journey</a>
      </div>
    </div>
  );
}
