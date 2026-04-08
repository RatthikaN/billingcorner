'use client';

import { motion } from 'motion/react';
import { 
  FileText, 
  Users, 
  ShieldCheck, 
  RefreshCw 
} from 'lucide-react';

const stats = [
  { 
    label: 'Invoices Generated', 
    value: '10K+', 
    icon: FileText,
    color: 'text-blue-600',
    bg: 'bg-blue-100/60',
    ring: 'ring-blue-50',
    shadow: 'shadow-blue-500/10'
  },
  { 
    label: 'Active Businesses', 
    value: '500+', 
    icon: Users,
    color: 'text-indigo-600',
    bg: 'bg-indigo-100/60',
    ring: 'ring-indigo-50',
    shadow: 'shadow-indigo-500/10'
  },
  { 
    label: 'Uptime Reliability', 
    value: '99.9%', 
    icon: ShieldCheck,
    color: 'text-purple-600',
    bg: 'bg-purple-100/60',
    ring: 'ring-purple-50',
    shadow: 'shadow-purple-500/10'
  },
  { 
    label: 'Cloud Sync', 
    value: '24/7', 
    icon: RefreshCw,
    color: 'text-pink-600',
    bg: 'bg-pink-100/60',
    ring: 'ring-pink-50',
    shadow: 'shadow-pink-500/10'
  }
];

export default function StatsShowcase() {
  return (
    <section className="py-24 px-4 sm:px-6 relative overflow-hidden bg-gradient-to-br from-[#eff6ff] via-[#f5f3ff] to-[#faf5ff]">
      {/* Premium ambient background glows */}
      <div className="absolute top-0 left-0 w-64 h-64 md:w-[600px] md:h-[600px] bg-blue-300/15 rounded-full mix-blend-multiply filter blur-[70px] md:blur-[100px] opacity-70 animate-pulse -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-64 h-64 md:w-[600px] md:h-[600px] bg-purple-300/15 rounded-full mix-blend-multiply filter blur-[70px] md:blur-[100px] opacity-70 animate-pulse translate-x-1/3 translate-y-1/3" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 w-[90vw] h-[40vh] md:w-[800px] md:h-[400px] bg-indigo-300/10 rounded-full mix-blend-multiply filter blur-[80px] md:blur-[120px] opacity-50 -translate-x-1/2 -translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="h-full"
            >
              <div className="group h-full flex flex-col items-center text-center p-8 rounded-[2.5rem] bg-white/50 backdrop-blur-2xl border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-500 ease-out relative overflow-hidden">
                
                {/* Subtle sheen reflection effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out pointer-events-none" />

                <div className={`w-16 h-16 ${stat.bg} rounded-2xl flex items-center justify-center ${stat.color} mb-6 ring-4 ${stat.ring} transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3 shadow-sm ${stat.shadow} relative z-10`}>
                  <stat.icon size={28} strokeWidth={2.5} />
                </div>
                
                <div className="mt-auto relative z-10 flex flex-col items-center">
                  <div className="text-4xl lg:text-5xl font-extrabold text-slate-800 mb-3 tracking-tight">
                    {stat.value}
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <div className="text-slate-500 text-xs font-bold uppercase tracking-[0.2em] text-center">
                      {stat.label}
                    </div>
                  </div>
                </div>
                
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
