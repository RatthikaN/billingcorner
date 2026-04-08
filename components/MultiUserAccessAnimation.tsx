'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'motion/react';
import { ShieldCheck, Lock, Users, User, UserCircle } from 'lucide-react';

const tabs = [
  {
    id: 0,
    title: "1. Admin Control",
    desc: "Shop owners get total visibility and control. Create the primary account to oversee all operations perfectly.",
    highlight: "admin"
  },
  {
    id: 1,
    title: "2. Staff Delegation",
    desc: "Create secure employee accounts. Cashiers and staff can log in to handle daily tasks smoothly with dedicated permissions.",
    highlight: "staff"
  },
  {
    id: 2,
    title: "3. Entire Network",
    desc: "Empower your whole team. Accountants, sales reps, and managers can access the system sequentially from anywhere forming a robust network.",
    highlight: "network"
  },
  {
    id: 3,
    title: "4. Role-based Security",
    desc: "Keep your business safe. Assign specific permissions to control exactly what each user can view and manage securely.",
    highlight: "security"
  }
];

export default function MultiUserAccessAnimation() {
  const [activeTab, setActiveTab] = useState(0);
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"]
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // Map 0-1 range to 0-3 tab indices
    if (latest < 0.25) setActiveTab(0);
    else if (latest < 0.5) setActiveTab(1);
    else if (latest < 0.75) setActiveTab(2);
    else setActiveTab(3);
  });

  return (
    <section ref={sectionRef} className="relative w-full py-32 bg-slate-50 overflow-hidden border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        
        {/* Left Text Content - Tabs */}
        <div className="relative z-30 flex flex-col justify-center lg:sticky lg:top-32">
           <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-primary font-black tracking-[0.3em] uppercase text-xs mb-4 block"
           >
              Secure & Scalable
           </motion.span>
           <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-slate-900 mb-10 leading-[1.1] tracking-tighter">
              Multi user access <br className="hidden md:block" />
              <span className="text-primary italic">from any devices</span>
           </h2>

           <div className="flex flex-col gap-4">
             {tabs.map((tab, idx) => {
               const isActive = activeTab === idx;
               return (
                 <div 
                   key={tab.id}
                   onClick={() => setActiveTab(idx)}
                   className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 border ${
                     isActive 
                       ? 'bg-white border-primary/20 shadow-lg shadow-primary/5' 
                       : 'bg-transparent border-transparent hover:bg-slate-100 hover:border-slate-200'
                   }`}
                 >
                   <h3 className={`text-xl font-bold mb-2 transition-colors ${isActive ? 'text-primary' : 'text-slate-700'}`}>
                     {tab.title}
                   </h3>
                   <AnimatePresence>
                     {isActive && (
                       <motion.div
                         initial={{ height: 0, opacity: 0 }}
                         animate={{ height: 'auto', opacity: 1 }}
                         exit={{ height: 0, opacity: 0 }}
                         transition={{ duration: 0.3 }}
                         className="overflow-hidden"
                       >
                         <p className="text-slate-600 text-base md:text-lg leading-relaxed font-light pt-2">
                           {tab.desc}
                         </p>
                       </motion.div>
                     )}
                   </AnimatePresence>
                 </div>
               );
             })}
           </div>
        </div>

        {/* Right Visual Content */}
        <div className="relative min-h-[450px] sm:h-[500px] lg:h-[600px] w-full flex items-center justify-center mt-10 lg:mt-0">
          
          <div className="relative w-full max-w-2xl h-full flex items-center justify-center">
             
             {/* Multi-User Access Main Image */}
             <div className="absolute inset-0 z-10 flex items-center justify-center">
               <img 
                 src="/images/multi-user-access-animation.png" 
                 alt="Multi-User Access Interface" 
                 className="w-full max-w-lg lg:max-w-xl h-auto max-h-[85%] object-contain drop-shadow-2xl filter" 
               />
             </div>

             {/* Admin Badge */}
             <motion.div 
               className={`absolute z-20 top-[20%] left-0 sm:-left-4 flex items-center transition-all duration-500`}
               animate={{ opacity: activeTab === 0 ? 1 : 0.4, scale: activeTab === 0 ? 1.05 : 0.9 }}
             >
               <div className={`bg-white px-5 py-4 rounded-xl shadow-[0_15px_40px_rgba(0,0,0,0.1)] border flex flex-col items-center gap-2 relative z-10 transition-colors ${activeTab === 0 ? 'border-primary shadow-[0_15px_40px_rgba(99,102,241,0.2)]' : 'border-slate-100'}`}>
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${activeTab === 0 ? 'bg-primary/20 text-primary' : 'bg-primary/10 text-primary'}`}>
                     <User size={24} />
                  </div>
                  <span className="text-xs font-bold text-slate-800">Admin</span>
               </div>
               <div className="w-10 border-t-[2px] border-dashed border-slate-400 h-0 ml-1 opacity-50" />
             </motion.div>

             {/* Staff Badge */}
             <motion.div 
               className={`absolute z-20 top-[40%] left-[-5%] sm:-left-8 flex items-center transition-all duration-500 scale-[0.8] sm:scale-100`}
               animate={{ opacity: activeTab === 1 ? 1 : 0.4, scale: activeTab === 1 ? 1.05 : 0.9 }}
             >
               <div className={`bg-white px-5 py-4 rounded-xl shadow-[0_15px_40px_rgba(0,0,0,0.1)] border flex flex-col items-center gap-2 relative z-10 transition-colors ${activeTab === 1 ? 'border-indigo-400 shadow-[0_15px_40px_rgba(99,102,241,0.2)]' : 'border-slate-100'}`}>
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${activeTab === 1 ? 'bg-indigo-500/20 text-indigo-600' : 'bg-indigo-500/10 text-indigo-600'}`}>
                     <UserCircle size={24} />
                  </div>
                  <span className="text-xs font-bold text-slate-800">Staff</span>
               </div>
               <div className="w-12 border-t-[2px] border-dashed border-slate-400 h-0 ml-1 opacity-50" />
             </motion.div>

             {/* Network / Manager */}
             <motion.div 
               className={`absolute z-20 top-[12%] right-[2%] flex flex-col items-center transition-all duration-500`}
               animate={{ opacity: activeTab === 2 ? 1 : 0.4, scale: activeTab === 2 ? 1.05 : 0.9 }}
             >
               <div className={`bg-white px-4 py-3 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] border flex flex-col items-center gap-2 transition-colors relative z-10 ${activeTab === 2 ? 'border-sky-400 shadow-sky-500/20' : 'border-slate-100'}`}>
                  <div className="w-10 h-10 bg-sky-500/10 rounded-full flex items-center justify-center text-sky-600">
                     <Users size={20} />
                  </div>
                  <span className="text-[10px] font-bold text-slate-800">Manager</span>
               </div>
               <div className="-mt-1 h-12 border-l-[2px] border-dashed border-slate-400 opacity-50 relative z-0" />
             </motion.div>

             {/* Network / Sales Rep */}
             <motion.div 
               className={`absolute z-20 bottom-[12%] left-[2%] flex flex-col-reverse items-center transition-all duration-500`}
               animate={{ opacity: activeTab === 2 ? 1 : 0.4, scale: activeTab === 2 ? 1.05 : 0.9 }}
             >
               <div className={`bg-white px-4 py-3 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] border flex flex-col items-center gap-2 transition-colors relative z-10 ${activeTab === 2 ? 'border-emerald-400 shadow-emerald-500/20' : 'border-slate-100'}`}>
                  <div className="w-10 h-10 bg-emerald-500/10 rounded-full flex items-center justify-center text-emerald-600">
                     <User size={20} />
                  </div>
                  <span className="text-[10px] font-bold text-slate-800">Sales rep</span>
               </div>
               <div className="-mb-1 h-12 border-l-[2px] border-dashed border-slate-400 opacity-50 relative z-0" />
             </motion.div>

             {/* Network / Accountant */}
             <motion.div 
               className={`absolute z-20 top-[45%] right-0 sm:-right-4 flex flex-row-reverse items-center transition-all duration-500 scale-[0.8] sm:scale-100`}
               animate={{ opacity: activeTab === 2 ? 1 : 0.4, scale: activeTab === 2 ? 1.05 : 0.9 }}
             >
               <div className={`bg-white px-4 py-3 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] border flex flex-col items-center gap-2 relative z-10 transition-colors ${activeTab === 2 ? 'border-purple-400 shadow-purple-500/20' : 'border-slate-100'}`}>
                  <div className="w-10 h-10 bg-purple-500/10 rounded-full flex items-center justify-center text-purple-600">
                     <UserCircle size={20} />
                  </div>
                  <span className="text-[10px] font-bold text-slate-800">Accountant</span>
               </div>
               <div className="-mr-1 w-12 border-t-[2px] border-dashed border-slate-400 opacity-50 relative z-0" />
             </motion.div>

             {/* Security Badge 1 */}
             <motion.div 
               className={`absolute z-30 bottom-[20%] right-[5%] flex items-center justify-center transition-all duration-500`}
               animate={{ opacity: activeTab === 3 ? 1 : 0.4, scale: activeTab === 3 ? 1.1 : 0.9 }}
             >
               {activeTab === 3 && <div className="absolute inset-0 bg-emerald-400 rounded-full blur-xl opacity-40 animate-pulse" />}
               <div className={`bg-white p-5 rounded-full shadow-[0_15px_40px_rgba(0,0,0,0.15)] border relative z-10 transition-colors ${activeTab === 3 ? 'border-emerald-400 shadow-[0_15px_40px_rgba(16,185,129,0.3)]' : 'border-slate-100'}`}>
                  <ShieldCheck size={36} className={`${activeTab === 3 ? 'text-emerald-600' : 'text-slate-800'} transition-colors`} />
               </div>
             </motion.div>

             {/* Security Badge 2 */}
             <motion.div 
               className={`absolute z-30 top-[20%] left-[15%] flex items-center justify-center transition-all duration-500`}
               animate={{ opacity: activeTab === 3 ? 1 : 0.4, scale: activeTab === 3 ? 1.1 : 0.9 }}
             >
               {activeTab === 3 && <div className="absolute inset-0 bg-slate-400 rounded-full blur-xl opacity-30 animate-pulse" />}
               <div className={`bg-slate-900 p-4 rounded-full shadow-[0_15px_40px_rgba(0,0,0,0.3)] border relative z-10 transition-colors ${activeTab === 3 ? 'border-slate-600 shadow-[0_15px_40px_rgba(15,23,42,0.4)]' : 'border-slate-800'}`}>
                  <Lock size={24} className="text-white" />
               </div>
             </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
