'use client';

import React from 'react';
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
  DollarSign
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
  {
    title: "Lifetime Renewal Bonus",
    description: "Earn on every single customer renewal, forever.",
    icon: History,
    color: "text-emerald-500",
    bg: "bg-emerald-500/10"
  },
  {
    title: "Zero Recurring Costs",
    description: "Start small, grow big with no hidden fees or charges.",
    icon: Zap,
    color: "text-amber-500",
    bg: "bg-amber-500/10"
  },
  {
    title: "Simple Earning Model",
    description: "Transparent tracking and blazingly fast payouts.",
    icon: Globe,
    color: "text-fuchsia-500",
    bg: "bg-fuchsia-500/10"
  }
];

const projections = [
  { daily: 2, commission: "387.42", monthlySales: 60, monthlyComm: "11,622.60", yearlySales: 730, yearlyComm: "1,41,408.30" },
  { daily: 3, commission: "581.13", monthlySales: 90, monthlyComm: "17,433.90", yearlySales: 1095, yearlyComm: "2,12,112.45" },
  { daily: 4, commission: "774.84", monthlySales: 120, monthlyComm: "23,245.20", yearlySales: 1460, yearlyComm: "2,82,816.60" },
  { daily: 5, commission: "968.55", monthlySales: 150, monthlyComm: "29,056.50", yearlySales: 1825, yearlyComm: "3,53,520.75" },
  { daily: 10, commission: "1,937.10", monthlySales: 300, monthlyComm: "58,113.00", yearlySales: 3650, yearlyComm: "7,07,041.50" },
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
        
        <div className="max-w-7xl mx-auto relative z-10 text-center">
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
            className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter leading-tight"
          >
            Become a <span className="text-primary italic">Dealer</span> – <br />
            Billing Corner
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto mb-12 font-light"
          >
            Unlock lifetime earnings with our <span className="text-slate-900 font-medium italic underline decoration-primary/30">Lifetime Benefits Scheme.</span> Reach 1000 dealers and build your scalable income stream today.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Link href="#join" className="group relative px-10 py-5 bg-slate-900 text-white font-bold rounded-2xl overflow-hidden shadow-2xl transition-all hover:scale-105 active:scale-95">
              <span className="relative z-10 flex items-center gap-3 text-lg">
                Join Billing Corner Today
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </motion.div>
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
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">🚀 Why Become a Dealer?</h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">Build a steady, scalable income stream with one of the most rewarding programs in India.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-card hover:bg-white transition-all duration-300 p-8 rounded-[2rem] group"
              >
                <div className={`w-14 h-14 ${benefit.bg} ${benefit.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <benefit.icon size={28} />
                </div>
                <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
                <p className="text-slate-500 leading-relaxed font-light">{benefit.description}</p>
              </motion.div>
            ))}
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
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">💼 Our Customer Plans</h2>
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
                💰 How Your <br />
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
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">📊 Potential Earnings</h2>
            <p className="text-slate-500 text-lg">Daily, Monthly & Yearly Income Projection for Plan 1</p>
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
                {projections.map((row, idx) => (
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
                <h4 className="text-xl font-bold mb-1">5 sales/day → ₹29,000+/month</h4>
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
                <h4 className="text-xl font-bold mb-1">10 sales/day → ₹58,000+/month</h4>
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
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">🧑💼 Who Can Join?</h2>
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
      <section id="join" className="py-24 px-6 bg-slate-900 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.05] pointer-events-none" style={{ backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`, backgroundSize: '40px 40px' }} />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent pointer-events-none" />
        
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tighter"
          >
            Start Your <br />
            <span className="text-secondary-foreground italic underline decoration-white/20">Journey Today</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-white/60 mb-12 font-light"
          >
            Be among the <span className="text-white font-bold underline decoration-primary">first 1000 dealers</span> and lock in your 40% lifetime commission. Build your recurring income stream today!
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Link 
              href="https://wa.me/91XXXXXXXXXX" 
              className="inline-flex items-center gap-4 px-12 py-6 bg-primary text-white font-bold rounded-2xl text-xl shadow-[0_20px_50px_-15px_rgba(99,102,241,0.5)] hover:scale-105 transition-all"
            >
              Contact Support On WhatsApp
              <ArrowRight size={24} />
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
