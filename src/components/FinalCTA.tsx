"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { HoverButton } from "@/components/ui/HoverButton";

export default function FinalCTA() {
  return (
    <section className="w-full bg-neutral-950 py-32 px-6 border-t border-purple-500/10 relative overflow-hidden">
      
      {/* 1. Bagliore angolare sinistro (Viola) */}
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_0%_100%,rgba(168,85,247,0.1),transparent_70%)] pointer-events-none" />
      
      {/* 2. Bagliore angolare destro (Fucsia/Rosa) */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_100%_100%,rgba(236,72,153,0.08),transparent_70%)] pointer-events-none" />

      {/* 3. Nuovo punto luce centrale concentrato per dare profondità ai testi */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-[radial-gradient(ellipse_at_center,rgba(147,51,234,0.06),transparent_65%)] pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tighter mb-6 leading-tight">
          Hai un progetto in mente?<br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-400 filter drop-shadow-[0_0_30px_rgba(236,72,153,0.15)]">
            Rendiamolo straordinario.
          </span>
        </h2>
        
        <p className="text-base sm:text-lg text-slate-400 max-w-xl mx-auto mb-12 leading-relaxed">
          Parliamo della tua idea e strutturiamo insieme la soluzione web più rapida, scalabile e ottimizzata per i tuoi obiettivi.
        </p>

        <div className="flex justify-center">
          <Link href="/contatti" passHref legacyBehavior>
            <HoverButton className="inline-flex items-center justify-center gap-3 group whitespace-nowrap">
              <span>Parla con un esperto</span>
              <ArrowUpRight className="w-5 h-5 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-purple-300" />
            </HoverButton>
          </Link>
        </div>
      </div>
    </section>
  );
}