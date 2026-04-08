'use client';

import { useState, useEffect } from 'react';
import { Monitor, Globe, Smartphone, Apple, Play, Download as DownloadIcon, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import FAQ from '@/src/components/FAQ';

const platforms = ['Desktop', 'Mobile', 'Web'];

const downloadFaqs = [
  {
    question: "Do I need to pay for each version separately?",
    answer: "No. Your Billing Corner account is universal. Once you have a subscription, you can use the Desktop, Web, and Mobile versions at no extra cost."
  },
  {
    question: "How do I update the Desktop app?",
    answer: "The Windows app features an auto-update system. Every time you launch the app, it checks for updates and installs them automatically in the background."
  },
  {
    question: "Is there a minimum Android version required?",
    answer: "Billing Corner for Android requires Android 8.0 (Oreo) or higher for optimal performance and security."
  }
];

export default function Download() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % platforms.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="pb-24">
      <section className="pt-32 pb-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-8 flex flex-col sm:flex-row items-center whitespace-nowrap justify-center gap-x-4 gap-y-2">
            <span>Download Billing Corner for</span>
            <div className="relative h-[1.2em] min-w-[120px] flex items-center justify-center sm:justify-start">
              <AnimatePresence mode="wait">
                <motion.span
                  key={platforms[index]}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="text-primary block"
                >
                  {platforms[index]}
                </motion.span>
              </AnimatePresence>
            </div>
          </h1>
          <p className="text-slate-600 text-xl max-w-2xl mx-auto">
            Experience absolute synchronization. Take control of your business finances on every device you own.
          </p>
        </div>
      </section>

      <section className="px-6 mb-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Desktop */}
          <motion.div
            whileHover={{ y: -10 }}
            className="bg-white p-12 rounded-[3rem] border border-slate-100 shadow-xl hover:shadow-2xl transition-all"
          >
            <div className="w-20 h-20 bg-primary/5 rounded-[2rem] flex items-center justify-center text-primary mb-8 mx-auto">
              <Monitor size={40} />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">Desktop Version</h2>
            <p className="text-slate-500 text-center mb-10 leading-relaxed">
              The native power of Billing Corner optimized for your workstation. Available for Windows 10 & 11.
            </p>
            <ul className="space-y-4 mb-10">
              <li className="flex items-center gap-3 text-sm text-slate-600">
                <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                  <ChevronRight size={14} />
                </div>
                Latest Version: 2.4.0
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-600">
                <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                  <ChevronRight size={14} />
                </div>
                Full offline support
              </li>
            </ul>
            <button className="w-full btn-primary py-4 flex items-center justify-center gap-3">
              <DownloadIcon size={20} /> Download for Windows
            </button>
          </motion.div>

          {/* Web App */}
          <motion.div
            whileHover={{ y: -10 }}
            className="bg-slate-50 p-12 rounded-[3rem] border border-slate-200 shadow-sm hover:shadow-xl transition-all"
          >
            <div className="w-20 h-20 bg-primary/5 rounded-[2rem] flex items-center justify-center text-primary mb-8 mx-auto">
              <Globe size={40} />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">Web App</h2>
            <p className="text-slate-500 text-center mb-10 leading-relaxed">
              Access your dashboard instantly from any modern browser without installing a thing.
            </p>
            <ul className="space-y-4 mb-10">
              <li className="flex items-center gap-3 text-sm text-slate-600">
                <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                  <ChevronRight size={14} />
                </div>
                Always up to date
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-600">
                <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                  <ChevronRight size={14} />
                </div>
                Cross-platform compatibility
              </li>
            </ul>
            <button className="w-full btn-secondary py-4 flex items-center justify-center gap-3">
              <Globe size={20} /> Open Web App
            </button>
          </motion.div>
        </div>
      </section>

      {/* Mobile Section */}
      <section className="px-6">
        <div className="max-w-6xl mx-auto bg-slate-900 rounded-[4rem] p-12 md:p-24 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
            <svg viewBox="0 0 400 400" className="w-full h-full">
              <path d="M0 400L400 0H0V400Z" fill="white" />
            </svg>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Go Mobile</h2>
              <p className="text-slate-400 text-lg mb-12 leading-relaxed">
                Keep track of your billings on the go. Get real-time notifications and manage your invoices from anywhere in the world.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-white text-slate-900 px-6 py-3 rounded-2xl font-bold flex items-center gap-3 hover:bg-slate-100 transition-colors">
                  <Apple size={24} />
                  <div className="text-left">
                    <div className="text-[10px] uppercase tracking-wider opacity-60">Download on the</div>
                    <div className="text-sm">App Store</div>
                  </div>
                </button>
                <button className="bg-white text-slate-900 px-6 py-3 rounded-2xl font-bold flex items-center gap-3 hover:bg-slate-100 transition-colors">
                  <Play size={24} />
                  <div className="text-left">
                    <div className="text-[10px] uppercase tracking-wider opacity-60">Get it on</div>
                    <div className="text-sm">Google Play</div>
                  </div>
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-primary/20 w-80 h-80 rounded-full blur-[100px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
              <div className="relative bg-slate-800 w-64 h-[500px] mx-auto rounded-[3rem] border-[8px] border-slate-700 shadow-2xl overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-700 rounded-b-2xl" />
                <div className="p-6 pt-12">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white mb-6">
                    <DownloadIcon size={24} />
                  </div>
                  <div className="space-y-4">
                    <div className="h-4 bg-slate-700 rounded-full w-3/4" />
                    <div className="h-4 bg-slate-700 rounded-full w-1/2" />
                    <div className="h-32 bg-slate-700 rounded-2xl w-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-24 px-6 text-center pb-24">
        <p className="text-slate-400 text-sm">
          Need help with installation? <a href="#" className="text-primary hover:underline">Read the setup guide</a> or <a href="#" className="text-primary hover:underline">Contact Support</a>.
        </p>
      </section>

      <FAQ customFaqs={downloadFaqs} title="Download FAQ" />
    </div>
  );
}
