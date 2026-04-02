'use client';

import { Check, X, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import Link from 'next/link';
import FAQ from '@/src/components/FAQ';

const pricingFaqs = [
  {
    question: "How do I upgrade from the Free to the Pro plan?",
    answer: "You can upgrade directly from your account settings within the app. The transition is instant, and your new features will be unlocked immediately."
  },
  {
    question: "Do you offer any discounts for annual billing?",
    answer: "Yes! If you choose to pay annually, you get 2 months free (approx. 17% discount) on the Pro plan."
  },
  {
    question: "What happens if I cancel my subscription?",
    answer: "If you cancel, you will retain Pro access until the end of your current billing period. After that, your account will be moved to the Free plan, and some advanced features may be restricted."
  },
  {
    question: "Are there any hidden setup fees?",
    answer: "No. There are absolutely no setup fees or hidden charges. The price you see is the price you pay."
  }
];

const plans = [
  {
    name: 'Free Plan',
    price: '0',
    desc: 'Perfect for freelancers starting out.',
    features: [
      { text: 'Basic Invoicing', included: true },
      { text: '1 User Account', included: true },
      { text: 'Email Support', included: true },
      { text: 'Manual Backups', included: true },
      { text: 'Custom Branding', included: false },
      { text: 'API Access', included: false },
    ],
    cta: 'Start for Free',
    href: '/download',
    popular: false,
  },
  {
    name: 'Pro Plan',
    price: '29',
    desc: 'Scaling your agency tools.',
    features: [
      { text: 'Unlimited Invoicing', included: true },
      { text: 'Up to 10 Users', included: true },
      { text: '24/7 Priority Support', included: true },
      { text: 'Automatic Cloud Backup', included: true },
      { text: 'Custom Branding', included: true },
      { text: 'API Access', included: true },
    ],
    cta: 'Upgrade to Pro',
    href: '/download',
    popular: true,
  },
  {
    name: 'Business Plan',
    price: '79',
    desc: 'For growing teams that need more.',
    features: [
      { text: 'Unlimited Invoicing', included: true },
      { text: 'Unlimited Users', included: true },
      { text: 'Dedicated Account Manager', included: true },
      { text: 'Multi-Region Cloud Backup', included: true },
      { text: 'White Label Branding', included: true },
      { text: 'Advanced API Access', included: true },
    ],
    cta: 'Get Business',
    href: '/contact',
    popular: false,
  },
];

const comparison = [
  { feature: 'Multi-user Access', free: '1 User', pro: 'Up to 10 Users', business: 'Unlimited' },
  { feature: 'Cloud Backup', free: 'Manual', pro: 'Automatic', business: 'Multi-Region' },
  { feature: 'Custom Invoices', free: 'Basic Branding', pro: 'White Label', business: 'Fully Custom' },
  { feature: 'API Access', free: false, pro: true, business: true },
  { feature: 'Support Level', free: 'Email (48h)', pro: 'Priority 24/7', business: 'Dedicated Manager' },
  { feature: 'Data Storage', free: '1GB', pro: 'Unlimited', business: 'Dedicated Storage' },
  { feature: 'SSO / SAML Login', free: false, pro: false, business: true },
  { feature: 'SLA Uptime Guarantee', free: false, pro: '99.9%', business: '99.99%' },
  { feature: 'Custom Integrations', free: false, pro: '5 Apps', business: 'Unlimited' },
  { feature: 'Analytics & Reporting', free: 'Basic', pro: 'Advanced', business: 'Enterprise BI' },
  { feature: 'Invoice Templates', free: '3 Templates', pro: '20 Templates', business: 'Unlimited' },
  { feature: 'Team Roles & Permissions', free: false, pro: 'Basic Roles', business: 'Custom Roles' },
];

export default function Pricing() {
  return (
    <div className="pb-24">
      <section className="pt-32 pb-24 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-semibold text-slate-900 mb-8">
            Simple and <span className="text-primary">Affordable Pricing</span>
          </h1>
          <p className="text-slate-600 text-xl">
            Choose the plan that's right for your business. No hidden fees, no long-term contracts.
          </p>
        </div>
      </section>

      <section className="px-6 mb-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`relative p-10 rounded-[2.5rem] border-2 transition-all ${plan.popular
                ? 'border-primary shadow-2xl bg-white scale-105 z-10'
                : 'border-slate-100 bg-slate-50 hover:border-slate-200'
                }`}
            >
              {plan.popular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-widest">
                  Most Popular
                </span>
              )}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                <p className="text-slate-500 text-sm italic">{plan.desc}</p>
              </div>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-5xl font-bold text-slate-900">${plan.price}</span>
                <span className="text-slate-500">/month</span>
              </div>
              <Link href={plan.href} className={`w-full py-4 rounded-2xl font-bold mb-10 transition-all block text-center ${plan.popular ? 'btn-primary' : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                }`}>
                {plan.cta}
              </Link>
              <ul className="space-y-4">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-3 text-sm">
                    {f.included ? (
                      <Check size={18} className="text-primary" />
                    ) : (
                      <X size={18} className="text-slate-300" />
                    )}
                    <span className={f.included ? 'text-slate-700' : 'text-slate-400'}>{f.text}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Compare Plans — Modern Glassmorphism Table */}
      <section className="px-6 py-24" style={{ background: 'linear-gradient(135deg, #f8faff 0%, #f1f0ff 100%)' }}>
        <div className="max-w-5xl mx-auto">
          {/* Sticky section title */}
          <div className="sticky top-0 z-20 py-4 text-center" style={{ background: 'linear-gradient(135deg, #f8faff 0%, #f1f0ff 100%)' }}>
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3 px-3 py-1 rounded-full bg-primary/10">
              Plan Breakdown
            </span>
            <h2 className="text-3xl font-bold text-slate-900">Compare Plans</h2>
          </div>

          <div className="mt-10 rounded-3xl overflow-hidden"
            style={{
              background: 'rgba(255,255,255,0.6)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid rgba(255,255,255,0.9)',
              boxShadow: '0 8px 40px rgba(99,102,241,0.08), 0 2px 12px rgba(0,0,0,0.06)',
            }}
          >
            {/* Fixed-height scrollable container — scrollbar hidden via class */}
            <div className="no-scrollbar" style={{ maxHeight: '420px', overflowY: 'auto', scrollBehavior: 'smooth' } as React.CSSProperties}>
              <table className="w-full text-left border-collapse">
                {/* Sticky column headers */}
                <thead>
                  <tr style={{
                    position: 'sticky',
                    top: 0,
                    zIndex: 10,
                    background: 'rgba(248,250,255,0.95)',
                    backdropFilter: 'blur(12px)',
                    borderBottom: '2px solid rgba(99,102,241,0.12)',
                  }}>
                    {['Features', 'Free', 'Pro', 'Business'].map((col, idx) => (
                      <th key={idx} className="p-5 font-bold text-slate-800 text-sm uppercase tracking-wider"
                        style={{ width: idx === 0 ? '40%' : '20%' }}>
                        {col === 'Pro' ? (
                          <span className="text-primary">{col}</span>
                        ) : col === 'Business' ? (
                          <span style={{ color: '#7c3aed' }}>{col}</span>
                        ) : col}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row, i) => (
                    <motion.tr
                      key={i}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.06 }}
                      className="group"
                      style={{
                        borderBottom: '1px solid rgba(226,232,240,0.7)',
                        transition: 'background 0.2s ease',
                      }}
                      onMouseEnter={e => (e.currentTarget.style.background = 'rgba(99,102,241,0.04)')}
                      onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
                    >
                      <td className="p-5 text-sm font-semibold text-slate-700">{row.feature}</td>
                      <td className="p-5 text-sm text-slate-500">
                        {typeof row.free === 'boolean' ? (
                          row.free
                            ? <span className="flex items-center gap-1.5"><Check size={16} className="text-primary" /></span>
                            : <span className="flex items-center gap-1.5"><X size={16} className="text-slate-300" /></span>
                        ) : row.free}
                      </td>
                      <td className="p-5 text-sm font-bold text-primary">
                        {typeof row.pro === 'boolean' ? (
                          row.pro
                            ? <Check size={16} className="text-primary" />
                            : <X size={16} className="text-slate-300" />
                        ) : row.pro}
                      </td>
                      <td className="p-5 text-sm font-bold" style={{ color: '#7c3aed' }}>
                        {typeof row.business === 'boolean' ? (
                          row.business
                            ? <Check size={16} style={{ color: '#7c3aed' }} />
                            : <X size={16} className="text-slate-300" />
                        ) : row.business}
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Bottom fade hint for scroll */}
            <div className="flex items-center justify-center gap-2 py-3 border-t border-slate-100/80">
              <span className="text-xs text-slate-400 select-none">Scroll to explore all features</span>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="pt-24 px-6 text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">Have more questions?</h2>
        <p className="text-slate-600 mb-10">Our support team is always here to help you choose the right path.</p>
        <Link href="/contact" className="text-primary font-bold flex items-center gap-2 mx-auto hover:gap-3 transition-all w-fit">
          Contact Sales Support <ArrowRight size={18} />
        </Link>
      </section> */}

      <FAQ customFaqs={pricingFaqs} title="Pricing &amp; Plans FAQ" />
    </div>
  );
}
