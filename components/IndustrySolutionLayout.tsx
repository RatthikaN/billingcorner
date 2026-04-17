'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import SaaSBanner from './SaaSBanner';
import CTABanner from './CTABanner';

interface Feature {
  title: string;
  description: string;
}

interface IndustrySolutionProps {
  title: string;
  subtitle: string;
  description: React.ReactNode;
  heroImage: string;
  whatWeOfferTitle?: string;
  whatWeOfferBgImage?: string;
  features: Feature[];
  whyChooseUs: string[];
  closingTitle: string;
  closingDescription: string;
}

export default function IndustrySolutionLayout({
  title,
  subtitle,
  description,
  heroImage,
  whatWeOfferTitle = "What We Offer",
  whatWeOfferBgImage,
  features,
  whyChooseUs,
  closingTitle,
  closingDescription
}: IndustrySolutionProps) {
  return (
    <div className="bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          <div className="w-full md:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-3xl md:text-4xl xl:text-5xl font-medium text-slate-900 mb-4 leading-tight">
                {title}
              </h1>
              <h2 className="text-xl md:text-2xl font-medium text-primary mb-6">
                {subtitle}
              </h2>
              <div className="text-slate-600 text-base md:text-lg leading-relaxed font-medium mb-8">
                {description}
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="/download" className="px-8 py-4 bg-primary text-white font-bold rounded-2xl flex items-center gap-2 shadow-lg shadow-primary/20 hover:scale-105 transition-all">
                  Start with just ₹1
                  <ArrowRight size={18} />
                </Link>
                {/* <Link href="/contact" className="px-8 py-4 bg-white border border-slate-200 text-slate-700 font-bold rounded-2xl hover:bg-slate-50 transition-all">
                  Book a Demo
                </Link> */}
              </div>
            </motion.div>
          </div>
          <div className="w-full md:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative z-10"
            >
              <img 
                src={heroImage} 
                alt={title} 
                className="w-full h-auto rounded-3xl shadow-2xl border border-slate-100"
              />
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/10 rounded-full blur-2xl -z-10" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      {/* <section
        className="py-24 px-6 relative"
        style={whatWeOfferBgImage ? {
          backgroundImage: `url(${whatWeOfferBgImage})`,
          backgroundAttachment: 'fixed',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        } : { backgroundColor: '#f8fafc' }}
      >
        {whatWeOfferBgImage && (
          <div className="absolute inset-0 bg-slate-900/70 backdrop-blur-[1px]" />
        )}
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
              whatWeOfferBgImage ? 'text-white' : 'text-slate-900'
            }`}>{whatWeOfferTitle}</h2>
            <div className="w-20 h-1.5 bg-primary mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`p-8 rounded-2xl shadow-sm border transition-all hover:shadow-lg ${
                  whatWeOfferBgImage
                    ? 'bg-white/10 border-white/20 backdrop-blur-md hover:bg-white/20'
                    : 'bg-white border-slate-100 hover:shadow-md'
                }`}
              >
                <h3 className={`text-xl font-bold mb-3 ${
                  whatWeOfferBgImage ? 'text-white' : 'text-slate-900'
                }`}>{feature.title}</h3>
                <p className={`leading-relaxed ${
                  whatWeOfferBgImage ? 'text-white/80' : 'text-slate-600'
                }`}>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Why Choose Us */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2">
             <h2 className="text-3xl md:text-4xl xl:text-5xl font-medium text-slate-900 mb-8">Why Choose Us?</h2>
             <div className="space-y-6">
                {whyChooseUs.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="mt-1 bg-primary/10 p-1 rounded-full text-primary">
                      <CheckCircle2 size={24} />
                    </div>
                    <p className="text-lg text-slate-700">{item}</p>
                  </div>
                ))}
             </div>
          </div>
          <div className="w-full md:w-1/2 bg-primary rounded-3xl p-12 text-white">
             <h3 className="text-3xl font-medium mb-6">{closingTitle}</h3>
             <p className="text-white/80 text-lg mb-8 leading-relaxed">
                {closingDescription}
             </p>
             <Link href="/download" className="inline-flex items-center gap-2 text-white font-bold border-b-2 border-white pb-1 hover:gap-4 transition-all">
                Download Now <ArrowRight size={20} />
             </Link>
          </div>
        </div>
      </section>

      <SaaSBanner />
      {/* <CTABanner /> */}

    </div>
  );
}
