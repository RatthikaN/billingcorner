'use client';

import { motion } from 'motion/react';
import { Monitor, Globe, Smartphone, Cpu, Sparkles, Layers } from 'lucide-react';

export default function IntelligentCore() {
  return (
    <section className="py-24 px-0 relative z-10 overflow-hidden bg-gradient-to-br from-[#1a0b2e] via-[#3b0764] to-[#1e1b4b]">
      {/* Background Decorative Elements with Parallax feels */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-[3rem] bg-white/5 backdrop-blur-sm p-10 md:p-16 overflow-hidden shadow-2xl min-h-[600px] border border-white/10"
        >
          {/* Abstract Circular Shapes & Depth Gradients */}
          <div className="absolute inset-0 pointer-events-none opacity-40">
            <div className="absolute -top-32 -right-32 w-96 h-96 bg-purple-500/30 rounded-full blur-[100px]" />
            <div className="absolute top-1/2 -left-32 w-80 h-80 bg-fuchsia-600/20 rounded-full blur-[120px]" />
            <div className="absolute -bottom-32 right-1/4 w-[500px] h-[500px] bg-indigo-600/30 rounded-full blur-[150px]" />
            {/* Soft grid lines for futuristic feel */}
            <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-[0.03] bg-repeat" />
          </div>

          <div className="relative z-10 flex flex-col lg:flex-row items-center h-full gap-12 lg:gap-8">

            {/* Left Content */}
            <div className="w-full lg:w-[45%] text-left mt-8 lg:mt-0 lg:pr-8">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-fuchsia-300 text-xs font-bold uppercase tracking-[0.2em] mb-8 shadow-sm backdrop-blur-md"
              >
                <Sparkles size={14} className="text-fuchsia-400" />
                Cross-Platform Synergy
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight drop-shadow-sm"
              >
                Intelligent Core Platform <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-purple-300">
                  With Multi-Platform Power
                </span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-indigo-100/70 text-lg leading-relaxed max-w-md font-light"
              >
                Engineered for speed, consistency, and absolute synchronization. Our unified architecture ensures your business data is blazingly fast and perfectly synced across every device.
              </motion.p>
            </div>

            {/* Right Side — Futuristic Network Diagram */}
            <div className="w-full lg:w-[55%] relative h-[500px] flex items-center justify-center">

              {/* Connecting SVG Curves with Flowing Animation */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]"
                viewBox="0 0 500 500"
                preserveAspectRatio="xMidYMid meet"
              >
                {/* Center to Top */}
                <motion.path
                  d="M 250,250 C 220,150 280,150 250,50"
                  fill="none"
                  stroke="url(#gradientLine)"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                {/* Center to Left */}
                <motion.path
                  d="M 250,250 C 150,220 150,280 50,250"
                  fill="none"
                  stroke="url(#gradientLine)"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                {/* Center to Right */}
                <motion.path
                  d="M 250,250 C 350,280 350,220 450,250"
                  fill="none"
                  stroke="url(#gradientLine)"
                  strokeWidth="2"
                  strokeLinecap="round"
                />

                {/* Animated Flow Lines (Energy pulses) */}
                <motion.path
                  d="M 250,250 C 220,150 280,150 250,50" fill="none" stroke="#e879f9" strokeWidth="3"
                  strokeDasharray="10 100" strokeLinecap="round"
                  animate={{ strokeDashoffset: [110, 0] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                />
                <motion.path
                  d="M 250,250 C 150,220 150,280 50,250" fill="none" stroke="#e879f9" strokeWidth="3"
                  strokeDasharray="10 100" strokeLinecap="round"
                  animate={{ strokeDashoffset: [110, 0] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "linear", delay: 0.5 }}
                />
                <motion.path
                  d="M 250,250 C 350,280 350,220 450,250" fill="none" stroke="#e879f9" strokeWidth="3"
                  strokeDasharray="10 100" strokeLinecap="round"
                  animate={{ strokeDashoffset: [110, 0] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "linear", delay: 1 }}
                />

                <defs>
                  <linearGradient id="gradientLine" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#a855f7" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#6366f1" stopOpacity="0.2" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Center Node (Core Platform) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="absolute z-30"
                style={{ top: 'calc(50% - 40px)', left: 'calc(50% - 100px)' }}
              >
                {/* Glowing aura */}
                <div className="absolute inset-0 bg-fuchsia-500/30 rounded-[1.5rem] blur-2xl animate-pulse" />
                <div className="relative bg-[#ffffff15] backdrop-blur-2xl p-4 rounded-[1.5rem] shadow-[0_0_40px_rgba(192,38,211,0.2)] border border-white/20 flex items-center gap-4 w-[200px]">
                  <div className="w-12 h-12 bg-gradient-to-br from-fuchsia-500 to-purple-600 rounded-xl flex items-center justify-center text-white shadow-inner">
                    <Cpu size={24} />
                  </div>
                  <div>
                    <div className="text-white font-bold text-sm tracking-wide">Core Engine</div>
                    <div className="text-fuchsia-200 text-[10px] font-medium uppercase tracking-wider">Unified Sync</div>
                  </div>
                </div>
              </motion.div>

              {/* Node: Web Platform (Top) */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute z-20"
                style={{ top: 'calc(10% - 40px)', left: 'calc(50% - 90px)' }}
              >
                <div className="bg-white/10 backdrop-blur-xl p-3 rounded-[1.25rem] shadow-2xl border border-white/15 w-[180px] flex items-start gap-3 hover:bg-white/15 transition-colors cursor-default">
                  <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center text-blue-300 shrink-0">
                    <Globe size={16} />
                  </div>
                  <div>
                    <div className="text-white text-xs font-bold mb-0.5">Web Platform</div>
                    <div className="text-[10px] text-indigo-200/80 leading-tight">Access seamlessly from any global browser.</div>
                  </div>
                </div>
              </motion.div>

              {/* Node: Desktop App (Left) */}
              <motion.div
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                animate={{ x: [0, -6, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute z-20 hidden sm:block"
                style={{ top: 'calc(50% - 40px)', left: 'calc(10% - 90px)' }}
              >
                <div className="bg-white/10 backdrop-blur-xl p-3 rounded-[1.25rem] shadow-2xl border border-white/15 w-[180px] flex items-start gap-3 hover:bg-white/15 transition-colors cursor-default">
                  <div className="w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center text-emerald-300 shrink-0">
                    <Monitor size={16} />
                  </div>
                  <div>
                    <div className="text-white text-xs font-bold mb-0.5">Desktop UI</div>
                    <div className="text-[10px] text-indigo-200/80 leading-tight">High performance for heavy local workloads.</div>
                  </div>
                </div>
              </motion.div>

              {/* Node: Mobile Access (Right) */}
              <motion.div
                initial={{ opacity: 0, x: 15 }}
                whileInView={{ opacity: 1, x: 0 }}
                animate={{ x: [0, 6, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute z-20 hidden sm:block"
                style={{ top: 'calc(50% - 40px)', right: 'calc(10% - 90px)' }}
              >
                <div className="bg-white/10 backdrop-blur-xl p-3 rounded-[1.25rem] shadow-2xl border border-white/15 w-[180px] flex items-start gap-3 hover:bg-white/15 transition-colors cursor-default">
                  <div className="w-8 h-8 bg-rose-500/20 rounded-lg flex items-center justify-center text-rose-300 shrink-0">
                    <Smartphone size={16} />
                  </div>
                  <div>
                    <div className="text-white text-xs font-bold mb-0.5">Mobile App</div>
                    <div className="text-[10px] text-indigo-200/80 leading-tight">Manage billing and inventory on the go.</div>
                  </div>
                </div>
              </motion.div>

              {/* Responsive nodes for very small mobile screens (Fallback positions) */}
              <motion.div
                className="absolute z-20 sm:hidden block"
                style={{ top: 'calc(75% - 40px)', left: 'calc(25% - 90px)' }}
              >
                <div className="bg-white/10 backdrop-blur-xl p-3 rounded-[1.25rem] border border-white/15 w-[150px] flex items-start gap-3">
                  <Monitor size={16} className="text-emerald-300 mt-1 shrink-0" />
                  <div>
                    <div className="text-white text-[10px] font-bold">Desktop UI</div>
                  </div>
                </div>
              </motion.div>
              <motion.div
                className="absolute z-20 sm:hidden block"
                style={{ top: 'calc(75% - 40px)', right: 'calc(25% - 90px)' }}
              >
                <div className="bg-white/10 backdrop-blur-xl p-3 rounded-[1.25rem] border border-white/15 w-[150px] flex items-start gap-3">
                  <Smartphone size={16} className="text-rose-300 mt-1 shrink-0" />
                  <div>
                    <div className="text-white text-[10px] font-bold">Mobile App</div>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
