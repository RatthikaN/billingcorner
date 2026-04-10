'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  User,
  Mail,
  Phone,
  ShieldCheck,
  CheckCircle2,
  Tag,
  CreditCard,
  ChevronRight,
  Zap,
  Lock,
  ArrowLeft,
  Sparkles,
  X,
  Check,
} from 'lucide-react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

const plans = [
  {
    id: 'basic',
    name: 'Plan A (Basic)',
    tagline: 'Perfect for getting started',
    price: 499,
    mrp: 1799,
    discountPercent: 72.26,
    period: 'year',
    color: 'from-slate-600 to-slate-800',
    badge: null,
    features: ['Basic Invoicing', 'Limited Products', 'Email Support'],
  },
  {
    id: 'pro',
    name: 'Plan B (Pro)',
    tagline: 'Best for growing businesses',
    price: 1499,
    mrp: 6999,
    discountPercent: 67,
    period: 'year',
    color: 'from-primary to-indigo-600',
    badge: 'Most Popular',
    features: [
      'Unlimited Invoices',
      'Unlimited Products',
      'Advanced AI Features',
      'Full Reports Access',
      'E-Way Bill Support',
    ],
  },
];

const PROMO_CODES: Record<string, number> = {
  LAUNCH50: 50,
  SAVE20: 20,
  DEAL30: 30,
};

