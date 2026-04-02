'use client';

import { motion } from 'motion/react';
import { Users, Target, Heart, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import FAQ from '@/src/components/FAQ';

const aboutFaqs = [
  {
    question: "Where is Billing Corner based?",
    answer: "We are headquartered in Bengaluru, India, with a remote team working across different states to better understand the diverse needs of Indian merchants."
  },
  {
    question: "What is the long-term vision for the product?",
    answer: "Our goal is to become the operating system for small businesses in India, expanding beyond billing into financial services, credit access, and digital storefronts."
  },
  {
    question: "Is Billing Corner part of a larger company?",
    answer: "We are an independent startup backed by top-tier investors who believe in our mission to digitize Bharat's commerce."
  }
];

export default function About() {
  return (
    <div className="pb-24">
      {/* Hero */}
      <section className="pt-20 pb-24 px-6 text-center bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-5xl md:text-7xl font-bold mb-8"
          >
            Our Story & <span className="text-primary">Vision</span>
          </motion.h1>
          <p className="text-slate-400 text-xl leading-relaxed">
            We are on a mission to simplify billing, inventory management, and GST compliance for millions of businesses across Bharat.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-primary font-bold text-xs uppercase tracking-widest mb-4 block">Our Journey</span>
            <h2 className="text-4xl font-bold text-slate-900 mb-8">Built for India, Powered by Modern Tech.</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Billing Corner was founded with a single goal: to remove the technical barriers that small and medium businesses face. By providing an all-in-one ecosystem, we help business owners focus on what they do best—serving their customers.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed">
              Today, we serve thousands of merchants across the country, from small retail shops to large distribution networks, helping them digitize their operations and stay compliant with ever-changing tax regulations.
            </p>
          </div>
          <div className="relative rounded-[3rem] overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200"
              alt="Team working"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Core Values</h2>
            <p className="text-slate-600">The principles that guide everything we build.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { image: 'https://images.unsplash.com/photo-1556745757-8d76bdb6984b?auto=format&fit=crop&q=80&w=400', title: 'Customer First', desc: 'We build for the merchant, not for ourselves.' },
              { image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=400', title: 'Precision', desc: 'Accuracy in billing is non-negotiable.' },
              { image: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&q=80&w=400', title: 'Simplicity', desc: 'Powerful tools should be easy to use.' },
              { image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=400', title: 'Trust', desc: 'Security and compliance are our foundation.' },
            ].map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/40 backdrop-blur-md p-8 rounded-[2.5rem] border border-white/20 text-center hover:shadow-xl transition-all group"
              >
                <div className="w-full aspect-square rounded-2xl overflow-hidden mb-6 group-hover:scale-[1.05] transition-transform">
                  <img
                    src={v.image}
                    alt={v.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3 className="font-bold text-slate-900 mb-2 text-xl">{v.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team / CTA */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 mb-8">Ready to join our mission?</h2>
          <p className="text-slate-600 mb-12 text-lg">We are always looking for passionate individuals to help us build the future of commerce in India.</p>
          <div className="flex justify-center gap-4">
            <button className="btn-primary">View Openings</button>
            <Link href="/contact" className="btn-secondary">Contact Us</Link>
          </div>
        </div>
      </section>

      <FAQ customFaqs={aboutFaqs} title="About Our Mission FAQ" />
    </div>
  );
}
