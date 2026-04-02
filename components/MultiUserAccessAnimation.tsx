'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ShieldCheck, Lock, Users, User, UserCircle } from 'lucide-react';

export default function MultiUserAccessAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Step 1: Admin
  const adminOpacity = useTransform(scrollYProgress, [0, 0.05, 0.2, 0.3], [0, 1, 1, 0]);
  const adminScale = useTransform(scrollYProgress, [0, 0.05, 0.2, 0.3], [0.8, 1, 1, 0.8]);
  const adminLineLength = useTransform(scrollYProgress, [0, 0.05, 0.2, 0.3], ['0px', '80px', '80px', '0px']);

  // Step 2: Staff
  const staff1Opacity = useTransform(scrollYProgress, [0.2, 0.3, 0.45, 0.55], [0, 1, 1, 0]);
  const staff1X = useTransform(scrollYProgress, [0.2, 0.3, 0.45, 0.55], [-50, 0, 0, 50]);
  const staff1LineLength = useTransform(scrollYProgress, [0.2, 0.3, 0.45, 0.55], ['0px', '80px', '80px', '0px']);

  // Step 3: Network (Appearing one by one)
  const net1Opacity = useTransform(scrollYProgress, [0.45, 0.5, 0.65, 0.75], [0, 1, 1, 0]);
  const net2Opacity = useTransform(scrollYProgress, [0.5, 0.55, 0.65, 0.75], [0, 1, 1, 0]);
  const net3Opacity = useTransform(scrollYProgress, [0.55, 0.6, 0.65, 0.75], [0, 1, 1, 0]);

  // Step 4: Security Badges
  const shieldOpacity = useTransform(scrollYProgress, [0.7, 0.75, 1], [0, 1, 1]);
  const shieldScale = useTransform(scrollYProgress, [0.7, 0.75, 1], [0.5, 1, 1]);
  
  const lockOpacity = useTransform(scrollYProgress, [0.75, 0.8, 1], [0, 1, 1]);
  const lockScale = useTransform(scrollYProgress, [0.75, 0.8, 1], [0.5, 1, 1]);

  // Text Descriptions
  const step1TextOpacity = useTransform(scrollYProgress, [0, 0.05, 0.2, 0.3], [0, 1, 1, 0]);
  const step1TextY = useTransform(scrollYProgress, [0, 0.05, 0.2, 0.3], [20, 0, 0, -20]);

  const step2TextOpacity = useTransform(scrollYProgress, [0.2, 0.3, 0.45, 0.55], [0, 1, 1, 0]);
  const step2TextY = useTransform(scrollYProgress, [0.2, 0.3, 0.45, 0.55], [20, 0, 0, -20]);

  const step3TextOpacity = useTransform(scrollYProgress, [0.45, 0.5, 0.65, 0.75], [0, 1, 1, 0]);
  const step3TextY = useTransform(scrollYProgress, [0.45, 0.5, 0.65, 0.75], [20, 0, 0, -20]);

  const step4TextOpacity = useTransform(scrollYProgress, [0.7, 0.75, 1], [0, 1, 1]);
  const step4TextY = useTransform(scrollYProgress, [0.7, 0.75, 1], [20, 0, 0]);

  return (
    <section ref={containerRef} className="relative w-full h-[400vh] bg-white">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        
        <div className="max-w-7xl w-full mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative h-full">
          
          {/* Left Text Content */}
          <div className="relative z-50 h-[300px] flex flex-col justify-center">
             <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-primary font-black tracking-[0.3em] uppercase text-xs mb-4 block"
             >
                Secure & Scalable
             </motion.span>
             <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-slate-900 mb-8 leading-[1.1] tracking-tighter">
                Multi user access <br className="hidden md:block" />
                <span className="text-primary italic">from any devices</span>
             </h2>

             {/* Cross-fading Descriptions */}
             <div className="relative h-32 lg:h-40">
               <motion.div style={{ opacity: step1TextOpacity, y: step1TextY }} className="absolute inset-x-0 top-0">
                 <p className="text-slate-600 text-lg leading-relaxed font-light">
                   <strong className="font-bold text-slate-900">1. Admin Control:</strong> Shop owners get total visibility and control. Create the primary account to oversee all operations perfectly.
                 </p>
               </motion.div>
               <motion.div style={{ opacity: step2TextOpacity, y: step2TextY }} className="absolute inset-x-0 top-0">
                 <p className="text-slate-600 text-lg leading-relaxed font-light">
                   <strong className="font-bold text-slate-900">2. Staff Delegation:</strong> Create secure employee accounts. Cashiers and staff can log in to handle daily tasks smoothly with dedicated permissions.
                 </p>
               </motion.div>
               <motion.div style={{ opacity: step3TextOpacity, y: step3TextY }} className="absolute inset-x-0 top-0">
                 <p className="text-slate-600 text-lg leading-relaxed font-light">
                   <strong className="font-bold text-slate-900">3. Entire Network:</strong> Empower your whole team. Accountants, sales reps, and managers can access the system sequentially from anywhere forming a robust network.
                 </p>
               </motion.div>
               <motion.div style={{ opacity: step4TextOpacity, y: step4TextY }} className="absolute inset-x-0 top-0">
                 <p className="text-slate-600 text-lg leading-relaxed font-light">
                   <strong className="font-bold text-slate-900">4. Role-based Security:</strong> Keep your business safe. Assign specific permissions to control exactly what each user can view and manage securely.
                 </p>
               </motion.div>
             </div>
          </div>

          {/* Right Visual Content */}
          <div className="relative h-[600px] w-full flex items-center justify-center mt-10 lg:mt-0">
            
            <div className="relative w-full max-w-2xl h-full flex items-center justify-center">
               
               {/* Clean Dashboard Devices (Using the clean AI-generated one) */}
               <motion.div className="absolute inset-0 z-10 flex items-center justify-center">
                 <img src="/images/billing_dashboard_devices.png" alt="Dashboard Devices" className="w-full max-w-lg h-[80%] object-contain" />
               </motion.div>

               {/* Step 1: Admin */}
               <motion.div 
                 className="absolute z-20 top-1/4 left-0 flex items-center"
                 style={{ opacity: adminOpacity, scale: adminScale }}
               >
                 <div className="bg-white px-5 py-4 rounded-xl shadow-[0_15px_40px_rgba(0,0,0,0.1)] border border-slate-100 flex flex-col items-center gap-2 relative z-10">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                       <User size={24} />
                    </div>
                    <span className="text-xs font-bold text-slate-800">Admin</span>
                 </div>
                 {/* Dotted Line */}
                 <motion.div style={{ width: adminLineLength }} className="border-t-[2px] border-dashed border-slate-300 h-0 ml-1 overflow-hidden origin-left" />
               </motion.div>

               {/* Step 2: Staff */}
               <motion.div 
                 className="absolute z-20 top-[40%] left-0 flex items-center"
                 style={{ opacity: staff1Opacity, x: staff1X }}
               >
                 <div className="bg-white px-5 py-4 rounded-xl shadow-[0_15px_40px_rgba(0,0,0,0.1)] border border-slate-100 flex flex-col items-center gap-2 relative z-10">
                    <div className="w-12 h-12 bg-indigo-500/10 rounded-full flex items-center justify-center text-indigo-600">
                       <UserCircle size={24} />
                    </div>
                    <span className="text-xs font-bold text-slate-800">Staff</span>
                 </div>
                 {/* Dotted Line */}
                 <motion.div style={{ width: staff1LineLength }} className="border-t-[2px] border-dashed border-slate-300 h-0 ml-1 overflow-hidden origin-left" />
               </motion.div>

               {/* Step 3: Network appearing one by one */}
               {/* Sub-staff 1 */}
               <motion.div 
                 className="absolute z-20 top-[15%] right-[5%] flex flex-col items-center"
                 style={{ opacity: net1Opacity }}
               >
                 <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} className="bg-white px-4 py-3 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-slate-100 flex flex-col items-center gap-2">
                    <div className="w-10 h-10 bg-sky-500/10 rounded-full flex items-center justify-center text-sky-600">
                       <Users size={20} />
                    </div>
                    <span className="text-[10px] font-bold text-slate-800">Manager</span>
                 </motion.div>
                 <div className="h-16 border-l-[2px] border-dashed border-slate-300 mt-1" />
               </motion.div>

               {/* Sub-staff 2 */}
               <motion.div 
                 className="absolute z-20 bottom-[15%] left-[10%] flex flex-col-reverse items-center"
                 style={{ opacity: net2Opacity }}
               >
                 <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="bg-white px-4 py-3 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-slate-100 flex flex-col items-center gap-2">
                    <div className="w-10 h-10 bg-emerald-500/10 rounded-full flex items-center justify-center text-emerald-600">
                       <User size={20} />
                    </div>
                    <span className="text-[10px] font-bold text-slate-800">Sales rep</span>
                 </motion.div>
                 <div className="h-16 border-l-[2px] border-dashed border-slate-300 mb-1" />
               </motion.div>

               {/* Sub-staff 3 */}
               <motion.div 
                 className="absolute z-20 top-[45%] right-0 flex flex-row-reverse items-center"
                 style={{ opacity: net3Opacity }}
               >
                 <motion.div animate={{ x: [0, 8, 0] }} transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }} className="bg-white px-4 py-3 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-slate-100 flex flex-col items-center gap-2 relative z-10">
                    <div className="w-10 h-10 bg-purple-500/10 rounded-full flex items-center justify-center text-purple-600">
                       <UserCircle size={20} />
                    </div>
                    <span className="text-[10px] font-bold text-slate-800">Accountant</span>
                 </motion.div>
                 <div className="w-16 border-t-[2px] border-dashed border-slate-300 mr-1" />
               </motion.div>

               {/* Step 4: Security Badges */}
               <motion.div 
                 className="absolute z-30 bottom-[20%] right-[10%] flex items-center justify-center"
                 style={{ opacity: shieldOpacity, scale: shieldScale }}
               >
                 {/* Glow effect */}
                 <div className="absolute inset-0 bg-emerald-400 rounded-full blur-2xl opacity-40 animate-pulse" />
                 <div className="bg-white p-5 rounded-full shadow-[0_15px_40px_rgba(0,0,0,0.15)] border border-slate-100 relative z-10">
                    <ShieldCheck size={36} className="text-slate-800" />
                 </div>
               </motion.div>

               <motion.div 
                 className="absolute z-30 top-[15%] left-[20%] flex items-center justify-center"
                 style={{ opacity: lockOpacity, scale: lockScale }}
               >
                 <div className="absolute inset-0 bg-slate-400 rounded-full blur-2xl opacity-30 animate-pulse" />
                 <div className="bg-slate-900 p-4 rounded-full shadow-[0_15px_40px_rgba(0,0,0,0.3)] border border-slate-800 relative z-10">
                    <Lock size={24} className="text-white" />
                 </div>
               </motion.div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
