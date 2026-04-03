'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function SaaSBanner() {
  return (
    <section className="py-16 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="relative rounded-3xl overflow-hidden shadow-2xl shadow-indigo-500/20"
          style={{
            background: 'linear-gradient(120deg, #2563EB 0%, #4F46E5 45%, #7C3AED 100%)',
          }}
        >
          {/* Subtle dot-grid overlay */}
          <div
            className="absolute inset-0 opacity-[0.06] pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
              backgroundSize: '28px 28px',
            }}
          />

          {/* Soft glow orbs */}
          <div className="absolute -top-16 -left-16 w-72 h-72 bg-blue-400/30 rounded-full blur-[80px] pointer-events-none" />
          <div className="absolute -bottom-20 right-10 w-80 h-80 bg-purple-500/30 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-0 px-10 md:px-16 py-12 md:py-14">

            {/* ── Left — Text + CTA ── */}
            <div className="w-full md:w-[55%] flex flex-col items-start">
              <span className="inline-block text-blue-200 text-xs font-bold uppercase tracking-[0.25em] mb-4">
                ✦ All-in-One Billing Platform
              </span>

              <h2 className="text-3xl md:text-3xl xl:text-4xl font-medium text-white leading-[1.1] tracking-tighter mb-5">
               Carry Your Business <br />
                <span className="text-blue-200">Anywhere</span>
              </h2>

              <p className="text-blue-100/80 text-base md:text-lg font-light leading-relaxed mb-8 max-w-md">
Simplify GST billing, manage inventory, and track your business performance in real time — all from one powerful platform              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/download"
                  className="group inline-flex items-center gap-2 bg-white text-indigo-700 font-bold px-7 py-3.5 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 text-sm"
                >
                  Get Started Free
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/features"
                  className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white font-bold px-7 py-3.5 rounded-2xl hover:bg-white/20 transition-all duration-200 text-sm backdrop-blur-sm"
                >
                  Explore Features
                </Link>
              </div>
            </div>

            {/* ── Right — Floating Customer Image ── */}
            <div className="w-full md:w-[45%] flex items-center justify-center relative min-h-[420px]">

              {/* Glow behind image */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-48 h-48 bg-white/20 rounded-full blur-[70px]" />
              </div>

              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                className="relative z-20 flex justify-center w-full"
              >
                <div
                  className="rounded-[1rem] overflow-hidden shadow-[0_30px_80px_-10px_rgba(0,0,0,0.55)] w-[85%] md:w-[90%]"
                  style={{ border: '3px solid rgba(255,255,255,0.2)' }}
                >
                  <img
                    src="/images/customer.png"
                    alt="Customer Management App Interface"
                    className="w-full h-auto block"
                    draggable={false}
                  />
                </div>
                
                {/* Small badge on the interface */}
                <div className="absolute top-[-10px] left-[-10px] sm:left-4 z-30 bg-white rounded-xl px-3 py-1.5 shadow-xl flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse inline-block" />
                  <span className="text-xs font-bold text-slate-700 whitespace-nowrap">Customer Saved!</span>
                </div>
              </motion.div>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
