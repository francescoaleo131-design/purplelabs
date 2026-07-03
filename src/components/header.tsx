"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion"; // Assicurati di avere framer-motion

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    { name: "Home", href: "/coming-soon" },
    { name: "Portfolio", href: "/coming-soon" },
    { name: "Servizi", href: "/coming-soon" },
    { name: "Contatti", href: "/coming-soon" },
  ];

  return (
    <header className="w-full absolute top-0 left-0 z-50 h-24 flex items-center bg-transparent">
      <div className="container mx-auto px-6 flex items-center justify-between w-full">
        <Link href="/" className="flex items-center group z-50">
          <div className="relative w-40 h-40 transition-transform duration-300 group-hover:scale-105">
            <Image src="/icon.webp" alt="PurpleLabs Logo" fill className="object-contain" priority />
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link href={link.href} className="text-base font-bold text-slate-400 hover:text-purple-300 transition-colors">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-purple-400 z-50 relative">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden absolute top-0 left-0 w-full h-screen bg-black flex flex-col items-center justify-center gap-8 z-40"
            >
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className="text-3xl font-black text-white hover:text-purple-400 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}