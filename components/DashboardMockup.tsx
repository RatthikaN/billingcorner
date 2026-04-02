"use client";

import { motion } from "motion/react";
import { TrendingUp, Bell, CreditCard, PieChart, ArrowUpRight } from "lucide-react";

export default function DashboardMockup() {
    return (
        <div className="relative w-full h-full flex items-center justify-center p-8 overflow-visible">
            <div className="relative w-full aspect-square max-w-[500px] flex items-center justify-center">

                {/* Central Monitor Frame - Unified SaaS Dashboard */}
                <motion.div
                    initial={{ opacity: 0, rotateY: -15, rotateX: 5, scale: 0.9 }}
                    animate={{ opacity: 1, rotateY: -10, rotateX: 2, scale: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="relative w-[100%] aspect-[16/11] bg-white rounded-2xl overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] border border-slate-200 z-10"
                >
                    {/* Dashboard Header */}
                    <div className="h-10 border-b border-slate-100 flex items-center px-4 justify-between bg-slate-50/50">
                        <div className="flex gap-1.5 focus-within:ring-2">
                            <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                            <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                            <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                        </div>
                        <div className="h-4 w-32 bg-slate-200 rounded-full" />
                        <div className="w-6 h-6 rounded-full bg-rose-100 flex items-center justify-center">
                            <div className="w-3 h-3 rounded-full bg-rose-500" />
                        </div>
                    </div>

                    {/* Dashboard Body */}
                    <div className="p-6 space-y-6">
                        <div className="flex justify-between items-start">
                            <div className="space-y-1">
                                <div className="h-2 w-24 bg-slate-100 rounded-full" />
                                <div className="h-8 w-40 bg-slate-900 rounded-lg" />
                            </div>
                            <div className="flex gap-2">
                                <div className="h-8 w-8 bg-rose-50 rounded-lg flex items-center justify-center text-rose-600"><PieChart size={16} /></div>
                                <div className="h-8 w-8 bg-slate-50 rounded-lg flex items-center justify-center text-slate-400"><Bell size={16} /></div>
                            </div>
                        </div>

                        <div className="grid grid-cols-3 gap-4">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="h-16 bg-slate-50 rounded-xl p-3 border border-slate-100 flex flex-col justify-between">
                                    <div className="h-1.5 w-10 bg-slate-200 rounded-full" />
                                    <div className="h-3 w-16 bg-slate-300 rounded-sm" />
                                </div>
                            ))}
                        </div>

                        {/* Main Chart Area */}
                        <div className="h-32 w-full bg-rose-50/30 rounded-2xl border border-rose-100/50 p-4 relative overflow-hidden">
                            <div className="flex items-end justify-between h-full gap-2">
                                {[30, 50, 40, 80, 60, 90, 70, 85, 45, 65, 95, 80].map((h, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ height: 0 }}
                                        animate={{ height: `${h}%` }}
                                        transition={{ delay: 0.5 + i * 0.05, duration: 0.8 }}
                                        className="flex-1 bg-rose-500/80 rounded-t-sm"
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Floating Panel: Revenue (Top Left) */}
                <motion.div
                    animate={{
                        y: [0, -15, 0],
                        rotateZ: [0, 2, 0]
                    }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute -top-10 -left-6 w-44 bg-white/90 backdrop-blur-xl rounded-2xl p-4 shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-white z-20"
                >
                    <div className="flex items-start justify-between mb-3">
                        <div className="p-2 bg-rose-50 rounded-xl text-rose-600">
                            <TrendingUp size={18} />
                        </div>
                        <div className="text-right">
                            <span className="text-[10px] font-bold text-rose-600 flex items-center gap-0.5">
                                <ArrowUpRight size={10} /> 18.2%
                            </span>
                        </div>
                    </div>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1">Total Revenue</p>
                    <p className="text-xl font-black text-slate-900 leading-none">₹8,42,190</p>
                </motion.div>

                {/* Floating Panel: Invoices (Bottom Right) */}
                <motion.div
                    animate={{
                        y: [0, 15, 0],
                        rotateZ: [0, -2, 0]
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.5
                    }}
                    className="absolute -bottom-6 -right-10 w-52 bg-white/90 backdrop-blur-xl rounded-2xl p-4 shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-white z-30"
                >
                    <div className="space-y-3">
                        <div className="flex justify-between items-center">
                            <p className="text-[11px] font-bold text-slate-900">Recent Invoices</p>
                            <div className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                        </div>
                        {[1, 2].map(i => (
                            <div key={i} className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center border border-slate-100">
                                    <CreditCard size={14} className="text-slate-400" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="h-2 w-16 bg-slate-200 rounded-full mb-1" />
                                    <div className="h-1.5 w-10 bg-slate-100 rounded-full" />
                                </div>
                                <div className="text-[10px] font-bold text-slate-900">₹{i * 1200}</div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Smartphone App (Bottom Left) */}
                <motion.div
                    animate={{
                        y: [0, -8, 0],
                        rotateZ: [-2, 0, -2]
                    }}
                    transition={{
                        duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1.5
                    }}
                    className="absolute bottom-10 -left-12 w-28 aspect-[9/19] bg-slate-950 rounded-[2rem] border-[6px] border-slate-900 shadow-2xl p-1 z-40 overflow-hidden"
                >
                    <div className="w-full h-full bg-white rounded-[1.6rem] flex flex-col p-3 gap-3">
                        <div className="w-6 h-1 bg-slate-100 mx-auto rounded-full" />
                        <div className="flex-1 bg-rose-500 rounded-xl relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
                            <div className="p-2 space-y-1">
                                <div className="h-1 w-6 bg-white/30 rounded-full" />
                                <div className="h-3 w-10 bg-white shadow-sm rounded-sm" />
                            </div>
                        </div>
                        <div className="h-12 w-full space-y-2">
                            <div className="h-1.5 w-full bg-slate-100 rounded-full" />
                            <div className="h-1.5 w-2/3 bg-slate-100 rounded-full" />
                            <div className="grid grid-cols-4 gap-1 pt-1">
                                {[1, 2, 3, 4].map(i => <div key={i} className="aspect-square bg-slate-50 rounded-md border border-slate-100" />)}
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Decorative elements */}
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-rose-500/10 rounded-full blur-[100px] pointer-events-none" />
                <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-rose-400/5 rounded-full blur-[100px] pointer-events-none" />
            </div>
        </div>
    );
}
