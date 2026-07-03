"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  { name: "Siti web & Ecommerce", href: "/servizi/web-ecommerce" },
  { name: "SEO & Local SEO", href: "/servizi/seo" },
  { name: "Automazioni", href: "/servizi/automazioni" },
  { name: "Brand Identity", href: "/servizi/brand-identity" },
  { name: "Copywriting & ADV", href: "/servizi/copywriting-adv" },
];

export function ServiceMarquee() {
  return (
    <div className="w-full overflow-hidden py-10">
      <motion.div
        className="flex gap-6 whitespace-nowrap"
        animate={{ x: [0, -1000] }} // Muove la striscia verso sinistra (o destra cambiando il segno)
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        {/* Duplichiamo l'array per garantire un loop infinito senza interruzioni */}
        {[...services, ...services, ...services].map((service, index) => (
          <Link
            key={index}
            href={service.href}
            className="px-8 py-4 bg-purple-950/20 border border-purple-500/20 rounded-xl 
                       text-slate-300 font-bold hover:text-white hover:bg-purple-950/50 
                       hover:border-purple-400/50 transition-all duration-300 cursor-pointer"
          >
            {service.name}
          </Link>
        ))}
      </motion.div>
    </div>
  );
}