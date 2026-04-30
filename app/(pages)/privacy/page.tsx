import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Prosona',
  description: 'Our privacy policy and data handling practices.',
};

export default function PrivacyPage() {
  return (
    <section className="py-20 px-6 relative z-10">
      <div className="max-w-3xl mx-auto">
        <span className="font-label-caps text-label-caps text-primary-container bg-primary-fixed/30 px-sm py-xs rounded-full inline-block mb-md tracking-widest">
          LEGAL
        </span>
        <h1 className="font-h1 text-[48px] md:text-[60px] leading-[1.05] text-primary mb-12 tracking-tight">
          Privacy Policy
        </h1>
        
        <div className="space-y-8 font-body-md text-slate-500 leading-relaxed">
          <p>
            At Prosona, we respect your privacy. This policy explains what information we collect and how we use it.
          </p>

          <div>
            <h2 className="font-h3 text-xl text-primary mb-4">Information We Collect</h2>
            <p>
              We may collect basic information such as your name, email address, or message when you contact us through forms on our website.
            </p>
          </div>

          <div>
            <h2 className="font-h3 text-xl text-primary mb-4">How We Use Your Information</h2>
            <p>
              We use your information to respond to inquiries, provide services, and improve our website experience.
            </p>
          </div>

          <div>
            <h2 className="font-h3 text-xl text-primary mb-4">Analytics</h2>
            <p>
              We may use analytics tools to understand how visitors interact with our site. This helps us improve performance and usability.
            </p>
          </div>

          <div>
            <h2 className="font-h3 text-xl text-primary mb-4">Data Protection</h2>
            <p>
              We do not sell or share your personal information with third parties. Your data is handled securely.
            </p>
          </div>

          <div>
            <h2 className="font-h3 text-xl text-primary mb-4">Contact</h2>
            <p>
              If you have any questions about this policy, you can contact us at contact@prosona.in.
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
