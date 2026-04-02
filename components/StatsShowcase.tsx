'use client';

import { motion } from 'motion/react';
import { 
  FileText, 
  Users, 
  ShieldCheck, 
  Headphones 
} from 'lucide-react';

const stats = [
  { 
    label: 'Invoices Generated', 
    value: '10k+', 
    icon: FileText,
    color: 'text-blue-500',
    bg: 'bg-blue-500/10'
  },
  { 
    label: 'Active Businesses', 
    value: '500+', 
    icon: Users,
    color: 'text-emerald-500',
    bg: 'bg-emerald-500/10'
  },
  { 
    label: 'Uptime Reliability', 
    value: '99.9%', 
    icon: ShieldCheck,
    color: 'text-indigo-500',
    bg: 'bg-indigo-500/10'
  },
  { 
    label: 'Expert Support', 
    value: '24/7', 
    icon: Headphones,
    color: 'text-rose-500',
    bg: 'bg-rose-500/10'
  }
];

export default function StatsShowcase() {
  return (
    <section className="py-20 px-6 bg-slate-50/50 relative overflow-hidden border-y border-slate-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group flex flex-col items-center text-center p-8 rounded-[2.5rem] bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-500"
            >
              <div className={`w-16 h-16 ${stat.bg} rounded-2xl flex items-center justify-center ${stat.color} mb-6 group-hover:scale-110 transition-transform`}>
                <stat.icon size={28} />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-slate-900 mb-2 tracking-tight">
                {stat.value}
              </div>
              <div className="text-slate-500 text-sm font-semibold uppercase tracking-widest">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
