'use client';

import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function MonitorClientDues() {
  return (
    <section className="py-24 px-6 bg-white relative z-10 overflow-hidden font-sans border-t border-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24">
          
          {/* Left — Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-[45%] shrink-0"
          >
            <h2 className="text-3xl md:text-4xl font-medium text-slate-900 tracking-tight leading-tight mb-6">
              Monitor Client Dues
            </h2>
            <p className="text-slate-600 text-base md:text-lg leading-relaxed font-medium mb-8">
              Keep track of all outstanding payments with ease using Billing Corner’s Client Dues dashboard. View overdue invoices, due dates, and pending amounts in one place, helping you stay organized and improve cash flow with timely follow-ups.
            </p>
            
            {/* <Link 
              href="/download" 
              className="group inline-flex items-center gap-2 text-[#6366f1] font-bold text-lg hover:text-[#4f46e5] transition-colors"
            >
              Learn More
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link> */}
          </motion.div>

          {/* Right — Image Container */}
          <div className="w-full md:w-[55%] relative">
            {/* Soft background aura/blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-[#6366f1]/5 blur-[100px] rounded-full pointer-events-none" />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative z-10"
            >
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-[0_30px_70px_-15px_rgba(99,102,241,0.2)] border border-white/50 bg-white/10 backdrop-blur-sm p-2">
                <img
                  src="/images/monitor-client.png"
                  alt="Monitor Client Dues Interface"
                  className="w-full h-auto object-contain rounded-[2rem]"
                />
              </div>

              {/* Floating decorative elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 w-20 h-20 bg-indigo-500/10 rounded-full blur-2xl z-0"
              />
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-8 -left-8 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl z-0"
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
