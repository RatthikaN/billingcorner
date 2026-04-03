'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';
import { Send, Sparkles } from 'lucide-react';

export default function CTABanner() {
  const [email, setEmail] = useState('');

  return (
    <section className="py-24 px-6 relative z-30 flex justify-center mt-[-80px]">
      <div className="max-w-4xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative rounded-[2.5rem] p-[1px] overflow-hidden shadow-[0_30px_80px_-20px_rgba(99,102,241,0.25)]" 
        >
          {/* Soft gradient border effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-primary/30 to-indigo-500/20 pointer-events-none" />
          
          <div className="relative bg-white/70 backdrop-blur-3xl rounded-[2.5rem] p-10 md:p-14 border border-white/80 overflow-hidden flex flex-col items-center text-center">
            
            {/* Ambient inner glows */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-indigo-400/10 rounded-full blur-[100px] pointer-events-none mix-blend-multiply" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] pointer-events-none mix-blend-multiply" />

            {/* Icon / Mini Badge */}
            <motion.div 
               initial={{ opacity: 0, scale: 0.8 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2 }}
               className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100/80 border border-slate-200/50 text-slate-600 text-xs font-bold uppercase tracking-[0.1em] mb-6 shadow-sm backdrop-blur-md relative z-10"
            >
               <Sparkles size={14} className="text-primary" />
               Support
            </motion.div>

            {/* Heading */}
            <h2 className="text-3xl md:text-5xl font-semibold text-slate-900 leading-[1.15] tracking-tight mb-5 max-w-2xl relative z-10">
              Need help? <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-indigo-600 italic">We're here for you</span>
            </h2>

            {/* Subtitle */}
            <p className="text-slate-600 text-base md:text-lg font-light mb-10 max-w-2xl relative z-10">
              Have questions about features, pricing, customization, or want to book a demo? Our support team is always ready to guide you and answer all your queries.
            </p>

            {/* Form / CTA */}
            <div className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-lg relative z-20">
              <div className="relative w-full">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full px-6 py-4 rounded-2xl bg-white/90 text-slate-800 placeholder-slate-400 text-base focus:outline-none focus:ring-2 focus:ring-primary/50 border border-slate-200/80 shadow-inner backdrop-blur-md transition-all"
                />
              </div>
              <Link
                href={`/contact${email ? `?email=${encodeURIComponent(email)}` : ''}`}
                className="w-full sm:w-auto px-8 py-4 bg-slate-900 text-white font-bold rounded-2xl whitespace-nowrap hover:bg-primary transition-all duration-300 shadow-xl shadow-slate-900/10 flex items-center justify-center gap-2 group"
              >
                Contact Now
                <Send size={16} className="opacity-80 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
