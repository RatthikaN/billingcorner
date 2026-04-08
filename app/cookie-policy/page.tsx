import React from 'react';

export default function CookiePage() {
  return (
    <div className="max-w-4xl mx-auto py-24 px-6 mt-24 font-sans">
      <h1 className="text-4xl font-bold text-slate-900 mb-8 font-display">Cookie Policy</h1>
      <div className="prose max-w-none space-y-6 text-slate-700 leading-relaxed">
        <p className="text-slate-500 font-medium italic">Last Updated: March 31, 2026</p>
        
        <section className="mt-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-4 border-b pb-2">1. What are Cookies?</h2>
          <p>Cookies are small text files stored on your device when you visit a website. They help the website remember your preferences and improve your experience.</p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-4 border-b pb-2">2. How We Use Cookies</h2>
          <p>Billing Corner uses cookies for:</p>
          <ul className="list-disc ml-6 mt-2 space-y-2">
            <li><strong>Essential Cookies:</strong> Required for the platform to function correctly and for secure login.</li>
            <li><strong>Analytical Cookies:</strong> To understand how users interact with our site and improve performance.</li>
            <li><strong>Functional Cookies:</strong> To remember your settings, such as language or currency preferences.</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-4 border-b pb-2">3. Third-Party Cookies</h2>
          <p>We may use third-party services like Google Analytics that set their own cookies to provide anonymous traffic insights.</p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-4 border-b pb-2">4. Managing Cookies</h2>
          <p>You can control or delete cookies through your browser settings. However, disabling essential cookies may affect the functionality of our billing platform.</p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-4 border-b pb-2">5. Consent</h2>
          <p>By continuing to use Billing Corner, you consent to our use of cookies as described in this policy.</p>
        </section>

        <footer className="pt-12 border-t border-slate-200 text-sm text-slate-500 mt-12">
          <p>If you have questions about our cookie usage, please contact us at support@billingcorner.com.</p>
        </footer>
      </div>
    </div>
  );
}
