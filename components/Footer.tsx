import React from 'react';
import Link from 'next/link';
import { Waves, MapPin } from 'lucide-react';
import { NAV_LINKS, SITE_CONFIG, getWhatsAppLink } from '@/data/experiences';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Waves className="w-7 h-7 text-paradise-sun" />
              <span className="text-2xl font-bold text-white tracking-tight">
                Paradise <span className="text-paradise-sun">Sup&Surf</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed max-w-md mb-6 text-slate-400">
              Escola de Surf e expedições de natureza autêntica no Rio de Janeiro. Conectando pessoas através do esporte, da cultura carioca e do respeito ao meio ambiente.
            </p>
            <div className="flex items-center gap-2 text-sm text-slate-300">
              <MapPin className="w-4 h-4 text-paradise-sun" />
              <span>{SITE_CONFIG.city}</span>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Experiências</h4>
            <ul className="space-y-2.5 text-sm">
              {NAV_LINKS.slice(1).map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-paradise-sun transition">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Contato & Reservas</h4>
            <p className="text-xs text-slate-400 mb-4 leading-relaxed">
              Atendimento diário para marcação de aulas particulares, grupos, trilhas e expedições.
            </p>
            <a
              href={getWhatsAppLink("Olá! Gostaria de tirar dúvidas com a equipe da Paradise Sup&Surf.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full py-2.5 rounded-lg bg-emerald-600 text-white font-semibold text-sm hover:bg-emerald-500 transition"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Paradise Sup&Surf. Todos os direitos reservados.</p>
          <p>Feito para quem ama o estilo de vida solar do Rio.</p>
        </div>
      </div>
    </footer>
  );
}