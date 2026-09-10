import React from 'react';
import type { Metadata } from 'next';
import { HeartHandshake, Eye, BookOpen } from 'lucide-react';
import { getWhatsAppLink } from '@/data/experiences';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'Tour Cultural pela Comunidade no Rio',
  description: 'Tour cultural respeitoso e autêntico pela comunidade carioca: história, gastronomia, artistas locais e mirantes privilegiados.',
};

export default function TourCulturalPage() {
  return (
    <main>
      <PageHero
        kicker="Cultura & Identidade Viva"
        title="Tour Cultural pela Comunidade: O Outro Lado do Rio"
        subtitle='Uma experiência legítima, respeitosa e transformadora. Nosso objetivo não é "visitar a favela", mas sim valorizar a história de luta, as pessoas, a culinária, os artistas locais e mirantes privilegiados.'
        imageSrc="/images/tour-cultural-comunidade.jpg"
        imageAlt="Vista aérea de comunidade no morro cercada pela Mata Atlântica no Rio de Janeiro"
        badgeClass="bg-paradise-rose/90 text-white"
        ctaHref={getWhatsAppLink("Olá! Gostaria de entender mais detalhes e agendar o Tour Cultural pela Comunidade.")}
        ctaLabel="Falar com o Guia Cultural"
        ctaClass="bg-paradise-rose hover:bg-paradise-roseDark text-white"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
        <div className="grid md:grid-cols-3 gap-8">
          <Reveal delay={0}>
            <div className="bg-white p-8 rounded-2xl border border-slate-200 h-full hover:shadow-lg transition-shadow">
              <HeartHandshake className="w-10 h-10 text-paradise-rose mb-4" />
              <h3 className="text-lg font-bold text-slate-900 mb-2">Respeito & Impacto Local</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Guias nascidos e criados no local. Cada visita apoia diretamente o comércio, pequenos restaurantes e iniciativas culturais da comunidade.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="bg-white p-8 rounded-2xl border border-slate-200 h-full hover:shadow-lg transition-shadow">
              <BookOpen className="w-10 h-10 text-paradise-rose mb-4" />
              <h3 className="text-lg font-bold text-slate-900 mb-2">História e Resistência</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Conheça as raízes do samba, a arquitetura orgânica e as histórias contadas por quem realmente vive e constrói a identidade da cidade.
              </p>
            </div>
          </Reveal>

          <Reveal delay={240}>
            <div className="bg-white p-8 rounded-2xl border border-slate-200 h-full hover:shadow-lg transition-shadow">
              <Eye className="w-10 h-10 text-paradise-rose mb-4" />
              <h3 className="text-lg font-bold text-slate-900 mb-2">Mirantes Inesquecíveis</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Ângulos cinematográficos do Rio de Janeiro que nenhum hotel 5 estrelas consegue oferecer, com vista aberta para a orla e montanhas.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <div className="mt-8 bg-slate-100 rounded-3xl p-8 sm:p-12 border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Quer viver uma experiência cultural autêntica?</h2>
              <p className="text-slate-600 text-sm mt-2 max-w-xl">
                Organizamos grupos reduzidos para garantir discrição, segurança e um diálogo genuíno com os moradores.
              </p>
            </div>
            <a
              href={getWhatsAppLink("Olá! Gostaria de entender mais detalhes e agendar o Tour Cultural pela Comunidade.")}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-xl bg-slate-900 hover:bg-paradise-rose text-white font-bold transition whitespace-nowrap"
            >
              Falar com o Guia Cultural
            </a>
          </div>
        </Reveal>
      </div>
    </main>
  );
}
