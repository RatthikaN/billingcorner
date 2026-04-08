'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight,
  CheckCircle2,
  Cpu
} from 'lucide-react';
import Link from 'next/link';

const tabs = [
  {
    id: 0,
    title: "1. GSTR Filing",
    desc: "Export your GSTR1 data in a simple format (JSON) and easily file your GST returns. Also, get GSTR-2 and GSTR-3B reports that would help you/your CAs in easy GST tax filing.",
    image: "/images/GSTR-2.png",
    badge: "JSON",
    color: "blue"
  },
  {
    id: 1,
    title: "2. E-Invoicing",
    desc: "Generate e-invoices directly from the software. Real-time integration with the IRP portal for seamless IRN generation with QR code and digital signature.",
    image: "/images/E-Invoicing-Mockup.png",
    badge: "IRP",
    color: "indigo"
  },
  {
    id: 2,
    title: "3. E-way Billing",
    desc: "Create E-way bills along with your invoices. Automatic sync with the e-way bill portal to save time and reduce errors in compliance reporting.",
    image: "/images/GST -invoice.png",
    badge: "Portal",
    color: "emerald"
  },
  {
    id: 3,
    title: "4. Data Export to Tally",
    desc: "Seamlessly export your billing data to Tally. Keep your accounting in sync with your billing without manual data entry, saving hours of accountant time.",
    image: "/images/billing_dashboard_devices.png",
    badge: "Tally",
    color: "orange"
  }
];

const colorMap = {
  blue: {
    bg: 'bg-blue-500/10',
    text: 'text-blue-600',
    stroke: 'text-blue-500'
  },
  indigo: {
    bg: 'bg-indigo-500/10',
    text: 'text-indigo-600',
    stroke: 'text-indigo-500'
  },
  emerald: {
    bg: 'bg-emerald-500/10',
    text: 'text-emerald-600',
    stroke: 'text-emerald-500'
  },
  orange: {
    bg: 'bg-orange-500/10',
    text: 'text-orange-600',
    stroke: 'text-orange-500'
  }
};

export default function GstComplianceTabs() {
  const [activeTab, setActiveTab] = useState(0);
  const activeColor = colorMap[tabs[activeTab].color as keyof typeof colorMap];

  return (
    <section className="py-24 bg-slate-50/50 relative overflow-hidden border-y border-slate-200">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-full h-full pointer-events-none opacity-[0.03] z-0">
         <div className="absolute top-1/4 right-[10%] w-96 h-96 bg-primary rounded-full blur-[100px]" />
         <div className="absolute bottom-1/4 left-[5%] w-64 h-64 bg-indigo-500 rounded-full blur-[80px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-black tracking-[0.3em] uppercase text-xs mb-4 block"
          >
            Compliance Excellence
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-semibold text-slate-900 leading-[1.1] tracking-tighter"
          >
            Experience Effortless <span className="text-primary italic">GST Compliance</span> <br className="hidden md:block" />
            with Billing Corner Invoicing Software
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Left Column - Navigation Sidebar (Exactly like the screenshot) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {tabs.map((tab, idx) => {
              const isActive = activeTab === idx;
              
              return (
                <div
                  key={tab.id}
                  onClick={() => setActiveTab(idx)}
                  className={`p-6 md:p-8 rounded-[2rem] cursor-pointer transition-all duration-300 border ${
                    isActive 
                      ? 'bg-white border-primary/20 shadow-xl shadow-primary/5' 
                      : 'bg-transparent border-transparent hover:bg-slate-100 hover:border-slate-200'
                  }`}
                >
                  <h3 className={`text-xl md:text-2xl font-bold transition-colors ${isActive ? 'text-primary' : 'text-slate-800'}`}>
                    {tab.title}
                  </h3>
                  
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="text-slate-600 text-base md:text-lg leading-relaxed font-light mt-4">
                          {tab.desc}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Right Column - Visual Dashboard Mockup */}
          <div className="lg:col-span-7 relative group">
            <motion.div
              layout
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="relative rounded-[3rem] p-8 md:p-12 bg-white border border-slate-200 shadow-2xl overflow-hidden min-h-[400px] md:min-h-[550px] flex items-center justify-center"
            >
              {/* Internal decorative grid */}
              <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: `radial-gradient(circle at 1px 1px, #6366f1 1px, transparent 0)`, backgroundSize: '30px 30px' }} />

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
                  animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, scale: 1.1, filter: 'blur(10px)' }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="relative z-10 w-full"
                >
                  <img
                    src={tabs[activeTab].image}
                    alt={tabs[activeTab].title}
                    className="w-full h-auto max-h-[450px] object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.15)] rounded-2xl"
                  />

                  {/* Connecting Lines and Floating Badges */}
                  <div className="absolute inset-0 pointer-events-none overflow-visible">
                    
                    {/* Floating Tech Badge (Top Leftish) */}
                    <motion.div
                      animate={{ y: [0, -10, 0], opacity: [0.8, 1, 0.8] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute -top-10 left-10 md:left-20 z-20 px-6 py-4 bg-white rounded-3xl shadow-2xl border border-slate-100 flex items-center gap-3"
                    >
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${activeColor.bg} ${activeColor.text}`}>
                        <Cpu size={20} />
                      </div>
                      <span className="font-bold text-sm text-slate-800 tracking-tight">{tabs[activeTab].badge} System</span>
                    </motion.div>

                    {/* Feature Highlight Badge (Bottom Right) */}
                    <motion.div
                      animate={{ y: [0, 15, 0] }}
                      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                      className="absolute -bottom-6 right-6 md:right-12 z-20 p-5 bg-slate-900 rounded-[2rem] shadow-2xl border border-slate-700 flex flex-col gap-2 min-w-[160px]"
                    >
                      <div className="flex items-center gap-2">
                        <CheckCircle2 size={16} className="text-primary" />
                        <span className="text-[10px] font-black text-primary uppercase tracking-[0.2em]">Verified Status</span>
                      </div>
                      <span className="text-white font-bold text-lg">Integrated</span>
                    </motion.div>

                    {/* Connecting Dashed SVG Line */}
                    <svg className="absolute inset-0 w-full h-full z-0 opacity-20" viewBox="0 0 500 500" fill="none">
                      <motion.path
                        d="M 100,100 Q 250,50 400,150"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeDasharray="8 8"
                        className={activeColor.stroke}
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1, delay: 0.4 }}
                      />
                      <motion.circle
                        cx="100" cy="100" r="5"
                        fill="currentColor"
                        className={activeColor.stroke}
                      />
                      <motion.circle
                        cx="400" cy="150" r="8"
                        fill="currentColor"
                        className={activeColor.stroke}
                      />
                    </svg>

                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>

            {/* Bottom CTA for the selected section */}
            <motion.div
               layout
               className="mt-12 flex flex-col items-center"
            >
               <Link 
                  href="/download" 
                  className="btn-primary inline-flex items-center gap-3 px-10 py-5 rounded-2xl shadow-2xl shadow-primary/30 group hover:scale-[1.02] active:scale-[0.98] transition-all"
               >
                  Get Started with {tabs[activeTab].title.split('. ')[1]}
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
               </Link>
               <p className="mt-4 text-slate-500 text-sm font-medium">Join 5,000+ businesses using our automation tools.</p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
