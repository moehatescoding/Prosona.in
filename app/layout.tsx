import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});


export const metadata: Metadata = {
  title: 'PROSONΛ | Brand Systems & Automation',
  description: 'Developing the next generation of brand ecosystems using surgical precision and automated intelligence.',
  openGraph: {
    title: 'PROSONΛ | Brand Systems & Automation',
    description: 'Developing the next generation of brand ecosystems using surgical precision and automated intelligence.',
    images: ['/logo.svg'],
  },
};

import Loader from '@/components/layout/Loader';
import GlobalBackground from '@/components/layout/GlobalBackground';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className={`${spaceGrotesk.variable} font-sans antialiased text-dark bg-transparent relative`}>
        <GlobalBackground />
        <Loader />
        <Navbar />
        <main className="pt-16 min-h-screen relative z-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
