import React from 'react';

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto py-24 px-6 mt-24 font-sans">
      <h1 className="text-4xl font-bold text-slate-900 mb-8 font-display">Terms & Conditions</h1>
      <div className="prose max-w-none space-y-6 text-slate-700 leading-relaxed">
        <p className="text-slate-500 font-medium italic">Effective Date: March 31, 2026</p>
        
        <section className="mt-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-4 border-b pb-2">1. Acceptance of Terms</h2>
          <p>By accessing or using the Billing Corner platform, website, or services, you agree to comply with and be bound by these Terms & Conditions. If you do not agree to these terms, please do not use our services.</p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-4 border-b pb-2">2. Description of Service</h2>
          <p>Billing Corner, a brand of Codingrim Technology Solutions Private Limited, provides an AI-powered GST billing and inventory management software solution for businesses in India. Services include invoice generation, tax calculation, stock tracking, and financial reporting.</p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-4 border-b pb-2">3. User Accounts</h2>
          <p>Users must provide accurate and complete information when creating an account. You are responsible for maintaining the confidentiality of your login credentials and for all activities that occur under your account.</p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-4 border-b pb-2">4. Usage Restrictions</h2>
          <p>You agree not to use Billing Corner for any illegal purposes or to interfere with the proper functioning of the platform. Unauthorized access to our systems or data is strictly prohibited.</p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-4 border-b pb-2">5. Intellectual Property</h2>
          <p>All content, software, and technology on the Billing Corner platform are the property of Codingrim Technology Solutions Private Limited and are protected by applicable copyright and intellectual property laws.</p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-4 border-b pb-2">6. Limitation of Liability</h2>
          <p>Billing Corner is provided "as is" without warranties of any kind. We are not liable for any direct, indirect, or consequential damages resulting from the use or inability to use our services.</p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-4 border-b pb-2">7. Governing Law</h2>
          <p>These terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in New Delhi.</p>
        </section>

        <footer className="pt-12 border-t border-slate-200 text-sm text-slate-500 mt-12">
          <p>If you have any questions regarding these Terms, please contact us at support@billingcorner.com.</p>
        </footer>
      </div>
    </div>
  );
}
