'use client';

import { motion } from 'motion/react';
import { 
  ArrowUpRight
} from 'lucide-react';

export default function ProductServiceManagement() {
  return (
    <section className="py-24 px-6 relative z-10 bg-white overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          
          {/* ========================================== */}
          {/* LEFT CARD: Simple Product Management       */}
          {/* ========================================== */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="group relative bg-[#EEF2FF] rounded-[2rem] p-10 md:p-14 overflow-hidden border border-indigo-50 shadow-[0_20px_50px_-20px_rgba(99,102,241,0.15)] flex flex-col h-full"
          >
            {/* Header */}
            <div className="relative z-20 mb-12 max-w-md">
              <h3 className="text-3xl md:text-4xl font-medium text-slate-900 tracking-tight leading-tight mb-4">
                Simple Product Management
              </h3>
              <p className="text-slate-600 font-medium leading-relaxed">
                Add, organize, and categorize your products effortlessly. Keep track of your catalog, set custom pricing rules, and manage stock natively.
              </p>
            </div>

            {/* UI Mockup Area */}
            <div className="relative z-10 w-full flex-1 mt-auto origin-bottom md:group-hover:-translate-y-2 transition-transform duration-500 ease-out">
              {/* Soft background glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-white/40 blur-[50px] rounded-full" />
              
              {/* Image Mockup from User */}
              <div className="relative w-full rounded-2xl shadow-xl overflow-hidden border border-white/80 ring-1 ring-black/5 pb-8 flex items-center justify-center">
                 <img 
                   src="/images/simple-product-mngt.png" 
                   alt="Product Management Mockup" 
                   className="w-[95%] h-auto object-contain rounded-xl shadow-sm mt-4 lg:mt-6"
                 />
              </div>
            </div>
          </motion.div>

          {/* ========================================== */}
          {/* RIGHT CARD: Easy Service Management        */}
          {/* ========================================== */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="group relative bg-[#EEF2FF] rounded-[2rem] p-10 md:p-14 overflow-hidden border border-indigo-50 shadow-[0_20px_50px_-20px_rgba(99,102,241,0.15)] flex flex-col h-full"
          >
            {/* Header */}
            <div className="relative z-20 mb-12 max-w-md">
              <h3 className="text-3xl md:text-4xl font-medium text-slate-900 tracking-tight leading-tight mb-4">
                Easy Service Management
              </h3>
              <p className="text-slate-600 font-medium leading-relaxed">
                Streamline your service billing with robust tools. Send quotations, track billable time, and monitor expenses smoothly in one dashboard.
              </p>
            </div>

            {/* UI Mockup Area */}
            <div className="relative z-10 w-full flex-1 mt-auto origin-bottom md:group-hover:-translate-y-2 transition-transform duration-500 ease-out">
              {/* Soft background glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-white/40 blur-[50px] rounded-full" />
              
              {/* Image Mockup from User */}
              <div className="relative w-full rounded-2xl shadow-xl overflow-hidden border border-white/80 ring-1 ring-black/5 pb-8 flex items-center justify-center">
                 <img 
                   src="/images/easy-service-mngt.png" 
                   alt="Service Management Mockup" 
                   className="w-[95%] h-auto object-contain rounded-xl shadow-sm mt-4 lg:mt-6"
                 />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
