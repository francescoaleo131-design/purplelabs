"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ServiceMarquee } from "@/components/ServiceMarquee";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function ServiziPage() {
  const serviziDettagliati = [
    {
      title: "Siti web & Ecommerce",
      desc: "Trasformiamo il tuo business in una piattaforma performante.",
      dettagli: ["Design UX/UI Personalizzato", "Ottimizzazione Conversioni", "Performance estrema"],
    },
    {
      title: "SEO & Local SEO",
      desc: "Non farti solo trovare, fatti scegliere dai tuoi clienti.",
      dettagli: ["Analisi parole chiave", "Ottimizzazione tecnica", "Google Business Profile"],
    },
    {
      title: "Automazioni",
      desc: "Ottimizza il tuo tempo in modo intelligente.",
      dettagli: ["Integrazione CRM", "Automazione email", "Automazione prenotazioni", "E molto altro"],
    },
    {
      title: "Brand Identity",
      desc: "Costruiamo la voce e il volto della tua azienda.",
      dettagli: ["Logo design", "Brand guidelines", "Strategia visiva"],
    },
    {
      title: "Copywriting & ADV",
      desc: "Parole che vendono e campagne che convertono.",
      dettagli: ["Copywriting persuasivo", "Gestione campagne Meta/Google", "A/B Testing"],
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center">
      
      {/* INTRO CENTRATA */}
      <section className="pt-40 pb-20 px-6 container mx-auto text-center flex flex-col items-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
          <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter">
            Soluzioni <span className="text-purple-400">Digitali</span> per il tuo Successo.
          </h1>
          <p className="text-xl text-slate-400">
            Non siamo semplici fornitori, ma partner strategici. Ogni servizio è studiato per scalare il tuo business e massimizzare il ROI.
          </p>
        </motion.div>
      </section>

      {/* GRIGLIA CENTRATA CON EFFETTO HOVER */}
      <section className="py-20 px-6 container mx-auto flex flex-col items-center">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center w-full max-w-6xl">
          {serviziDettagliati.map((s, i) => {
            const slug = s.title.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-");
            return (
              <Link 
                key={i} 
                href={`/servizi/${slug}`}
                className="group relative p-8 bg-purple-950/5 border border-purple-500/10 rounded-3xl hover:border-purple-500/30 transition-all w-full max-w-sm flex flex-col items-center text-center overflow-hidden"
              >
                {/* Overlay Hover */}
                <div className="absolute inset-0 bg-black/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 backdrop-blur-sm">
                  <span className="text-white font-bold text-lg border-b-2 border-purple-500 pb-1">
                    Scopri di più
                  </span>
                </div>

                {/* Contenuto Card */}
                <h3 className="text-2xl font-bold mb-4">{s.title}</h3>
                <p className="text-slate-400 mb-6 text-sm">{s.desc}</p>
                <ul className="space-y-2 w-full">
                  {s.dettagli.map((d, index) => (
                    <li key={index} className="flex justify-center items-center text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-purple-400 mr-2" /> {d}
                    </li>
                  ))}
                </ul>
              </Link>
            );
          })}
        </div>
      </section>

      {/* FORM DI CONTATTO CENTRATO */}
      <section id="contatti" className="py-24 px-6 container mx-auto max-w-xl text-center flex flex-col items-center">
        <h2 className="text-4xl font-black mb-6">Pronto a iniziare?</h2>
        <p className="text-slate-400 mb-12">Parlaci del tuo progetto. Risponderemo entro 24 ore.</p>
        
        <form className="w-full grid gap-4">
          <input type="text" placeholder="Nome" className="w-full p-4 bg-purple-950/20 border border-purple-500/20 rounded-xl text-center focus:outline-none focus:border-purple-400" />
          <input type="email" placeholder="Email" className="w-full p-4 bg-purple-950/20 border border-purple-500/20 rounded-xl text-center focus:outline-none focus:border-purple-400" />
          <textarea placeholder="Raccontaci un pò del tuo progetto!" rows={4} className="w-full p-4 bg-purple-950/20 border border-purple-500/20 rounded-xl text-center focus:outline-none focus:border-purple-400" />
          <button className="w-full py-4 bg-purple-600 hover:bg-purple-500 rounded-xl font-bold flex items-center justify-center transition-all">
            Invia Richiesta <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </form>
      </section>
    </main>
  );
}