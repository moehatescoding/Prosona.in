import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Personal Branding | PROSONΛ',
  description: 'Elevate your personal authority with a custom-built brand system.',
};

export default function PersonalBranding() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-bg p-8">
      <div className="max-w-2xl text-center">
        <h1 className="font-h1 text-[48px] text-primary mb-6">Personal Branding</h1>
        <p className="font-h3 text-h3 text-slate-500 mb-12">We are currently perfecting this service. Check back soon or reach out for a custom consultation.</p>
        <a href="/contact" className="bg-purple text-white px-8 py-4 rounded-lg font-medium">Enquire Now</a>
      </div>
    </div>
  );
}
