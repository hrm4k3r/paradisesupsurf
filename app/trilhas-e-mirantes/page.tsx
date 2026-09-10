import React from 'react';
import type { Metadata } from 'next';
import { Mountain, Footprints } from 'lucide-react';
import { getWhatsAppLink } from '@/data/experiences';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'Trilhas & Mirantes no Rio de Janeiro',
  description: 'Trilhas panorâmicas na Mata Atlântica do Rio de Janeiro com guia credenciado, culminando em mirantes e picos icônicos.',
};

export default function TrilhasPage() {
  return (
    <main>
      <PageHero
        kicker="Mata Atlântica & Aventura"
        title="Trilhas Panorâmicas: O Rio Visto de Cima"
        subtitle="Uma combinação revigorante de atividade física, ar puro e a recompensa de chegar ao cume com vistas panorâmicas de 360° do oceano e da floresta."
        imageSrc="/images/trilhas-e-mirantes.jpg"
        imageAlt="Vista aérea da Baía de Guanabara e Pão de Açúcar no Rio de Janeiro"
        badgeClass="bg-paradise-forest/90 text-white"
        ctaHref={getWhatsAppLink("Olá! Gostaria de consultar os roteiros e datas das trilhas no Rio.")}
        ctaLabel="Consultar Roteiro de Trilhas"
        ctaClass="bg-paradise-forest hover:bg-paradise-forestDark text-white"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
        <div className="grid md:grid-cols-2 gap-8">
          <Reveal delay={0}>
            <div className="bg-white p-8 rounded-2xl border border-slate-200 h-full hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                <Footprints className="w-5 h-5 text-paradise-forest" />
                Caminhadas Mistas & Aventura Leve
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Percursos sombreados sob a copa das árvores centenárias da Mata Atlântica. Nosso foco é tornar a subida um momento de descontração e diversão, no ritmo do grupo.
              </p>
              <span className="text-xs font-semibold text-paradise-forestDark bg-teal-50 px-3 py-1 rounded-full">Nível: Fácil a Moderado</span>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="bg-white p-8 rounded-2xl border border-slate-200 h-full hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                <Mountain className="w-5 h-5 text-paradise-forest" />
                Picos de Alta Visibilidade
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Roteiros que culminam em rochedos e mirantes icônicos (como Morro Dois Irmãos, Pedra Bonita ou Pedra do Telégrafo), com pausa estratégica para fotos e descanso.
              </p>
              <span className="text-xs font-semibold text-paradise-forestDark bg-teal-50 px-3 py-1 rounded-full">Guia credenciado + Kit Primeiros Socorros</span>
            </div>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <div className="mt-8 bg-paradise-forestDark text-white rounded-3xl p-8 sm:p-12 text-center max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold">Pronto para subir a montanha?</h2>
            <p className="text-teal-100 text-sm mt-3 mb-6">
              Montamos roteiros matinais para fugir do calor excessivo, com acompanhamento passo a passo.
            </p>
            <a
              href={getWhatsAppLink("Olá! Gostaria de consultar os roteiros e datas das trilhas no Rio.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 rounded-xl bg-white text-paradise-forestDark font-bold hover:bg-teal-50 transition"
            >
              Consultar Roteiro de Trilhas
            </a>
          </div>
        </Reveal>
      </div>
    </main>
  );
}