export default function CheckoutPage() {
  return (
    <React.Suspense fallback={<div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/40 to-indigo-50/30 flex items-center justify-center"><div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div></div>}>
      <CheckoutContent />
    </React.Suspense>
  );
}

function CheckoutContent() {
  const searchParams = useSearchParams();
  const planParam = searchParams.get('plan');
  const initialPlan = plans.find(p => p.id === planParam) || plans[1];

  const [selectedPlan, setSelectedPlan] = useState(initialPlan);
  const [form, setForm] = useState({ name: '', email: '', phone: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [promoCode, setPromoCode] = useState('');
  const [promoInput, setPromoInput] = useState('');
  const [promoError, setPromoError] = useState('');
  const [promoSuccess, setPromoSuccess] = useState('');
  const [discount, setDiscount] = useState(0);
  const [step, setStep] = useState<'form' | 'success'>('form');
  const [loading, setLoading] = useState(false);

  const mrp = selectedPlan.mrp;
  const basePrice = selectedPlan.price;
  const planDiscountAmount = mrp - basePrice;
  
  const promoDiscountAmount = Math.round((basePrice * discount) / 100);
  const subtotal = basePrice - promoDiscountAmount;
  const gst = Math.round(subtotal * 0.18);
  const total = subtotal + gst;

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = 'Full name is required';
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) errs.email = 'Enter a valid email address';
    if (!form.phone.match(/^[6-9]\d{9}$/)) errs.phone = 'Enter a valid 10-digit Indian mobile number';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const applyPromo = () => {
    const code = promoInput.trim().toUpperCase();
    if (PROMO_CODES[code]) {
      setDiscount(PROMO_CODES[code]);
      setPromoCode(code);
      setPromoSuccess(`${PROMO_CODES[code]}% discount applied!`);
      setPromoError('');
    } else {
      setPromoError('Invalid promo code. Try LAUNCH50, SAVE20 or DEAL30.');
      setPromoSuccess('');
      setDiscount(0);
      setPromoCode('');
    }
  };

  const removePromo = () => {
    setDiscount(0);
    setPromoCode('');
    setPromoInput('');
    setPromoSuccess('');
    setPromoError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);

    try {
      const payload = {
        name: form.name,
        email: form.email,
        phone: form.phone,
        plan_id: selectedPlan.id,
        plan_name: selectedPlan.name,
        base_price: basePrice,
        discount: discount,
        subtotal: subtotal,
        gst: gst,
        total: total,
        promo_code: promoCode || null
      };

      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Failed to submit checkout data');
      }

      setStep('success');
    } catch (err) {
      console.error(err);
      alert('There was an issue processing your request. Please check your connection.');
    } finally {
      setLoading(false);
    }
  };

  if (step === 'success') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-3xl shadow-2xl p-12 max-w-md w-full text-center border border-slate-100"
        >
          <div className="w-24 h-24 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 size={48} className="text-emerald-500" />
          </div>
          <h2 className="text-3xl font-bold text-slate-900 mb-3">Payment Successful!</h2>
          <p className="text-slate-500 mb-2">
            Thank you, <span className="font-semibold text-slate-700">{form.name}</span>!
          </p>
          <p className="text-slate-500 mb-8 text-sm">
            A confirmation has been sent to{' '}
            <span className="text-primary font-medium">{form.email}</span>
          </p>
          <div className="bg-slate-50 rounded-2xl p-5 text-left mb-8 space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-slate-500">Plan</span>
              <span className="font-semibold text-slate-900">{selectedPlan.name}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-slate-500">Amount Paid</span>
              <span className="font-bold text-primary text-lg">₹{total.toLocaleString('en-IN')}</span>
            </div>
          </div>
          <a
            href="https://app.billingcorner.com/login"
            className="inline-flex items-center gap-2 bg-primary text-white font-bold px-8 py-4 rounded-2xl hover:bg-indigo-600 transition-all shadow-lg shadow-primary/30"
          >
            Login <ChevronRight size={18} />
          </a>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/40 to-indigo-50/30">
      {/* Top bar */}
      {/* <div className="border-b border-slate-200/60 bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/pricing" className="flex items-center gap-2 text-slate-600 hover:text-primary transition-colors text-sm font-medium">
            <ArrowLeft size={16} />
            Back to Pricing
          </Link>
          <span className="font-bold text-lg text-slate-900">
            Billing<span className="text-primary">Corner</span>
          </span>
          <div className="flex items-center gap-2 text-sm text-emerald-600 font-medium">
            <Lock size={14} />
            Secure Checkout
          </div>
        </div>
      </div> */}

      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Heading */}
        <div className="text-center mb-10">
          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold text-slate-900 mt-24 mb-2"
          >
            Complete Your <span className="text-primary">Purchase</span>
          </motion.h1>
          <p className="text-slate-500 text-sm">Safe, fast and encrypted payments via Razorpay</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          {/* ─── LEFT: Form ─────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-3 space-y-6"
          >
            {/* Plan Selector */}
            <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-6">
              <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Zap size={18} className="text-primary" /> Select Your Plan
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {plans.map(plan => (
                  <button
                    key={plan.id}
                    onClick={() => setSelectedPlan(plan)}
                    className={`relative text-left p-5 rounded-2xl border-2 transition-all duration-200 ${
                      selectedPlan.id === plan.id
                        ? 'border-primary bg-primary/5 shadow-md shadow-primary/10'
                        : 'border-slate-200 hover:border-slate-300 bg-slate-50'
                    }`}
                  >
                    {plan.badge && (
                      <span className="absolute -top-3 left-4 text-[10px] bg-primary text-white font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                        {plan.badge}
                      </span>
                    )}
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-bold text-slate-900 text-sm">{plan.name}</span>
                      {selectedPlan.id === plan.id && (
                        <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                          <Check size={12} className="text-white" strokeWidth={3} />
                        </div>
                      )}
                    </div>
                    <p className="text-slate-500 text-xs mb-3">{plan.tagline}</p>
                    <div className="flex flex-col items-start gap-1">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold text-slate-400 line-through">₹{plan.mrp.toLocaleString('en-IN')}</span>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-700">Save {plan.discountPercent}%</span>
                      </div>
                      <p className="text-2xl font-bold text-slate-900">
                        ₹{plan.price.toLocaleString('en-IN')}
                        <span className="text-sm font-medium text-slate-400"> /{plan.period}</span>
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Personal Details Form */}
            <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-6">
              <h2 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
                <User size={18} className="text-primary" /> Personal Details
              </h2>
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                {/* Full Name */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                    Full Name
                  </label>
                  <div className={`flex items-center gap-3 border-2 rounded-xl px-4 py-3 transition-colors ${
                    errors.name ? 'border-red-400 bg-red-50' : 'border-slate-200 focus-within:border-primary bg-slate-50 focus-within:bg-white'
                  }`}>
                    <User size={16} className="text-slate-400 shrink-0" />
                    <input
                      type="text"
                      placeholder="John Doe"
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      className="flex-1 bg-transparent outline-none text-slate-800 placeholder:text-slate-400 text-sm"
                    />
                  </div>
                  {errors.name && <p className="text-red-500 text-xs mt-1.5">{errors.name}</p>}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                    Email Address
                  </label>
                  <div className={`flex items-center gap-3 border-2 rounded-xl px-4 py-3 transition-colors ${
                    errors.email ? 'border-red-400 bg-red-50' : 'border-slate-200 focus-within:border-primary bg-slate-50 focus-within:bg-white'
                  }`}>
                    <Mail size={16} className="text-slate-400 shrink-0" />
                    <input
                      type="email"
                      placeholder="john@example.com"
                      value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                      className="flex-1 bg-transparent outline-none text-slate-800 placeholder:text-slate-400 text-sm"
                    />
                  </div>
                  {errors.email && <p className="text-red-500 text-xs mt-1.5">{errors.email}</p>}
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                    Phone Number
                  </label>
                  <div className={`flex items-center gap-3 border-2 rounded-xl px-4 py-3 transition-colors ${
                    errors.phone ? 'border-red-400 bg-red-50' : 'border-slate-200 focus-within:border-primary bg-slate-50 focus-within:bg-white'
                  }`}>
                    <Phone size={16} className="text-slate-400 shrink-0" />
                    <div className="flex items-center gap-2 text-sm text-slate-500 border-r border-slate-300 pr-3 shrink-0">
                      🇮🇳 +91
                    </div>
                    <input
                      type="tel"
                      placeholder="9876543210"
                      maxLength={10}
                      value={form.phone}
                      onChange={e => setForm({ ...form, phone: e.target.value.replace(/\D/g, '') })}
                      className="flex-1 bg-transparent outline-none text-slate-800 placeholder:text-slate-400 text-sm"
                    />
                  </div>
                  {errors.phone && <p className="text-red-500 text-xs mt-1.5">{errors.phone}</p>}
                </div>



                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 bg-primary text-white font-bold rounded-2xl flex items-center justify-center gap-3 shadow-lg shadow-primary/30 hover:bg-indigo-600 transition-all disabled:opacity-70 disabled:cursor-not-allowed mt-2 text-base"
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                      </svg>
                      Processing…
                    </>
                  ) : (
                    <>
                      <CreditCard size={20} />
                      Proceed to Pay ₹{total.toLocaleString('en-IN')}
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>

          {/* ─── RIGHT: Order Summary ────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="lg:col-span-2 space-y-4 lg:sticky lg:top-24"
          >
            {/* Plan Card */}
            <div className={`bg-gradient-to-br ${selectedPlan.color} rounded-3xl p-6 text-white shadow-xl`}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                  <Sparkles size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-white/70 text-xs font-medium uppercase tracking-widest">Selected Plan</p>
                  <p className="font-bold text-lg">{selectedPlan.name}</p>
                </div>
              </div>
              <ul className="space-y-2 mb-4">
                {selectedPlan.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-white/90">
                    <CheckCircle2 size={14} className="text-white/70 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <p className="text-white/60 text-xs border-t border-white/20 pt-3">
                Valid for 1 year from activation
              </p>
            </div>

            {/* Promo Code */}
            <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-6">
              <label className="block text-sm font-semibold text-slate-700 mb-3">
                Have a Coupon Code?
              </label>
              {promoCode ? (
                <div className="flex items-center gap-3 bg-emerald-50 border-2 border-emerald-400 rounded-xl px-4 py-3">
                  <Tag size={16} className="text-emerald-500 shrink-0" />
                  <span className="flex-1 text-emerald-700 font-semibold text-sm">{promoCode} — {discount}% OFF</span>
                  <button type="button" onClick={removePromo} className="text-emerald-500 hover:text-red-500 transition-colors">
                    <X size={16} />
                  </button>
                </div>
              ) : (
                <div className="flex gap-2">
                  <div className="flex items-center gap-3 border-2 border-slate-200 focus-within:border-primary rounded-xl px-4 py-3 bg-slate-50 focus-within:bg-white flex-1 transition-colors">
                    <Tag size={16} className="text-slate-400 shrink-0" />
                    <input
                      type="text"
                      placeholder="Enter code"
                      value={promoInput}
                      onChange={e => setPromoInput(e.target.value.toUpperCase())}
                      className="flex-1 bg-transparent outline-none text-slate-800 placeholder:text-slate-400 text-sm uppercase"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={applyPromo}
                    className="px-5 py-3 bg-slate-900 text-white text-sm font-bold rounded-xl hover:bg-primary transition-all whitespace-nowrap"
                  >
                    Apply
                  </button>
                </div>
              )}
              {promoError && <p className="text-red-500 text-xs mt-2">{promoError}</p>}
              {promoSuccess && <p className="text-emerald-600 text-xs mt-2 font-medium">🎉 {promoSuccess}</p>}
            </div>

            {/* Price Breakdown */}
            <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-6 space-y-4">
              <h3 className="font-bold text-slate-900 text-base">Order Summary</h3>

              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">Product</span>
                  <span className="font-medium text-slate-800">Billing Corner {selectedPlan.name.split('(')[1]?.replace(')', '') ?? ''}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">Original Price</span>
                  <span className="font-medium text-slate-400 line-through">₹{mrp.toLocaleString('en-IN')}</span>
                </div>

                <div className="flex justify-between text-sm">
                  <span className="text-emerald-600 font-medium">Plan Discount ({selectedPlan.discountPercent}%)</span>
                  <span className="text-emerald-600 font-semibold">−₹{planDiscountAmount.toLocaleString('en-IN')}</span>
                </div>

                <div className="flex justify-between text-sm border-t border-slate-100 pt-3 mt-1">
                  <span className="text-slate-700 font-semibold">Subtotal</span>
                  <span className="font-bold text-slate-800">₹{basePrice.toLocaleString('en-IN')}</span>
                </div>

                <AnimatePresence>
                  {discount > 0 && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="flex justify-between text-sm"
                    >
                      <span className="text-emerald-600 font-medium">Promo Code ({discount}%)</span>
                      <span className="text-emerald-600 font-semibold">−₹{promoDiscountAmount.toLocaleString('en-IN')}</span>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">GST (18%)</span>
                  <span className="font-medium text-slate-800">₹{gst.toLocaleString('en-IN')}</span>
                </div>
              </div>

              <div className="border-t border-slate-100 pt-4">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-slate-900 text-lg">Total</span>
                  <div className="text-right">
                    <p className="text-2xl font-extrabold text-primary">₹{total.toLocaleString('en-IN')}</p>
                    <p className="text-xs text-slate-400">per year, billed annually</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="bg-emerald-50 border border-emerald-200/60 rounded-2xl px-5 py-4 flex items-center gap-3">
              <ShieldCheck size={24} className="text-emerald-500 shrink-0" />
              <div>
                <p className="text-sm font-semibold text-emerald-800">Secure & Encrypted Payment</p>
                <p className="text-xs text-emerald-600">Powered by Razorpay · PCI DSS Compliant</p>
              </div>
            </div>

            <div className="text-center text-xs text-slate-400 space-y-1">
              <p>By proceeding, you agree to our <Link href="/terms-and-conditions" className="text-primary hover:underline">Terms</Link> and <Link href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</Link>.</p>
              <p>No hidden fees. Cancel anytime.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
