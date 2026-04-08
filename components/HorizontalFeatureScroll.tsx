'use client';

import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'motion/react';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

interface Feature {
  id: string;
  image: string;
  title: string;
  desc: string;
}

interface HorizontalFeatureScrollProps {
  features: Feature[];
}

export default function HorizontalFeatureScroll({ features }: HorizontalFeatureScrollProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [highlightedId, setHighlightedId] = useState<string | null>(null);

  // Handle Hash Navigation and Highlighting
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        setHighlightedId(hash);
        const element = document.getElementById(hash);
        if (element && scrollContainerRef.current) {
          const container = scrollContainerRef.current;
          const leftOffset = element.offsetLeft - container.offsetLeft - (container.clientWidth / 2) + (element.clientWidth / 2);
          container.scrollTo({
            left: leftOffset,
            behavior: 'smooth'
          });
        }
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 relative">
        {/* Navigation Buttons */}
        <div className="absolute top-1/2 -translate-y-1/2 left-4 z-20 hidden md:block">
          <button 
            onClick={scrollLeft}
            className="p-4 bg-white/80 backdrop-blur-md rounded-full border border-slate-200 shadow-xl hover:bg-primary hover:text-white transition-all text-slate-600"
          >
            <ArrowLeft size={24} />
          </button>
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 right-4 z-20 hidden md:block">
          <button 
            onClick={scrollRight}
            className="p-4 bg-white/80 backdrop-blur-md rounded-full border border-slate-200 shadow-xl hover:bg-primary hover:text-white transition-all text-slate-600"
          >
            <ArrowRight size={24} />
          </button>
        </div>

        {/* Scrollable Container */}
        <div 
          ref={scrollContainerRef}
          className="flex gap-8 overflow-x-auto no-scrollbar pb-12 pt-4 px-4 snap-x snap-mandatory"
          style={{ scrollBehavior: 'smooth' }}
        >
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              id={feature.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`min-w-[300px] md:min-w-[450px] bg-white rounded-[2.5rem] border transition-all duration-500 snap-center overflow-hidden flex flex-col group
                ${highlightedId === feature.id 
                  ? 'border-primary ring-4 ring-primary/10 shadow-[0_30px_60px_-15px_rgba(var(--primary-rgb),0.3)] scale-[1.02]' 
                  : 'border-slate-200 hover:border-primary/30 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:-translate-y-2'
                }`}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={feature.image} 
                  alt={feature.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 rounded-lg ${highlightedId === feature.id ? 'bg-primary text-white' : 'bg-primary/10 text-primary'}`}>
                    <CheckCircle2 size={20} />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-slate-600 leading-relaxed mb-6 flex-grow">
                  {feature.desc}
                </p>
                <Link 
                  href="/download"
                  className="mt-auto inline-flex items-center gap-2 text-primary font-bold text-sm tracking-wide uppercase hover:gap-3 transition-all"
                >
                  Try this feature <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
