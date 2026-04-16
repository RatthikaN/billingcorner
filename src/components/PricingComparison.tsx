'use client';

import { Check, X, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

const comparisonData = [
  {
    feature: 'Pricing Model',
    other: 'High Recurring Monthly Rates',
    us: 'Affordable Flat Yearly Rates',
    usHighlight: true,
  },
  {
    feature: 'Internet Required',
    other: 'Constant Connection Needed',
    us: 'Works Seamlessly Offline',
    usHighlight: true,
  },
  {
    feature: 'Data Ownership',
    other: 'Stored on 3rd Party Servers',
    us: '100% Yours & Securely Encrypted',
    usHighlight: true,
  },
  {
    feature: 'Hidden Fees',
    other: 'Extra charges for support & updates',
    us: 'Zero Hidden Costs. Everything Included.',
    usHighlight: false,
  },
  {
    feature: 'Implementation Time',
    other: 'Complex, Takes Weeks',
    us: 'Plug & Play (Under 10 Mins)',
    usHighlight: true,
  },
  {
    feature: 'Invoice Customization',
    other: 'Rigid Templates',
    us: 'Fully Customizable to Your Brand',
    usHighlight: true,
  },
  {
    feature: 'Support',
    other: 'Tickets & Emails (Slow)',
    us: 'Priority Call & WhatsApp Support',
    usHighlight: true,
  },
];

export default function PricingComparison() {
  return (
    <section className="px-4 md:px-6 mb-32 max-w-5xl mx-auto relative z-10 w-full">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <span className="inline-block py-1.5 px-4 rounded-full bg-slate-100 text-slate-800 font-black text-[11px] uppercase tracking-widest mb-4">
          Why We Are Different
        </span>
        <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">
          How We Stack <span className="text-primary italic">Up</span>
        </h2>
      </motion.div>

      {/* The Wrapper for Horizontal Scroll */}
      <div className="relative rounded-[2.5rem] border-[3px] border-slate-900/5 bg-white shadow-2xl overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-transparent before:to-white/50 before:pointer-events-none before:z-20">
        <div className="overflow-x-auto snap-x snap-mandatory hide-scrollbar relative z-10 p-2 sm:p-4">
          <table className="w-full text-left border-collapse min-w-[700px]">
            <thead>
              <tr>
                {/* Static Heading Column */}
                <th className="sticky left-0 bg-white z-30 p-6 md:p-8 min-w-[200px] w-1/3 shadow-[15px_0_20px_-15px_rgba(0,0,0,0.08)] align-bottom">
                  <h3 className="text-2xl md:text-3xl font-black text-slate-900 leading-none">
                    Features
                  </h3>
                  <div className="h-1 w-12 bg-slate-200 mt-4 rounded-full"></div>
                </th>

                {/* Swipeable Columns */}
                <th className="p-6 md:p-8 snap-center w-1/3 align-bottom">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-slate-100 text-slate-400 mb-4">
                      <X size={24} strokeWidth={3} />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-slate-500 leading-tight">
                      Other Billing Software
                    </h3>
                  </div>
                </th>

                <th className="p-6 md:p-8 snap-center w-1/3 align-bottom">
                  <div className="relative p-6 rounded-3xl bg-gradient-to-b from-primary/10 to-transparent border border-primary/20 text-center shadow-[0_0_40px_-10px_rgba(0,0,0,0.1)]">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-amber-500 text-white text-[10px] uppercase font-black tracking-widest px-4 py-1 rounded-full shadow-lg flex items-center gap-1 whitespace-nowrap">
                      <Sparkles size={12} fill="white" /> Top Choice
                    </div>
                    <h3 className="text-xl md:text-2xl font-black text-slate-900 leading-tight">
                      Billing <span className="text-primary italic">Corner</span>
                    </h3>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, i) => (
                <tr
                  key={i}
                  className={`group transition-colors ${
                    i !== comparisonData.length - 1 ? 'border-b border-slate-100' : ''
                  }`}
                >
                  {/* Static Left Column */}
                  <td className="sticky left-0 bg-white z-20 p-6 md:p-8 font-black text-slate-700 shadow-[15px_0_20px_-15px_rgba(0,0,0,0.08)] group-hover:bg-slate-50/80 transition-colors">
                    {row.feature}
                  </td>

                  {/* Other Software Column */}
                  <td className="p-6 md:p-8 text-center text-slate-500 font-semibold group-hover:bg-slate-50/50 transition-colors">
                    {row.other}
                  </td>

                  {/* Billing Corner Column */}
                  <td className="p-6 md:p-8 text-center bg-primary/[0.02] group-hover:bg-primary/[0.04] transition-colors relative">
                    <span
                      className={`inline-flex font-bold ${
                        row.usHighlight ? 'text-primary' : 'text-slate-800'
                      }`}
                    >
                      {row.us}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      {/* Swipe Indicator (Visible only on mobile/tablet) */}
      <div className="flex md:hidden items-center justify-center gap-2 mt-6 text-slate-400 text-sm font-semibold animate-pulse">
        <span>←</span>
        <span>Swipe to compare</span>
        <span>→</span>
      </div>
    </section>
  );
}
