"use client";

import { motion } from "motion/react";
import { Laptop, Printer, Scan, QrCode, FileText } from "lucide-react";

export default function ProductShowcase() {
    return (
        <div className="relative w-full aspect-[4/3] bg-slate-50 flex items-center justify-center overflow-hidden rounded-[2.5rem] border border-slate-100">
            {/* Soft Studio Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-100" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-primary/5 rounded-full blur-[120px]" />

            {/* Main Showcase Container */}
            <div className="relative w-full h-full flex items-center justify-center perspective-1000 p-12">

                {/* Laptop (Central Piece) */}
                <motion.div
                    initial={{ opacity: 0, y: 20, rotateX: 20 }}
                    animate={{ opacity: 1, y: 0, rotateX: 10 }}
                    transition={{ duration: 1 }}
                    className="relative z-20 w-[60%] aspect-[16/10] bg-slate-900 rounded-xl overflow-hidden shadow-2xl border border-white/10"
                >
                    <div className="h-6 bg-slate-800/80 flex items-center px-3 gap-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-red-400/50" />
                        <div className="w-1.5 h-1.5 rounded-full bg-amber-400/50" />
                        <div className="w-1.5 h-1.5 rounded-full bg-green-400/50" />
                    </div>
                    <div className="p-4 flex flex-col gap-3">
                        <div className="h-4 w-3/4 bg-primary/20 rounded-full animate-pulse" />
                        <div className="grid grid-cols-2 gap-2">
                            <div className="h-12 bg-white/5 rounded-lg" />
                            <div className="h-12 bg-white/5 rounded-lg" />
                        </div>
                        <div className="h-2 w-full bg-slate-800 rounded-full" />
                        <div className="h-2 w-2/3 bg-slate-800 rounded-full" />
                    </div>
                </motion.div>

                {/* Printer (Left side) */}
                <motion.div
                    animate={{
                        y: [0, -10, 0],
                        rotateZ: [-5, -7, -5]
                    }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute left-8 bottom-12 w-32 aspect-square bg-white rounded-2xl shadow-xl border border-slate-100 p-4 z-30 flex flex-col items-center justify-center gap-2"
                >
                    <div className="w-10 h-10 bg-rose-50 rounded-xl flex items-center justify-center text-rose-500">
                        <Printer size={20} />
                    </div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter text-center">Receipts Printed</div>
                    <div className="h-1.5 w-full bg-slate-100 rounded-full" />
                </motion.div>

                {/* Scanner (Right side) */}
                <motion.div
                    animate={{
                        y: [0, 10, 0],
                        rotateZ: [5, 7, 5]
                    }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    className="absolute right-8 top-12 w-32 aspect-square bg-white rounded-2xl shadow-xl border border-slate-100 p-4 z-30 flex flex-col items-center justify-center gap-2"
                >
                    <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-500">
                        <Scan size={20} />
                    </div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter text-center">Fast Billing</div>
                    <div className="h-1.5 w-full bg-slate-100 rounded-full" />
                </motion.div>

                {/* QR Code Stand (Foreground) */}
                <motion.div
                    animate={{
                        x: [0, 5, 0],
                        y: [0, 5, 0]
                    }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-8 right-16 w-24 h-32 bg-white rounded-xl shadow-2xl border border-slate-200 p-2 z-40 transform rotate-[-10deg]"
                >
                    <div className="w-full h-full border-2 border-slate-50 rounded-lg p-2 flex flex-col gap-2">
                        <div className="w-full aspect-square bg-slate-50 flex items-center justify-center rounded-md border border-slate-100">
                            <QrCode size={24} className="text-primary/40" />
                        </div>
                        <div className="h-2 w-full bg-primary/10 rounded-full" />
                        <div className="h-1.5 w-2/3 bg-slate-100 rounded-full" />
                    </div>
                </motion.div>

                {/* Invoice Paper (Floating) */}
                <motion.div
                    animate={{
                        y: [0, -20, 0],
                        rotateZ: [10, 15, 10],
                        opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-10 left-20 w-20 h-28 bg-white/40 backdrop-blur-sm rounded-lg border border-white/50 z-10 flex flex-col p-2 gap-1.5"
                >
                    {[1, 2, 3, 4, 5].map(i => <div key={i} className="h-1 bg-slate-300/30 rounded-full" />)}
                </motion.div>

                {/* Floating Particles/Glow */}
                <div className="absolute top-[20%] right-[20%] w-2 h-2 bg-primary/20 rounded-full blur-sm animate-ping" />
                <div className="absolute bottom-[30%] left-[15%] w-3 h-3 bg-secondary/20 rounded-full blur-sm animate-pulse" />
            </div>
        </div>
    );
}
