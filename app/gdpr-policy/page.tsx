import React from 'react';

export default function GdprPage() {
  return (
    <div className="max-w-4xl mx-auto py-24 px-6 mt-24 font-sans">
      <h1 className="text-4xl font-bold text-slate-900 mb-8 font-display">GDPR Policy</h1>
      <div className="prose max-w-none space-y-6 text-slate-700 leading-relaxed">
        <p className="text-slate-500 font-medium italic">Effective Date: March 31, 2026</p>
        
        <section className="mt-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-4 border-b pb-2">1. Introduction</h2>
          <p>Billing Corner, a brand of Codingrim Technology Solutions Private Limited, is committed to ensuring the privacy and safety of our users' data. This policy outlines our commitment to the General Data Protection Regulation (GDPR) for our users located in the European Economic Area (EEA).</p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-4 border-b pb-2">2. Data Controller</h2>
          <p>Billing Corner India, operated under Codingrim Technology Solutions Private Limited, acts as the data controller for the personal information collected through our platform. We determine the purpose and means of processing your data.</p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-4 border-b pb-2">3. Lawful Basis for Processing</h2>
          <p>We process personal data based on the necessity of performing our contract with you, our legitimate business interests, and your explicit consent where applicable.</p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-4 border-b pb-2">4. Data Subjects Rights</h2>
          <ul className="list-disc ml-6 mt-2 space-y-2">
            <li>Right to access your data</li>
            <li>Right to rectification (correction)</li>
            <li>Right to erasure ("Right to be forgotten")</li>
            <li>Right to restrict processing</li>
            <li>Right to data portability</li>
            <li>Right to object to processing</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-4 border-b pb-2">5. International Data Transfers</h2>
          <p>While our primary servers are in India, we ensure that any cross-border data transfers are protected by standard contractual clauses or other legal safeguards approved by the EU.</p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-4 border-b pb-2">6. Data Breach Notification</h2>
          <p>In the event of a significant data breach, we will notify the relevant supervisory authorities and affected users within 72 hours of becoming aware of the breach.</p>
        </section>

        <footer className="pt-12 border-t border-slate-200 text-sm text-slate-500 mt-12">
          <p>For GDPR inquiries, please contact our Data Protection Officer at dpo@billingcorner.com.</p>
        </footer>
      </div>
    </div>
  );
}
