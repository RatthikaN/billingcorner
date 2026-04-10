'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { 
  Briefcase, 
  TrendingUp, 
  Users, 
  GraduationCap, 
  CheckCircle2, 
  ArrowRight, 
  Crown, 
  History, 
  Globe, 
  ShieldCheck, 
  Zap,
  Calculator,
  Calendar,
  DollarSign,
  MessageCircle
} from 'lucide-react';

const plans = [
  {
    name: "Plan 1",
    price: "₹499",
    gst: "+ 18% GST",
    tag: "Most Popular",
    color: "from-blue-500 to-indigo-600"
  },
  {
    name: "Plan 2",
    price: "₹1499",
    gst: "+ 18% GST",
    tag: "Premium",
    color: "from-fuchsia-500 to-purple-600"
  }
];

const benefits = [
  {
    title: "Flat 40% Commission",
    description: "For the first 1000 dealers who join us today.",
    icon: ShieldCheck,
    color: "text-blue-500",
    bg: "bg-blue-500/10"
  },
  // {
  //   title: "Lifetime Renewal Bonus",
  //   description: "Earn on every single customer renewal, forever.",
  //   icon: History,
  //   color: "text-emerald-500",
  //   bg: "bg-emerald-500/10"
  // },
  // {
  //   title: "Zero Recurring Costs",
  //   description: "Start small, grow big with no hidden fees or charges.",
  //   icon: Zap,
  //   color: "text-amber-500",
  //   bg: "bg-amber-500/10"
  // },
  // {
  //   title: "Simple Earning Model",
  //   description: "Transparent tracking and blazingly fast payouts.",
  //   icon: Globe,
  //   color: "text-fuchsia-500",
  //   bg: "bg-fuchsia-500/10"
  // }
];

const projectionsPlan1 = [
  { daily: 2, commission: "387.42", monthlySales: 60, monthlyComm: "11,622.60", yearlySales: 730, yearlyComm: "1,41,408.30" },
  { daily: 3, commission: "581.13", monthlySales: 90, monthlyComm: "17,433.90", yearlySales: 1095, yearlyComm: "2,12,112.45" },
  { daily: 4, commission: "774.84", monthlySales: 120, monthlyComm: "23,245.20", yearlySales: 1460, yearlyComm: "2,82,816.60" },
  { daily: 5, commission: "968.55", monthlySales: 150, monthlyComm: "29,056.50", yearlySales: 1825, yearlyComm: "3,53,520.75" },
  { daily: 10, commission: "1,937.10", monthlySales: 300, monthlyComm: "58,113.00", yearlySales: 3650, yearlyComm: "7,07,041.50" },
];

const projectionsPlan2 = [
  { daily: 2, commission: "1,164.00", monthlySales: 60, monthlyComm: "34,920.00", yearlySales: 730, yearlyComm: "4,24,860.00" },
  { daily: 3, commission: "1,746.00", monthlySales: 90, monthlyComm: "52,380.00", yearlySales: 1095, yearlyComm: "6,37,290.00" },
  { daily: 4, commission: "2,328.00", monthlySales: 120, monthlyComm: "69,840.00", yearlySales: 1460, yearlyComm: "8,49,720.00" },
  { daily: 5, commission: "2,910.00", monthlySales: 150, monthlyComm: "87,300.00", yearlySales: 1825, yearlyComm: "10,62,150.00" },
  { daily: 10, commission: "5,820.00", monthlySales: 300, monthlyComm: "1,74,600.00", yearlySales: 3650, yearlyComm: "21,24,300.00" },
];

const audience = [
  { name: "Freelancers", icon: Briefcase },
  { name: "Business Owners", icon: TrendingUp },
  { name: "Students", icon: GraduationCap },
  { name: "Digital Marketers", icon: Globe },
  { name: "Entrepreneurs", icon: Crown },
  { name: "SaaS Lovers", icon: Zap }
];

