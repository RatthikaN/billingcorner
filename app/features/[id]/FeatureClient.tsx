'use client';

import { motion } from 'motion/react';
import { 
  CheckCircle2, 
  ArrowLeft, 
  Zap, 
  ShieldCheck, 
  Settings, 
  Download,
  ArrowRight
} from 'lucide-react';
import Link from 'next/link';
import FAQ from '@/src/components/FAQ';
import { Feature } from '@/src/data/features';

interface FeatureClientProps {
  feature: Feature;
}

export default function FeatureClient({ feature }: FeatureClientProps) {
  return (
    <div className="bg-white min-h-screen pt-32 pb-24 px-6 overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Navigation / Breadcrumb */}
        <motion.div
           initial={{ opacity: 0, y: 10 }}
           animate={{ opacity: 1, y: 0 }}
           className="mb-12"
        >
          <Link href="/features" className="inline-flex items-center gap-2 text-slate-500 hover:text-primary transition-colors font-medium">
            <ArrowLeft size={18} />
            Back to All Features
          </Link>
        </motion.div>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
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
              Feature Highlights
            </motion.div>              
            
            <h1 className="text-3xl md:text-4xl xl:text-5xl font-medium text-slate-900 mb-8 tracking-tighter leading-tight italic">
              {feature.title}
            </h1>
            
            <p className="text-slate-600 text-base md:text-lg leading-relaxed font-medium mb-12">
              {feature.desc}
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/download" className="btn-primary flex items-center gap-2">
                Download Now
                <Download size={18} />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="absolute -inset-10 bg-primary/10 rounded-full blur-3xl opacity-50" />
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border border-slate-200 bg-white p-4">
              <img 
                src={feature.image} 
                alt={feature.title} 
                className="w-full h-auto rounded-[2.5rem] object-cover aspect-[4/3] shadow-inner"
              />
            </div>
          </motion.div>
        </div>

        {/* Detailed Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {[
            { 
              title: "Instant Accuracy", 
              desc: "Engineered for 100% precision in every calculation.",
              icon: ShieldCheck,
              color: "text-blue-500",
              bg: "bg-blue-500/10"
            },
            { 
              title: "Rapid Deployment", 
              desc: "Start using this feature within minutes of installation.",
              icon: Zap,
              color: "text-amber-500",
              bg: "bg-amber-500/10"
            },
            { 
              title: "Unified Sync", 
              desc: "Data updates across all platforms in real-time.",
              icon: Settings,
              color: "text-emerald-500",
              bg: "bg-emerald-500/10"
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl hover:border-primary/20 transition-all group"
            >
              <div className={`w-14 h-14 ${item.bg} ${item.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <item.icon size={28} />
              </div>
              <h3 className="text-xl md:text-2xl font-medium text-slate-900 mb-4">{item.title}</h3>
              <p className="text-slate-600 text-base md:text-lg leading-relaxed font-medium">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Final Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-slate-900 rounded-[4rem] p-12 md:p-20 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" style={{ backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`, backgroundSize: '40px 40px' }} />
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-medium text-white mb-8 tracking-tighter">Ready to experience <br /> {feature.title}?</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link href="/download" className="px-10 py-5 bg-primary text-white font-bold rounded-2xl text-lg hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2">
              Get Started Now
              <ArrowRight size={20} />
            </Link>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
