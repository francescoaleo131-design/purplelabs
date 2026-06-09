"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Servizi", href: "/servizi" },
    { name: "Contatti", href: "/contatti" },
  ];

  return (
    <header className="w-full absolute top-0 left-0 z-50 h-24 flex items-center bg-transparent">
      <div className="container mx-auto px-6 flex items-center justify-between w-full">
        <div className="flex items-center">
          <Link href="/" className="flex items-center group">
            <div className="relative w-16 h-16 transition-transform duration-300 group-hover:scale-105">
              <Image src="/icon.webp" alt="PurpleLabs Logo" fill className="object-contain" priority />
            </div>
          </Link>
        </div>

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

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-purple-400 z-50">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>
    </header>
  );
}