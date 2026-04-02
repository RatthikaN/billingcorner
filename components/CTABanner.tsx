'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';

export default function CTABanner() {
  const [email, setEmail] = useState('');

  return (
    <section className="py-12 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="relative rounded-2xl overflow-hidden"
          style={{
            background: 'linear-gradient(130deg, #6366f1 0%, #818cf8 55%, #a5b4fc 100%)',
            boxShadow: '0 20px 60px -10px rgba(99, 102, 241, 0.4)',
          }}
        >
          {/* ── Right-side overlapping circles (matching reference exactly) ── */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {/* Circle 1 — largest, anchored top-right, partially clipped */}
            <div
              style={{
                position: 'absolute',
                width: '260px',
                height: '260px',
                right: '-40px',
                top: '-50px',
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.18)',
              }}
            />
            {/* Circle 2 — medium, overlaps circle 1 to its left */}
            <div
              style={{
                position: 'absolute',
                width: '200px',
                height: '200px',
                right: '120px',
                top: '10px',
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.14)',
              }}
            />
            {/* Circle 3 — smallest, bottom-left of cluster, partially clipped at bottom */}
            <div
              style={{
                position: 'absolute',
                width: '150px',
                height: '150px',
                right: '240px',
                top: '60px',
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.11)',
              }}
            />
          </div>

          {/* ── Content ── */}
          <div className="relative z-10 px-10 md:px-16 py-12 md:py-14 max-w-2xl">
            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-medium text-white leading-tight tracking-tight mb-2">
              Need assistance? We're here to help!
            </h2>

            {/* Subtitle */}
            <p className="text-indigo-100/80 text-sm md:text-base font-light mb-7">
              Have questions about features, pricing, customization, or want to book a demo? Our support team is always ready to guide you and answer all your queries about our online GST billing software.
            </p>

            {/* Inline email + button */}
            <div className="flex items-center gap-3 max-w-lg">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email here"
                className="flex-1 px-4 py-3 rounded-xl bg-white/20 text-white placeholder-indigo-200 text-sm font-medium focus:outline-none focus:bg-white/30 border border-white/20 transition-all"
              />
              <Link
                href={`/contact${email ? `?email=${encodeURIComponent(email)}` : ''}`}
                className="px-6 py-3 bg-white text-indigo-700 font-bold rounded-xl text-sm whitespace-nowrap hover:bg-indigo-50 transition-all shadow-md hover:shadow-lg"
              >
                Contact Now
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
