'use client';

import { 
  Download, 
  Monitor, 
  Smartphone, 
  Globe, 
  Settings, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  Zap,
  Layout,
  FileText,
  ChevronRight
} from 'lucide-react';
import { motion } from 'motion/react';
import Link from 'next/link';
import FAQ from '@/src/components/FAQ';

const steps = [
  {
    title: "Windows Setup",
    icon: Monitor,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
    description: "Install Billing Corner on your Windows PC for the best desktop experience.",
    items: [
      "Download the .exe installer from our download page.",
      "Run the installer as administrator.",
      "If Windows SmartScreen appears, click 'More Info' and then 'Run Anyway'.",
      "Launch the app and sign in with your account."
    ]
  },
  {
    title: "Mobile Setup",
    icon: Smartphone,
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
    description: "Manage your business on the go with our mobile applications.",
    items: [
      "Search for 'Billing Corner' on Play Store or App Store.",
      "Sign in with the same credentials used for the web/desktop version.",
      "Grant necessary permissions (Camera for scanning, Storage for PDF exports)."
    ]
  },
  {
    title: "Initial Configuration",
    icon: Settings,
    color: "text-purple-500",
    bg: "bg-purple-500/10",
    description: "Configure your business settings to start generating GST-ready invoices.",
    items: [
      "Go to 'Settings' and enter your Business Name and Address.",
      "Add your GSTIN to enable automatic tax calculations.",
      "Upload your company logo for professional-looking invoices.",
      "Set up your default invoice prefix (e.g., INV-)."
    ]
  }
];

export default function SetupGuide() {
  return (
    <div className="pb-24">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 text-center relative overflow-hidden bg-slate-50">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -mr-64 -mt-64 pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-8"
          >
            <Zap size={14} className="animate-pulse" />
            Quick Start Guide
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-slate-900 mb-8 tracking-tight"
          >
            Get Started with <br />
            <span className="text-primary italic">Billing Corner</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 text-xl max-w-2xl mx-auto leading-relaxed"
          >
            Follow our step-by-step guide to set up your business, install our apps, and generate your first invoice in minutes.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-6 py-20 relative z-10">
        <div className="max-w-5xl mx-auto space-y-32">
          {steps.map((step, idx) => (
            <div key={idx} className={`flex flex-col lg:flex-row items-start gap-16 ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <motion.div 
                initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="w-full lg:w-1/2"
              >
                <div className={`w-16 h-16 ${step.bg} ${step.color} rounded-2xl flex items-center justify-center mb-8 shadow-lg`}>
                  <step.icon size={32} />
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">{step.title}</h2>
                <p className="text-slate-600 text-lg mb-10 leading-relaxed font-light">
                  {step.description}
                </p>
                <div className="space-y-6">
                  {step.items.map((item, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-start gap-4 group"
                    >
                      <div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-xs font-bold shrink-0 shadow-sm group-hover:border-primary group-hover:text-primary transition-colors">
                        {i + 1}
                      </div>
                      <p className="text-slate-700 leading-relaxed">{item}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="w-full lg:w-1/2 relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent rounded-[3rem] blur-2xl group-hover:opacity-100 transition-opacity opacity-50" />
                <div className="relative bg-white rounded-[3rem] border border-slate-100 p-8 shadow-2xl">
                  {idx === 0 && (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100">
                        <div className="flex items-center gap-3">
                          <Download size={20} className="text-primary" />
                          <span className="font-bold text-sm">billing_corner_setup.exe</span>
                        </div>
                        <span className="text-xs text-slate-400">42.5 MB</span>
                      </div>
                      <div className="p-6 bg-slate-900 rounded-2xl text-white shadow-xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                          <Monitor size={80} />
                        </div>
                        <h4 className="font-bold mb-2">Ready to Install</h4>
                        <div className="h-2 bg-white/10 rounded-full w-full mb-4 overflow-hidden">
                          <motion.div 
                            animate={{ width: ['0%', '100%'] }}
                            transition={{ duration: 3, repeat: Infinity }}
                            className="h-full bg-primary"
                          />
                        </div>
                        <p className="text-xs text-white/60">Optimization in progress...</p>
                      </div>
                    </div>
                  )}
                  {idx === 1 && (
                    <div className="flex justify-center gap-8 py-10">
                      <div className="w-32 h-32 bg-slate-50 rounded-3xl flex flex-col items-center justify-center gap-2 border border-slate-100 shadow-sm">
                        <Smartphone size={32} className="text-slate-400" />
                        <span className="text-[10px] font-bold text-slate-500">Android</span>
                      </div>
                      <div className="w-32 h-32 bg-primary/10 rounded-3xl flex flex-col items-center justify-center gap-2 border border-primary/20 shadow-md transform scale-110">
                        <Smartphone size={32} className="text-primary" />
                        <span className="text-[10px] font-bold text-primary">iOS App</span>
                      </div>
                    </div>
                  )}
                  {idx === 2 && (
                    <div className="space-y-4">
                      <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-100 flex items-center gap-4">
                        <ShieldCheck size={24} className="text-emerald-500" />
                        <div>
                          <p className="text-sm font-bold text-emerald-900">GST Registration Verified</p>
                          <p className="text-xs text-emerald-600">Company ID: BC-2026-X1</p>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="h-24 bg-slate-50 rounded-2xl border border-slate-100 p-4">
                          <div className="w-8 h-2 bg-slate-200 rounded-full mb-2" />
                          <div className="w-12 h-2 bg-slate-200 rounded-full" />
                        </div>
                        <div className="h-24 bg-primary/5 rounded-2xl border border-primary/10 p-4">
                          <div className="w-8 h-2 bg-primary/30 rounded-full mb-2" />
                          <div className="w-12 h-2 bg-primary/30 rounded-full" />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </section>

      {/* Web Access Helper */}
      <section className="px-6 py-20 bg-slate-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[100px] -mr-48 -mt-48" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <Globe size={48} className="text-primary mx-auto mb-8 animate-[spin_10s_linear_infinite]" />
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 tracking-tight">Need a Faster Option?</h2>
          <p className="text-white/60 text-xl mb-12 font-light max-w-2xl mx-auto">
            If you're using a public computer or just need to send a quick invoice, use our cross-platform Web App.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a 
              href="https://app.billingcorner.com/login"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-5 bg-primary text-white font-bold rounded-2xl hover:bg-indigo-600 transition-all flex items-center justify-center gap-3 shadow-xl shadow-primary/20"
            >
              Access Web App Now
              <ArrowRight size={20} />
            </a>
            <Link 
              href="/download"
              className="px-10 py-5 bg-white/5 border border-white/10 text-white font-bold rounded-2xl hover:bg-white/10 transition-all"
            >
              Back to Downloads
            </Link>
          </div>
        </div>
      </section>

      <FAQ 
        title="Setup FAQ"
        customFaqs={[
          {
            question: "Is there a video tutorial available?",
            answer: "Yes, we have a comprehensive Getting Started playlist on our YouTube channel that walks you through every feature."
          },
          {
            question: "I'm seeing a security warning on Windows. What should I do?",
            answer: "This is common with new applications. Click 'More Info' in the Windows SmartScreen dialog, and then click 'Run Anyway' to proceed with the installation."
          },
          {
            question: "How do I import my existing customer list?",
            answer: "You can import customers via an Excel sheet (.xlsx or .csv) from the Customers section in 'Settings'."
          }
        ]}
      />
    </div>
  );
}