export default function BecomeDealer() {
  const [activePlan, setActivePlan] = useState<'plan1' | 'plan2'>('plan1');
  const activeProjections = activePlan === 'plan1' ? projectionsPlan1 : projectionsPlan2;

  return (
    <div className="bg-white min-h-screen text-slate-900 font-sans overflow-x-hidden">
      
      {/* 
        ======================================================================
        HERO SECTION
        ======================================================================
      */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden bg-slate-100">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -mr-96 -mt-96 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[100px] -ml-72 -mb-72 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            
            {/* Left Content */}
            <div className="w-full lg:w-1/2 text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-[0.2em] mb-8"
              >
                <Crown size={14} className="text-primary animate-pulse" />
                Join the Elite Circle
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 tracking-tighter leading-tight"
              >
                Become a <span className="text-primary italic">Dealer</span> – <br />
                Billing Corner
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl md:text-2xl text-slate-600 mb-12 font-light leading-relaxed"
              >
                Unlock lifetime earnings with our <span className="text-slate-900 font-medium italic underline decoration-primary/30">Lifetime Benefits Scheme.</span> Reach 1000 dealers and build your scalable income stream today.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="flex items-center gap-6"
              >
                <Link href="/become-a-dealer/join" className="group relative px-10 py-5 bg-slate-900 text-white font-bold rounded-2xl overflow-hidden shadow-2xl transition-all hover:scale-105 active:scale-95">
                  <span className="relative z-10 flex items-center gap-3 text-lg">
                    Join Billing Corner Today
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </motion.div>
            </div>

            {/* Right Image */}
            <div className="w-full lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: 20, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-indigo-500/20 rounded-[3rem] blur-3xl opacity-50" />
                <img 
                  src="/become_dealer.png" 
                  alt="Become a Dealer Platform" 
                  className="w-full h-auto object-cover relative z-10 drop-shadow-2xl hover:scale-105 transition-transform duration-700 rounded-[2rem]"
                />
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* 
        ======================================================================
        WHY BECOME A DEALER
        ======================================================================
      */}
      <section className="py-24 px-6 bg-white relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Why Become a Dealer?</h2>
            {/* <p className="text-slate-500 text-lg max-w-2xl mx-auto">Build a steady, scalable income stream with one of the most rewarding programs in India.</p> */}
          </div>
          
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2 space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 leading-tight">
                  Unbeatable <span className="text-primary italic">40% Flat Commission</span>
                </h3>
                <p className="text-slate-600 text-lg text-left leading-relaxed font-light">
We reward our partners with a flat 40% commission on every sale for the first 1,000 dealers.
No quotas, no hidden charges—just complete transparency and real earnings.
Build a strong, recurring income stream with us.                </p>
              </motion.div>

              {benefits.map((benefit, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex gap-6 items-start group"
                >
                  <div className={`w-14 h-14 shrink-0 ${benefit.bg} ${benefit.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <benefit.icon size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                    <p className="text-slate-500 leading-relaxed font-light">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="w-full lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-slate-100"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-transparent pointer-events-none" />
                <img 
                  src="/flat_billing.png" 
                  alt="Flat Billing Commission" 
                  className="w-full h-auto object-cover relative z-10"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 
        ======================================================================
        PRICING PLANS
        ======================================================================
      */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6"> Our Customer Plans</h2>
            <p className="text-slate-500 text-lg">Transparent pricing built for maximum dealer profitability.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {plans.map((plan, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className={`relative p-10 rounded-[2.5rem] bg-white border border-slate-200 shadow-xl overflow-hidden group hover:border-primary/50 transition-colors`}
              >
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${plan.color} opacity-10 rounded-bl-[4rem] group-hover:scale-110 transition-transform`} />
                <div className="relative z-10">
                  <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest mb-6">
                    {plan.tag}
                  </span>
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-5xl font-bold">{plan.price}</span>
                    <span className="text-lg text-slate-400 font-medium">/ year</span>
                  </div>
                  <p className="text-slate-500 mb-8 font-medium">{plan.gst}</p>
                  
                  <div className="space-y-4 mb-10 text-slate-600">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 size={18} className="text-emerald-500" />
                      <span>Full Software Access</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 size={18} className="text-emerald-500" />
                      <span>Automatic Updates</span>
                    </div>
                  </div>
                  
                  <button className="w-full py-4 rounded-2xl bg-slate-900 text-white font-bold transition-all hover:bg-primary active:scale-95">
                    Select This Plan
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 
        ======================================================================
        HOW EARNINGS WORK
        ======================================================================
      */}
      <section className="py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="w-full lg:w-1/2">
              <motion.h2
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="text-4xl md:text-5xl font-bold tracking-tight mb-8"
              >
                 How Your <br />
                <span className="text-primary italic">Earnings Work</span>
              </motion.h2>
              <p className="text-xl text-slate-600 mb-12 font-light leading-relaxed">
                We believe in complete transparency. Here's exactly how much you earn for every single sale of <span className="font-bold text-slate-900">Plan 1 (₹499)</span>.
              </p>
              
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-6 p-6 rounded-3xl bg-slate-50 border border-slate-100"
                >
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-slate-400 shadow-sm">
                    <History size={20} />
                  </div>
                  <div className="flex-1">
                    <p className="text-slate-500 text-sm font-medium uppercase tracking-wider mb-1">PG Charges (2.95%)</p>
                    <p className="text-xl font-bold">₹14.72 Deducted</p>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="flex items-center gap-6 p-6 rounded-3xl bg-slate-50 border border-slate-100"
                >
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-slate-400 shadow-sm">
                    <DollarSign size={20} />
                  </div>
                  <div className="flex-1">
                    <p className="text-slate-500 text-sm font-medium uppercase tracking-wider mb-1">Net Amount</p>
                    <p className="text-xl font-bold text-emerald-600">₹484.28</p>
                  </div>
                </motion.div>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="glass-card-dark p-12 rounded-[3rem] text-white overflow-hidden relative"
              >
                <div className="absolute -top-20 -right-20 w-80 h-80 bg-primary/30 rounded-full blur-[80px]" />
                <div className="relative z-10">
                  <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-primary-foreground text-[10px] font-bold uppercase tracking-widest mb-10">
                    Your Share
                  </div>
                  <h3 className="text-3xl font-bold mb-4">Flat 40% Commission</h3>
                  <div className="text-7xl font-bold mb-6 tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-primary/50 to-indigo-300">
                    ₹193.71
                  </div>
                  <p className="text-white/60 text-lg font-light leading-relaxed">
                    Per every single sale made on Plan 1. No hidden deductions, no fine print. Pure profit in your pocket.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 
        ======================================================================
        INCOME PROJECTION TABLE
        ======================================================================
      */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Potential Earnings</h2>
            <p className="text-slate-500 text-lg">Daily, Monthly & Yearly Income Projection for {activePlan === 'plan1' ? 'Plan A' : 'Plan B'}</p>
          </div>
          
          <div className="flex justify-center mb-8">
            <div className="bg-slate-100 p-1.5 rounded-2xl inline-flex relative shadow-inner">
              <button
                onClick={() => setActivePlan('plan1')}
                className={`relative z-10 px-6 py-3 rounded-xl font-bold transition-all duration-300 ${activePlan === 'plan1' ? 'text-white' : 'text-slate-600 hover:text-slate-900'}`}
              >
                Plan A (₹499)
              </button>
              <button
                onClick={() => setActivePlan('plan2')}
                className={`relative z-10 px-6 py-3 rounded-xl font-bold transition-all duration-300 ${activePlan === 'plan2' ? 'text-white' : 'text-slate-600 hover:text-slate-900'}`}
              >
                Plan B (₹1499)
              </button>
              <div 
                className="absolute inset-y-1.5 w-1/2 bg-primary rounded-xl transition-all duration-300 shadow-md"
                style={{ 
                  left: activePlan === 'plan1' ? '0.375rem' : 'calc(50% - 0.375rem)',
                  width: 'calc(50% - 0.375rem)'
                }}
              />
            </div>
          </div>

          <div className="overflow-x-auto no-scrollbar rounded-[2rem] shadow-2xl bg-white border border-slate-200">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="px-8 py-6 text-sm font-bold uppercase tracking-widest">Daily Sales</th>
                  <th className="px-8 py-6 text-sm font-bold uppercase tracking-widest">Daily Comm. (₹)</th>
                  <th className="px-8 py-6 text-sm font-bold uppercase tracking-widest">Monthly Sales (30 Days)</th>
                  <th className="px-8 py-6 text-sm font-bold uppercase tracking-widest">Monthly Comm. (₹)</th>
                  <th className="px-8 py-6 text-sm font-bold uppercase tracking-widest">Yearly Comm. (₹)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {activeProjections.map((row, idx) => (
                  <motion.tr
                    key={idx}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: idx * 0.05 }}
                    className="hover:bg-primary/5 transition-colors group"
                  >
                    <td className="px-8 py-6 font-bold text-slate-400 group-hover:text-slate-900 transition-colors">{row.daily}</td>
                    <td className="px-8 py-6 font-medium font-mono text-slate-600 group-hover:text-primary transition-colors">{row.commission}</td>
                    <td className="px-8 py-6 font-bold text-slate-400 group-hover:text-slate-900 transition-colors">{row.monthlySales}</td>
                    <td className="px-8 py-6 font-bold text-lg text-emerald-600">₹{row.monthlyComm}</td>
                    <td className="px-8 py-6 font-bold text-lg text-primary">₹{row.yearlyComm}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="p-8 rounded-[2.5rem] bg-emerald-50 border border-emerald-100 flex items-center gap-6"
            >
              <div className="w-16 h-16 bg-emerald-500 rounded-2xl flex items-center justify-center text-white shrink-0">
                <TrendingUp size={32} />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-1">5 sales/day → {activePlan === 'plan1' ? '₹29,000+' : '₹87,000+'}/month</h4>
                <p className="text-emerald-700/60 font-medium">Build consistency, earn more.</p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="p-8 rounded-[2.5rem] bg-primary/5 border border-primary/10 flex items-center gap-6"
            >
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-white shrink-0">
                <Crown size={32} />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-1">10 sales/day → {activePlan === 'plan1' ? '₹58,000+' : '₹1,74,000+'}/month</h4>
                <p className="text-primary/60 font-medium">Imagine the possibilities.</p>
              </div>
            </motion.div>
          </div>
          
          <div className="mt-12 text-center p-8 bg-slate-900 rounded-[2.5rem] text-white">
            <p className="text-xl text-white/70 font-light max-w-2xl mx-auto italic">
              "And remember — this is only from new sales. Add <span className="text-primary font-bold">lifetime renewal bonuses</span>, and your income keeps growing every month."
            </p>
          </div>
        </div>
      </section>

      {/* 
        ======================================================================
        WHO CAN JOIN
        ======================================================================
      */}
      <section className="py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Who Can Join?</h2>
            <p className="text-slate-500 text-lg">Diverse opportunities for everyone with a growth mindset.</p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {audience.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col items-center justify-center p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:bg-white hover:border-primary/30 transition-all group"
              >
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-slate-400 group-hover:text-primary transition-colors mb-4 shadow-sm group-hover:shadow-lg">
                  <item.icon size={28} />
                </div>
                <span className="text-sm font-bold text-slate-600 group-hover:text-slate-900 transition-colors text-center">{item.name}</span>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-20 p-12 rounded-[3.5rem] bg-primary/5 border border-primary/10 flex flex-col md:flex-row items-center gap-10 md:gap-20">
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/20 blur-2xl rounded-full" />
              <img 
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=2000&auto=format&fit=crop" 
                alt="Support team" 
                className="w-32 h-32 rounded-[2.5rem] object-cover relative z-10 shadow-2xl"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">No technical skills required</h3>
              <p className="text-slate-500 text-lg font-light leading-relaxed max-w-xl">
                We handle all the complexity. You focus on growth, we provide full support and the tools you need to succeed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 
        ======================================================================
        FINAL CTA
        ======================================================================
      */}
      <section id="join" className="py-24 px-6 relative overflow-hidden bg-white">
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-[3rem] overflow-hidden bg-slate-900 p-10 md:p-20 shadow-2xl shadow-indigo-500/10 border border-slate-800"
          >
            {/* Abstract Background Elements inside the card */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20" style={{ backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`, backgroundSize: '48px 48px' }} />
            <div className="absolute -top-[50%] -right-[10%] w-[80%] h-[150%] bg-gradient-to-br from-primary/40 to-fuchsia-500/20 blur-[100px] pointer-events-none transform rotate-12" />
            <div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[50%] bg-emerald-500/20 blur-[100px] pointer-events-none" />

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
              <div className="lg:w-3/5 text-left">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold uppercase tracking-widest mb-6 shadow-xl backdrop-blur-md">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Limited Time Opportunity
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
                  Start Your <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-indigo-300 to-fuchsia-300 italic pr-2">Journey Today</span>
                </h2>
                <p className="text-xl text-white/70 font-light leading-relaxed mb-10 max-w-xl">
                  Be among the <span className="text-white font-semibold border-b border-primary border-dashed">first 1000 dealers</span> and lock in your <span className="text-emerald-400 font-bold">40% lifetime commission</span>. Build your recurring income stream today!
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-6">
                  <Link 
                    href="https://wa.me/918300256356?text=Hello!%20I'm%20interested%20in%20your%20billing%20software." 
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-5 bg-emerald-500 text-slate-900 font-extrabold rounded-2xl text-lg hover:bg-emerald-400 transition-all hover:scale-105 active:scale-95 shadow-[0_20px_50px_-15px_rgba(16,185,129,0.5)]"
                  >
                    <MessageCircle size={22} className="fill-slate-900" />
                    Contact Support on WhatsApp
                  </Link>
                </div>
              </div>

              <div className="lg:w-2/5 w-full relative">
                 {/* Decorative floating info panel */}
                 <div className="bg-white/5 rounded-3xl p-8 border border-white/10 backdrop-blur-xl relative overflow-hidden group hover:border-white/20 transition-all">
                   <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                   <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-indigo-600 flex items-center justify-center text-white mb-6 shadow-lg shadow-primary/30">
                     <CheckCircle2 size={32} />
                   </div>
                   <h3 className="text-2xl font-bold text-white mb-2">Lifetime Access</h3>
                   <p className="text-white/60 mb-8 text-sm leading-relaxed">Join the 1000 elite partners who enjoy unmatched profit sharing and constant support.</p>
                   
                   <div className="space-y-4">
                     <div className="flex items-center justify-between text-sm">
                       <span className="text-white/60">Dealership Fee</span>
                       <div className="text-right">
                         <span className="text-white/40 line-through text-xs mr-2">₹5,000</span>
                         <span className="text-emerald-400 font-bold border border-emerald-400/30 bg-emerald-400/10 px-2 py-0.5 rounded-md">₹0 (Free)</span>
                       </div>
                     </div>
                     <div className="h-px w-full bg-white/10" />
                     <div className="flex items-center justify-between text-sm">
                       <span className="text-white/60">Commission Share</span>
                       <span className="text-white font-bold text-lg">Flat 40%</span>
                     </div>
                   </div>
                 </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
