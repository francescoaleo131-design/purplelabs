"use client";

import { motion, Variants } from "framer-motion";
import { Circle, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { HoverButton } from "@/components/ui/HoverButton"; 

// ... (lascia ElegantShape invariato come nel precedente messaggio)

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
            transition: { duration: 0.8, delay: 0.2 + i * 0.15, ease: [0.25, 0.4, 0.25, 1] },
        }),
    };

    return (
        <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-black pt-12 pb-12">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/[0.03] via-transparent to-fuchsia-500/[0.03] blur-3xl" />
            
            {/* Sfondi Geometrici */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* ... (inserisci qui i 5 componenti ElegantShape come definito in precedenza) */}
            </div>

            <div className="relative z-10 container mx-auto px-6 max-w-5xl">
                <div className="w-full text-center flex flex-col items-center">
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

                    <motion.div custom={2} variants={fadeUpVariants} initial="hidden" animate="visible">
                        <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-xl mx-auto">
                            Plasmiamo le tue idee in ecosistemi web futuristici attraverso l'uso di design raffinato e tecnologie di frontiera.
                        </p>
                    </motion.div>

                    <motion.div custom={3} variants={fadeUpVariants} initial="hidden" animate="visible">
                        <Link href="/contatti" passHref legacyBehavior>
                            <HoverButton className="flex flex-row items-center justify-center gap-2 px-6 py-3.5 group">
                                <span className="text-base font-bold text-white flex items-center gap-2">
                                    Prenota una consulenza <ArrowUpRight className="w-5 h-5 text-purple-300 group-hover:translate-x-1" />
                                </span>
                            </HoverButton>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}