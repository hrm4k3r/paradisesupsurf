"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, MessageCircle } from 'lucide-react';
import { NAV_LINKS, getWhatsAppLink } from '@/data/experiences';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-orange-100 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-12 h-12 rounded-full overflow-hidden shadow-md ring-2 ring-paradise-orange/30 group-hover:scale-105 transition-transform">
            <Image 
              src="/logo.png" 
              alt="Paradise Sup&Surf" 
              fill 
              sizes="48px"
              className="object-cover"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="font-black text-xl tracking-tight text-paradise-dark leading-none">
              PARADISE
            </span>
            <span className="font-bold text-xs tracking-widest text-paradise-orange uppercase mt-0.5">
              Sup & Surf Rio
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center gap-6 text-sm font-medium text-slate-700">
          {NAV_LINKS.map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              className="hover:text-paradise-orange transition font-semibold"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden sm:flex items-center">
          <a
            href={getWhatsAppLink("Olá! Gostaria de falar com a equipe da Paradise Sup&Surf.")}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-paradise-orange hover:bg-paradise-orangeDark text-white px-5 py-2.5 rounded-full text-sm font-bold transition shadow-md shadow-paradise-orange/25 active:scale-95"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Falar no WhatsApp</span>
          </a>
        </div>

        {/* Toggle Mobile */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="xl:hidden p-2 rounded-lg text-slate-700 hover:bg-orange-50"
          aria-label="Abrir Menu"
        >
          {isOpen ? <X className="w-6 h-6 text-paradise-orange" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="xl:hidden bg-white border-b border-orange-100 px-6 py-6 space-y-4 shadow-xl">
          <nav className="flex flex-col gap-3 text-base font-semibold text-slate-800">
            {NAV_LINKS.map((link) => (
              <Link 
                key={link.href} 
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className="hover:text-paradise-orange py-1 transition"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="pt-4 border-t border-slate-100">
            <a
              href={getWhatsAppLink("Olá! Quero agendar uma experiência com a Paradise.")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex justify-center items-center gap-2 bg-paradise-orange text-white py-3 rounded-xl font-bold"
            >
              <MessageCircle className="w-5 h-5" />
              Chamar no WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}