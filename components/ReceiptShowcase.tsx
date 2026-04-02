'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { Receipt, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';

export default function ReceiptShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Use scroll progress for the animation
  // "start end" means animation starts when top of container enters bottom of viewport
  // "end start" means animation ends when bottom of container leaves top of viewport
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Smooth out the scroll progress for fluid motion
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 30,
    restDelta: 0.001
  });

  // Map scroll progress to animations
  // Adjustment: Paper height and vertical position
  const receiptHeight = useTransform(smoothProgress, [0.4, 0.7], ["0px", "1200px"]);

  const receiptOpacity = useTransform(smoothProgress, [0.4, 0.45], [0, 1]);
  
  // Realism: Slight bending/tilt and shadow changes
  const paperRotateX = useTransform(smoothProgress, [0.4, 0.7], [-20, -12]);
  const paperSkew = useTransform(smoothProgress, [0.4, 0.7], [1, -0.5]);
  const paperShadow = useTransform(smoothProgress, [0.4, 0.7], 
    ["0px 0px 0px rgba(0,0,0,0)", "0px 30px 60px -12px rgba(0,0,0,0.25)"]
  );

  return (
    <section ref={containerRef} className="relative py-32 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        
        {/* Left Side: Content describing the "Proof of Work" */}
        <div className="order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 text-xs font-bold uppercase tracking-widest mb-8"
          >
            <ShieldCheck size={14} />
            Verified Transactions
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-8 tracking-tighter leading-tight"
          >
            See the Magic <br />
            <span className="text-primary italic">In Real-Time.</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 text-lg md:text-xl mb-12 max-w-lg leading-relaxed font-light"
          >
            Every transaction is encoded with enterprise-grade security and instant GST compliance. Our thermal-ready engine ensures your hardware and software work in perfect harmony.
          </motion.p>

          <div className="space-y-6 mb-12">
            {[
              "Instant GST-Ready Printouts",
              "AI-Verified Stock Adjustment",
              "Cross-Device Cloud Sync",
              "High-Speed POS Integration"
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + (i * 0.1) }}
                className="flex items-center gap-4 text-slate-700 font-medium"
              >
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <CheckCircle2 size={14} />
                </div>
                {feature}
              </motion.div>
            ))}
          </div>
          
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
            className="flex items-center gap-3 text-primary font-bold hover:gap-5 transition-all duration-300"
          >
            Learn about hardware compatibility
            <ArrowRight size={20} />
          </motion.button>
        </div>

        {/* Right Side: The Ultra-Realistic Printer Animation */}
        <div className="order-1 lg:order-2 relative flex items-center justify-center min-h-[500px] lg:min-h-[700px]">
          <div className="relative w-full max-w-[500px] perspective-1000">
            
            {/* The Printer Asset */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative z-20"
            >
              <img 
                src="/images/handheld-printer.png" 
                alt="Realistic Handheld Printer"
                className="w-full h-auto drop-shadow-[0_40px_30px_rgba(0,0,0,0.15)] relative z-20"
              />

              {/* Subtle machine reflection overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent z-30 pointer-events-none rounded-3xl" />
            </motion.div>

            {/* The Animated Receipt Paper */}
            <div className="absolute top-[18%] left-[28%] right-[28%] z-10 overflow-hidden" style={{ height: '900px' }}>

              <motion.div 
                style={{ 
                  height: receiptHeight,
                  opacity: receiptOpacity,
                  rotateX: paperRotateX,
                  skewY: paperSkew,
                  boxShadow: paperShadow,
                }}
                className="w-full bg-white origin-top rounded-b-[4px] border-x border-slate-100 flex flex-col relative"
              >
                {/* Texture/Grain Overlay for Realistic Paper */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/paper.png')] mix-blend-multiply" />
                
                {/* Dynamic Shadow to simulate paper depth near the slot */}
                <motion.div 
                  style={{ opacity: useTransform(smoothProgress, [0.4, 0.45], [1, 0.2]) }}
                  className="absolute top-0 inset-x-0 h-4 bg-gradient-to-b from-black/20 to-transparent z-40" 
                />

                {/* Receipt Content */}
                <div className="p-6 md:p-10 flex flex-col gap-8 font-mono text-[9px] md:text-[11px] leading-tight text-slate-700">
                  {/* Header */}
                  <div className="text-center border-b-[1.5px] border-dashed border-slate-300 pb-8 mb-4">
                    <div className="text-slate-900 font-black text-sm md:text-base uppercase mb-1 tracking-tighter">Core Values Showcase</div>
                    <div className="text-slate-400 font-bold uppercase tracking-[0.2em] text-[8px]">Scrolling Gallery</div>
                  </div>

                  {/* Images Strip */}
                  <div className="flex flex-col gap-10">
                    {[
                      { src: '/images/core-values/billing.png', title: 'Unified Billing' },
                      { src: '/images/core-values/inventory.jpg', title: 'Smart Inventory' },
                      { src: '/images/core-values/pos.jpg', title: 'POS Integration' },
                      { src: '/images/core-values/analytics.jpg', title: 'Advanced Analytics' }
                    ].map((item, idx) => (
                      <div key={idx} className="flex flex-col gap-3">
                        <div className="w-full aspect-[16/10] overflow-hidden rounded-2xl bg-slate-100 border border-slate-200 shadow-sm relative group">
                          <img 
                            src={item.src} 
                            alt={item.title} 
                            className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700" 
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
                          <div className="absolute bottom-3 left-3 right-3 text-white font-black uppercase text-[10px] tracking-tight drop-shadow-md">
                            {item.title}
                          </div>
                        </div>
                        <div className="flex justify-between items-center px-2">
                          <span className="text-slate-300 text-[8px] font-bold tracking-[0.3em]">VALUE_MODULE // 0{idx + 1}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* QR Code & Footer */}
                  <div className="mt-12 flex flex-col items-center gap-6 py-10 bg-slate-50 rounded-[2.5rem] border border-slate-100">
                    <div className="w-24 h-24 bg-white p-3 rounded-2xl shadow-inner border border-slate-100 relative overflow-hidden">
                       <div className="w-full h-full bg-slate-900 rounded-sm flex items-center justify-center p-2">
                        <div className="grid grid-cols-5 grid-rows-5 gap-1 w-full h-full">
                          {[...Array(25)].map((_, i) => (
                            <div key={i} className={`rounded-[1px] ${((i * 13) % 7 > 2) ? 'bg-white' : 'bg-transparent'}`} />
                          ))}
                        </div>

                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center text-slate-300 mt-auto pb-6 pt-4 italic font-bold text-[8px] tracking-[0.4em]">
                    #MADEININDIA • #NEXTGEN
                  </div>
                </div>


                {/* Paper bottom "cut" effect */}
                <div 
                  className="absolute bottom-0 inset-x-0 h-1 z-30 opacity-50"
                  style={{ 
                    backgroundImage: `linear-gradient(45deg, transparent 33.333%, white 33.333%, white 66.666%, transparent 66.666%), linear-gradient(-45deg, transparent 33.333%, white 33.333%, white 66.666%, transparent 66.666%)`,
                    backgroundSize: '8px 16px',
                    backgroundPosition: '0 -8px'
                  }}
                />
              </motion.div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
