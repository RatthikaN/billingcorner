"use client";

import { motion } from "framer-motion";
import { type LucideIcon } from "lucide-react";

interface FeatureIconProps {
    icon: LucideIcon;
    color?: string;
}

export default function FeatureIcon({ icon: Icon, color = "rose" }: FeatureIconProps) {
    // Map color names to Tailwind classes
    const colorMap: Record<string, { bg: string; text: string; glow: string }> = {
        rose: { bg: "bg-rose-50", text: "text-rose-600", glow: "bg-rose-500/10" },
        indigo: { bg: "bg-indigo-50", text: "text-indigo-600", glow: "bg-indigo-500/10" },
        emerald: { bg: "bg-emerald-50", text: "text-emerald-600", glow: "bg-emerald-500/10" },
        amber: { bg: "bg-amber-50", text: "text-amber-600", glow: "bg-amber-500/10" },
    };

    const theme = colorMap[color] || colorMap.rose;

    return (
        <div className="relative w-24 h-24 mb-6 flex items-center justify-center group">
            {/* Background Glow */}
            <div className={`absolute inset-0 ${theme.glow} rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 scale-75 group-hover:scale-100 opacity-50`} />

            {/* 3D Glass Layer 1 */}
            <motion.div
                animate={{
                    y: [0, -5, 0],
                    rotateX: [0, 5, 0]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-2 bg-white/40 backdrop-blur-sm border border-white/60 rounded-2xl shadow-sm z-0"
            />

            {/* Main Icon Container */}
            <motion.div
                animate={{
                    y: [0, 5, 0],
                    rotateX: [0, -5, 0]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className={`relative z-10 w-16 h-16 ${theme.bg} rounded-2xl shadow-xl border border-white flex items-center justify-center ${theme.text}`}
            >
                <Icon size={32} strokeWidth={2.5} />
            </motion.div>

            {/* Accents/Sparkles */}
            <div className="absolute top-0 right-0 w-2 h-2 bg-rose-400 rounded-full blur-[2px] animate-pulse" />
            <div className="absolute bottom-2 left-0 w-1.5 h-1.5 bg-rose-200 rounded-full blur-[1px] animate-ping" />
        </div>
    );
}
