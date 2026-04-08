'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FileText, Receipt, Truck, Download, ArrowRight, FileJson } from 'lucide-react';
import Link from 'next/link';

const features = [
  {
    id: 'gstr',
    title: 'GSTR Filing',
    icon: FileText,
    description: 'Simplified tax filing for modern businesses. Effortlessly generate GSTR-1, 2, and 3B reports in standard JSON formats to ensure 100% accuracy and ease for your CA from any device.',
  },
  {
    id: 'einvoicing',
    title: 'E-Invoicing',
    icon: Receipt,
    description: 'Instant IRP connectivity for every transaction. Generate government-validated E-Invoices with IRN and QR codes automatically fetched and ready on your device in seconds.',
  },
  {
    id: 'eway',
    title: 'E-way Billing',
    icon: Truck,
    description: 'Direct government portal integration made simple. Create and manage E-way bills seamlessly from your invoices without ever leaving the system, ensuring smooth logistics from any device.',
  },
  {
    id: 'tally',
    title: 'Data Export to Tally',
    icon: Download,
    description: 'Flawless accounting sync for your business data. Export all sales, purchases, and expense records in Tally-compatible formats to keep your accounts perfectly balanced from any device.',
  }
];

export default function ComplianceFeatures() {
  const [activeTab, setActiveTab] = useState(features[0].id);

  const activeFeature = features.find(f => f.id === activeTab) || features[0];

  return (
    <section className="py-24 px-6 bg-white relative z-10 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 leading-[1.3] mb-12 max-w-3xl tracking-tight">
          Experience Effortless GST Compliance with <span className="text-slate-800">Billing Corner</span> Invoicing Software
        </h2>

        {/* Content layout */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-12">
          
          {/* Left panel — Tabs */}
          <div className="w-full md:w-[35%] flex flex-col gap-4">
            {features.map((feature) => {
              const isActive = activeTab === feature.id;
              const Icon = feature.icon;
              return (
                <div
                  key={feature.id}
                  onClick={() => setActiveTab(feature.id)}
                  className={`flex flex-col px-6 py-5 rounded-2xl transition-all duration-300 text-left cursor-pointer border ${
                    isActive 
                      ? 'bg-white text-[#5c4ce3] shadow-lg shadow-[#5c4ce3]/5 border-[#E9EAF5]' 
                      : 'bg-transparent text-slate-500 hover:bg-slate-50 border-transparent'
                  }`}
                >
                  <div className="flex items-center gap-5">
                    <div className={`flex items-center justify-center p-2.5 rounded-xl transition-colors ${
                      isActive ? 'bg-[#F3F4F9] text-[#5c4ce3]' : 'bg-[#F3F4F9]/50 text-slate-400'
                    }`}>
                      <Icon size={22} strokeWidth={isActive ? 2 : 1.5} />
                    </div>
                    <span className={`text-lg transition-colors ${isActive ? 'font-bold' : 'font-medium'}`}>
                      {feature.title}
                    </span>
                  </div>
                  
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="text-slate-500 text-sm leading-relaxed mt-4 pl-1">
                          {feature.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Right panel — Card */}
          <div className="w-full md:w-[65%]">
            <div className="bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-[0_20px_50px_-12px_rgba(0,0,0,0.05)] h-full flex flex-col">
              
              {/* Image Area — CSS Mockup matching reference */}
              <div className="w-full h-[340px] bg-[#F4F5F7] p-8 md:p-12 relative overflow-hidden flex items-center justify-center">
                
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, scale: 0.95, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.98, y: -5 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="absolute inset-0 flex items-center justify-center pt-10"
                  >
                    {activeTab === 'gstr' ? (
                      <div className="w-full h-full relative flex items-center justify-center pb-10">
                        <img 
                          src="/images/GSTR-2.png" 
                          alt="GSTR Filing"
                          className="w-[90%] md:w-[85%] h-auto max-h-full object-contain rounded-2xl shadow-xl border border-slate-200"
                        />
                      </div>
                    ) : activeTab === 'einvoicing' ? (
                      <div className="w-full h-full relative flex items-center justify-center pb-10">
                        <img 
                          src="/images/E-Invoicing-Mockup.png" 
                          alt="E-Invoicing"
                          className="w-[90%] md:w-[85%] h-auto max-h-full object-contain rounded-2xl shadow-xl border border-slate-200"
                        />
                      </div>
                    ) : ( // eway and tally CSS Mockups mimicking the image precisely
                      <>
                        <div className="w-full max-w-[500px] bg-white rounded-[1.25rem] shadow-xl min-h-[290px] border border-slate-100 p-6 relative translate-y-6">
                          
                          {/* Title Area */}
                          <div className="flex items-center gap-3 mb-6">
                            <div className="w-4 h-1 bg-slate-300 rounded-full" />
                            <h3 className="font-bold text-slate-800 text-xl tracking-tight">
                              {activeTab === 'eway' ? 'E-Way Bills Generated' : 'Tally Data Sync'}
                            </h3>
                          </div>
                          
                          {/* Fake grey skeleton bars */}
                          <div className="w-56 h-2.5 bg-[#B8BCC6] bg-opacity-70 rounded-full mb-3 shadow-[inset_0_1px_2px_rgba(0,0,0,0.05)]" />
                          <div className="w-40 h-2.5 bg-[#E2E6ED] rounded-full mb-8 shadow-[inset_0_1px_2px_rgba(0,0,0,0.05)]" />
                          
                          {/* Fake Data Table */}
                          <div className="border border-slate-100 rounded-xl overflow-hidden shadow-sm">
                            <div className="bg-[#f0f2f5] flex px-4 border-b border-slate-200 py-3">
                              {activeTab === 'eway' ? (
                                <>
                                  <div className="w-1/4 text-[10px] font-bold text-slate-500 tracking-wide text-left">E-WAY NO</div>
                                  <div className="w-1/4 text-[10px] font-bold text-slate-500 tracking-wide text-center">VEHICLE</div>
                                  <div className="w-1/4 text-[10px] font-bold text-slate-500 tracking-wide text-center">CONSIGNEE</div>
                                  <div className="w-1/4 text-[10px] font-bold text-slate-500 tracking-wide text-right">STATUS</div>
                                </>
                              ) : (
                                <>
                                  <div className="w-1/4 text-[10px] font-bold text-slate-500 tracking-wide text-left">LEDGER</div>
                                  <div className="w-1/4 text-[10px] font-bold text-slate-500 tracking-wide text-center">VOUCHER</div>
                                  <div className="w-1/4 text-[10px] font-bold text-slate-500 tracking-wide text-center">DATE</div>
                                  <div className="w-1/4 text-[10px] font-bold text-slate-500 tracking-wide text-right">TOTAL</div>
                                </>
                              )}
                            </div>
                            
                            {[1, 2, 3].map((row) => (
                              <div key={row} className="flex px-4 py-3.5 border-b border-slate-100 items-center hover:bg-slate-50 transition-colors">
                                {activeTab === 'eway' ? (
                                  <>
                                    <div className="w-1/4 text-[11px] font-medium text-slate-700 text-left">EWB{row}0248...</div>
                                    <div className="w-1/4 text-[11px] font-medium text-slate-600 text-center">TN{row}4 AB{row}12</div>
                                    <div className="w-1/4 text-[11px] font-medium text-slate-600 text-center">XYZ Logistics {row}</div>
                                    <div className="w-1/4 text-[11px] font-bold text-emerald-600 text-right">Generated</div>
                                  </>
                                ) : (
                                  <>
                                    <div className="w-1/4 text-[11px] font-medium text-slate-700 text-left">Sales A/C {row}</div>
                                    <div className="w-1/4 text-[11px] font-medium text-slate-600 text-center">Receipt</div>
                                    <div className="w-1/4 text-[11px] font-medium text-slate-600 text-center">0{row}/07/2026</div>
                                    <div className="w-1/4 text-[11px] font-bold text-slate-800 text-right">₹{row * 2400}.00</div>
                                  </>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        {/* Floating elements mimicking the image exactly */}
                        <div className="absolute top-16 left-1/4 md:left-[22%] flex flex-col items-center">
                           <div className="bg-white px-3.5 py-2 rounded-lg shadow-md border border-slate-100 text-[11px] font-bold text-[#4B61C5] mb-5 tracking-wide">
                             {activeTab === 'eway' ? 'Generate EWB' : 'Sync Data'}
                           </div>
                           
                           {/* Dashed curved line (CSS approximation of the image's line) */}
                           <div className="absolute top-8 left-1/2 w-8 h-12 border-l-2 border-b-2 border-dashed border-[#B8BCC6] rounded-bl-3xl -z-10 opacity-70" />

                           {/* Huge Floating Icon matching the JSON circle style */}
                           <div className="mt-7 flex items-center justify-center relative translate-x-12 translate-y-2">
                             {/* Outer glowing ring */}
                             <div className="absolute w-[130px] h-[130px] rounded-full border-[10px] border-[#F2EFF7] bg-white shadow-[0_15px_30px_rgb(0,0,0,0.12)] z-20 flex items-center justify-center">
                                <div className="flex flex-col items-center text-[#4B61C5]">
                                  <activeFeature.icon size={50} strokeWidth={1.5} className="mb-0.5" />
                                  <span className="font-extrabold text-[13px] leading-tight tracking-[0.1em] mt-1 rounded bg-[#4B61C5] text-white px-2 py-0.5 shadow-sm">
                                    {activeTab === 'eway' ? 'GOVT' : 'TALLY'}
                                  </span>
                                </div>
                             </div>
                           </div>
                        </div>
                      </>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Text Area */}
              <div className="p-8 md:p-10 bg-white flex-1 flex flex-col items-start">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={activeTab}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.3 }}
                    className="text-slate-600 leading-relaxed text-[15px] mb-8 font-medium"
                  >
                    {activeFeature.description}
                  </motion.p>
                </AnimatePresence>
                
                <Link
                  href="/download"
                  className="inline-flex items-center gap-2 bg-[#5c4ce3] hover:bg-[#4a3bcc] text-white font-bold px-7 py-3.5 rounded-xl transition-all shadow-md text-sm mt-auto"
                >
                  Get Started Now <ArrowRight size={16} />
                </Link>
              </div>

            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
