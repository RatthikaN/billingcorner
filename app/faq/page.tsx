'use client';

import FAQ from '@/src/components/FAQ';

export default function FAQPage() {
    return (
        <div className="pb-24">
            <section className="pt-32 pb-16 px-6 text-center">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-semibold text-slate-900 mb-8">
                        Frequently Asked <span className="text-primary">Questions</span>
                    </h1>
                    <p className="text-slate-600 text-xl">
                        Everything you need to know about Billing Corner. Can't find the answer you're looking for? Reach out to our team.
                    </p>
                </div>
            </section>

            <FAQ />
{/*             
            <section className="px-6 py-12 text-center bg-slate-50">
                <div className="max-w-3xl mx-auto">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">Still have questions?</h3>
                    <p className="text-slate-600 mb-8">We're here to help you get the most out of Billing Corner.</p>
                    <a href="/contact" className="btn-primary inline-flex items-center gap-2">
                        Contact Support
                    </a>
                </div>
            </section> */}
        </div>
    );
}
