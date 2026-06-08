"use client";

export default function WorkProcess() {
  const steps = [
    {
      num: "01",
      title: "Strategia & Discovery",
      desc: "Analizziamo il tuo mercato, i competitor e il target per definire la struttura ideale e gli obiettivi di conversione del nuovo sito.",
    },
    {
      num: "02",
      title: "Design",
      desc: "Progettiamo il tuo brand per renderlo unico e inconfondibile. Ogni dettaglio è pensato per creare un'esperienza utente memorabile e coerente con l'identità del tuo business.",
    },
    {
      num: "03",
      title: "Sviluppo",
      desc: "Scriviamo codice pulito, ultraleggero e ottimizzato per i motori di ricerca, garantendo una velocità di caricamento fulminea.",
    },
  ];

  return (
    <section className="w-full bg-neutral-950 py-24 px-6 border-t border-purple-500/10 relative overflow-hidden">
      
      {/* Bagliore violaceo soffuso centrale */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.06),transparent_60%)] pointer-events-none" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-4xl font-extrabold text-white tracking-tight sm:text-5xl">
            Il Nostro <span className="text-purple-400 filter drop-shadow-[0_0_15px_rgba(168,85,247,0.3)]">Metodo</span>
          </h2>
          <p className="text-slate-400 mt-4">
            Dall'idea iniziale al lancio online: ecco come trasformiamo il tuo progetto in un successo assicurato.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <div 
              key={idx} 
              className="relative p-8 rounded-2xl bg-purple-950/10 border border-purple-500/10 backdrop-blur-md flex flex-col justify-between hover:border-purple-400/30 hover:bg-purple-950/20 transition-all duration-300 group"
            >
              <div>
                <span className="text-5xl font-black text-purple-500/15 block mb-6 font-mono tracking-tight group-hover:text-purple-400/30 transition-colors duration-300">
                  {step.num}
                </span>
                <h3 className="text-xl font-bold text-slate-100 tracking-wide mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}