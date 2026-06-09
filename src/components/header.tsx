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
    <header className="w-full bg-black/80 border-b border-purple-500/20 z-50 shadow-lg shadow-purple-950/10 backdrop-blur-md fixed top-0 left-0 right-0 h-20 md:h-24 flex items-center">
      <div className="container mx-auto px-6 relative flex items-center justify-center md:justify-between w-full">
        
        {/* LOGO: Ancorato a sinistra su PC, centrato su mobile senza spostare i link */}
        <div className="absolute left-6 md:static flex items-center justify-center shrink-0">
          <Link href="/" className="flex items-center group">
            <div className="relative w-14 h-14 md:w-20 md:h-20 transition-transform duration-300 group-hover:scale-105 filter drop-shadow-[0_0_20px_rgba(168,85,247,0.3)]">
              <Image 
                src="/icon.png" 
                alt="PurpleLabs Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>
        </div>

        {/* NAVBAR CENTRATA AL MILLIMETRO SU PC */}
        <nav className={`
          absolute top-20 left-0 w-full bg-black/95 border-b border-purple-500/10 p-6 md:p-0
          md:static md:w-auto md:bg-transparent md:border-none md:flex md:mx-auto
          ${isOpen ? "block" : "hidden"}
        `}>
          <ul className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 w-full whitespace-nowrap">
            {navLinks.map((link) => (
              <li key={link.name} className="w-full md:w-auto">
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-center rounded-xl px-5 py-2 text-base font-bold text-slate-400 tracking-wide
                             bg-purple-950/15 border border-purple-500/5
                             hover:text-purple-300 hover:bg-purple-950/40 hover:border-purple-500/20
                             transition-all duration-200"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Hamburger Menu Mobile (allineato a destra) */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="text-purple-400 md:hidden p-1 absolute right-6 top-1/2 -translate-y-1/2 z-50"
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

        {/* Spacer invisibile per tenere la navbar in mezzo su desktop */}
        <div className="hidden md:block w-20 pointer-events-none opacity-0"></div>
      </div>
    </header>
  )
}