import React from 'react';

export default function RefundPage() {
  return (
    <div className="max-w-4xl mx-auto py-24 px-6 mt-24 font-sans">
      <h1 className="text-4xl font-bold text-slate-900 mb-8 font-display">Refund / Cancellation Policy</h1>
      <div className="prose max-w-none space-y-6 text-slate-700 leading-relaxed">
        <p className="text-slate-500 font-medium italic">Effective Date: March 31, 2026</p>
        
        <section className="mt-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-4 border-b pb-2">1. Subscription Cancellations</h2>
          <p>You may cancel your Billing Corner subscription at any time through your account settings or by contacting our support team. Your service will remain active until the end of the current billing cycle.</p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-4 border-b pb-2">2. Refund Eligibility</h2>
          <p>Billing Corner offers a 7-day money-back guarantee for new annual subscription plans. If you are not satisfied with our service within the first 7 days, you may request a full refund.</p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-4 border-b pb-2">3. Non-Refundable Items</h2>
          <p>Monthly subscriptions and one-time service fees (e.g., custom configuration or data migration services) are non-refundable once the service period has started.</p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-4 border-b pb-2">4. Process for Refunds</h2>
          <p>To request a refund, please email support@billingcorner.com with your account details and reason for the request. Approved refunds will be processed within 10-15 business days to the original payment method.</p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-4 border-b pb-2">5. Plan Downgrades</h2>
          <p>Downgrading your plan will take effect at the start of the next billing period. We do not provide prorated refunds for downgrades made mid-cycle.</p>
        </section>

        <footer className="pt-12 border-t border-slate-200 text-sm text-slate-500 mt-12">
          <p>For more information, please contact us at support@billingcorner.com.</p>
        </footer>
      </div>
    </div>
  );
}
