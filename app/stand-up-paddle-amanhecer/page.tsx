import React from 'react';
import type { Metadata } from 'next';
import { Sunrise, Sparkles, Clock } from 'lucide-react';
import { getWhatsAppLink } from '@/data/experiences';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'Stand Up Paddle no Amanhecer',
  description: 'Remada de Stand Up Paddle ao nascer do sol no Rio de Janeiro. Mar calmo, luz dourada e uma experiência contemplativa única.',
};

export default function SupAmanhecerPage() {
  return (
    <main>
      <PageHero
        kicker="Paz, Natureza & Conexão"
        title="Stand Up Paddle no Amanhecer Carioca"
        subtitle="Uma experiência contemplativa pensada para desacelerar. O mar calmo como um espelho e os tons dourados do nascer do sol criam uma percepção única da cidade maravilhosa."
        imageSrc="https://images.unsplash.com/photo-1601283261983-543e77949437?auto=format&fit=crop&w=1800&q=80"
        imageAlt="Silhueta de pessoa em stand up paddle sobre água calma e dourada ao entardecer"
        badgeClass="bg-paradise-orange/90 text-white"
        ctaHref={getWhatsAppLink("Olá! Quero saber as próximas datas e vagas para a remada de SUP ao amanhecer.")}
        ctaLabel="Reservar Meu Lugar"
        ctaClass="bg-paradise-orange hover:bg-paradise-orangeDark text-white"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
        <div className="grid md:grid-cols-3 gap-8">
          <Reveal delay={0}>
            <div className="bg-white p-8 rounded-2xl border border-slate-200 h-full hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-sky-100 flex items-center justify-center text-paradise-blue mb-6">
                <Sunrise className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">O Mar em Estado Perfeito</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Nas primeiras horas do dia, a ausência quase total de vento torna o mar liso como uma piscina, facilitando o equilíbrio mesmo para quem nunca subiu em uma prancha de SUP.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="bg-white p-8 rounded-2xl border border-slate-200 h-full hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-paradise-orangeLight flex items-center justify-center text-paradise-orange mb-6">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Silêncio e Conexão Interior</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Longe do barulho dos carros e da agitação dos calçadões. Estar dentro d&apos;água enquanto a cidade acorda desperta sentimentos profundos de gratidão e bem-estar.
              </p>
            </div>
          </Reveal>

          <Reveal delay={240}>
            <div className="bg-white p-8 rounded-2xl border border-slate-200 h-full hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600 mb-6">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Horário e Duração</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Início antes das primeiras luzes (geralmente entre 05:30 e 06:00, dependendo da época do ano). Sessão com cerca de 1h30 a 2h de vivência guiada.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <div className="mt-8 bg-gradient-to-br from-paradise-orange to-paradise-orangeDark text-white rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-black">Pronto para ver o Rio acordar?</h2>
              <p className="mt-2 max-w-xl text-sm font-medium text-orange-50">
                Vagas limitadas por sessão para manter a tranquilidade da experiência. Equipamento completo incluso.
              </p>
            </div>
            <a
              href={getWhatsAppLink("Olá! Quero saber as próximas datas e vagas para a remada de SUP ao amanhecer.")}
              target="_blank"
              rel="noopener noreferrer"
              className="whitespace-nowrap px-8 py-4 rounded-xl bg-paradise-dark hover:bg-slate-800 text-white font-bold transition"
            >
              Reservar Meu Lugar
            </a>
          </div>
        </Reveal>
      </div>
    </main>
  );
}
