"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, MessageCircle } from 'lucide-react';
import { NAV_LINKS, getWhatsAppLink } from '@/data/experiences';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-slate-200">
      {/* BARRA DE AVISO */}
      <a
        href={getWhatsAppLink("Olá! Quero agendar uma experiência com a Paradise.")}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-9 bg-[#2b2b2b] text-white text-[11px] font-semibold uppercase tracking-wider leading-9 text-center px-4 truncate"
      >
        Vagas abertas: agende sua aula de surf pelo WhatsApp →
      </a>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 grid grid-cols-[1fr_auto_1fr] items-center">
        {/* Menu Desktop (esquerda) */}
        <nav className="hidden 2xl:flex items-center gap-6 whitespace-nowrap text-[12px] font-semibold uppercase tracking-wider text-[#333]">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-paradise-red transition">
              {link.label}
            </Link>
          ))}
        </nav>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="2xl:hidden justify-self-start p-2 -ml-2 text-[#333]"
          aria-label="Abrir Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* LOGO (centro) */}
        <Link href="/" className="flex items-center gap-3">
          <div className="relative w-10 h-10 rounded-full overflow-hidden">
            <Image src="/logo.png" alt="Paradise Sup&Surf" fill sizes="40px" className="object-cover" priority />
          </div>
          <span className="font-display font-bold text-xl tracking-[0.12em] text-[#2b2b2b] leading-none whitespace-nowrap">
            PARADISE <span className="font-medium">SUP&amp;SURF</span>
          </span>
        </Link>

        {/* CTA (direita) */}
        <div className="justify-self-end">
          <a
            href={getWhatsAppLink("Olá! Gostaria de falar com a equipe da Paradise Sup&Surf.")}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Falar no WhatsApp"
            className="inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-wider text-[#333] hover:text-paradise-red transition"
          >
            <MessageCircle className="w-5 h-5" />
            <span className="hidden sm:inline">WhatsApp</span>
          </a>
        </div>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="2xl:hidden bg-white border-t border-slate-200 px-6 py-6">
          <nav className="flex flex-col gap-4 text-sm font-semibold uppercase tracking-wider text-[#333]">
            {NAV_LINKS.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setIsOpen(false)} className="hover:text-paradise-red transition">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}