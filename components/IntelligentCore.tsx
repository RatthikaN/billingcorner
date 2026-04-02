'use client';

import { motion } from 'motion/react';
import { Monitor, Globe, Smartphone, Sparkles } from 'lucide-react';

export default function IntelligentCore() {
  return (
    <section className="py-24 px-6 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-[3rem] bg-gradient-to-br from-[#6b21a8] via-[#7e22ce] to-[#581c87] p-12 md:p-20 overflow-hidden shadow-2xl min-h-[500px]"
        >
          {/* Ghosted Background Shapes */}
          <div className="absolute inset-0 pointer-events-none opacity-10">
            <div className="absolute -top-20 -right-20 w-80 h-80 border-[40px] border-white rounded-full" />
            <div className="absolute top-1/2 -left-20 w-64 h-64 border-[30px] border-white rounded-full" />
            <div className="absolute -bottom-20 right-1/4 w-96 h-96 border-[50px] border-white rounded-full" />
          </div>

          {/* Sparkles */}
          <div className="absolute inset-0 pointer-events-none">
            <motion.div
              animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.2, 0.8] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute top-10 left-1/4 text-white"
            >
              <Sparkles size={16} />
            </motion.div>
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.5, 1] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              className="absolute bottom-20 right-1/3 text-white"
            >
              <Sparkles size={20} />
            </motion.div>
            <motion.div
              animate={{ opacity: [0.2, 0.8, 0.2] }}
              transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
              className="absolute top-1/2 right-10 text-white"
            >
              <Sparkles size={12} />
            </motion.div>
          </div>

          <div className="relative z-10 flex flex-col lg:flex-row items-center h-full">
            
            {/* Left Content */}
            <div className="w-full lg:w-1/2 text-left mb-12 lg:mb-0">
              <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight"
              >
                Intelligent Core Platform <br />
                <span className="text-white/80">With Multi-Platform Power</span>
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-white/70 text-lg leading-relaxed max-w-md"
              >
                Engineered for speed and cross-platform consistency. Billing Corner is built using **Flutter**, delivering high-performance experiences everywhere.
              </motion.p>
            </div>

            {/* Right Side — Exact Replica of Bubble Design */}
            <div className="w-full lg:w-1/2 relative h-[400px] flex items-center justify-center">
              
              {/* Connecting Lines (SVG) */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 400">
                {/* Horizontal & Vertical lines from center-bottom hub */}
                <path d="M200,320 L200,200" fill="none" stroke="white" strokeWidth="1" strokeOpacity="0.3" />
                <path d="M200,200 L100,200" fill="none" stroke="white" strokeWidth="1" strokeOpacity="0.3" />
                <path d="M200,200 L300,200" fill="none" stroke="white" strokeWidth="1" strokeOpacity="0.3" />
                <path d="M200,200 L200,80" fill="none" stroke="white" strokeWidth="1" strokeOpacity="0.3" />
              </svg>

              {/* Main Hub Card (Like 'Ask Freya') */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="absolute bottom-10 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4 z-20 min-w-[200px]"
              >
                <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600">
                  <Monitor size={20} />
                </div>
                <div>
                  <div className="text-slate-900 font-bold text-sm">Billing Corner Core</div>
                  <div className="text-slate-500 text-[10px]">Your Accounting Engine</div>
                </div>
              </motion.div>

              {/* Info Bubble 1: Top (Windows) */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-white/20 max-w-[180px] text-center"
              >
                <div className="text-xs font-bold text-slate-800 mb-1">Desktop App</div>
                <div className="text-[10px] text-slate-500 leading-tight">Native Windows performance for heavy workloads.</div>
              </motion.div>

              {/* Info Bubble 2: Left (Web) */}
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                animate={{ x: [0, -5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute left-0 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-white/20 max-w-[160px] text-left"
              >
                <div className="text-xs font-bold text-slate-800 mb-1">Web Platform</div>
                <div className="text-[10px] text-slate-500 leading-tight">Access your data securely from any browser.</div>
              </motion.div>

              {/* Info Bubble 3: Right (Mobile) */}
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute right-0 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-white/20 max-w-[160px] text-left"
              >
                <div className="text-xs font-bold text-slate-800 mb-1">Mobile Access</div>
                <div className="text-[10px] text-slate-500 leading-tight">Manage invoices and inventory on the go.</div>
              </motion.div>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
