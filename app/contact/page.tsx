'use client';

import { Mail, Phone, Clock, Send, MapPin } from 'lucide-react';
import { motion } from 'motion/react';
import FAQ from '@/src/components/FAQ';

const contactFaqs = [
  {
    question: "What is your typical response time?",
    answer: "Our support team typically responds to all inquiries within 2-4 business hours during our standard office hours."
  },
  {
    question: "Do you offer technical support for API integration?",
    answer: "Yes, our technical team is available to assist Pro plan users with API documentation and integration queries."
  },
  {
    question: "Can I schedule a one-on-one demo?",
    answer: "Certainly! Mention 'Demo Request' in the subject line of your message, and one of our experts will reach out to schedule a session with you."
  }
];

export default function Contact() {
  return (
    <div className="pb-24">
      <section className="pt-32 pb-24 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl xl:text-5xl font-medium text-slate-900 mb-8">
            Contact <span className="text-primary">Us</span>
          </h1>
          <p className="text-slate-600 text-base md:text-lg leading-relaxed font-medium">
            We're here to help with any questions about your billing, subscriptions, or account settings. Reach out and our team will get back to you shortly.
          </p>
        </div>
      </section>

      <section className="px-6 mb-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <h2 className="text-2xl font-medium text-slate-900 mb-8">Contact Details</h2>
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm flex items-center gap-6 group hover:border-primary transition-colors">
              <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="font-medium text-slate-900 mb-1">Email Us</h4>
                <div className="space-y-1">
                  <p className="text-slate-500 text-sm">
                    <span className="font-medium text-slate-700">Sales Enquiry:</span> <a href="mailto:sales@billingcorner.com" className="hover:text-primary transition-colors">sales@billingcorner.com</a>
                  </p>
                  <p className="text-slate-500 text-sm">
                    <span className="font-medium text-slate-700">Technical Support:</span> <a href="mailto:support@billingcorner.com" className="hover:text-primary transition-colors">support@billingcorner.com</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm flex items-center gap-6 group hover:border-primary transition-colors">
              <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="font-medium text-slate-900 mb-1">Call Us</h4>
                <div className="space-y-1">
                  <p className="text-slate-500 text-sm">
                    <span className="font-medium text-slate-700">Phone:</span> <a href="tel:+918300256356" className="hover:text-primary transition-colors">+91 8300 256 356</a>
                  </p>
                  <p className="text-slate-500 text-sm">
                    <span className="font-medium text-slate-700">WhatsApp:</span> <a href="https://wa.me/918300256356" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">+91 8300 256 356</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm flex items-center gap-6 group hover:border-primary transition-colors">
              <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                <Clock size={24} />
              </div>
              <div>
                <h4 className="font-medium text-slate-900 mb-1">Business Hours</h4>
                <p className="text-slate-500 text-sm">Mon - Fri, 9 AM - 6 PM</p>
              </div>
            </div>
            {/* <div className="relative rounded-[2.5rem] overflow-hidden h-64 shadow-lg border border-slate-200">
              <img
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1200"
                alt="Map location"
                className="w-full h-full object-cover opacity-60"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white shadow-2xl animate-bounce">
                  <MapPin size={24} />
                </div>
              </div>
            </div> */}
          </div>

          <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-2xl">
            <h2 className="text-2xl font-medium text-slate-900 mb-8">Send us a message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Name</label>
                  <input type="text" placeholder="John Doe" className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Email</label>
                  <input type="email" placeholder="john@example.com" className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Phone Number</label>
                  <input type="tel" placeholder="+91 XXXXX XXXXX" className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Subject</label>
                  <input type="text" placeholder="How can we help?" className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Message</label>
                <textarea rows={5} placeholder="Tell us more about your inquiry..." className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all resize-none"></textarea>
              </div>
              <button type="button" className="w-full btn-primary py-4 flex items-center justify-center gap-2">
                Send Message <Send size={18} />
              </button>
              <p className="text-center text-xs text-slate-400">By submitting this form, you agree to our <a href="#" className="text-primary hover:underline">Privacy Policy</a>.</p>
            </form>
          </div>
        </div>
      </section>

      <FAQ customFaqs={contactFaqs} title="Support FAQ" limit={2} showViewAll={true} />
    </div>
  );
}
