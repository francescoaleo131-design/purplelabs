"use client";

import { cn } from "@/lib/utils";

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
    <section className="relative w-full overflow-hidden bg-neutral-950 py-24 px-6 border-t border-purple-500/10">
      
      {/* Sfondo con bagliori viola statici tramite CSS puro (Performance: 100%) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_35%,rgba(168,85,247,0.08),transparent_50%),radial-gradient(circle_at_80%_65%,rgba(236,72,153,0.05),transparent_50%)] pointer-events-none" />

      <div className="relative z-10 container mx-auto max-w-6xl">
        
        {/* Intestazione */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-4xl font-extrabold text-white tracking-tight sm:text-5xl leading-tight">
            Come Creiamo il Tuo <span className="text-purple-400 filter drop-shadow-[0_0_15px_rgba(168,85,247,0.4)]">Successo Online</span>
          </h2>
          <p className="text-base text-slate-400 mt-4 max-w-lg mx-auto leading-relaxed">
            Progettiamo e sviluppiamo siti web ed esperienze digitali sartoriali, focalizzate sulla crescita del tuo business.
          </p>
        </div>

        {/* Griglia Carte */}
        <div className="flex flex-wrap items-stretch justify-center gap-8 w-full">
          {featuresList.map((feature, index) => (
            <div
              key={index}
              className="max-w-xs bg-purple-950/10 border border-purple-500/15 rounded-2xl p-4 backdrop-blur-md
                         transition-all duration-300 ease-out transform hover:-translate-y-1.5
                         hover:border-purple-400/40 hover:bg-purple-950/25
                         hover:shadow-[0_0_35px_rgba(168,85,247,0.15)] flex flex-col w-full"
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

      </div>
    </section>
  );
}