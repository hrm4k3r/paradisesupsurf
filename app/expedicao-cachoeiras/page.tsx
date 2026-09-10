import React from 'react';
import type { Metadata } from 'next';
import { Droplets, Shield, Sparkles } from 'lucide-react';
import { getWhatsAppLink } from '@/data/experiences';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'Expedição Cachoeiras no Rio de Janeiro',
  description: 'Tours guiados até cachoeiras e poços de água doce na Mata Atlântica do Rio de Janeiro, com níveis de acesso para todos os perfis.',
};

export default function CachoeirasPage() {
  return (
    <main>
      <PageHero
        kicker="Água Doce & Renovação"
        title="Expedição Cachoeiras: Além das Praias"
        subtitle="Muita gente esquece que o Rio abriga uma das maiores florestas urbanas do mundo. Nossos tours de cachoeiras são o refúgio perfeito para recarregar as energias em poços de águas cristalinas."
        imageSrc="https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1800&q=80"
        imageAlt="Cachoeira cercada por floresta densa"
        badgeClass="bg-paradise-blue/90 text-white"
        ctaHref={getWhatsAppLink("Olá! Tenho interesse no tour de cachoeiras. Gostaria de saber os níveis e duração.")}
        ctaLabel="Saber Mais sobre Cachoeiras"
        ctaClass="bg-paradise-blue hover:bg-paradise-blueDark text-white"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
        <div className="grid md:grid-cols-3 gap-8">
          <Reveal delay={0}>
            <div className="bg-white p-8 rounded-2xl border border-slate-200 h-full hover:shadow-lg transition-shadow">
              <Droplets className="w-10 h-10 text-paradise-blue mb-4" />
              <h3 className="text-lg font-bold text-slate-900 mb-2">Banho Revigorante</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Poços naturais de água limpa e fresca para lavar a alma e fugir da rotina barulhenta e do asfalto quente.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="bg-white p-8 rounded-2xl border border-slate-200 h-full hover:shadow-lg transition-shadow">
              <Shield className="w-10 h-10 text-paradise-blue mb-4" />
              <h3 className="text-lg font-bold text-slate-900 mb-2">Segurança em 1º Lugar</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Analisamos as condições climáticas e o volume da água para garantir acessos seguros em pedras e trilhas de aproximação.
              </p>
            </div>
          </Reveal>

          <Reveal delay={240}>
            <div className="bg-white p-8 rounded-2xl border border-slate-200 h-full hover:shadow-lg transition-shadow">
              <Sparkles className="w-10 h-10 text-paradise-blue mb-4" />
              <h3 className="text-lg font-bold text-slate-900 mb-2">Níveis Acessíveis</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Opções com caminhadas curtas de 15 minutos até roteiros imersivos de meio período no meio da floresta.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <div className="mt-8 bg-slate-900 text-white rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-2xl font-bold">Descubra as cachoeiras escondidas do Rio</h2>
              <p className="text-slate-400 text-sm mt-2 max-w-xl">
                Informamos a duração estimada, o nível de esforço físico e o que levar na mochila para seu passeio.
              </p>
            </div>
            <a
              href={getWhatsAppLink("Olá! Tenho interesse no tour de cachoeiras. Gostaria de saber os níveis e duração.")}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-xl bg-paradise-blue hover:bg-paradise-blueDark text-white font-bold transition whitespace-nowrap"
            >
              Saber Mais sobre Cachoeiras
            </a>
          </div>
        </Reveal>
      </div>
    </main>
  );
}
