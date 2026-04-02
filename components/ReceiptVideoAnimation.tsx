'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue, useTransform } from 'framer-motion';

const TOTAL_FRAMES = 72;

export default function ReceiptVideoAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [loadedCount, setLoadedCount] = useState(0);
  
  // Animation Progress (0 to 1)
  const progress = useMotionValue(0);
  
  // Smooth the progress for buttery transitions
  const smoothProgress = useSpring(progress, {
    stiffness: 60,
    damping: 25,
    restDelta: 0.0001
  });

  // Map progress to frame index (1 to 72)
  const frameIndex = useTransform(smoothProgress, [0, 1], [1, TOTAL_FRAMES]);
  const [currentFrame, setCurrentFrame] = useState(1);

  // Preload images
  useEffect(() => {
    let count = 0;
    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      const frameNumber = i.toString().padStart(3, '0');
      img.src = `/receipt-video/ffout${frameNumber}.gif`;
      img.onload = () => {
        count++;
        setLoadedCount(count);
      };
    }
  }, []);

  // Update frame on progress change
  useEffect(() => {
    return frameIndex.onChange((latest) => {
      const rounded = Math.round(latest);
      if (rounded >= 1 && rounded <= TOTAL_FRAMES) {
        setCurrentFrame(rounded);
      }
    });
  }, [frameIndex]);

  // Scroll Interception Logic
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let touchStartY = 0;

    const handleWheel = (e: WheelEvent) => {
      const currentVal = progress.get();
      const scrollSensitivity = 0.0015; // Adjust this for speed
      const delta = e.deltaY * scrollSensitivity;
      const nextVal = Math.max(0, Math.min(1, currentVal + delta));

      // If we're moving within boundaries, hijack the scroll
      if ((delta > 0 && currentVal < 1) || (delta < 0 && currentVal > 0)) {
        e.preventDefault();
        progress.set(nextVal);
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      const touchY = e.touches[0].clientY;
      const deltaY = touchStartY - touchY;
      const currentVal = progress.get();
      const touchSensitivity = 0.004;
      const delta = deltaY * touchSensitivity;
      const nextVal = Math.max(0, Math.min(1, currentVal + delta));

      if ((delta > 0 && currentVal < 1) || (delta < 0 && currentVal > 0)) {
        if (e.cancelable) e.preventDefault();
        progress.set(nextVal);
      }
      touchStartY = touchY;
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    container.addEventListener('touchstart', handleTouchStart);
    container.addEventListener('touchmove', handleTouchMove, { passive: false });

    return () => {
      container.removeEventListener('wheel', handleWheel);
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchmove', handleTouchMove);
    };
  }, [progress]);

  const isLoaded = loadedCount === TOTAL_FRAMES;

  return (
    <section 
      ref={containerRef} 
      className="relative h-screen bg-[#020617] overflow-hidden"
    >
      {/* Centered container for the printer and background */}
      <div className="h-full w-full flex items-center justify-center overflow-hidden">
        
        {/* Futuristic Background Gradient Glow */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#020617_100%)]" />
        </div>

        {/* Cinematic Workspace / Desk Elements */}
        <div className="absolute bottom-0 w-full h-[30vh] bg-gradient-to-t from-slate-900/40 to-transparent z-10" />
        
        <div className="relative z-20 w-full max-w-4xl px-6 flex flex-col items-center">
          
          {/* Loading State */}
          {!isLoaded && (
            <div className="absolute inset-0 z-[100] flex flex-col items-center justify-center bg-[#020617]">
              <div className="w-64 h-1 bg-white/10 rounded-full overflow-hidden mb-4">
                <motion.div 
                  className="h-full bg-primary"
                  initial={{ width: 0 }}
                  animate={{ width: `${(loadedCount / TOTAL_FRAMES) * 100}%` }}
                />
              </div>
              <p className="text-white/40 text-xs font-mono tracking-widest uppercase">
                Initializing Cinematic Assets... {Math.round((loadedCount / TOTAL_FRAMES) * 100)}%
              </p>
            </div>
          )}

          {/* Title / UI Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="mb-12 text-center"
          >
            <p className="text-slate-400 text-lg font-light max-w-2xl mx-auto mt-10">
              Experience the next generation of thermal-ready billing. Fast, secure, and built for precision.
            </p>
          </motion.div>

          {/* The Printer Rendering (Image Sequence) */}
          <div className="relative w-full aspect-video flex items-center justify-center">
            {/* Soft Shadow below printer */}
            <div className="absolute bottom-[15%] w-1/2 h-12 bg-black/60 blur-2xl rounded-full transform scale-x-125" />
            
            {/* The Image Sequence Frame (Cropped to hide watermark) */}
            <div className="relative z-30 w-full h-full max-w-[800px] flex items-center justify-center overflow-hidden rounded-2xl">
               <img
                src={`/receipt-video/ffout${currentFrame.toString().padStart(3, '0')}.gif`}
                alt="POS Printer Animation"
                className="w-[103%] h-[103%] object-cover drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] transform -translate-x-[0.5%] -translate-y-[0.5%]"
                loading="eager"
              />
              
              {/* Cinematic Light Highlights Overlay */}
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-transparent via-white/5 to-transparent z-40 mix-blend-overlay" />
            </div>
          </div>

          {/* Scroll Indicator */}
          <motion.div 
            style={{ opacity: useTransform(smoothProgress, [0, 0.1], [1, 0]) }}
            className="mt-20 flex flex-col items-center gap-4"
          >
            <div className="text-white/30 text-[10px] tracking-[0.5em] font-bold uppercase">Scroll to Print</div>
            <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
