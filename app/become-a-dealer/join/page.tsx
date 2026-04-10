'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  CheckCircle2, 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  ShieldCheck,
  Send
} from 'lucide-react';

export default function DealerJoin() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    experience: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const response = await fetch('/api/dealer-join', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit application');
      }

      setSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        location: '',
        experience: ''
      });
    } catch (err) {
      console.error(err);
      alert('There was an issue submitting your application. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="bg-white min-h-screen pt-32 pb-24 px-6 flex items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full text-center p-12 rounded-[3.5rem] bg-slate-50 border border-slate-100"
        >
          <div className="w-20 h-20 bg-emerald-500 rounded-[2rem] flex items-center justify-center text-white mx-auto mb-8 shadow-xl shadow-emerald-500/20">
            <ShieldCheck size={40} />
          </div>
          <h2 className="text-3xl font-bold mb-4">Application Received!</h2>
          <p className="text-slate-500 mb-10 leading-relaxed font-light">
            Thank you for your interest in joining the Billing Corner network. Our dealer relations team will review your application and contact you within 24-48 hours.
          </p>
          <Link 
            href="/become-a-dealer" 
            className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all"
          >
            Back to Dealer Program <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen pt-32 pb-24 px-6 overflow-x-hidden">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-20">
        
        {/* Left Side: Value Props */}
        <div className="w-full lg:w-[45%]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <span className="text-primary font-bold text-xs uppercase tracking-[0.3em] mb-4 block">Official Partner Program</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-8 tracking-tighter leading-tight">
              Join the <br />
              <span className="text-primary italic">Billing Corner</span> <br />
              Dealer Network
            </h1>
            
            <p className="text-slate-600 text-lg mb-12 font-light leading-relaxed">
              Scale your business by providing India's leading AI-powered GST billing solution to local merchants. We provide the platform, you provide the reach.
            </p>

            <div className="space-y-6">
              {[
                "Priority Support Access",
                "Advanced Marketing Collaterals",
                "Training & Certification",
                "Real-time Earning Dashboard"
              ].map((benefit, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-primary shadow-sm">
                    <CheckCircle2 size={18} />
                  </div>
                  <span className="font-bold text-slate-800">{benefit}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Side: Registration Form */}
        <div className="w-full lg:w-[55%] relative">
          <div className="absolute inset-0 bg-primary/5 rounded-[3rem] blur-3xl -z-10" />
          
          <motion.form
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            onSubmit={handleSubmit}
            className="bg-white/80 backdrop-blur-xl p-8 md:p-12 rounded-[3.5rem] border border-slate-200 shadow-2xl relative"
          >
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold mb-2">Registration Form</h2>
              <p className="text-slate-500 text-sm">Fill in your details to start the onboarding process.</p>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-400 mb-2 ml-1">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input 
                      required
                      type="text" 
                      placeholder="John Doe"
                      className="w-full bg-slate-100 border-none rounded-2xl py-4 pl-12 pr-6 text-slate-900 focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-400 mb-2 ml-1">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input 
                      required
                      type="email" 
                      placeholder="john@example.com"
                      className="w-full bg-slate-100 border-none rounded-2xl py-4 pl-12 pr-6 text-slate-900 focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      value={formData.email}
                      onChange={e => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-slate-400 mb-2 ml-1">Phone Number</label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                  <input 
                    required
                    type="tel" 
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full bg-slate-100 border-none rounded-2xl py-4 pl-12 pr-6 text-slate-900 focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    value={formData.phone}
                    onChange={e => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-slate-400 mb-2 ml-1">Location / City</label>
                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                  <input 
                    required
                    type="text" 
                    placeholder="Mumbai, Maharashtra"
                    className="w-full bg-slate-100 border-none rounded-2xl py-4 pl-12 pr-6 text-slate-900 focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    value={formData.location}
                    onChange={e => setFormData({...formData, location: e.target.value})}
                  />
                </div>
              </div>

              <button 
                type="submit"
                className="w-full py-5 bg-primary text-white font-bold rounded-2xl text-lg shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3 mt-8"
              >
                Submit Application
                <Send size={20} />
              </button>

              <div className="flex items-center justify-center gap-2 text-slate-400 text-xs mt-6">
                <ShieldCheck size={14} />
                <span>Your data is protected and encrypted.</span>
              </div>
            </div>
          </motion.form>
        </div>

      </div>
    </div>
  );
}
