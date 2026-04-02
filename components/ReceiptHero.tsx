'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { ArrowRight, Sparkles, CheckCircle2, Receipt, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export default function ReceiptHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress for this specific section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Smooth out the scroll progress
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Animate the receipt paper height and position
  // Adjust these values based on the printer image placement
  const receiptHeight = useTransform(smoothProgress, [0, 0.8], ["0px", "500px"]);
  const receiptOpacity = useTransform(smoothProgress, [0, 0.1], [0, 1]);
  const printerScale = useTransform(smoothProgress, [0, 0.2], [0.9, 1]);
  
  return (
    <section ref={containerRef} className="relative min-h-[150vh] pt-20 pb-0 px-6 overflow-visible">
      {/* Sticky Container for Hero Content */}
      <div className="sticky top-20 max-w-7xl mx-auto h-[80vh] flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
        
        {/* Left Side: Content */}
        <div className="flex-1 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-8"
          >
            <Sparkles size={14} className="animate-pulse" />
            Fintech Reinvented
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tighter leading-[0.95]"
          >
            Billing that <br />
            <span className="text-primary italic">Actually</span> Flows.
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 text-xl mb-12 max-w-lg leading-relaxed font-light"
          >
            Experience the future of Indian retail. Smart AI auditing, GST compliance, and lightning-fast checkout — all in one sleek platform.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-6"
          >
            <Link href="/download" className="group relative px-10 py-5 bg-slate-900 text-white font-bold rounded-2xl overflow-hidden shadow-2xl transition-all hover:scale-105 active:scale-95">
              <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <span className="relative flex items-center gap-3 text-lg">
                Start Printing Now
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            
            <Link href="/features" className="px-10 py-5 bg-white border border-slate-200 text-slate-700 font-bold rounded-2xl hover:bg-slate-50 transition-all text-lg flex items-center gap-2">
              Explore Demo
            </Link>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-12 flex items-center gap-8 text-slate-400"
          >
            <div className="flex items-center gap-2">
              <ShieldCheck size={18} className="text-emerald-500" />
              <span className="text-sm font-medium">GST Ready</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={18} className="text-emerald-500" />
              <span className="text-sm font-medium">AI Audited</span>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Animated Printer & Receipt */}
        <div className="flex-1 relative w-full flex items-center justify-center lg:justify-end">
          <motion.div 
            style={{ scale: printerScale }}
            className="relative w-full max-w-[500px]"
          >
            {/* The Printer Machine */}
            <img 
              src="/images/thermal-printer.png" 
              alt="Premium Thermal Printer"
              className="w-full h-auto drop-shadow-[0_50px_40px_rgba(0,0,0,0.2)] relative z-20"
            />
            
            {/* The Receipt Exit Slot Mask */}
            {/* Positioned precisely over the printer slot */}
            <div className="absolute top-[32%] left-[30%] right-[30%] z-10 overflow-hidden" style={{ height: '800px' }}>
              <motion.div 
                style={{ 
                  height: receiptHeight,
                  opacity: receiptOpacity,
                  rotateX: -15, // Perspective tilt
                }}
                className="w-full bg-white shadow-2xl origin-top rounded-b-lg border-x border-slate-100 flex flex-col"
              >
                {/* Receipt Content */}
                <div className="p-6 md:p-8 flex flex-col gap-6 font-mono text-[10px] md:text-xs">
                  <div className="text-center border-b border-dashed border-slate-300 pb-6">
                    <div className="text-slate-900 font-black text-sm uppercase mb-1">Billing Corner</div>
                    <div className="text-slate-500">Receipt #BC-98234</div>
                    <div className="text-slate-400 mt-1">24 Mar 2026 • 11:24 AM</div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between text-slate-700">
                      <span>Smart Inventory Pro</span>
                      <span className="font-bold">₹4,999.00</span>
                    </div>
                    <div className="flex justify-between text-slate-700">
                      <span>GST Compliance Module</span>
                      <span className="font-bold">₹1,499.00</span>
                    </div>
                    <div className="flex justify-between text-slate-700">
                      <span>AI Audit Assistant (1y)</span>
                      <span className="font-bold">₹2,999.00</span>
                    </div>
                  </div>
                  
                  <div className="border-t border-dashed border-slate-300 pt-6 space-y-2">
                    <div className="flex justify-between text-slate-500">
                      <span>Subtotal</span>
                      <span>₹9,497.00</span>
                    </div>
                    <div className="flex justify-between text-slate-500">
                      <span>Tax (GST 18%)</span>
                      <span>₹1,709.46</span>
                    </div>
                    <div className="flex justify-between text-slate-900 font-bold text-base pt-2">
                      <span>TOTAL</span>
                      <span className="text-primary text-xl">₹11,206.46</span>
                    </div>
                  </div>
                  
                  <div className="mt-8 flex flex-col items-center gap-4 py-6 bg-slate-50 rounded-2xl">
                    <div className="w-24 h-24 bg-white p-2 rounded-xl border border-slate-200">
                      {/* Fake QR Code */}
                      <div className="w-full h-full bg-slate-900 rounded-sm flex items-center justify-center p-2">
                        <div className="grid grid-cols-4 grid-rows-4 gap-1 w-full h-full">
                          {[...Array(16)].map((_, i) => (
                            <div key={i} className={`rounded-[1px] ${((i * 7) % 5 > 2) ? 'bg-white' : 'bg-transparent'}`} />
                          ))}
                        </div>

                      </div>
                    </div>
                    <div className="text-[8px] uppercase font-bold tracking-widest text-slate-400">Scan to Verify</div>
                  </div>
                  
                  <div className="text-center text-slate-400 mt-auto pb-4">
                    <p>Thank you for choosing the future.</p>
                    <p className="mt-1">billingcorner.com</p>
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* Decorative Shadows & Glow */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-4/5 h-10 bg-black/20 blur-3xl rounded-full z-0" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 blur-[100px] rounded-full z-0" />
          </motion.div>
        </div>

      </div>
      
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-50/50 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px]" />
      </div>
    </section>
  );
}
