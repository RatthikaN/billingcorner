'use client';

import Link from 'next/link';
import { useRef, useState, useEffect } from 'react';
import {
  ArrowRight,
  ShieldCheck,
  BarChart3,
  Package,
  CreditCard,
  Monitor,
  Smartphone,
  Globe,
  Cpu,
  Zap,
  Sparkles,
  Clock
} from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
import ProductShowcase from '@/components/ProductShowcase';
import HorizontalScrollShowcase from '@/components/HorizontalScrollShowcase';
import CoreValuesMarquee from '@/components/CoreValuesMarquee';
import MultiUserAccessAnimation from '@/components/MultiUserAccessAnimation';
import TestimonialMarquee from '@/components/TestimonialMarquee';
import SaaSBanner from '@/components/SaaSBanner';
import CTABanner from '@/components/CTABanner';
import ComplianceFeatures from '@/components/ComplianceFeatures';
import ProductServiceManagement from '@/components/ProductServiceManagement';
import SmartRackInventory from '@/components/SmartRackInventory';
import GstBillingSimple from '@/components/GstBillingSimple';
import MonitorClientDues from '@/components/MonitorClientDues';
import ProfitabilityInsights from '@/components/ProfitabilityInsights';
import IntelligentCore from '@/components/IntelligentCore';

import FAQ from '@/src/components/FAQ';
import ReceiptVideoAnimation from '@/components/ReceiptVideoAnimation';
import StatsShowcase from '@/components/StatsShowcase';




const features = [
  {
    image: '/images/core-values/billing.png',
    title: 'Sales & Service Invoices',
    description: 'Professional, GST-ready invoices generated in seconds for any business type.',
  },
  {
    image: '/images/core-values/pos.jpg',
    title: 'POS Billing',
    description: 'Fast checkout experience designed for high-traffic retail environments.',
  },
  {
    image: '/images/core-values/inventory.jpg',
    title: 'Smart Inventory',
    description: 'Automated stock tracking with multi-unit support and HSN/SAC integration.',
  },
  {
    image: '/images/core-values/analytics.jpg',
    title: 'GST Calculation',
    description: 'Automated CGST, SGST, and IGST processing for 100% tax accuracy.',
  },
];

const downloadOptions = [
  { name: 'Windows Desktop', icon: Monitor, href: '/download/windows' },
  { name: 'Android App', icon: Smartphone, href: '/download/android' },
  { name: 'iOS App', icon: Smartphone, href: '/download/ios' },
  { name: 'Web Version', icon: Globe, href: '/download/web' },
];




