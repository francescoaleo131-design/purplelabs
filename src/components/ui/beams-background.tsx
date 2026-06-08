"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface BeamsBackgroundProps {
    className?: string;
    children?: React.ReactNode;
    badge?: string;
    title1?: string;
    title2?: string;
    description?: string;
    intensity?: "subtle" | "medium" | "strong";
}

interface Beam {
    x: number;
    y: number;
    width: number;
    length: number;
    angle: number;
    speed: number;
    opacity: number;
    hue: number;
    pulse: number;
    pulseSpeed: number;
}

// Generatore di fasci tarato sulla palette Purple/Fuchsia dell'agenzia
function createBeam(width: number, height: number): Beam {
    const angle = -30 + Math.random() * 12; // Inclinazione diagonale coerente ed elegante
    return {
        x: Math.random() * width * 1.4 - width * 0.25,
        y: Math.random() * height * 1.4 - height * 0.25,
        width: 40 + Math.random() * 70, // Fasci leggermente più corposi per enfatizzare il blur
        length: height * 2.2,
        angle: angle,
        speed: 0.4 + Math.random() * 0.9, // Movimento fluido e rallentato per un effetto premium
        opacity: 0.08 + Math.random() * 0.14,
        hue: 270 + Math.random() * 55, // Spettro viola (270) -> magenta/fucsia (325)
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: 0.015 + Math.random() * 0.025,
    };
}

export function BeamsBackground({
    className,
    children,
    badge = "PurpleLabs Studio",
    title1 = "Sviluppiamo Esperienze",
    title2 = "Digitali Straordinarie",
    description = "Plasmiamo le tue idee in ecosistemi web futuristici attraverso l'uso di design raffinato e tecnologie di frontiera.",
    intensity = "strong",
}: BeamsBackgroundProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const beamsRef = useRef<Beam[]>([]);
    const animationFrameRef = useRef<number>(0);
    const MINIMUM_BEAMS = 22; // Leggermente aumentato il numero di fasci per riempire il background

    const opacityMap = {
        subtle: 0.5,
        medium: 0.75,
        strong: 1,
    };

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const updateCanvasSize = () => {
            const dpr = window.devicePixelRatio || 1;
            canvas.width = window.innerWidth * dpr;
            canvas.height = window.innerHeight * dpr;
            canvas.style.width = `${window.innerWidth}px`;
            canvas.style.height = `${window.innerHeight}px`;
            ctx.scale(dpr, dpr);

            const totalBeams = Math.floor(MINIMUM_BEAMS * 1.4);
            beamsRef.current = Array.from({ length: totalBeams }, () =>
                createBeam(canvas.width, canvas.height)
            );
        };

        updateCanvasSize();
        window.addEventListener("resize", updateCanvasSize);

        function resetBeam(beam: Beam, index: number, totalBeams: number) {
            if (!canvas) return beam;
            
            const column = index % 3;
            const spacing = canvas.width / 3;

            beam.y = canvas.height + 150; // Riparte abbondantemente sotto lo schermo per evitare stacchi visivi
            beam.x =
                column * spacing +
                spacing / 2 +
                (Math.random() - 0.5) * spacing * 0.6;
            beam.width = 80 + Math.random() * 90;
            beam.speed = 0.4 + Math.random() * 0.5;
            beam.hue = 270 + (index * 55) / totalBeams; // Distribuzione armonica dello spettro viola/fucsia
            beam.opacity = 0.1 + Math.random() * 0.12;
            return beam;
        }

        function drawBeam(ctx: CanvasRenderingContext2D, beam: Beam) {
            ctx.save();
            ctx.translate(beam.x, beam.y);
            ctx.rotate((beam.angle * Math.PI) / 180);

            const pulsingOpacity =
                beam.opacity *
                (0.75 + Math.sin(beam.pulse) * 0.25) *
                opacityMap[intensity];

            const gradient = ctx.createLinearGradient(0, 0, 0, beam.length);

            // Ottimizzazione dei color stop con dissolvenza morbida (effetto neon soffuso)
            gradient.addColorStop(0, `hsla(${beam.hue}, 80%, 60%, 0)`);
            gradient.addColorStop(
                0.15,
                `hsla(${beam.hue}, 80%, 60%, ${pulsingOpacity * 0.4})`
            );
            gradient.addColorStop(
                0.5,
                `hsla(${beam.hue}, 85%, 65%, ${pulsingOpacity})`
            );
            gradient.addColorStop(
                0.85,
                `hsla(${beam.hue}, 80%, 60%, ${pulsingOpacity * 0.3})`
            );
            gradient.addColorStop(1, `hsla(${beam.hue}, 80%, 60%, 0)`);

            ctx.fillStyle = gradient;
            ctx.fillRect(-beam.width / 2, 0, beam.width, beam.length);
            ctx.restore();
        }

        function animate() {
            if (!canvas || !ctx) return;

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.filter = "blur(40px)"; // Incrementato il blur per rendere i fasci soffusi e non taglienti

            const totalBeams = beamsRef.current.length;
            beamsRef.current.forEach((beam, index) => {
                beam.y -= beam.speed;
                beam.pulse += beam.pulseSpeed;

                if (beam.y + beam.length < -150) {
                    resetBeam(beam, index, totalBeams);
                }

                drawBeam(ctx, beam);
            });

            animationFrameRef.current = requestAnimationFrame(animate);
        }

        animate();

        return () => {
            window.removeEventListener("resize", updateCanvasSize);
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        };
    }, [intensity]);

    return (
        <div className={cn("relative min-h-screen w-full overflow-hidden bg-neutral-950", className)}>
            {/* Canvas di sfondo con i fasci di luce viola */}
            <canvas
                ref={canvasRef}
                className="absolute inset-0 pointer-events-none"
                style={{ filter: "blur(20px)" }}
            />

            {/* Overlay satinato per legare e amalgamare le luci di sfondo */}
            <motion.div
                className="absolute inset-0 bg-neutral-950/10 pointer-events-none"
                animate={{
                    opacity: [0.08, 0.18, 0.08],
                }}
                transition={{
                    duration: 12,
                    ease: "easeInOut",
                    repeat: Number.POSITIVE_INFINITY,
                }}
                style={{
                    backdropFilter: "blur(60px)",
                }}
            />

            {/* Container dei contenuti dinamici */}
            <div className="relative z-10 container mx-auto px-4 min-h-screen flex items-center justify-center">
                {children ? (
                    children
                ) : (
                    <div className="max-w-4xl mx-auto text-center flex flex-col items-center justify-center">
                        {badge && (
                            <motion.div
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-950/30 border border-purple-500/20 mb-8"
                            >
                                <span className="h-2 w-2 rounded-full bg-purple-400 animate-pulse" />
                                <span className="text-sm text-purple-300 tracking-wide font-medium">
                                    {badge}
                                </span>
                            </motion.div>
                        )}

                        <motion.h1
                            className="text-4xl sm:text-6xl md:text-8xl font-black mb-6 tracking-tighter leading-none"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-300">
                                {title1}
                            </span>
                            <br />
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-400">
                                {title2}
                            </span>
                        </motion.h1>

                        {description && (
                            <motion.p
                                className="text-base sm:text-lg md:text-xl text-neutral-400 mb-10 leading-relaxed max-w-xl mx-auto px-4"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                            >
                                {description}
                            </motion.p>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}