'use client';

import { useRef } from 'react';
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

const images = [
  {
    src: '/images/core-values/billing.png',
    title: 'Unified Billing',
    color: 'from-blue-500/20 to-indigo-500/20',
  },
  {
    src: '/images/core-values/inventory.jpg',
    title: 'Smart Inventory',
    color: 'from-emerald-500/20 to-teal-500/20',
  },
  {
    src: '/images/core-values/pos.jpg',
    title: 'POS Integration',
    color: 'from-amber-500/20 to-orange-500/20',
  },
  {
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
  const { scrollY, scrollX } = useScroll();
  const velocityY = useVelocity(scrollY);
  const velocityX = useVelocity(scrollX);
  
  const scrollVelocity = useTransform([velocityY, velocityX], (latest: any[]) => {
    const vy = typeof latest[0] === 'number' ? latest[0] : 0;
    const vx = typeof latest[1] === 'number' ? latest[1] : 0;
    return vy + vx;
  });

  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 2], {
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

    /**
     * Accelerate or reverse direction based on scroll speed.
     */
    if (vFactor < 0) {
      directionFactor.current = -1;
    } else if (vFactor > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * vFactor;

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="overflow-hidden whitespace-nowrap flex flex-nowrap py-10">
      <motion.div className="flex flex-nowrap gap-8" style={{ x }}>
        {/* Render images multiple times for infinite effect */}
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="flex gap-8">
            {images.map((image, index) => (
              <motion.div
                key={`${i}-${index}`}
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
                className="relative group w-[320px] md:w-[500px] aspect-video shrink-0 overflow-hidden rounded-[2rem] border border-slate-200/50 shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:border-primary/30"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${image.color} mix-blend-overlay z-10`} />
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent z-20" />
                <div className="absolute bottom-6 left-8 z-30">
                  <h4 className="text-white font-bold text-xl md:text-2xl tracking-tight">
                    {image.title}
                  </h4>
                </div>
              </motion.div>
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
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[120px]" />
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

    </section>
  );
}
