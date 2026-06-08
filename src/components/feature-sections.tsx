"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

// --- INTERFACCE PER LO SFONDO DINAMICO ---
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

function createBeam(width: number, height: number): Beam {
    const angle = -30 + Math.random() * 12;
    return {
        x: Math.random() * width * 1.4 - width * 0.25,
        y: Math.random() * height * 1.4 - height * 0.25,
        width: 40 + Math.random() * 70,
        length: height * 2.2,
        angle: angle,
        speed: 0.4 + Math.random() * 0.9,
        opacity: 0.08 + Math.random() * 0.14,
        hue: 270 + Math.random() * 55, // Palette Viola/Fucsia dell'agenzia
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: 0.015 + Math.random() * 0.025,
    };
}

// --- COMPONENTE BACKGROUND (INTERNO) ---
function BeamsBackground({
    className,
    children,
    badge,
    title1,
    title2,
    description,
    intensity = "strong",
}: BeamsBackgroundProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const beamsRef = useRef<Beam[]>([]);
    const animationFrameRef = useRef<number>(0);
    const MINIMUM_BEAMS = 22;

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

            beam.y = canvas.height + 150;
            beam.x = column * spacing + spacing / 2 + (Math.random() - 0.5) * spacing * 0.6;
            beam.width = 80 + Math.random() * 90;
            beam.speed = 0.4 + Math.random() * 0.5;
            beam.hue = 270 + (index * 55) / totalBeams;
            beam.opacity = 0.1 + Math.random() * 0.12;
            return beam;
        }

        function drawBeam(ctx: CanvasRenderingContext2D, beam: Beam) {
            ctx.save();
            ctx.translate(beam.x, beam.y);
            ctx.rotate((beam.angle * Math.PI) / 180);

            const pulsingOpacity = beam.opacity * (0.75 + Math.sin(beam.pulse) * 0.25) * opacityMap[intensity];
            const gradient = ctx.createLinearGradient(0, 0, 0, beam.length);

            gradient.addColorStop(0, `hsla(${beam.hue}, 80%, 60%, 0)`);
            gradient.addColorStop(0.15, `hsla(${beam.hue}, 80%, 60%, ${pulsingOpacity * 0.4})`);
            gradient.addColorStop(0.5, `hsla(${beam.hue}, 85%, 65%, ${pulsingOpacity})`);
            gradient.addColorStop(0.85, `hsla(${beam.hue}, 80%, 60%, ${pulsingOpacity * 0.3})`);
            gradient.addColorStop(1, `hsla(${beam.hue}, 80%, 60%, 0)`);

            ctx.fillStyle = gradient;
            ctx.fillRect(-beam.width / 2, 0, beam.width, beam.length);
            ctx.restore();
        }

        function animate() {
            if (!canvas || !ctx) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.filter = "blur(40px)";

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
            if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
        };
    }, [intensity]);

    return (
        <div className={cn("relative w-full overflow-hidden bg-neutral-950 py-24 px-6 border-t border-purple-500/10", className)}>
            <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" style={{ filter: "blur(20px)" }} />
            
            <motion.div 
                className="absolute inset-0 bg-neutral-950/10 pointer-events-none"
                animate={{ opacity: [0.08, 0.18, 0.08] }}
                transition={{ duration: 12, ease: "easeInOut", repeat: Number.POSITIVE_INFINITY }}
                style={{ backdropFilter: "blur(60px)" }}
            />

            <div className="relative z-10 container mx-auto max-w-6xl">
                <div className="text-center max-w-2xl mx-auto mb-20">
                    <h2 className="text-4xl font-extrabold text-white tracking-tight sm:text-5xl leading-tight">
                        {title1} <span className="text-purple-400 filter drop-shadow-[0_0_15px_rgba(168,85,247,0.4)]">{title2}</span>
                    </h2>
                    {description && (
                        <p className="text-base text-slate-400 mt-4 max-w-lg mx-auto leading-relaxed">
                            {description}
                        </p>
                    )}
                </div>
                {children}
            </div>
        </div>
    );
}

// --- COMPONENTE PRINCIPALE ESPORTATO ---
export default function ServicesFeatures() {
  const featuresList = [
    {
      title: "Risultati Concreti",
      description: "Non creiamo semplici vetrine. Sviluppiamo ecosistemi digitali ottimizzati per la conversione, la velocità e il posizionamento SEO, trasformando i visitatori in clienti attivi.",
      image: "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/features/image-1.png",
    },
    {
      title: "Siti su Misura al 100%",
      description: "Nessun template pre-fatto o limitazione. Ogni linea di codice e ogni animazione sono progettate da zero per riflettere l'identità unica del brand e garantire unicità sul mercato.",
      image: "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/features/image-2.png",
    },
    {
      title: "Supporto Passo dopo Passo",
      description: "Dall'idea iniziale fino al lancio e alla manutenzione successiva. Seguiamo ogni fase del progetto con una comunicazione trasparente, diventando un vero partner strategico.",
      image: "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/features/image-3.png",
    },
  ];

  return (
    <BeamsBackground
        title1="Come Creiamo il Tuo"
        title2="Successo Online"
        description="Progettiamo e sviluppiamo siti web ed esperienze digitali sartoriali, focalizzate sulla crescita del tuo business."
    >
      {/* GRIGLIA CARTE */}
      <div className="flex flex-wrap items-stretch justify-center gap-8 w-full">
        {featuresList.map((feature, index) => (
          <div
            key={index}
            className="max-w-xs bg-purple-950/10 border border-purple-500/15 rounded-2xl p-4 backdrop-blur-md
                       transition-all duration-300 ease-out transform hover:-translate-y-2
                       hover:border-purple-400/40 hover:bg-purple-950/25
                       hover:shadow-[0_0_35px_rgba(168,85,247,0.2)] flex flex-col w-full"
          >
            {/* Contenitore Immagine */}
            <div className="relative overflow-hidden rounded-xl bg-purple-900/10 border border-purple-500/5 group">
              <img
                className="w-full h-auto object-cover opacity-85 transition-opacity duration-300 group-hover:opacity-100 grayscale-[20%] hover:grayscale-0"
                src={feature.image}
                alt={feature.title}
              />
            </div>
            
            {/* Testi della Card */}
            <div className="mt-5 flex-grow flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-slate-200 tracking-wide">
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-400 mt-2 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </BeamsBackground>
  );
}