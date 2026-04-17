'use client';

import { useState, useEffect } from 'react';
import { Monitor, Globe, Smartphone, Apple, Play, Download as DownloadIcon, ChevronRight, Check, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';
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
    <div className="pb-0 bg-slate-50 font-sans">
      {/* 1. HERO DOWNLOAD SECTION */}
      <section className="relative pt-32 pb-32 px-6 overflow-hidden bg-gradient-to-br from-indigo-900 via-[#3b2786] to-purple-900">
        <div className="absolute inset-0 bg-black/20 mix-blend-overlay pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/20 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl xl:text-5xl font-medium text-slate-900 text-white mb-6 tracking-tight drop-shadow-lg">
              Download <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-violet-300">Billing Corner</span>
            </h1>
            <p className="text-indigo-100/80 text-lg md:text-xl max-w-2xl mx-auto font-medium">
              Experience the absolute perfect synergy of features. Take control of your business finances on every device you own, completely synced.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 relative">
            {/* Desktop App Card */}
            <motion.div
              whileHover={{ y: -8 }}
              className="relative group bg-white/10 backdrop-blur-xl border border-white/20 p-8 md:p-10 rounded-[20px] shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] overflow-hidden"
            >
              {/* Floating UI Elements inside Card (Invoice Preview) */}
              <div className="absolute -top-6 -right-6 w-40 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 shadow-2xl rotate-12 group-hover:rotate-6 transition-transform duration-500 hidden sm:block">
                <div className="flex justify-between items-center mb-3">
                  <div className="w-10 h-2.5 bg-white/30 rounded-full"></div>
                  <div className="w-5 h-2.5 bg-emerald-400/80 rounded-full"></div>
                </div>
                <div className="space-y-1.5 mb-3">
                  <div className="w-full h-1.5 bg-white/20 rounded-full"></div>
                  <div className="w-4/5 h-1.5 bg-white/20 rounded-full"></div>
                  <div className="w-2/3 h-1.5 bg-white/20 rounded-full"></div>
                </div>
                <div className="pt-2 border-t border-white/10 space-y-1">
                  <div className="flex justify-between items-center">
                    <span className="text-[9px] text-white/60 font-semibold tracking-wider">CGST 9%</span>
                    <span className="text-[10px] text-white font-bold">₹108.00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[9px] text-white/60 font-semibold tracking-wider">SGST 9%</span>
                    <span className="text-[10px] text-white font-bold">₹108.00</span>
                  </div>
                  <div className="flex justify-between items-center mt-1 pt-1 border-t border-white/5">
                    <span className="text-[10px] text-blue-200 font-bold">Total</span>
                    <span className="text-[11px] text-blue-200 font-black">₹1,416.00</span>
                  </div>
                </div>
              </div>

              <div className="w-16 h-16 relative z-10 bg-gradient-to-br from-blue-400/20 to-violet-400/20 border border-white/10 rounded-2xl flex items-center justify-center text-blue-200 mb-8 shadow-[0_0_15px_rgba(96,165,250,0.3)]">
                <Monitor size={32} strokeWidth={1.5} />
              </div>
              <h2 className="text-2xl md:text-3xl font-medium text-slate-900 text-white mb-3 tracking-tight">Desktop App</h2>
              <p className="text-indigo-100/70 mb-8 leading-relaxed font-medium">
                The native power of Billing Corner optimized for your workstation. Maximum performance, full offline capabilities.
              </p>
              
              <ul className="space-y-4 mb-10 text-white/80 font-medium">
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-300 flex items-center justify-center">
                    <Check size={14} strokeWidth={3} />
                  </div>
                  Available for Windows & macOS
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-300 flex items-center justify-center">
                    <Check size={14} strokeWidth={3} />
                  </div>
                  Instant printer & scanner access 
                </li>
              </ul>

              <button className="w-full relative z-10 bg-gradient-to-r from-blue-500 to-violet-500 hover:from-blue-400 hover:to-violet-400 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(139,92,246,0.3)] transition-all">
                <DownloadIcon size={20} /> Download Installer
              </button>
            </motion.div>

            {/* Web App Card */}
            <motion.div
              whileHover={{ y: -8 }}
              className="relative group bg-white/10 backdrop-blur-xl border border-white/20 p-8 md:p-10 rounded-[20px] shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] overflow-hidden"
            >
              {/* Floating UI Elements inside Card (Chart/Stats) */}
              <div className="absolute -top-6 -right-6 w-40 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 shadow-2xl -rotate-12 group-hover:-rotate-6 transition-transform duration-500 hidden sm:block">
                <div className="flex justify-between items-end h-16 gap-1 mb-2">
                  <div className="w-full bg-violet-400/40 rounded-t-sm h-1/3"></div>
                  <div className="w-full bg-violet-400/60 rounded-t-sm h-3/4"></div>
                  <div className="w-full bg-violet-400/50 rounded-t-sm h-1/2"></div>
                  <div className="w-full bg-blue-400/80 rounded-t-sm h-full relative"><div className="absolute -top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_5px_white]"></div></div>
                  <div className="w-full bg-violet-400/30 rounded-t-sm h-2/3"></div>
                </div>
                <div className="text-[10px] text-white/80 font-bold tracking-wide">Revenue Analysis</div>
                <div className="text-[9px] text-emerald-300 font-semibold">+24.5% vs last month</div>
              </div>

              <div className="w-16 h-16 relative z-10 bg-gradient-to-br from-violet-400/20 to-purple-400/20 border border-white/10 rounded-2xl flex items-center justify-center text-violet-200 mb-8 shadow-[0_0_15px_rgba(167,139,250,0.3)]">
                <Globe size={32} strokeWidth={1.5} />
              </div>
              <h2 className="text-2xl md:text-3xl font-medium text-slate-900 text-white mb-3 tracking-tight">Cloud Web App</h2>
              <p className="text-indigo-100/70 mb-8 leading-relaxed font-medium">
                Access your dashboard instantly from any modern browser. Fully synced, real-time updates without installing a thing.
              </p>
              
              <ul className="space-y-4 mb-10 text-white/80 font-medium">
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-violet-500/20 text-violet-300 flex items-center justify-center">
                    <Check size={14} strokeWidth={3} />
                  </div>
                  Always up to date
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-violet-500/20 text-violet-300 flex items-center justify-center">
                    <Check size={14} strokeWidth={3} />
                  </div>
                  Cross-platform compatibility
                </li>
              </ul>

              <a 
                href="https://app.billingcorner.com/login"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full relative z-10 bg-white/10 hover:bg-white/20 border border-white/20 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-3 transition-colors backdrop-blur-sm"
              >
                <Globe size={20} /> Launch Web App
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. MOBILE APP SECTION */}
      <section className="bg-gradient-to-br from-[#050a15] via-[#0a1128] to-black py-24 md:py-32 px-6 relative overflow-hidden text-white border-y border-white/5">
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-violet-600/10 blur-[150px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-[0.2em] mb-8 w-fit mt-10"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Available Now
            </motion.div>
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-medium text-slate-900  text-white mb-6 tracking-tight leading-tight">
              Manage your business <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 drop-shadow-[0_0_15px_rgba(96,165,250,0.5)]">on the go.</span>
            </h2>
            <p className="text-slate-400 text-lg md:text-xl font-medium mb-12 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Experience the futuristic fintech design right in your pocket. Keep track of billing, view insightful dashboards, and manage inventory with absolute precision.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button className="w-full sm:w-auto bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-4 rounded-2xl font-bold flex items-center justify-center gap-4 transition-all shadow-[0_0_15px_rgba(255,255,255,0.05)] hover:shadow-[0_0_25px_rgba(255,255,255,0.1)] group">
                <Apple size={32} className="group-hover:scale-110 transition-transform" />
                <div className="text-left">
                  <div className="text-[10px] uppercase font-bold tracking-widest text-slate-400">Download on the</div>
                  <div className="text-lg leading-none mt-1">App Store</div>
                </div>
              </button>
              <button className="w-full sm:w-auto bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-4 rounded-2xl font-bold flex items-center justify-center gap-4 transition-all shadow-[0_0_15px_rgba(255,255,255,0.05)] hover:shadow-[0_0_25px_rgba(255,255,255,0.1)] group">
                <Play size={28} className="text-[#00f2fe] group-hover:scale-110 transition-transform" fill="currentColor" />
                <div className="text-left">
                  <div className="text-[10px] uppercase font-bold tracking-widest text-slate-400">Get it on</div>
                  <div className="text-lg leading-none mt-1">Google Play</div>
                </div>
              </button>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 relative flex justify-center lg:justify-end">
            <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-transparent blur-3xl rounded-full"></div>
            {/* Smartphone Mockup */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="relative w-[320px] sm:w-[500px] max-w-full flex items-center justify-center z-10"
            >
              <img 
                src="/smartphone_mockup-removebg-preview.png" 
                alt="Billing Corner Mobile Dashboard" 
                className="w-full h-auto drop-shadow-[0_20px_50px_rgba(59,130,246,0.5)] scale-110"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="pt-24 px-6 text-center pb-24 border-t border-slate-200">
        <p className="text-slate-500 text-base font-medium">
          Need help with installation? <Link href="/contact" className="text-primary hover:underline font-bold">Click here</Link> or <Link href="/contact" className="text-primary hover:underline font-bold">Contact Support</Link>.
        </p>
      </section>

      <div className="bg-white">
        <FAQ customFaqs={downloadFaqs} title="Download FAQ" />
      </div>
    </div>
  );
}
