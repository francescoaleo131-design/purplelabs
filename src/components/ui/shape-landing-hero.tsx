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
            transition={{
                duration: 2.4,
                delay,
                ease: [0.23, 0.86, 0.39, 0.96],
                opacity: { duration: 1.2 },
            }}
            className={cn("absolute hidden sm:block", className)}
        >
            <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{
                    duration: 12,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                }}
                style={{ width, height }}
                className="relative"
            >
                <div
                    className={cn(
                        "absolute inset-0 rounded-full",
                        "bg-gradient-to-r to-transparent",
                        gradient,
                        "backdrop-blur-[2px] border-2 border-purple-500/[0.15]",
                        "shadow-[0_8px_32px_0_rgba(168,85,247,0.05)]",
                        "after:absolute after:inset-0 after:rounded-full",
                        "after:bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.1),transparent_70%)]"
                    )}
                />
            </motion.div>
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
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                delay: 0.2 + i * 0.15,
                ease: [0.25, 0.4, 0.25, 1],
            },
        }),
    };

    return (
        <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-black pt-24 md:pt-32 pb-12">
            {/* Gradiente di sfondo soffuso e profondo */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/[0.03] via-transparent to-fuchsia-500/[0.03] blur-3xl" />

            {/* SFONDI GEOMETRICI COMPLETI E ANIMATI */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <ElegantShape
                    delay={0.3}
                    width={600}
                    height={140}
                    rotate={12}
                    gradient="from-purple-500/[0.12]"
                    className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
                />

                <ElegantShape
                    delay={0.5}
                    width={500}
                    height={120}
                    rotate={-15}
                    gradient="from-fuchsia-500/[0.12]"
                    className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
                />

                <ElegantShape
                    delay={0.4}
                    width={300}
                    height={80}
                    rotate={-8}
                    gradient="from-violet-500/[0.12]"
                    className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
                />

                <ElegantShape
                    delay={0.6}
                    width={200}
                    height={60}
                    rotate={20}
                    gradient="from-purple-600/[0.12]"
                    className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]"
                />

                <ElegantShape
                    delay={0.7}
                    width={150}
                    height={40}
                    rotate={-25}
                    gradient="from-violet-400/[0.12]"
                    className="left-[20%] md:left-[25%] top-[5%] md:top-[10%]"
                />
            </div>

            <div className="relative z-10 container mx-auto px-6 max-w-5xl">
                <div className="w-full text-center flex flex-col items-center">
                    
                    {/* BADGE */}
                    <motion.div
                        custom={0}
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                        className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-purple-950/40 border border-purple-500/30 mb-6 md:mb-8 backdrop-blur-sm shadow-[0_0_15px_rgba(168,85,247,0.1)]"
                    >
                        <Circle className="h-2 w-2 fill-purple-400 animate-pulse" />
                        <span className="text-sm md:text-base text-purple-300 tracking-wider font-semibold">
                            {badge}
                        </span>
                    </motion.div>

                    {/* TITOLO PRINCIPALE */}
                    <motion.div
                        custom={1}
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-6 md:mb-8 tracking-tighter leading-[1.1]">
                            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-300">
                                {title1}
                            </span>
                            <br />
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-violet-400 to-fuchsia-400 filter drop-shadow-[0_0_20px_rgba(168,85,247,0.2)]">
                                {title2}
                            </span>
                        </h1>
                    </motion.div>

                    {/* SOTTOTITOLO */}
                    <motion.div
                        custom={2}
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <p className="text-base sm:text-lg md:text-xl text-slate-400 mb-8 md:mb-10 leading-relaxed max-w-xl mx-auto">
                            Plasmiamo le tue idee in ecosistemi web futuristici attraverso l'uso di design raffinato e tecnologie di frontiera.
                        </p>
                    </motion.div>

                    {/* BOTTONE COMPATTO E ANIMATO */}
                    <motion.div
                        custom={3}
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                        className="w-full flex justify-center px-6"
                    >
                        <Link href="/contatti" passHref legacyBehavior>
                            <HoverButton className="flex flex-row items-center justify-center gap-2 px-6 py-3.5 w-auto max-w-max mx-auto group">
                                <span className="flex items-center justify-center gap-2 whitespace-nowrap text-sm sm:text-base font-bold text-white">
                                    <span>Prenota una consulenza</span>
                                    <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-purple-300" />
                                </span>
                            </HoverButton>
                        </Link>
                    </motion.div>

                </div>
            </div>

            {/* Sfumatura di chiusura inferiore */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30 pointer-events-none" />
        </div>
    );
}