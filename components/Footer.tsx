import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin } from 'lucide-react';
import { NAV_LINKS, SITE_CONFIG, getWhatsAppLink } from '@/data/experiences';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-paradise-dark text-white/60 py-16 border-t border-white/10">
      <div className="pointer-events-none absolute -top-24 -left-24 w-72 h-72 rounded-full bg-paradise-orange/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-paradise-blue/10 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/10">

          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-11 h-11 rounded-full overflow-hidden shadow-md ring-2 ring-white/10 shrink-0">
                <Image src="/logo.png" alt="Paradise Sup&Surf" fill sizes="44px" className="object-cover" />
              </div>
              <span className="text-2xl font-bold text-white tracking-tight">
                Paradise <span className="text-paradise-orange">Sup&Surf</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed max-w-md mb-6 text-white/60">
              Escola de Surf e expedições de natureza autêntica no Rio de Janeiro. Conectando pessoas através do esporte, da cultura carioca e do respeito ao meio ambiente.
            </p>
            <div className="flex items-center gap-2 text-sm text-white/70">
              <MapPin className="w-4 h-4 text-paradise-orange" />
              <span>{SITE_CONFIG.city}</span>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Experiências</h4>
            <ul className="space-y-2.5 text-sm">
              {NAV_LINKS.slice(1).map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-paradise-orange transition">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Contato & Reservas</h4>
            <p className="text-xs text-white/60 mb-4 leading-relaxed">
              Atendimento diário para marcação de aulas particulares, grupos, trilhas e expedições.
            </p>
            <a
              href={getWhatsAppLink("Olá! Gostaria de tirar dúvidas com a equipe da Paradise Sup&Surf.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full py-2.5 rounded-lg bg-paradise-orange text-white font-semibold text-sm hover:bg-paradise-orangeDark transition"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-white/40 gap-4">
          <p>© {new Date().getFullYear()} Paradise Sup&Surf. Todos os direitos reservados.</p>
          <p>Feito para quem ama o estilo de vida solar do Rio.</p>
          <a
            href="https://www.rixxer.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-paradise-orange transition"
          >
            Desenvolvido por Rixxer
          </a>
        </div>
      </div>
    </footer>
  );
}