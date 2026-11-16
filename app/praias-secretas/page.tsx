import React from 'react';
import type { Metadata } from 'next';
import { Compass, EyeOff } from 'lucide-react';
import { getWhatsAppLink } from '@/data/experiences';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'Praias Secretas no Rio de Janeiro',
  description: 'Expedições até enseadas preservadas e praias reservadas do Rio de Janeiro, fora dos circuitos turísticos comerciais.',
};

export default function PraiasSecretasPage() {
  return (
    <main>
      <PageHero
        kicker="Fora do Roteiro Óbvio"
        title="Expedição Praias Secretas & Reservadas"
        subtitle="Esqueça as praias lotadas. Conduzimos você até enseadas paradisíacas e recantos protegidos da costa do Rio que a imensa maioria dos turistas nunca teve a oportunidade de pisar."
        imageSrc="/images/praias-secretas.jpg"
        imageAlt="Vista aérea de praia deserta com coqueiro e mar turquesa"
        ctaHref={getWhatsAppLink("Olá! Gostaria de consultar as opções de roteiro para as Praias Secretas no Rio.")}
        ctaLabel="Consultar Expedição Secreta"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
        <div className="grid md:grid-cols-2 gap-8">
          <Reveal delay={0}>
            <div className="bg-white p-8 rounded-2xl border border-slate-200 h-full hover:shadow-lg transition-shadow">
              <Compass className="w-10 h-10 text-paradise-orange mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-2">Sensação de Descoberta</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                O acesso a essas praias muitas vezes exige navegação curta ou trilhas costeiras discretas. O resultado é encontrar faixas de areia limpas, mar transparente e silêncio.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="bg-white p-8 rounded-2xl border border-slate-200 h-full hover:shadow-lg transition-shadow">
              <EyeOff className="w-10 h-10 text-paradise-orange mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-2">Estrutura & Apoio da Equipe</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Nossa equipe planeja a logística completa de ida e volta com segurança, levando equipamentos adequados para você relaxar de verdade.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <div className="mt-8 bg-gradient-to-r from-paradise-orange to-paradise-orangeDark text-white rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold">Viva o Rio dos moradores nativos</h2>
              <p className="text-orange-50 text-sm mt-2 max-w-xl font-medium">
                Vagas restritas para manter o impacto mínimo na natureza e o clima reservado da vivência.
              </p>
            </div>
            <a
              href={getWhatsAppLink("Olá! Gostaria de consultar as opções de roteiro para as Praias Secretas no Rio.")}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-xl bg-slate-950 text-white font-bold hover:bg-slate-800 transition whitespace-nowrap"
            >
              Consultar Expedição Secreta
            </a>
          </div>
        </Reveal>
      </div>
    </main>
  );
}
