import React from 'react';

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto py-24 px-6 mt-24 font-sans">
      <h1 className="text-4xl font-bold text-slate-900 mb-8 font-display">Privacy Policy</h1>
      <div className="prose max-w-none space-y-6 text-slate-700 leading-relaxed">
        <p className="text-slate-500 font-medium italic">Last Updated: March 31, 2026</p>
        
        <section className="mt-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-4 border-b pb-2">1. Data Collection</h2>
          <p>We collect information that you provide directly to us, such as your name, business details, email address, and financial data required for GST billing and compliance.</p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-4 border-b pb-2">2. Use of Information</h2>
          <p>Your data is used to provide and improve our services, process transactions, communicate with you, and ensure compliance with tax regulations in India.</p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-4 border-b pb-2">3. Data Sharing</h2>
          <p>We do not sell your personal or business data to third parties. We may share information with government portals (like GSTR filing nodes) per your explicit request or as required by law.</p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-4 border-b pb-2">4. Security</h2>
          <p>Billing Corner employs industry-standard security measures, including encryption and secure servers, to protect your data from unauthorized access or disclosure.</p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-4 border-b pb-2">5. Your Rights</h2>
          <p>You have the right to access, correct, or delete your personal information. You can manage your data settings directly within your Billing Corner dashboard.</p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-4 border-b pb-2">6. Changes to this Policy</h2>
          <p>We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting the new policy on our website.</p>
        </section>

        <footer className="pt-12 border-t border-slate-200 text-sm text-slate-500 mt-12">
          <p>For privacy-related inquiries, please reach out to us at privacy@billingcorner.com.</p>
        </footer>
      </div>
    </div>
  );
}
