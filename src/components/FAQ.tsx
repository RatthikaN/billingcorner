'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';
import Link from 'next/link';

export interface FaqItem {
    question: string;
    answer: string;
}

const defaultFaqs: FaqItem[] = [
    {
        question: "Is Billing Corner GST compliant?",
        answer: "Yes, Billing Corner is fully GST compliant. It automatically calculates CGST, SGST, and IGST based on HSN/SAC codes and helps you generate GSTR reports in minutes."
    },
    {
        question: "Can I use Billing Corner offline?",
        answer: "While Billing Corner is cloud-based for data security and sync, our POS interface supports offline billing to ensure your retail operations never stop during internet outages."
    },
    {
        question: "Do you offer a free trial?",
        answer: "Yes! We offer a 14-day free trial on our Pro plan. No credit card is required to start, and you can switch to the Free plan at any time."
    },
    {
        question: "How secure is my business data?",
        answer: "Data security is our top priority. We use bank-grade encryption and automated cloud backups to ensure your records are always safe and accessible only by you."
    },
    {
        question: "Can I generate E-Way bills from Billing Corner?",
        answer: "Yes, our Pro plan includes direct E-Way bill generation integration, allowing you to generate and manage E-Way bills directly from your dashboard."
    },
    {
        question: "Does Billing Corner support multi-store inventory sync?",
        answer: "Absolutely! You can manage multiple store locations and synchronize inventory in real-time across all branches."
    },
    {
        question: "What hardware is compatible with the POS?",
        answer: "Billing Corner works with most standard thermal printers, barcode scanners, and cash drawers. Our web-based POS is compatible with Windows, Mac, and Android tablets."
    },
    {
        question: "Can I import my existing product list?",
        answer: "Yes, you can easily bulk-import your products, customers, and opening stock using our provided Excel/CSV templates."
    },
    {
        question: "How do I get technical support?",
        answer: "We offer support via email, WhatsApp, and phone. Pro users also get access to priority technical support and a dedicated account manager."
    },
    {
        question: "Is there a limit on the number of invoices?",
        answer: "Our Free plan has a limit of 50 invoices per month, while our Pro and Enterprise plans offer unlimited invoice generation."
    },
    {
        question: "Can I customize the invoice design?",
        answer: "Yes, you can add your logo, professional headers, terms and conditions, and choose from multiple professional invoice templates."
    },
    {
        question: "Does it support multiple currencies?",
        answer: "Yes, Billing Corner supports multi-currency billing, which is perfect for businesses dealing with international clients."
    },
    {
        question: "Can I track employee commissions?",
        answer: "Our Enterprise plan includes a comprehensive staff management module to track sales performance and calculate commissions automatically."
    },
    {
        question: "Is there a mobile app available?",
        answer: "Yes, we have mobile apps for both iOS and Android, allowing you to track sales and generate reports on the go."
    },
    {
        question: "Can I manage service-based billing?",
        answer: "Certainly! You can create service items with predefined tax rates and generate professional service invoices just as easily as product invoices."
    },
    {
        question: "How do I handle returns and refunds?",
        answer: "Billing Corner has a built-in credit note and return management system to handle customer returns and automatically adjust inventory."
    },
    {
        question: "Is my data backed up automatically?",
        answer: "Yes, we perform hourly encrypted backups of all your data to ensure that you never lose your important business records."
    },
    {
        question: "Can I export reports to Excel?",
        answer: "Yes, all reports including sales, inventory, and tax summaries can be exported to Excel, PDF, or CSV formats."
    },
    {
        question: "Does Billing Corner support barcode printing?",
        answer: "Yes, you can generate and print barcode labels for your products directly from the inventory management section."
    },
    {
        question: "Can I manage customer credit (Khatabook)?",
        answer: "Yes, you can track customer dues, send payment reminders via WhatsApp, and manage and reconcile payments easily."
    }
];

export default function FAQ({ customFaqs, title = "Frequently Asked Questions", limit = 0, showViewAll = false }: { customFaqs?: FaqItem[], title?: string, limit?: number, showViewAll?: boolean }) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    let faqs = customFaqs || defaultFaqs;
    const hasMore = limit > 0 && faqs.length > limit;
    
    if (limit > 0) {
        faqs = faqs.slice(0, limit);
    }

    return (
        <section className="py-24 px-6 bg-white relative z-10 border-t border-slate-50">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
                    >
                        {title}
                    </motion.h2>
                    <p className="text-slate-600">Got questions? We've got answers.</p>
                </div>
                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05 }}
                            className={`border rounded-2xl overflow-hidden transition-all duration-300 ${openIndex === i ? 'border-primary/20 bg-primary/[0.02] shadow-sm' : 'border-slate-100 bg-white hover:border-slate-200'}`}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className="w-full flex items-center justify-between p-6 text-left transition-colors"
                            >
                                <span className={`font-bold transition-colors ${openIndex === i ? 'text-primary' : 'text-slate-900'}`}>
                                    {faq.question}
                                </span>
                                <div className={`p-1 rounded-lg transition-all ${openIndex === i ? 'bg-primary text-white rotate-180' : 'bg-slate-100 text-slate-400 rotate-0'}`}>
                                    {openIndex === i ? <Minus size={16} /> : <Plus size={16} />}
                                </div>
                            </button>
                            <AnimatePresence>
                                {openIndex === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                                    >
                                        <div className="p-6 pt-0 text-slate-600 leading-relaxed text-sm md:text-base">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
                
                {(showViewAll || hasMore) && (
                    <div className="mt-12 text-center">
                        <Link 
                            href="/faq" 
                            className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all"
                        >
                            View All FAQs <span>→</span>
                        </Link>
                    </div>
                )}
            </div>
        </section>
    );
}
