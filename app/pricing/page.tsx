'use client';

import { Check, X, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';
import Link from 'next/link';
import FAQ from '@/src/components/FAQ';

const pricingFaqs = [
  {
    question: "Can I try the Basic plan before upgrading?",
    answer: "Yes! Plan A (Basic) at ₹499/year gives you full access to core features so you can see if the platform is right for you before upgrading to Pro."
  },
  {
    question: "How do I upgrade to the Pro plan?",
    answer: "You can upgrade directly from your account. Click the 'Upgrade Plan' button, and your new Pro features will be unlocked immediately."
  },
  {
    question: "Is the payment process secure?",
    answer: "Absolutely. All payments are processed securely and fully encrypted via Razorpay."
  },
  {
    question: "Are there any hidden setup fees?",
    answer: "No. There are absolutely no setup fees or hidden charges. The price you see is the price you pay."
  }
];

const plans = [
  {
    name: 'Plan A (Basic)',
    price: '499',
    period: 'per year',
    desc: 'Perfect for getting started.',
    features: [
      { text: 'Basic Invoicing', included: true },
      { text: 'Limited Products', included: true },
      { text: 'Email Support', included: true },
      { text: 'Advanced AI Features', included: false },
      { text: 'Full Reports Access', included: false },
      { text: 'E-Way Bill Support', included: false },
    ],
    cta: 'Start Basic Plan',
    href: '/download',
    popular: false,
  },
  {
    name: 'Plan B (Pro)',
    price: '1,499',
    period: 'per year',
    desc: 'Best for growing businesses.',
    features: [
      { text: 'Unlimited Invoices', included: true },
      { text: 'Unlimited Products', included: true },
      { text: 'Unlimited Vendors', included: true },
      { text: 'Advanced AI Features', included: true },
      { text: 'Full Reports Access', included: true },
      { text: 'E-Way Bill Support', included: true },
    ],
    cta: 'Upgrade Plan',
    href: '/download',
    popular: true,
  }
];

export default function Pricing() {
  return (
    <div className="pb-24">
      <section className="pt-32 pb-24 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-semibold text-slate-900 mb-8 tracking-tight">
            Choose Your <span className="text-primary italic">Plan</span>
          </h1>
          <p className="text-slate-600 text-xl">
            Available Plans. No hidden fees, no long-term contracts.
          </p>
        </div>
      </section>

      <section className="px-6 mb-20 relative z-10">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`relative p-10 rounded-[2.5rem] border-2 transition-all ${plan.popular
                ? 'border-primary shadow-[0_30px_60px_-15px_rgba(99,102,241,0.3)] bg-white scale-100 md:scale-105 z-10'
                : 'border-slate-100 bg-slate-50 hover:border-slate-200 mt-0 md:mt-4'
                }`}
            >
              {plan.popular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-[11px] font-bold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg shadow-primary/20">
                  Best Value
                </span>
              )}
              <div className="mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                <p className="text-slate-500 text-sm italic">{plan.desc}</p>
              </div>
              <div className="flex items-baseline gap-2 mb-8">
                <span className="text-5xl font-bold text-slate-900 tracking-tighter">₹{plan.price}</span>
                <span className="text-slate-500 font-medium">/ {plan.period.replace('for ', '').replace('per ', '')}</span>
              </div>
              <Link href={plan.href} className={`w-full py-4 rounded-2xl font-bold mb-10 transition-all block text-center shadow-lg ${plan.popular ? 'bg-primary text-white hover:bg-indigo-600 shadow-primary/30' : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                }`}>
                {plan.cta}
              </Link>
              <ul className="space-y-4">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-3 text-sm">
                    {f.included ? (
                      <div className="bg-primary/10 p-1.5 rounded-full"><Check size={16} className="text-primary" strokeWidth={3} /></div>
                    ) : (
                      <div className="bg-slate-200/50 p-1.5 rounded-full"><X size={16} className="text-slate-400" strokeWidth={3} /></div>
                    )}
                    <span className={f.included ? 'text-slate-800 font-medium' : 'text-slate-400 line-through'}>{f.text}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Razorpay Secure Payment Note */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="max-w-lg mx-auto mt-20 flex items-center justify-center gap-3 text-slate-700 bg-emerald-50 px-6 py-4 rounded-2xl border border-emerald-200/60 shadow-sm"
        >
          <ShieldCheck size={28} className="text-emerald-500 shrink-0" />
          <span className="font-semibold text-sm">Payments are secure and encrypted via Razorpay.</span>
        </motion.div>

      </section>

      <FAQ customFaqs={pricingFaqs} title="Pricing FAQ" />
    </div>
  );
}
