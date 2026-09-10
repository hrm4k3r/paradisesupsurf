import React from 'react';
import type { Metadata } from 'next';
import { Waves, Sparkles, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { getWhatsAppLink } from '@/data/experiences';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'Aulas de Surf no Rio de Janeiro',
  description: 'Aulas de surf para iniciantes, turistas, grupos e evolução técnica no Rio de Janeiro. Equipamento incluso e instrutores qualificados.',
};

export default function AulasDeSurfPage() {
  return (
    <main>
      <PageHero
        kicker="Atividade Principal"
        title="Aulas de Surf no Rio: Do Zero à Sua Melhor Onda"
        subtitle="Mais que um esporte, o surf é um ritual de conexão com o mar e o estilo de vida carioca. Nossa metodologia prioriza sua segurança, conforto e aprendizado prático desde o primeiro dia."
        imageSrc="https://images.unsplash.com/photo-1502933691298-84fc14542831?auto=format&fit=crop&w=1800&q=80"
        imageAlt="Pés sobre prancha de surf cortando onda azul-turquesa"
        ctaHref={getWhatsAppLink("Olá! Quero agendar uma aula de surf.")}
        ctaLabel="Agendar Minha Aula"
      />

      {/* Grid de Modalidades */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-3 gap-8 py-20">
        <Reveal delay={0}>
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between h-full hover:shadow-lg transition-shadow">
            <div>
              <div className="w-12 h-12 rounded-xl bg-paradise-orangeLight flex items-center justify-center text-paradise-orange mb-6">
                <Waves className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Iniciantes: Sua 1ª Vez</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Para quem nunca subiu numa prancha ou tem receio do mar. Foco em estabilidade, segurança na arrebentação e técnica correta de remada e subida.
              </p>
              <ul className="space-y-2 text-sm text-slate-600 mb-6">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Pranchas softboard estáveis</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Treinamento teórico na areia</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Instrutor ao seu lado na água</li>
              </ul>
            </div>
            <a
              href={getWhatsAppLink("Olá! Sou iniciante e gostaria de agendar uma aula de surf.")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-3 bg-paradise-orange text-white rounded-xl font-semibold hover:bg-paradise-orangeDark transition"
            >
              Agendar Aula Iniciante
            </a>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="bg-white p-8 rounded-2xl border border-paradise-orange/40 ring-2 ring-paradise-orange/20 shadow-lg flex flex-col justify-between h-full">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-paradise-orange bg-paradise-orangeLight px-2.5 py-1 rounded-md">Turistas & Famílias</span>
              <h3 className="text-xl font-bold text-slate-900 mt-4 mb-2">Pequenos Grupos & Turistas</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Uma vivência divertida e descontraída para quem visita o Rio. Grupos limitados a até 4 alunos por instrutor para total atenção e fotos para registrar o momento.
              </p>
              <ul className="space-y-2 text-sm text-slate-600 mb-6">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Instrução em Português ou Inglês</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Registros em foto e vídeo</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Horários flexíveis</li>
              </ul>
            </div>
            <a
              href={getWhatsAppLink("Olá! Somos turistas/um pequeno grupo e queremos agendar uma aula de surf.")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-3 bg-slate-950 text-white rounded-xl font-semibold hover:bg-paradise-orange transition"
            >
              Reservar para Grupo
            </a>
          </div>
        </Reveal>

        <Reveal delay={240}>
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between h-full hover:shadow-lg transition-shadow">
            <div>
              <div className="w-12 h-12 rounded-xl bg-paradise-orangeLight flex items-center justify-center text-paradise-orange mb-6">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Evolução & Performance</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Para quem já pega onda e quer refinar a postura, manobras (batida, rasgada, cutback), leitura de fundo e transição para pranchas de menor litragem.
              </p>
              <ul className="space-y-2 text-sm text-slate-600 mb-6">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Videoanálise pós-queda</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Posicionamento estratégico no pico</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Aulas 1-a-1 personalizadas</li>
              </ul>
            </div>
            <a
              href={getWhatsAppLink("Olá! Já surfo e quero um pacote de evolução técnica com a Paradise.")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-3 bg-paradise-orange text-white rounded-xl font-semibold hover:bg-paradise-orangeDark transition"
            >
              Consultar Evolução
            </a>
          </div>
        </Reveal>
      </section>

      {/* Banner de Conversão */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-20">
        <Reveal>
          <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-paradise-blue text-white flex items-center justify-center shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold">Todo equipamento incluso</h2>
                <p className="text-slate-400 mt-2 max-w-xl text-sm">
                  Pranchas adequadas ao seu peso/altura, lycra de proteção UV e cordinha (leash). Você só precisa trazer roupa de banho, protetor solar e disposição!
                </p>
              </div>
            </div>
            <a
              href={getWhatsAppLink("Olá! Quero verificar as datas disponíveis para aula de surf esta semana.")}
              target="_blank"
              rel="noopener noreferrer"
              className="whitespace-nowrap px-8 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold transition"
            >
              Ver Dias e Vagas Disponíveis
            </a>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
