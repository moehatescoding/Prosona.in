import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | PROSONΛ',
  description: 'Exploring the intersection of artificial intelligence, luxury brand systems, and the future of human-centric automation.',
  openGraph: {
    title: 'Blog | PROSONΛ',
    description: 'Exploring the intersection of artificial intelligence, luxury brand systems, and the future of human-centric automation.',
    images: ['/logo.svg'],
  },
};

export default function Blog() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-bg py-xl px-gutter flex flex-col items-center text-center">
        <div className="max-w-4xl mx-auto mt-xl">
          <span className="font-label-caps text-label-caps text-primary tracking-[0.2em] mb-sm block">THE STUDIO JOURNAL</span>
          <h1 className="font-h1 text-[56px] text-on-surface mb-md tracking-tight">Thinking in Systems.</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            Exploring the intersection of artificial intelligence, luxury brand systems, and the future of human-centric automation.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="bg-white py-md border-b border-border sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-8 flex items-center justify-center space-x-md overflow-x-auto whitespace-nowrap">
          <button className="px-lg py-xs rounded-full bg-purple text-white font-h3 text-sm font-medium transition-colors">All</button>
          <button className="px-lg py-xs rounded-full bg-white border border-border text-slate-600 font-h3 text-sm font-medium hover:border-purple hover:text-purple transition-colors">F&B</button>
          <button className="px-lg py-xs rounded-full bg-white border border-border text-slate-600 font-h3 text-sm font-medium hover:border-purple hover:text-purple transition-colors">Automation</button>
          <button className="px-lg py-xs rounded-full bg-white border border-border text-slate-600 font-h3 text-sm font-medium hover:border-purple hover:text-purple transition-colors">Brand</button>
          <button className="px-lg py-xs rounded-full bg-white border border-border text-slate-600 font-h3 text-sm font-medium hover:border-purple hover:text-purple transition-colors">AI</button>
          <button className="px-lg py-xs rounded-full bg-white border border-border text-slate-600 font-h3 text-sm font-medium hover:border-purple hover:text-purple transition-colors">Growth</button>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="max-w-7xl mx-auto px-8 py-xl bg-bg">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">
          {/* Card 1 */}
          <article className="bg-white rounded-xl overflow-hidden border border-border blog-card-hover flex flex-col hover:-translate-y-2 transition-all duration-300">
            <div className="h-48 w-full bg-surface-container-low relative">
              <img className="w-full h-full object-cover" alt="Blog 1" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAILWZ0vWtK7XMirGGyfC8eW7BXllyvQUWw-rA4bk_9rXYQBhuyWEzcVvD87Dr252zuwxJ_XDdTdIgEh8e1yjVbUbDvafDCBBvf8qzd3vZPsgBF0aCuLHD47PGSf2HoMTuOLToa251NOPFd0dw-f9sl-ynzlNKBREBpEhIQaIesSaVVZd39MkSNpx9hDaUk-pfv30B1VSxqIJllQ9bJEj_RFCezqsGYg7W3qXUxWGeUC8OmvyVqsLzB9MX7MQgG7W0L9BgH5_kQ_Wg" />
            </div>
            <div className="p-lg flex flex-col flex-grow">
              <div className="flex items-center space-x-xs mb-sm">
                <span className="px-xs py-unit rounded-full bg-purple-light text-purple font-label-caps text-[10px] uppercase tracking-widest">F&B</span>
              </div>
              <h3 className="font-h3 text-h3 text-on-surface mb-sm leading-tight">Why Every Restaurant Needs a Brand System</h3>
              <p className="font-body-md text-slate-600 mb-lg line-clamp-3">In an era of hyper-personalization, transactional design is no longer enough. Restaurants must evolve into living brand ecosystems.</p>
              <div className="mt-auto flex items-center justify-between text-slate-400 font-label-caps text-[10px] tracking-wider">
                <span>OCT 12, 2024</span>
                <span className="flex items-center"><span className="material-symbols-outlined text-[14px] mr-1">schedule</span> 6 MIN READ</span>
              </div>
            </div>
          </article>
          {/* Card 2 */}
          <article className="bg-white rounded-xl overflow-hidden border border-border blog-card-hover flex flex-col hover:-translate-y-2 transition-all duration-300">
            <div className="h-48 w-full bg-surface-container-low relative">
              <img className="w-full h-full object-cover" alt="Blog 2" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCMQlcO0gn6ir-SKVSazmfTfRbeJvJ8W0J2nrSR437spFxC7fRKpZZNynKb6MERAfH3lQXdIKsdNsZDSB6RDk4occ4amzfo1OTxe_zyn1BwVzB1IxaIa30wpUWmBPXr8DrnwHqBQEAlRT3nr5mHko11vnMrHUpsG0mdXekSkA1ey2Fm-yf_O1yMdUd40Z47VaiunozQnrar--IhNJk8VjU3d8_giXouEEv2koIghmxNvhpEShrmbRRdmoaAZPffDNla0ycCskqU5uE" />
            </div>
            <div className="p-lg flex flex-col flex-grow">
              <div className="flex items-center space-x-xs mb-sm">
                <span className="px-xs py-unit rounded-full bg-purple-light text-purple font-label-caps text-[10px] uppercase tracking-widest">AI</span>
              </div>
              <h3 className="font-h3 text-h3 text-on-surface mb-sm leading-tight">The Ethics of AI in Creative Direction</h3>
              <p className="font-body-md text-slate-600 mb-lg line-clamp-3">How we balance machine precision with human intuition to create work that feels soulful rather than synthetic.</p>
              <div className="mt-auto flex items-center justify-between text-slate-400 font-label-caps text-[10px] tracking-wider">
                <span>OCT 08, 2024</span>
                <span className="flex items-center"><span className="material-symbols-outlined text-[14px] mr-1">schedule</span> 8 MIN READ</span>
              </div>
            </div>
          </article>
          {/* Card 3 */}
          <article className="bg-white rounded-xl overflow-hidden border border-border blog-card-hover flex flex-col hover:-translate-y-2 transition-all duration-300">
            <div className="h-48 w-full bg-surface-container-low relative">
              <img className="w-full h-full object-cover" alt="Blog 3" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCeLX9rYajaDDvEp0ZnCBN_AcEgbHNr2R1HhCrkZVMgIDWt3e-n-_U1XaBtZH8OJ9CoyAZiINEZaKAwe7pvuO8EiN13IkVvAkNvX3i49BKnZC4LtJnPdCoTdi-iFB1N4KpNiDyk41CMzPyam1mjUMyJLKOAYQT1XgDjoNeL_vtLW0pccfOOSgvWWFkRfQPKr7K59yNyhwijy_MI6UT8dNOydcLgviWcJ4EF1GNZzxMItV5GOQmm55JAZfRkpxDYW92MSyyfUCOAMoY" />
            </div>
            <div className="p-lg flex flex-col flex-grow">
              <div className="flex items-center space-x-xs mb-sm">
                <span className="px-xs py-unit rounded-full bg-purple-light text-purple font-label-caps text-[10px] uppercase tracking-widest">Automation</span>
              </div>
              <h3 className="font-h3 text-h3 text-on-surface mb-sm leading-tight">Automating the Ordinary to Focus on the Extraordinary</h3>
              <p className="font-body-md text-slate-600 mb-lg line-clamp-3">A deep dive into the studio's internal automation stack that saves us 30 hours of administrative work every single week.</p>
              <div className="mt-auto flex items-center justify-between text-slate-400 font-label-caps text-[10px] tracking-wider">
                <span>SEP 28, 2024</span>
                <span className="flex items-center"><span className="material-symbols-outlined text-[14px] mr-1">schedule</span> 5 MIN READ</span>
              </div>
            </div>
          </article>
          {/* Card 4 */}
          <article className="bg-white rounded-xl overflow-hidden border border-border blog-card-hover flex flex-col hover:-translate-y-2 transition-all duration-300">
            <div className="h-48 w-full bg-surface-container-low relative">
              <img className="w-full h-full object-cover" alt="Blog 4" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzir1SR8Ove_fZ77wG9Pmp6DQyF4GPSYr2J2IicgY-7VmgCW1US6U9yUwI4UFEOakIyO7RCb7POTrFyXLPz3ArY6bgll_iukrnPDhHxRtUvmHgkQMtKxXqvjTJR4Q1_wiyEeYCJopCOfC726LEG2PEs8agZHAhlNACwtF-qr_TGKxoVt9R2fR4ZtMmNxWwvWN30jCdkuu9vPE2ElPnTg_tMX1z8yp5SKnDEpkEdluuJBxDiaQVKxSCv_JBjVzxyYZn5Roo2C8fV9c" />
            </div>
            <div className="p-lg flex flex-col flex-grow">
              <div className="flex items-center space-x-xs mb-sm">
                <span className="px-xs py-unit rounded-full bg-purple-light text-purple font-label-caps text-[10px] uppercase tracking-widest">Growth</span>
              </div>
              <h3 className="font-h3 text-h3 text-on-surface mb-sm leading-tight">Scale Without Friction: The Platform Model</h3>
              <p className="font-body-md text-slate-600 mb-lg line-clamp-3">Why the next generation of successful brands will be built as modular platforms rather than static entities.</p>
              <div className="mt-auto flex items-center justify-between text-slate-400 font-label-caps text-[10px] tracking-wider">
                <span>SEP 15, 2024</span>
                <span className="flex items-center"><span className="material-symbols-outlined text-[14px] mr-1">schedule</span> 10 MIN READ</span>
              </div>
            </div>
          </article>
          {/* Card 5 */}
          <article className="bg-white rounded-xl overflow-hidden border border-border blog-card-hover flex flex-col hover:-translate-y-2 transition-all duration-300">
            <div className="h-48 w-full bg-surface-container-low relative">
              <img className="w-full h-full object-cover" alt="Blog 5" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDiZc8Np8GP5ouuQIjLwp1iJJySMCy5Nol6XyjlnyaD-sEYlTDHFcwSTGOwTn4H3j4rK8aKdzZg_cHnc1suW2ZGdpJwHulhZsbX_ghTal0qytcgUzXifM42ZYGrP-JZkCJIodXP4haygS7CIPtEl0q6t3JmircoBJYol6UV4srK9RnN3mUcQ94TjAhhY3yfu4OZsgH5fI99UAl2jUehntL_0e9Wcy_BmIbwCOeGF1UTjtVgD2ilnWvK5JSUwFWZeZiQovwmzMd7USg" />
            </div>
            <div className="p-lg flex flex-col flex-grow">
              <div className="flex items-center space-x-xs mb-sm">
                <span className="px-xs py-unit rounded-full bg-purple-light text-purple font-label-caps text-[10px] uppercase tracking-widest">AI</span>
              </div>
              <h3 className="font-h3 text-h3 text-on-surface mb-sm leading-tight">Generative Art: Beyond the Prompt</h3>
              <p className="font-body-md text-slate-600 mb-lg line-clamp-3">A look at how we utilize custom-trained models to maintain visual consistency across disparate brand touchpoints.</p>
              <div className="mt-auto flex items-center justify-between text-slate-400 font-label-caps text-[10px] tracking-wider">
                <span>SEP 04, 2024</span>
                <span className="flex items-center"><span className="material-symbols-outlined text-[14px] mr-1">schedule</span> 12 MIN READ</span>
              </div>
            </div>
          </article>
          {/* Card 6 */}
          <article className="bg-white rounded-xl overflow-hidden border border-border blog-card-hover flex flex-col hover:-translate-y-2 transition-all duration-300">
            <div className="h-48 w-full bg-surface-container-low relative">
              <img className="w-full h-full object-cover" alt="Blog 6" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGkkJywRdCzSYR4aJdIQO3e8yR1XOxAVLRNJf4WyD0jOfBvFg6kex-GrvZiMHHhngOFW10kPh2bQLsaKuDsdIve51wbljdTpVvcO-Q6-sXHxD5AZdTu1czluVTcjYkDWFKcv5C6Xgg5xULwR7L82lJfQ6i2Rxfid3LHHV7o_xAcfmlxkdsfSJKHAM38UyCuIXC-pEb608axpOChfy_Zb0gGAyK_M5Vo3c1WqKf2qhGme_I9UdjlWqDpQgVxXV7df3YKDUI2L9bBRU" />
            </div>
            <div className="p-lg flex flex-col flex-grow">
              <div className="flex items-center space-x-xs mb-sm">
                <span className="px-xs py-unit rounded-full bg-purple-light text-purple font-label-caps text-[10px] uppercase tracking-widest">Brand</span>
              </div>
              <h3 className="font-h3 text-h3 text-on-surface mb-sm leading-tight">Visual Identity for the Invisible Tech Era</h3>
              <p className="font-body-md text-slate-600 mb-lg line-clamp-3">How to design for interfaces that don't exist: The rise of ambient, voice-first, and gesture-based brand interactions.</p>
              <div className="mt-auto flex items-center justify-between text-slate-400 font-label-caps text-[10px] tracking-wider">
                <span>AUG 22, 2024</span>
                <span className="flex items-center"><span className="material-symbols-outlined text-[14px] mr-1">schedule</span> 7 MIN READ</span>
              </div>
            </div>
          </article>
        </div>
        {/* Pagination/Load More */}
        <div className="flex justify-center mt-xl">
          <button className="flex items-center space-x-xs px-xl py-md rounded-lg border border-border bg-white text-purple font-h3 font-medium hover:bg-purple-light transition-colors group">
            <span>Load More Articles</span>
            <span className="material-symbols-outlined group-hover:translate-y-1 transition-transform">expand_more</span>
          </button>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="max-w-7xl mx-auto px-8 mb-xl">
        <div className="bg-primary p-xl rounded-xl text-center text-white">
          <h2 className="font-h2 text-h2 mb-md tracking-tight text-white">Stay ahead of the system.</h2>
          <p className="font-body-lg text-primary-fixed max-w-xl mx-auto mb-lg">Subscribe to our monthly briefing on AI-driven design, automation breakthroughs, and luxury brand strategy.</p>
          <form className="max-w-md mx-auto flex gap-xs">
            <input className="flex-grow bg-white text-on-surface px-md py-sm rounded-lg border-none focus:ring-2 focus:ring-lime placeholder:text-slate-400" placeholder="email@address.com" type="email" />
            <button className="bg-lime text-black px-lg py-sm rounded-lg font-h3 font-semibold hover:opacity-90 transition-opacity" type="submit">Join</button>
          </form>
        </div>
      </section>
    </>
  );
}
