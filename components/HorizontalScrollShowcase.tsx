'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue, useMotionValueEvent } from 'motion/react';

const slides = [
  {
    image: '/images/core-values/analytics.jpg',
    label: 'Analytics',
    title: 'Advanced Analytics',
    description:
      'Gain actionable insights from your sales data with real-time dashboards, trend analysis, and AI-powered forecasting to drive smarter business decisions.',
    gradient: 'from-violet-600 to-indigo-600',
    bg: 'bg-violet-950',
    number: '01',
  },
  {
    image: '/images/core-values/billing.png',
    label: 'Billing',
    title: 'Unified Billing',
    description:
      'Professional, GST-ready invoices generated in seconds. Automate recurring billing, manage multi-currency payments, and stay 100% tax compliant.',
    gradient: 'from-indigo-600 to-blue-600',
    bg: 'bg-indigo-950',
    number: '02',
  },
  {
    image: '/images/core-values/inventory.jpg',
    label: 'Inventory',
    title: 'Smart Inventory',
    description:
      'Automated stock tracking with low-inventory alerts, multi-warehouse support, and barcode scanning — so you never run out of what your customers need.',
    gradient: 'from-blue-600 to-cyan-600',
    bg: 'bg-slate-950',
    number: '03',
  },
  {
    image: '/images/core-values/pos.jpg',
    label: 'POS',
    title: 'POS Integration',
    description:
      'Lightning-fast checkout experience designed for high-traffic retail environments, with multiple payment modes and seamless inventory sync.',
    gradient: 'from-cyan-600 to-teal-600',
    bg: 'bg-teal-950',
    number: '04',
  },
];

export default function HorizontalScrollShowcase() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [windowWidth, setWindowWidth] = useState(1440);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const onResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ['start start', 'end end'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 30,
    restDelta: 0.001,
  });

  const totalSlides = slides.length;
  const x = useMotionValue(0);

  useMotionValueEvent(smoothProgress, 'change', (latest) => {
    x.set(-latest * (totalSlides - 1) * window.innerWidth);
  });

  const hintOpacity = useTransform(smoothProgress, [0, 0.1], [1, 0]);

  return (
    <div
      ref={wrapperRef}
      className="relative z-10"
      style={{ height: `${totalSlides * 100}vh` }}
    >
      <div className="sticky top-0 h-screen overflow-hidden bg-slate-900">
        {/* Background Depth Layer */}
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.15)_0%,transparent_70%)]" />
        </div>

        {/* Floating Heading */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="absolute top-12 left-1/2 -translate-x-1/2 z-30 text-center w-full px-6"
        >
          <span className="inline-block text-primary font-black tracking-[0.4em] uppercase text-[10px] mb-3 bg-white/5 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10">
            Platform Capabilities
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-2 tracking-tighter">
            Our Core <span className="text-primary italic">Values</span>
          </h2>
        </motion.div>

        {/* Main Track */}
        <motion.div
          style={{ x }}
          className="flex h-full will-change-transform"
        >
          {slides.map((slide, idx) => (
            <SlidePanel
              key={idx}
              slide={slide}
              index={idx}
              scrollProgress={smoothProgress}
              total={totalSlides}
              windowWidth={windowWidth}
            />
          ))}
        </motion.div>

        {/* Dots Control */}
        <div className="absolute bottom-10 left-12 flex flex-col gap-4 z-30">
          {slides.map((_, i) => (
            <ProgressDot
              key={i}
              index={i}
              total={totalSlides}
              progress={smoothProgress}
            />
          ))}
        </div>

        {/* Scroll Hint */}
        <motion.div
          style={{ opacity: hintOpacity }}
          className="absolute bottom-10 right-12 z-30 flex items-center gap-4 text-white/40"
        >
          <div className="flex flex-col items-end">
            <span className="text-[10px] font-black uppercase tracking-[0.2em]">Explore More</span>
            <span className="text-[9px] opacity-50">Scroll to Navigate</span>
          </div>
          <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center animate-bounce">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function SlidePanel({ slide, index, scrollProgress, total, windowWidth }: any) {
  const center = index / (total - 1);
  const band = 1 / (total - 1);

  // Parallax elements
  const imageX = useTransform(
    scrollProgress,
    [center - band, center, center + band],
    [-80, 0, 80]
  );
  
  const contentSkew = useTransform(
    scrollProgress,
    [center - band, center, center + band],
    [5, 0, -5]
  );

  const opacity = useTransform(
    scrollProgress,
    [center - band * 0.8, center, center + band * 0.8],
    [0.1, 1, 0.1]
  );

  const scale = useTransform(
    scrollProgress,
    [center - band, center, center + band],
    [0.85, 1, 0.85]
  );

  return (
    <motion.div
      style={{ width: windowWidth, opacity, scale }}
      className="relative flex-shrink-0 h-full flex items-center justify-center overflow-hidden"
    >
      {/* Background Section Color */}
      <div className={`absolute inset-0 ${slide.bg} opacity-40 transition-colors duration-700`} />
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-10 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center pt-20">
        
        {/* Cinematic Image Frame */}
        <motion.div 
          style={{ x: imageX, rotateY: contentSkew }}
          className="relative group perspective-1000"
        >
          <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 via-transparent to-white/5 blur-2xl rounded-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
          
          <div className="relative overflow-hidden rounded-[2.5rem] bg-slate-800 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.6)] aspect-[16/10] border border-white/10">
            <motion.img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-[2s] ease-out"
            />
            <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80`} />
            
            {/* Slide Number */}
            <div className="absolute top-8 left-8 flex items-baseline gap-1">
              <span className="text-4xl font-black text-white leading-none">{slide.number}</span>
              <span className="text-xs font-bold text-white/40 uppercase tracking-widest mt-1">/ 04</span>
            </div>
          </div>
        </motion.div>

        {/* Refined Content Card */}
        <motion.div 
          style={{ skewY: contentSkew }}
          className="flex flex-col text-left"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <div className={`w-8 h-[2px] bg-gradient-to-r ${slide.gradient} rounded-full`} />
            <span className={`text-transparent bg-clip-text bg-gradient-to-r ${slide.gradient} font-black tracking-[0.3em] uppercase text-[11px]`}>
              {slide.label}
            </span>
          </div>

          <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
            {slide.title}
          </h3>

          <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-xl font-light">
            {slide.description}
          </p>

          <div className="mt-12 flex items-center gap-6">
            <button className={`px-8 py-4 rounded-2xl bg-gradient-to-r ${slide.gradient} text-white font-bold text-sm uppercase tracking-widest shadow-xl hover:scale-105 active:scale-95 transition-all group overflow-hidden relative`}>
              <span className="relative z-10 flex items-center gap-2">
                Discover More
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

function ProgressDot({ index, total, progress }: any) {
  const center = index / (total - 1);
  const band = 0.15;

  const width = useTransform(
    progress,
    [center - band, center, center + band],
    [8, 32, 8]
  );
  
  const opacity = useTransform(
    progress,
    [center - band, center, center + band],
    [0.3, 1, 0.3]
  );

  const color = useTransform(
    progress,
    [center - band, center, center + band],
    ["rgba(255,255,255,0.2)", "rgba(99,102,241,1)", "rgba(255,255,255,0.2)"]
  );

  return (
    <motion.div
      style={{ width, opacity, backgroundColor: color }}
      className="h-1.5 rounded-full overflow-hidden"
    />
  );
}
