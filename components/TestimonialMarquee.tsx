'use client';

import React from 'react';
import { motion } from 'motion/react';

const testimonialsRow1 = [
  {
    name: "Alex Rivera",
    role: "Head of Operations",
    text: "The role-based access control completely transformed how our team manages multi-location stores. It's incredibly intuitive and secure.",
  },
  {
    name: "Sarah Jenkins",
    role: "Financial Director",
    text: "GST compliance used to take us days at the end of every month. Now, it's literally automated in seconds. A total lifesaver.",
  },
  {
    name: "David Chen",
    role: "Retail Owner",
    text: "The sleek POS interface is so fast that our checkout lines have practically vanished. And it looks incredibly premium on our tablets.",
  },
  {
    name: "Emma Stone",
    role: "Inventory Manager",
    text: "Real-time stock alerts and precise unit tracking saved us from stockouts during the holiday rush. Best inventory tool I've used.",
  },
  {
    name: "Rahul Mehta",
    role: "E-commerce Founder",
    text: "Having a single dashboard for both online sales and physical POS is a game-changer. The UI is just gorgeous and fast.",
  }
];

const testimonialsRow2 = [
  {
    name: "Jessica Taylor",
    role: "Accounting Lead",
    text: "The one-click tally export integration is flawless. It bridges the gap between our modern billing needs and legacy accounting.",
  },
  {
    name: "Marcus Johnson",
    role: "CEO, TechShop",
    text: "I love the fact that I can monitor my entire retail chain's sales from my iPhone while traveling. The cross-device sync is instant.",
  },
  {
    name: "Priya Sharma",
    role: "Boutique Owner",
    text: "The thermal printer support works out of the box without any messy drivers. Beautiful receipt templates really impress our clients.",
  },
  {
    name: "Tom Barker",
    role: "Warehouse Supervisor",
    text: "Barcode scanning integration is ridiculously fast. Processing hundreds of items takes minutes instead of hours now.",
  },
  {
    name: "Elena Rodriguez",
    role: "VP of Sales",
    text: "We switched from a legacy enterprise system and haven't looked back. The speed, the analytics, the modern design – 10/10.",
  }
];

function TestimonialCard({ item }: { item: any }) {
  return (
    <div className="w-[380px] shrink-0 p-8 rounded-3xl bg-neutral-900/50 backdrop-blur-md border border-slate-700 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.5)] flex flex-col gap-6 relative overflow-hidden group hover:bg-neutral-800/80 hover:border-slate-500 transition-colors duration-500">
      {/* Subtle top glow edge */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-[1px] bg-gradient-to-r from-transparent via-blue-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <p className="text-slate-300 text-base leading-relaxed font-medium">
        "{item.text}"
      </p>
      
      <div className="mt-auto flex items-center gap-4">
        <div>
          <div className="text-white font-bold text-sm tracking-tight">{item.name}</div>
          <div className="text-blue-400 text-xs font-medium uppercase tracking-wider mt-0.5">{item.role}</div>
        </div>
      </div>
    </div>
  );
}

function MarqueeRow({ items, direction = 'left', speed = 40 }: { items: any[], direction?: 'left' | 'right', speed?: number }) {
  // Duplicate array to create a seamless loop
  const duplicatedItems = [...items, ...items];
  
  return (
    <div className="flex w-fit">
      <motion.div
        className="flex gap-6 pr-6 w-max"
        animate={{
          x: direction === 'left' ? ['0%', '-50%'] : ['-50%', '0%'],
        }}
        transition={{
          repeat: Infinity,
          ease: 'linear',
          duration: speed,
        }}
      >
        {duplicatedItems.map((item, idx) => (
          <TestimonialCard key={idx} item={item} />
        ))}
      </motion.div>
    </div>
  );
}

export default function TestimonialMarquee() {
  return (
    <section className="relative py-32 bg-black overflow-hidden border-t border-slate-800">
      
      {/* Background Deep Gradient & Noise */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/20 via-transparent to-transparent opacity-80" />
      <div 
        className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none" 
        style={{ 
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' 
        }} 
      />
      
      {/* Section Header */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 mb-20 text-center">
       <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-[0.2em] mb-8 w-fit mt-10 "
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Customer Success
          </motion.div>
        <motion.h2 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.1 }}
           className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white tracking-tighter mb-6"
        >
          Trusted by top <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 italic">innovators.</span>
        </motion.h2>
        <motion.p 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.2 }}
           className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto font-medium"
        >
          Join thousands of businesses operating at maximum efficiency with our blazing fast infrastructure.
        </motion.p>
      </div>

      {/* Marquee Rows with Edge Fade Masks */}
      <div 
        className="relative z-10 flex flex-col gap-6" 
        style={{ 
          maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'
        }}
      >
        <MarqueeRow items={testimonialsRow1} direction="left" speed={70} />
        <MarqueeRow items={testimonialsRow2} direction="right" speed={85} />
      </div>

    </section>
  );
}
