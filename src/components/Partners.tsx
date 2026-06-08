"use client";

export default function Partners() {
  return (
    <section className="w-full bg-neutral-950 py-20 px-6 border-t border-purple-500/10 relative overflow-hidden">
      
      {/* Bagliore morbido posizionato a sinistra */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_50%,rgba(236,72,153,0.04),transparent_45%)] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <p className="text-xs font-semibold uppercase tracking-widest text-purple-400/80 mb-8">
          Hanno già scelto le nostre tecnologie
        </p>
        
        <div className="inline-flex items-center justify-center gap-4 px-8 py-5 rounded-xl bg-purple-950/10 border border-purple-500/10 backdrop-blur-md hover:border-purple-500/30 hover:shadow-[0_0_35px_rgba(168,85,247,0.12)] transition-all duration-300 group">
          
          {/* CONTENITORE LOGO AZIENDA */}
          <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden p-1.5 shrink-0 group-hover:border-purple-500/30 transition-colors duration-300">
            <img 
              src="/caristia.jpg" // Inserisci qui il percorso del file (es. dentro public/) o l'URL del logo
              alt="Logo Azienda Partner"
              className="w-full h-full object-contain opacity-75 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300 grayscale group-hover:grayscale-0"
            />
          </div>

          {/* NOME AZIENDA */}
          <div className="flex flex-col items-start text-left">
            <span className="text-xl font-bold tracking-tight text-slate-300 group-hover:text-white transition-colors duration-200 leading-none">
              Giocattoli Caristia
            </span>
            <span className="text-[10px] text-slate-500 group-hover:text-purple-400 transition-colors duration-200 mt-1">
              Case Study Attivo
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}