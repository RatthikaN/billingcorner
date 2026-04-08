'use client';

import { useRef } from 'react';
import Link from 'next/link';
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  useAnimationFrame,
  useMotionValue,
} from 'motion/react';

const wrap = (min: number, max: number, v: number) => {
  const range = max - min;
  return ((((v - min) % range) + range) % range) + min;
};

interface MarqueeImage {
  id: string;
  src: string;
  title: string;
  color: string;
}

const images: MarqueeImage[] = [
  {
    id: 'billing-invoices',
    src: '/images/core-values/billing.png',
    title: 'Unified Billing',
    color: 'from-blue-500/20 to-indigo-500/20',
  },
  {
    id: 'smart-inventory',
    src: '/images/core-values/inventory.jpg',
    title: 'Smart Inventory',
    color: 'from-emerald-500/20 to-teal-500/20',
  },
  {
    id: 'pos-billing',
    src: '/images/core-values/pos.jpg',
    title: 'POS Integration',
    color: 'from-amber-500/20 to-orange-500/20',
  },
  {
    id: 'dashboard-analytics',
    src: '/images/core-values/analytics.jpg',
    title: 'Advanced Analytics',
    color: 'from-purple-500/20 to-pink-500/20',
  },
];

interface MarqueeProps {
  baseVelocity: number;
}

function ParallaxImages({ baseVelocity = 100 }: MarqueeProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  });

  /**
   * This is what makes it move on scroll condition.
   * We warp the x value with 25 and 50% to maintain the loop.
   */
  const x = useTransform(baseX, (v) => `${wrap(-25, -50, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
    const vFactor = velocityFactor.get();
    
    if (vFactor < 0) {
      directionFactor.current = -1;
    } else if (vFactor > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * vFactor;

    baseX.set(baseX.get() + moveBy);
  });

  const handleWheel = (e: React.WheelEvent) => {
    // Only handle horizontal scroll or shift+scroll
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY) || e.shiftKey) {
      baseX.set(baseX.get() + e.deltaX * 0.02); // Slower, smoother wheel scroll
    }
  };

  return (
    <div 
      className="overflow-hidden whitespace-nowrap flex flex-nowrap py-4 md:py-8 cursor-grab active:cursor-grabbing"
      onWheel={handleWheel}
    >
      <motion.div 
        className="flex flex-nowrap gap-6 md:gap-10" 
        style={{ x }}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        onDrag={(e, info) => {
          baseX.set(baseX.get() + info.delta.x * 0.03); // Slower, smoother drag
        }}
      >
        {/* Render images multiple times for infinite effect */}
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="flex gap-6 md:gap-10">
            {images.map((image, index) => (
              <Link
                key={`${i}-${index}`}
                href={`/features/${image.id}`}
                className="block"
                draggable={false}
              >
                <motion.div
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  whileInView={{ 
                    opacity: 1, 
                    y: 0, 
                    scale: 1,
                    transition: { 
                      duration: 0.8, 
                      delay: index * 0.1,
                      ease: "easeOut" 
                    } 
                  }}
                  viewport={{ once: true }}
                  className="relative group w-[220px] sm:w-[280px] md:w-[450px] aspect-video shrink-0 overflow-hidden rounded-3xl md:rounded-[2.5rem] border border-slate-200/50 shadow-xl transition-all duration-500 hover:scale-[1.02] hover:border-primary/30 select-none"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-transparent mix-blend-overlay z-10 pointer-events-none" />
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 pointer-events-none"
                    draggable={false}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent z-20 pointer-events-none" />
                  <div className="absolute bottom-4 left-6 md:bottom-6 md:left-8 z-30 pointer-events-none">
                    <h4 className="text-white font-bold text-lg md:text-2xl tracking-tight">
                      {image.title}
                    </h4>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function CoreValuesMarquee() {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-40">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 md:w-[500px] md:h-[500px] bg-indigo-500/5 rounded-full blur-[80px] md:blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-primary font-black tracking-[0.3em] uppercase text-xs mb-4 block"
        >
          Our Core Pillars
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-semibold text-slate-900 tracking-tight"
        >
          Values that Drive <span className="text-primary italic">Innovation</span>
        </motion.h2>
      </div>

      <div className="relative">
        <ParallaxImages baseVelocity={-1} />
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-16 text-center">
        <Link 
          href="/features" 
          className="btn-primary inline-flex items-center gap-2 px-8 py-4 shadow-xl shadow-primary/20 group"
        >
          View All Features
          <motion.span
            animate={{ x: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            →
          </motion.span>
        </Link>
      </div>

    </section>
  );
}
