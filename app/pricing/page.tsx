'use client';

import { Check, X, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';
import Link from 'next/link';
import FAQ from '@/src/components/FAQ';
import PricingComparison from '@/src/components/PricingComparison';

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
    name: 'Plan A (Silver)',
    price: '499',
    mrp: '1,799',
    discountPercent: 72.26,
    gst: '+ 18% GST',
    period: 'per year',
    desc: 'Perfect for getting started.',
    metal: 'silver',
    theme: {
      bg: 'bg-gradient-to-br from-slate-50 to-slate-200/50',
      border: 'border-slate-300',
      accent: 'text-slate-600',
      badge: 'bg-slate-500',
      check: 'bg-slate-500/10 text-slate-600',
      button: 'bg-slate-800 hover:bg-slate-900 text-white shadow-slate-200'
    },
    features: [
      { text: 'Basic Invoicing', included: true },
      { text: 'Limited Products', included: true },
      { text: 'Email Support', included: true },
      { text: 'Advanced AI Features', included: false },
      { text: 'Full Reports Access', included: false },
      { text: 'E-Way Bill Support', included: false },
    ],
    cta: 'Select Silver Plan',
    href: '/contact',
    popular: false,
  },
  {
    name: 'Plan B (Gold)',
    price: '1,499',
    mrp: '6,999',
    discountPercent: 78.58,
    gst: '+ 18% GST',
    period: 'per year',
    desc: 'Best for growing businesses.',
    metal: 'gold',
    theme: {
      bg: 'bg-gradient-to-br from-amber-50 to-yellow-100/50',
      border: 'border-amber-400',
      accent: 'text-amber-600',
      badge: 'bg-amber-500',
      check: 'bg-amber-500/10 text-amber-600',
      button: 'bg-amber-500 hover:bg-amber-600 text-white shadow-amber-200'
    },
    features: [
      { text: 'Unlimited Invoices', included: true },
      { text: 'Unlimited Products', included: true },
      { text: 'Unlimited Vendors', included: true },
      { text: 'Advanced AI Features', included: true },
      { text: 'Full Reports Access', included: true },
      { text: 'E-Way Bill Support', included: true },
    ],
    cta: 'Select Gold Plan',
    href: '/contact',
    popular: true,
  }
];

export default function Pricing() {
  return (
    <div className="pb-24">
      <section className="pt-32 pb-24 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-semibold text-slate-900 mb-8 tracking-tight text-center">
            Choose Your <span className="text-primary italic">Plan</span>
          </h1>
          <p className="text-slate-600 text-base md:text-xl font-medium">
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
              className={`relative p-10 rounded-[2.5rem] border-2 transition-all ${plan.theme.bg} ${plan.theme.border} ${plan.popular ? 'scale-100 md:scale-105 z-10 shadow-2xl' : 'mt-0 md:mt-4 shadow-xl'
                }`}
            >
              {plan.popular && (
                <span className={`absolute -top-4 left-1/2 -translate-x-1/2 ${plan.theme.badge} text-white text-[11px] font-bold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg`}>
                  Premium Choice
                </span>
              )}
              <div className="mb-8">
                <h3 className={`text-2xl md:text-3xl font-black mb-2 tracking-tight ${plan.metal === 'gold' ? 'text-amber-900' : 'text-slate-900'}`}>{plan.name}</h3>
                <p className={`${plan.metal === 'gold' ? 'text-amber-700/70' : 'text-slate-500'} text-sm font-bold italic`}>{plan.desc}</p>
              </div>
              <div className="flex flex-col mb-8 gap-1">
                <div className="flex items-center gap-2">
                  <span className={`text-xl font-semibold line-through ${plan.metal === 'gold' ? 'text-amber-900/40' : 'text-slate-400'}`}>₹{plan.mrp}</span>
                  <span className={`text-[10px] font-black px-2 py-0.5 rounded-md ${plan.metal === 'gold' ? 'bg-amber-200 text-amber-800' : 'bg-slate-200 text-slate-800'}`}>Save {plan.discountPercent}%</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className={`text-5xl font-black tracking-tighter ${plan.metal === 'gold' ? 'text-amber-950' : 'text-slate-900'}`}>₹{plan.price}</span>
                  <span className={`${plan.metal === 'gold' ? 'text-amber-800/60' : 'text-slate-500'} font-bold`}>/ {plan.period.replace('for ', '').replace('per ', '')}</span>
                </div>
                <p className={`${plan.metal === 'gold' ? 'text-amber-800/60' : 'text-slate-500'} font-bold text-sm`}>{plan.gst}</p>
              </div>
              <Link href={plan.href} className={`w-full py-4 rounded-2xl font-black mb-10 transition-all block text-center shadow-lg ${plan.theme.button}`}>
                {plan.cta}
              </Link>
              <ul className="space-y-4">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-3 text-sm">
                    {f.included ? (
                      <div className={`${plan.theme.check} p-1.5 rounded-full shadow-sm`}><Check size={16} strokeWidth={4} /></div>
                    ) : (
                      <div className="bg-slate-300/30 p-1.5 rounded-full"><X size={16} className="text-slate-400" strokeWidth={4} /></div>
                    )}
                    <span className={f.included ? `${plan.metal === 'gold' ? 'text-amber-900' : 'text-slate-900'} font-bold` : 'text-slate-400 line-through'}>{f.text}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      <PricingComparison />

      <FAQ customFaqs={pricingFaqs} title="Pricing FAQ" />
    </div>
  );
}

