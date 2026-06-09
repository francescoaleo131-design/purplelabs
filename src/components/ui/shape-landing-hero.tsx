"use client";

import { motion, Variants } from "framer-motion";
import { Circle, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { HoverButton } from "@/components/ui/HoverButton"; 

function ElegantShape({
    className,
    delay = 0,
    width = 400,
    height = 100,
    rotate = 0,
    gradient = "from-purple-500/[0.08]",
}: {
    className?: string;
    delay?: number;
    width?: number;
    height?: number;
    rotate?: number;
    gradient?: string;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: -100, rotate: rotate - 15 }}
            animate={{ opacity: 1, y: 0, rotate: rotate }}
            transition={{ duration: 2.4, delay, ease: [0.23, 0.86, 0.39, 0.96] }}
            className={cn("absolute pointer-events-none", className)}
        >
            <div
                style={{ width, height }}
                className="relative animate-float will-change-transform"
            >
                <div
                    className={cn(
                        "absolute inset-0 rounded-full bg-gradient-to-r to-transparent backdrop-blur-[2px] border-2 border-purple-500/[0.15]",
                        gradient
                    )}
                />
            </div>
        </motion.div>
    );
}

export function HeroGeometric({
    badge = "PurpleLabs Studio",
    title1 = "Trasformiamo ogni idea",
    title2 = "in Realtà",
}: {
    badge?: string;
    title1?: string;
    title2?: string;
}) {
    const fadeUpVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i: number) => ({
            opacity: 1, y: 0,
            transition: { duration: 0.8, delay: 0.2 + i * 0.15, ease: [0.25, 0.4, 0.25, 1] },
        }),
    };

    return (
        <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-black pt-20 pb-12">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/[0.03] via-transparent to-fuchsia-500/[0.03] blur-3xl" />

            {/* Sfondi Geometrici - SEMPRE ATTIVI */}
            <ElegantShape delay={0.3} width={600} height={140} rotate={12} gradient="from-purple-500/[0.12]" className="left-[-5%] top-[20%]" />
            <ElegantShape delay={0.5} width={500} height={120} rotate={-15} gradient="from-fuchsia-500/[0.12]" className="right-[-5%] top-[60%]" />
            <ElegantShape delay={0.4} width={300} height={80} rotate={-8} gradient="from-violet-500/[0.12]" className="left-[10%] bottom-[10%]" />

            <div className="relative z-10 container mx-auto px-6 max-w-5xl text-center">
                <motion.div custom={0} variants={fadeUpVariants} initial="hidden" animate="visible" className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-purple-950/40 border border-purple-500/30 mb-8 backdrop-blur-sm">
                    <Circle className="h-2 w-2 fill-purple-400 animate-pulse" />
                    <span className="text-sm text-purple-300 font-semibold tracking-wider">{badge}</span>
                </motion.div>

                <motion.div custom={1} variants={fadeUpVariants} initial="hidden" animate="visible">
                    <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter leading-[1.1]">
                        <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-300">{title1}</span><br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-fuchsia-400">{title2}</span>
                    </h1>
                </motion.div>

                <motion.div custom={3} variants={fadeUpVariants} initial="hidden" animate="visible">
                    <Link href="/contatti" passHref legacyBehavior>
                        <HoverButton className="px-8 py-4 text-lg font-bold group">
                            <span className="flex items-center gap-2">
                                Prenota una consulenza <ArrowUpRight className="w-5 h-5 text-purple-300 group-hover:translate-x-1 transition-transform" />
                            </span>
                        </HoverButton>
                    </Link>
                </motion.div>
            </div>
        </div>
    );
}