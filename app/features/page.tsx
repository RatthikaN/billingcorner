'use client';

import {
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
import Link from 'next/link';
import { useRef } from 'react';
import FAQ from '@/src/components/FAQ';
import HorizontalFeatureScroll from '@/components/HorizontalFeatureScroll';

const featureFaqs = [
  {
    question: "How does the Smart Billing system handle multi-tax invoices?",
    answer: "Our engine automatically detects whether a transaction is Intra-state (CGST + SGST) or Inter-state (IGST) based on the customer's GSTIN and your business location, ensuring 100% tax accuracy."
  },
  {
    question: "Is the POS system compatible with barcode scanners?",
    answer: "Yes, our POS interface is optimized for plug-and-play compatibility with most standard USB and Bluetooth barcode scanners for ultra-fast checkout."
  },
  {
    question: "Can I manage multiple warehouses or stores?",
    answer: "Absolutely. Our Inventory module supports multi-location tracking, allowing you to monitor stock levels and transfer items between warehouses in real-time."
  },
  {
    question: "What kind of hardware do I need for the Desktop app?",
    answer: "Billing Corner is lightweight. It runs smoothly on any system with at least 4GB RAM and Windows 10 or higher."
  }
];

const featureList = [
  { 
    id: 'billing-invoices',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800', 
    title: 'Sales & Service Invoices', 
    desc: 'Generate professional GST-ready invoices for goods and services. Customize templates to match your brand and automate your billing workflow effortlessly.' 
  },
  { 
    id: 'pos-billing',
    image: 'https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&q=80&w=800', 
    title: 'POS Billing', 
    desc: 'Accelerate retail checkouts with a high-performance touch-optimized POS interface. Features quick product search and instant receipt generation for a smooth customer experience.' 
  },
  { 
    id: 'voice-search',
    image: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&q=80&w=800', 
    title: 'Voice based search', 
    desc: 'Navigate your inventory and find products instantly using advanced voice recognition. Reduce manual typing and speed up your billing process with hands-free search capabilities.' 
  },
  { 
    id: 'gst-calculation',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800', 
    title: 'GST Calculation', 
    desc: 'Simplify tax compliance with automated CGST, SGST, and IGST calculations. Our engine accurately applies taxes based on location and HSN codes for 100% accuracy.' 
  },
  { 
    id: 'smart-inventory',
    image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80&w=800', 
    title: 'Smart Inventory', 
    desc: 'Manage diverse product types with custom units of measurement and integrated HSN/SAC support. Track stock levels accurately across your entire catalog.' 
  },
  { 
    id: 'bulk-updates',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800', 
    title: 'Bulk Updates', 
    desc: 'Save time by performing mass updates on prices, stock levels, and product categories. Efficiently manage large inventories with simple, filtered bulk editing tools.' 
  },
  { 
    id: 'rack-management',
    image: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&q=80&w=800', 
    title: 'Rack Management', 
    desc: 'Organize your warehouse or store with a precise rack and shelf tracking system. Locate items instantly and optimize pick-and-pack efficiency with visual storage mapping.' 
  },
  { 
    id: 'vendor-party-management',
    image: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&q=80&w=800', 
    title: 'Vendor & Party Management', 
    desc: 'Maintain comprehensive records of your suppliers and customers. Track outstanding balances, purchase history, and contact details in a centralized database.' 
  },
  { 
    id: 'dashboard-analytics',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800', 
    title: 'Dashboard Analytics', 
    desc: 'Gain actionable insights into your business performance with real-time data visualization. Monitor sales trends, top-selling products, and profit margins through intuitive charts.' 
  },
  { 
    id: 'cloud-sync',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=800', 
    title: 'Cloud Sync', 
    desc: 'Keep your business data synchronized across all devices and locations. Access your records from mobile, web, or desktop with seamless, real-time cloud updates.' 
  },
  { 
    id: 'multi-user-access',
    image: '/images/features/multi-user.png', 
    title: 'Multi-user Access', 
    desc: 'Collaborate with your team by granting specific permissions to different staff members. Securely manage access roles for billers, managers, and accountants.' 
  },
  { 
    id: 'online-backup',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800', 
    title: 'Online Backup', 
    desc: 'Protect your critical business information with automated, secure cloud backups. Never worry about data loss with reliable, encrypted off-site storage of your entire database.' 
  },
  { 
    id: 'low-stock-alerts',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800', 
    title: 'Low Stock Alerts', 
    desc: 'Never run out of popular items with automated inventory notifications. Set custom thresholds for each product and receive timely alerts to restock before it\'s too late.' 
  },
  { 
    id: 'barcode-support',
    image: 'https://images.unsplash.com/photo-1556742111-a301076d9d18?auto=format&fit=crop&q=80&w=800', 
    title: 'Barcode Support', 
    desc: 'Enable rapid inventory counting and ultra-fast checkout with plug-and-play barcode integration. Compatible with most standard handheld and fixed-mount scanners.' 
  },
  { 
    id: 'subscription-mode',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=800', 
    title: 'Subscription Mode', 
    desc: 'Manage recurring revenue businesses with flexible subscription billing models. Automate monthly, quarterly, or yearly invoicing for service-based clients.' 
  },
  { 
    id: 'template-selection',
    image: 'https://images.unsplash.com/photo-1586769852044-692d6e3703f0?auto=format&fit=crop&q=80&w=800', 
    title: 'Template Selection', 
    desc: 'Choose from a library of professionally designed invoice templates. Select the layout that best represents your business identity and customize it to your needs.' 
  },
  { 
    id: 'comprehensive-reports',
    image: '/images/features/reports.png', 
    title: 'Comprehensive Reports', 
    desc: 'Generate all types of reports covering sales, purchases, inventory, and taxes. Filter data by date range, category, or user to get the exact information you need.' 
  },
  { 
    id: 'multiple-export-formats',
    image: '/images/features/exports.png', 
    title: 'Multiple Export Formats', 
    desc: 'Seamlessly export your data to PDF, Excel, and Tally formats. Native support for thermal printing ensures professional receipt generation for retail businesses.' 
  },
];

export default function Features() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -500]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 45]);

  return (
    <div ref={containerRef} className="pb-24 relative overflow-hidden">
      {/* Parallax Background Elements */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <motion.div
          style={{ y: y1, rotate }}
          className="absolute top-40 -left-20 w-80 h-80 bg-primary/5 rounded-[4rem] border border-primary/10 blur-3xl"
        />
        <motion.div
          style={{ y: y2, rotate: -rotate }}
          className="absolute top-[600px] -right-40 w-[500px] h-[500px] bg-purple-500/5 rounded-full border border-purple-500/10 blur-3xl"
        />
      </div>

      {/* Hero Section */}
      <section className="pt-32 pb-24 px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-semibold text-slate-900 mb-8"
          >
            Powerful Billing Software Features for <span className="text-primary">Modern Businesses</span>
          </motion.h1>
          <p className="text-slate-600 text-xl mb-12">
            Streamline your operations with our all-in-one billing, inventory, and GST management solution designed for rapid growth and efficiency.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/download" className="btn-primary">Download Billing Corner</Link>
            <button className="btn-secondary">Watch Demo</button>
          </div>
        </div>
      </section>

      {/* Main Image Preview */}
      <section className="px-6 mb-24">
        <div className="max-w-6xl mx-auto">
          {/* <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border border-slate-200 bg-slate-100 p-4 md:p-8">
            <img
              src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=2000"
              alt="Billing Corner App"
              className="rounded-2xl w-full shadow-lg"
              referrerPolicy="no-referrer"
            />
          </div> */}
        </div>
      </section>

      {/* Feature Section with Horizontal Scroll */}
      <section className="bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 pt-24 text-center">
          <h2 className="text-3xl md:text-4xl font-medium text-slate-900 mb-4 tracking-tight">
            Comprehensive <span className="text-primary italic">Features</span> for Your Business
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg mb-12">
            Everything you need to manage sales, stock, and compliance.
          </p>
        </div>
        <HorizontalFeatureScroll features={featureList} />
      </section>

      {/* Detailed Feature Sections */}
      {/* <section className="py-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto space-y-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-primary font-bold text-xs uppercase tracking-widest mb-4 block">Automated Workflows</span>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Smart Billing System</h2>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                Generate professional invoices in seconds and automate your entire payment workflow. Whether it's a one-time sale or a recurring subscription, we've got you covered.
              </p>
              <ul className="space-y-4">
                {[
                  'Customizable invoice templates with your branding',
                  'Automated recurring billing and payment reminders',
                  'Multi-currency and multi-language support'
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3 text-slate-700 font-medium"
                  >
                    <CheckCircle2 size={20} className="text-primary" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              style={{ y: y1 }}
              className="rounded-[3rem] p-12 bg-primary-dark/5 backdrop-blur-sm border mt-12 border-primary/10"
            >
              <img
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800"
                alt="Billing Dashboard"
                className="rounded-2xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              style={{ y: y2 }}
              className="order-2 lg:order-1 rounded-[3rem] p-12 bg-slate-900/5 mt-32 backdrop-blur-sm border border-slate-900/10"
            >
              <img
                src="https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&q=80&w=800"
                alt="POS Terminal"
                className="rounded-2xl shadow-2xl opacity-80"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <span className="text-primary font-bold text-xs uppercase tracking-widest mb-4 block">Retail Optimization</span>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Fast POS Billing</h2>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                Handle high-volume retail transactions with ease. Our POS interface is optimized for speed, touchscreens, and thermal printers.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-white/40 backdrop-blur-md rounded-2xl border border-white/20 hover:border-primary/20 transition-colors">
                  <h4 className="font-bold text-slate-900 mb-2">Quick Search</h4>
                  <p className="text-slate-500 text-xs">Find items or customers instantly with smart search.</p>
                </div>
                <div className="p-4 bg-white/40 backdrop-blur-md rounded-2xl border border-white/20 hover:border-primary/20 transition-colors">
                  <h4 className="font-bold text-slate-900 mb-2">Dual Display</h4>
                  <p className="text-slate-500 text-xs">Customer-facing display support for transparency.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section> */}

      {/* GST Section */}
      <section className="py-32 px-6 relative overflow-hidden bg-[#0f172a]">
        {/* Animated Background Gradients with Parallax */}
        <div className="absolute inset-0 z-0">
          <motion.div
            style={{ y: y1 }}
            className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px]"
          />
          <motion.div
            style={{ y: y2 }}
            className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]"
          />
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-purple-300 text-xs font-bold uppercase tracking-widest mb-8">
              <span className="w-2 h-2 bg-purple-500 rounded-full animate-ping" />
              Compliance Made Simple
            </div>
            <h2 className="text-4xl md:text-6xl font-semibold mb-8 text-white leading-tight">
              GST Ready <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-primary">
                Billing Engine
              </span>
            </h2>
            <p className="text-white/60 text-lg mb-12 max-w-lg leading-relaxed">
              Stay fully compliant with automatic tax calculations. Our engine handles CGST, SGST, and IGST logic instantly based on HSN/SAC codes.
            </p>
            <div className="space-y-6">
              {[
                { title: 'Smart Tax Calculation', desc: 'Real-time CGST, SGST, & IGST processing.' },
                { title: 'E-Way Bill Direct', desc: 'One-click generation from your dashboard.' },
                { title: 'Tax Filing Ready', desc: 'Export GSTR-1, 2, and 3B ready files.' }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-5 group">
                  <div className="p-3 bg-white/5 rounded-2xl border border-white/10 text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-all">
                    <CheckCircle2 size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">{item.title}</h4>
                    <p className="text-white/40 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Futuristic Floating Dashboard UI */}
          <div className="relative h-[600px] flex items-center justify-center">
            {/* Holographic Background Circle */}
            <div className="absolute w-[450px] h-[450px] border border-white/5 rounded-full animate-[spin_20s_linear_infinite]" />

            {/* Main Invoice Card */}
            <motion.div
              initial={{ opacity: 0, y: 40, rotateY: -10 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ duration: 1 }}
              className="relative w-full max-w-[450px] bg-white/[0.03] backdrop-blur-2xl p-8 rounded-[2.5rem] border border-white/10 shadow-[0_30px_100px_-20px_rgba(0,0,0,0.5)] z-20"
            >
              <div className="flex justify-between items-center mb-10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center text-white shadow-lg shadow-purple-500/20">
                    <span className="text-xs font-black">BC</span>
                  </div>
                  <span className="text-white font-bold">Tax Invoice</span>
                </div>
                <span className="text-white/30 text-[10px] font-mono">#INV-2026-X7</span>
              </div>

              <div className="space-y-6 mb-12">
                <div className="flex justify-between text-sm">
                  <span className="text-white/40">Sub Total</span>
                  <span className="text-white font-medium">₹8,474.58</span>
                </div>
                <div className="h-px bg-white/5" />
                <div className="space-y-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-white/40 italic">CGST (9%)</span>
                    <span className="text-purple-400 font-bold">+ ₹762.71</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-white/40 italic">SGST (9%)</span>
                    <span className="text-purple-400 font-bold">+ ₹762.71</span>
                  </div>
                </div>
                <div className="h-px bg-white/5" />
                <div className="pt-2 flex justify-between items-center">
                  <span className="text-white/40 font-bold">Total Amount</span>
                  <div className="text-right">
                    <div className="text-3xl font-black text-white tracking-tighter">₹10,000.00</div>
                    <div className="text-[10px] text-emerald-400 font-bold uppercase tracking-widest mt-1">Paid ✓</div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="px-4 py-3 bg-white/5 rounded-2xl border border-white/10 text-center">
                  <span className="block text-[10px] text-white/40 uppercase mb-1">HSN CODE</span>
                  <span className="text-xs text-white font-mono">998311</span>
                </div>
                <div className="px-4 py-3 bg-white/5 rounded-2xl border border-white/10 text-center">
                  <span className="block text-[10px] text-white/40 uppercase mb-1">Status</span>
                  <span className="text-xs text-blue-400 font-bold">Compliant</span>
                </div>
              </div>
            </motion.div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-20 -right-4 bg-white/10 backdrop-blur-md px-5 py-3 rounded-2xl border border-white/20 shadow-xl z-30"
            >
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                <span className="text-white text-xs font-bold">GSTR-1 Generated</span>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-20 -left-12 bg-white/10 backdrop-blur-md px-5 py-3 rounded-2xl border border-white/20 shadow-xl z-30"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center text-purple-400">
                  <CheckCircle2 size={16} />
                </div>
                <span className="text-white text-xs font-bold">E-Way Bill Ready</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-slate-50 relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/10 rounded-full blur-[100px] animate-pulse" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-rose-500/10 rounded-full blur-[100px] animate-pulse" />
          <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-primary/20 rounded-full animate-ping" />
          <div className="absolute bottom-1/4 right-1/3 w-3 h-3 bg-secondary/20 rounded-full animate-bounce" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center bg-white/30 backdrop-blur-md rounded-[3rem] p-16 border border-white/20 shadow-2xl relative z-10"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-medium mb-8 text-slate-900 tracking-tight"
          >
            Simplify Your Billing Today
          </motion.h2>
          <p className="text-slate-600 mb-12 text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed">
            Everything you need to manage invoices, customers, and payments in one place.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link
              href="/download"
              className="btn-primary text-lg px-10 py-5 shadow-xl shadow-primary/20 flex items-center justify-center gap-2 group"
            >
              Start Free Trial
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <button className="btn-secondary text-lg px-10 py-5 bg-white/80 hover:bg-white transition-all flex items-center justify-center gap-2">
              View Demo
            </button>
          </div>
          <p className="mt-8 text-sm text-slate-400 font-medium">No credit card required. Cancel anytime.</p>
        </motion.div>
      </section>

      <FAQ customFaqs={featureFaqs} title="Features FAQ" />
    </div>
  );
}
