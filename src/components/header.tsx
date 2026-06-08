// components/Header.tsx
"use client"

import { useState } from "react" 
import Link from "next/link"
import Image from "next/image"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Servizi", href: "/servizi" },
    { name: "Contatti", href: "/contatti" },
  ]

  return (
    <header className="w-full bg-black border-b border-purple-500/20 z-50 shadow-lg shadow-purple-950/20 backdrop-blur-md">
      {/* MODIFICATO: py-3 su mobile (molto più compatto) e py-4 su desktop */}
      <div className="container mx-auto px-6 py-3 md:py-4 flex flex-col md:flex-row items-center justify-between gap-2 md:gap-4">
        
        {/* SEZIONE LOGO & MOBILE LAYER */}
        {/* MODIFICATO: relative e justify-center su mobile per tenere il logo perfettamente in mezzo senza interferenze */}
        <div className="w-full md:w-auto flex items-center justify-center md:justify-start relative py-1">
          
          {/* Logo: Centrato millimetricamente su mobile, a sinistra su PC */}
          <Link href="/" className="flex flex-col items-center group">
            {/* Ridotte leggermente le dimensioni su mobile (w-14 h-14) per non soffocare lo schermo */}
            <div className="relative w-14 h-14 md:w-20 md:h-20 transition-transform duration-300 group-hover:scale-105 filter drop-shadow-[0_0_25px_rgba(168,85,247,0.35)]">
              <Image 
                src="/icon.png" 
                alt="PurpleLabs Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Hamburger Menu Mobile: ancorato a destra in modo assoluto così non sposta il logo dal centro */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-purple-400 md:hidden p-1 absolute right-0 top-1/2 -translate-y-1/2 z-50"
            aria-label="Toggle menu"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* NAVBAR CENTRALE */}
        {/* MODIFICATO: mt-3 su mobile per distanziarla meno dal logo ed eliminare il vuoto */}
        <nav className={`w-full md:flex md:flex-1 md:justify-center ${isOpen ? "block" : "hidden"} mt-3 md:mt-0`}>
          <ul className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-8 py-1 w-full max-w-4xl">
            {navLinks.map((link) => (
              <li key={link.name} className="w-full md:w-auto">
                <Link
                  href={link.href}
                  className="block text-center rounded-xl px-8 py-2.5 md:py-3 text-lg font-bold text-slate-400 tracking-wide
                             bg-purple-950/10 border border-purple-500/5
                             hover:text-purple-300 hover:bg-purple-950/40 hover:border-purple-500/30
                             hover:shadow-[0_0_20px_rgba(168,85,247,0.2)]
                             transition-all duration-200 transform hover:-translate-y-0.5"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Dummy div per il bilanciamento del flex su desktop */}
        <div className="hidden md:block w-20"></div>

      </div>
    </header>
  )
}