export default function Home() {
  const [isDownloadOpen, setIsDownloadOpen] = useState(false);
  const [particles, setParticles] = useState<any[]>([]);
  const containerRef = useRef(null);

  useEffect(() => {
    const generatedParticles = [...Array(15)].map((_, i) => ({
      id: i,
      width: `${Math.random() * 200 + 50}px`,
      height: `${Math.random() * 200 + 50}px`,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: `${Math.random() * 10 + 10}s`,
      delay: `${Math.random() * 5}s`,
    }));
    setParticles(generatedParticles);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y3 = useTransform(scrollYProgress, [0.8, 1], [100, -100]);
  const y4 = useTransform(scrollYProgress, [0.8, 1], [50, -50]);



  return (
    <div ref={containerRef} className="bg-white relative">
      {/* Global AI Particles Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute bg-primary/20 rounded-full blur-xl animate-particle"
            style={{
              width: particle.width,
              height: particle.height,
              left: particle.left,
              top: particle.top,
              '--duration': particle.duration,
              '--delay': particle.delay,
            } as any}
          />
        ))}
      </div>

      {/* 
        ======================================================================
        HERO SECTION
        ======================================================================
      */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-8 overflow-hidden bg-slate-100">

        {/* Parallax background orbs */}
        <motion.div style={{ y: y2 }} className="absolute pointer-events-none inset-0 z-0">
          <div className="absolute top-10 left-1/3 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]" />
          <div className="absolute -bottom-20 right-10 w-[400px] h-[400px] bg-indigo-400/10 rounded-full blur-[100px]" />
        </motion.div>

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-20 relative z-10">

          {/* Left — Content */}
          <div className="w-full md:w-[48%] flex flex-col justify-center">

            {/* Badge */}
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
              AI-Powered Efficiency
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-4xl md:text-5xl xl:text-6xl font-semibold text-slate-900 mb-6 leading-[1.1] tracking-tighter"
            >
              India's <span className="text-primary">#1</span> AI Powered 
              <span className="text-primary italic">GST billing software</span>
            </motion.h1>

            {/* Tagline & Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-10 max-w-lg"
            >
              <h2 className="text-xl md:text-2xl font-medium text-slate-900 mb-3 tracking-tight">Built for every businesses</h2>
              <p className="text-base md:text-lg text-slate-600 leading-relaxed font-light">
                A modern and easy-to-use online GST billing software to take your business to the next level. Access it anytime, anywhere.
              </p>
            </motion.div>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-wrap gap-4"
            >
              <Link href="/download" className="px-8 py-4 bg-primary text-white font-bold rounded-2xl flex items-center gap-2 group shadow-xl shadow-primary/20 hover:scale-105 transition-all">
                Start Billing Now
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/download" className="px-8 py-4 bg-white border border-slate-200 text-slate-700 font-bold rounded-2xl hover:bg-slate-50 transition-all">
                Download
              </Link>
            </motion.div>

          </div>

          {/* Right — Image */}
          <motion.div
            style={{ y: y1 }}
            className="w-full md:w-[62%] shrink-0 relative"
          >
            {/* AI Scanning line */}
            <div className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-primary/60 to-transparent blur-[1px] z-20 animate-scan pointer-events-none" />

            <motion.img
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              src="/images/hero-removebg.png"
              alt="Billing Corner SaaS platform mockup"
              className="w-full h-auto object-contain drop-shadow-2xl relative z-10"
            />

            {/* Floating Platform Icons */}
            <motion.div
              animate={{ y: [0, -10, 0], x: [0, 5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-10 -left-10 z-20 p-3 bg-white rounded-2xl shadow-xl border border-slate-100 flex items-center justify-center text-[#3DDC84] drop-shadow-[0_0_15px_rgba(61,220,132,0.3)]"
            >
              <Smartphone size={24} />
            </motion.div>

            <motion.div
              animate={{ y: [0, 12, 0], x: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute top-1/2 -right-12 z-20 p-3 bg-white rounded-2xl shadow-xl border border-slate-100 flex items-center justify-center text-[#4285F4] drop-shadow-[0_0_15px_rgba(66,133,244,0.3)]"
            >
              <Globe size={24} />
            </motion.div>

            <motion.div
              animate={{ y: [0, -15, 0], x: [0, 6, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -bottom-6 left-1/4 z-20 p-3 bg-white rounded-2xl shadow-xl border border-slate-100 flex items-center justify-center text-slate-800 drop-shadow-[0_0_15px_rgba(0,0,0,0.1)]"
            >
              <Monitor size={24} />
            </motion.div>

            {/* Glassmorphism card (moved/updated) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1, rotate: [0, 2, 0] }}
              transition={{ delay: 1.4, duration: 0.6, rotate: { duration: 6, repeat: Infinity, ease: "easeInOut" } }}
              className="absolute top-1/4 -left-12 z-30 bg-white/80 backdrop-blur-lg border border-white/60 shadow-xl rounded-2xl px-4 py-3 flex items-center gap-3"
            >
              <div className="w-8 h-8 bg-green-500/10 rounded-full flex items-center justify-center text-green-600">
                <ShieldCheck size={18} />
              </div>
              {/* <div className="text-[10px] font-bold text-slate-900 leading-none">100% SECURE</div> */}
            </motion.div>

          </motion.div>

        </div>
      </section>

  <StatsShowcase />

      {/* Instant GST Billing Section */}
      <section className="pt-24 pb-8 px-6 bg-white relative z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Centered Heading */}
          <div className="text-center mb-16 md:mb-20 max-w-4xl mx-auto">
            <span className="text-primary font-black tracking-[0.3em] uppercase text-xs mb-4 block">Fast & Efficient</span>
            <h2 className="text-4xl md:text-5xl font-semibold text-slate-900 leading-[1.1] tracking-tighter">
              Create instant <span className="text-primary italic">GST Billing</span> online and <br/> share your customers
            </h2>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16">
            {/* Left — Description */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-[40%] shrink-0"
            >
              <p className="text-slate-600 text-base md:text-lg leading-relaxed font-light mb-8">
                Create GST bills instantly with a fast and easy online billing system. Generate accurate invoices and share them with your customers via WhatsApp, email, or download in seconds. Manage your business smarter, anytime and anywhere.
              </p>
              <Link href="/download" className="px-8 py-4 bg-slate-900 text-white font-bold rounded-2xl inline-flex items-center gap-2 group hover:bg-primary transition-all duration-300">
                Get Started Now
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

          {/* Right — Image with Cinematic Parallax */}
          <div className="w-full md:w-[60%] relative perspective-1000 mt-8 md:mt-0">
            {/* Background blur aura */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
            
            <motion.div
              style={{ y: y1 }}
              className="relative z-10 px-4 md:px-0"
            >
              <img
                src="/instant.png"
                alt="Instant GST Billing interface"
                className="w-full h-auto object-contain drop-shadow-2xl translate-z-10 filter scale-110 md:scale-[1.15]"
              />

              {/* Parallax elements — These move at different speeds than the main image */}
              {/* WhatsApp Icon overlay / float */}
              {/* <motion.div
                style={{ y: y2, x: 10 }}
                className="absolute top-[15%] left-[-5%] z-20 w-16 h-16 md:w-20 md:h-20 bg-emerald-500 rounded-2xl shadow-xl flex items-center justify-center text-white drop-shadow-[0_0_20px_rgba(16,185,129,0.3)]"
              >
                <div className="font-bold text-xs uppercase">WA</div>
]              </motion.div> */}

              {/* Envelope float */}
              {/* <motion.div
                style={{ y: y3, x: -10 }}
                className="absolute top-[5%] right-[15%] z-20 p-4 bg-white rounded-2xl shadow-2xl border border-slate-100 flex items-center justify-center text-slate-800 drop-shadow-[0_0_25px_rgba(0,0,0,0.1)]"
              >
                <Sparkles size={24} className="text-primary animate-pulse" />
              </motion.div> */}

              {/* Download float */}
              {/* <motion.div
                style={{ y: y2, x: -15 }}
                className="absolute bottom-[20%] right-[-5%] z-20 w-14 h-14 bg-primary text-white rounded-full shadow-2xl flex items-center justify-center drop-shadow-[0_0_20px_rgba(99,102,241,0.4)]"
              >
                <ArrowRight size={24} className="rotate-90" />
              </motion.div> */}
            </motion.div>

            {/* Subtle panning shadow background */}
            <motion.div 
               style={{ x: y1, opacity: 0.1 }}
               className="absolute inset-0 bg-slate-900/10 blur-[50px] rounded-full -z-10"
            />
          </div>
        </div>
      </div>
    </section>

      {/* <StatsShowcase /> */}

      {/* Multi-User Access Animation Section */}
      <MultiUserAccessAnimation />

      {/* Core Values Section — Infinite Horizontal Scroll */}
      <CoreValuesMarquee />


      {/* Technology Section */}
      <IntelligentCore />


      {/* <ReceiptVideoAnimation /> */}
      <ComplianceFeatures />
      <ProductServiceManagement />
      <SmartRackInventory />
      <GstBillingSimple />
      <MonitorClientDues />
      <ProfitabilityInsights />
      <FAQ limit={7} showViewAll={true} />


      <SaaSBanner />
      <CTABanner />
      <TestimonialMarquee />

      {/* Nexus CTA Section — Unique Parallax Experience */}
      {/* <section className="py-32 px-6 bg-[#0f172a] relative z-10 overflow-hidden border-t border-slate-800">
        <motion.div style={{ y: y3 }} className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
        <motion.div style={{ y: y4 }} className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />
        
]        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`, backgroundSize: '40px 40px' }} />

        <div className="max-w-6xl mx-auto relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-primary text-xs font-bold uppercase tracking-[0.2em] mb-8">
                <Sparkles size={14} className="text-primary animate-pulse" />
                The Future of Business
              </div>
              
              <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter leading-[0.95]">
                Scale Your <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-indigo-400 to-purple-400">Intelligence</span>
              </h2>
              
              <p className="text-slate-400 text-xl mb-12 max-w-lg leading-relaxed font-light">
                Join 500+ forward-thinking merchants who have automated their compliance and doubled their efficiency.
              </p>

              <div className="flex flex-col sm:flex-row gap-6">
                <button
                  onClick={() => setIsDownloadOpen(!isDownloadOpen)}
                  className="group relative px-10 py-5 bg-primary text-white font-bold rounded-2xl overflow-hidden shadow-[0_20px_40px_-10px_rgba(99,102,241,0.5)] transition-all hover:scale-105 active:scale-95"
                >
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform" />
                  <span className="relative flex items-center justify-center gap-3 text-lg">
                    Get Started Now
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
                
                <Link href="/contact" className="px-10 py-5 bg-white/5 border border-white/10 text-white font-bold rounded-2xl transition-all hover:bg-white/10 text-lg flex items-center justify-center">
                  Talk to an Expert
                </Link>
              </div>

            
            </motion.div>

            <div className="relative h-[600px] hidden lg:flex items-center justify-center">
              <div className="absolute w-[300px] h-[300px] bg-primary/30 rounded-full blur-[80px] animate-pulse" />
              
              <motion.div
                style={{ y: y4 }}
                className="relative z-30 w-full max-w-[500px] p-[1px] rounded-[3rem] bg-gradient-to-b from-white/20 to-transparent shadow-2xl"
              >
                <div className="bg-[#1e293b]/80 backdrop-blur-3xl rounded-[2.9rem] p-2 border border-white/10 overflow-hidden">
                  <img
                    src="/images/cta_dashboard.png"
                    alt="SynergyIQ Billing and Analytics Dashboard Mockup"
                    className="w-full h-auto rounded-[2.5rem] object-cover"
                  />
                </div>
              </motion.div>

              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 z-10"
              >
                <motion.div
                  style={{ y: y3 }}
                  className="absolute top-20 right-10 p-4 bg-white/5 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl text-primary"
                >
                  <Cpu size={32} />
                </motion.div>
                
                <motion.div
                  style={{ y: y4 }}
                  className="absolute bottom-20 left-10 p-4 bg-white/5 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl text-amber-400"
                >
                  <Zap size={32} />
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-10 -right-10 z-40 bg-emerald-500/10 backdrop-blur-xl border border-emerald-500/20 p-6 rounded-3xl shadow-2xl"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-emerald-500 rounded-2xl flex items-center justify-center text-white">
                    <ShieldCheck size={28} />
                  </div>
                  <div>
                    <div className="text-white font-bold text-lg">99.9% Uptime</div>
                    <div className="text-emerald-400 text-xs font-bold uppercase tracking-wider">Enterprise Grade</div>
                  </div>
                </div>
              </motion.div>
            </div>

          </div>
        </div>

        {isDownloadOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-[#0f172a]/80 backdrop-blur-sm"
            onClick={() => setIsDownloadOpen(false)}
          >
            <div 
              className="bg-slate-900 border border-white/10 p-8 rounded-[3rem] max-w-md w-full shadow-2xl"
              onClick={e => e.stopPropagation()}
            >
              <h3 className="text-2xl font-bold text-white mb-6">Choose Your Version</h3>
              <div className="grid gap-4">
                {downloadOptions.map((option, idx) => (
                  <Link
                    key={idx}
                    href={option.href}
                    className="flex items-center gap-4 p-5 rounded-3xl bg-white/5 hover:bg-primary/20 hover:border-primary/50 border border-white/5 transition-all group"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                      <option.icon size={24} />
                    </div>
                    <div className="text-left">
                      <div className="font-bold text-white text-lg">{option.name}</div>
                      <div className="text-xs text-slate-400">Fast & Secure Download</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </section> */}
    </div>
  );
}
