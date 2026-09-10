import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Waves,
  Sunrise,
  HeartHandshake,
  Mountain,
  Droplets,
  Compass,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  SunMedium,
  MessageCircle,
  CalendarCheck,
  PartyPopper,
} from 'lucide-react';
import { getWhatsAppLink, EXPERIENCES } from '@/data/experiences';
import Reveal from '@/components/Reveal';
import Faq from '@/components/Faq';

const EXPERIENCE_ICONS = {
  'aulas-de-surf': Waves,
  'stand-up-paddle-amanhecer': Sunrise,
  'tour-cultural-comunidade': HeartHandshake,
  'trilhas-e-mirantes': Mountain,
  'expedicao-cachoeiras': Droplets,
  'praias-secretas': Compass,
} as const;

export default function HomePage() {
  return (
    <main className="bg-[#FFFDFB]">
      {/* HERO SECTION COM DEGRADÊ WARM TROPICAL */}
      <section className="relative py-16 md:py-28 bg-gradient-to-b from-paradise-orangeLight via-white to-[#FFFDFB] overflow-hidden">
        <div className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 rounded-full bg-paradise-orange/10 blur-3xl" />
        <div className="pointer-events-none absolute top-1/2 -left-32 w-80 h-80 rounded-full bg-paradise-blue/10 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-12 gap-12 items-center">

          <div className="lg:col-span-7 animate-fade-up">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-paradise-orange/10 text-paradise-orange text-xs font-black uppercase tracking-wider mb-6">
              <SunMedium className="w-4 h-4 text-paradise-orange" /> Escola de Surf & Conexão no Rio
            </span>
            <h1 className="text-4xl sm:text-6xl font-black text-paradise-dark leading-tight tracking-tight text-balance">
              Sinta a energia do mar e descubra o <span className="text-paradise-orange underline decoration-paradise-blue decoration-wavy decoration-2">estilo Paradise.</span>
            </h1>
            <p className="mt-6 text-lg text-slate-700 leading-relaxed max-w-xl">
              Aulas de surf desenhadas para iniciantes e quem quer evoluir no mar, além de vivências únicas no amanhecer, trilhas panorâmicas, cachoeiras e praias secretas.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/aulas-de-surf"
                className="px-8 py-4 rounded-xl bg-paradise-orange text-white font-bold shadow-lg shadow-paradise-orange/30 hover:bg-paradise-orangeDark hover:-translate-y-0.5 transition active:scale-95"
              >
                Ver Aulas de Surf
              </Link>
              <a
                href={getWhatsAppLink("Olá! Gostaria de tirar dúvidas com a equipe da Paradise.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white border-2 border-slate-200 text-paradise-dark font-bold hover:border-paradise-orange hover:-translate-y-0.5 transition"
              >
                <MessageCircle className="w-4 h-4 text-emerald-500" /> Falar com a Equipe
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-slate-600 font-semibold">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-paradise-blue" />
                <span>Instrutores Qualificados</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-paradise-blue" />
                <span>Equipamento Incluso</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-paradise-blue" />
                <span>Fotos da Experiência</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-paradise-blue/30 to-paradise-orange/20 blur-2xl" />
            <div className="relative aspect-square max-w-md mx-auto rounded-3xl overflow-hidden shadow-2xl ring-8 ring-white bg-slate-900 animate-float">
              <Image
                src="/images/hero-surf.jpg"
                alt="Surfista na onda ao entardecer no Rio"
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 480px"
                className="object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-paradise-dark/80 via-transparent to-transparent flex items-end p-8">
                <div>
                  <span className="text-paradise-orange text-xs font-black uppercase tracking-widest">Natureza & Diversão</span>
                  <p className="text-white text-lg font-bold mt-1">
                    &ldquo;O Rio visto de dentro da água tem uma energia indescritível.&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-paradise-orange font-black uppercase tracking-wider text-xs">Simples Assim</span>
              <h2 className="text-3xl sm:text-4xl font-black text-paradise-dark mt-2">Como Funciona</h2>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-3 gap-8">
            {[
              {
                icon: MessageCircle,
                step: '01',
                title: 'Chame no WhatsApp',
                text: 'Conte pra gente o que você procura: nível de experiência, data e tamanho do grupo.',
              },
              {
                icon: CalendarCheck,
                step: '02',
                title: 'Escolha o melhor horário',
                text: 'Sugerimos as janelas ideais de maré, vento e luz para cada atividade e confirmamos sua vaga.',
              },
              {
                icon: PartyPopper,
                step: '03',
                title: 'Viva a experiência',
                text: 'Chegue, aproveite com segurança e leve fotos e memórias do seu dia no Rio.',
              },
            ].map((item, i) => (
              <Reveal key={item.step} delay={i * 120}>
                <div className="relative p-8 rounded-2xl border border-orange-100 bg-orange-50/40 h-full">
                  <span className="absolute top-6 right-6 text-4xl font-black text-paradise-orange/10">
                    {item.step}
                  </span>
                  <div className="w-12 h-12 rounded-xl bg-paradise-orange text-white flex items-center justify-center mb-6">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-extrabold text-paradise-dark text-lg mb-2">{item.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FOCO PRINCIPAL: AULAS DE SURF */}
      <section className="py-20 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Reveal>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
              <div>
                <span className="text-paradise-orange font-bold uppercase tracking-wider text-xs">Atividade Principal</span>
                <h2 className="text-3xl sm:text-4xl font-black text-paradise-dark mt-1">Aulas de Surf Paradise</h2>
                <p className="text-slate-600 mt-2 max-w-xl text-sm leading-relaxed">
                  Metodologia completa focada na segurança, leitura do oceano e rápida adaptação à prancha.
                </p>
              </div>
              <Link
                href="/aulas-de-surf"
                className="inline-flex items-center gap-2 text-paradise-orange font-bold text-sm hover:underline"
              >
                Conhecer detalhes de todas as turmas <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6">
            <Reveal delay={0}>
              <div className="p-8 rounded-2xl bg-orange-50/50 border border-orange-100 flex flex-col justify-between h-full hover:shadow-xl hover:-translate-y-1 transition-all">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-paradise-orange text-white flex items-center justify-center mb-6">
                    <Waves className="w-6 h-6" />
                  </div>
                  <h3 className="font-extrabold text-paradise-dark text-xl mb-2">Para Iniciantes</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Suba na prancha no seu primeiro dia com segurança total, prancha softboard acolchoada e acompanhamento individual no mar.
                  </p>
                </div>
                <Link href="/aulas-de-surf" className="mt-6 text-sm font-bold text-paradise-orange inline-flex items-center gap-1">
                  Ver detalhes <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="p-8 rounded-2xl bg-sky-50/50 border border-sky-100 flex flex-col justify-between h-full hover:shadow-xl hover:-translate-y-1 transition-all">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-paradise-blue text-white flex items-center justify-center mb-6">
                    <SunMedium className="w-6 h-6" />
                  </div>
                  <h3 className="font-extrabold text-paradise-dark text-xl mb-2">Turistas e Grupos</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Experiência descontraída e segura para amigos ou famílias que querem sentir a verdadeira vibe da praia no Rio.
                  </p>
                </div>
                <Link href="/aulas-de-surf" className="mt-6 text-sm font-bold text-paradise-blue inline-flex items-center gap-1">
                  Ver detalhes <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </Reveal>

            <Reveal delay={240}>
              <div className="p-8 rounded-2xl bg-slate-900 text-white flex flex-col justify-between h-full hover:shadow-xl hover:-translate-y-1 transition-all">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-paradise-blue text-white flex items-center justify-center mb-6">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <h3 className="font-extrabold text-xl mb-2">Evolução Técnica</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Aperfeiçoe suas manobras, remada, posicionamento no pico e transição de prancha com análise do instrutor.
                  </p>
                </div>
                <Link href="/aulas-de-surf" className="mt-6 text-sm font-bold text-paradise-blue inline-flex items-center gap-1">
                  Ver evolução <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* GRADE DE EXPERIÊNCIAS SECUNDÁRIAS */}
      <section className="py-24 bg-[#FFFDFB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-paradise-orange font-black uppercase tracking-wider text-xs">Rio Outdoor & Vivências</span>
              <h2 className="text-3xl sm:text-4xl font-black text-paradise-dark mt-2">Escolha Sua Próxima Aventura</h2>
              <p className="text-slate-600 text-sm mt-3">
                Páginas dedicadas para você conhecer os detalhes, horários e proposta de cada vivência no Rio.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {EXPERIENCES.filter((e) => e.slug !== 'aulas-de-surf').map((exp, i) => {
              const Icon = EXPERIENCE_ICONS[exp.slug];
              return (
                <Reveal key={exp.slug} delay={(i % 3) * 120}>
                  <Link
                    href={exp.href}
                    className="group bg-white rounded-2xl overflow-hidden border border-orange-100/80 hover:shadow-xl hover:-translate-y-1 transition-all block h-full"
                  >
                    <div className="relative h-40 w-full overflow-hidden">
                      <Image
                        src={exp.image}
                        alt={exp.imageAlt}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <div className="absolute bottom-3 left-4 w-10 h-10 rounded-xl bg-white/90 backdrop-blur flex items-center justify-center text-paradise-orange shadow-md">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>
                    <div className="p-7">
                      <h3 className="text-xl font-black text-paradise-dark group-hover:text-paradise-orange transition">
                        {exp.label}
                      </h3>
                      <p className="text-slate-600 text-sm mt-2 mb-6 leading-relaxed">
                        {exp.tagline}
                      </p>
                      <span className="text-xs font-bold text-paradise-orange inline-flex items-center gap-1">
                        Página da vivência <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              );
            })}

            {/* Banner Personalizado com as Cores da Logo */}
            <Reveal delay={240}>
              <div className="bg-gradient-to-br from-paradise-orange to-paradise-orangeDark rounded-2xl p-7 text-white flex flex-col justify-between shadow-lg shadow-paradise-orange/20 h-full">
                <div>
                  <span className="text-xs text-white/70 font-black uppercase tracking-wider">Experiência VIP</span>
                  <h3 className="text-xl font-black mt-2 mb-2">Roteiro Completo no Rio</h3>
                  <p className="text-orange-50 text-sm leading-relaxed">
                    Combine surf ou SUP pela manhã e trilha ou cachoeira à tarde com logística organizada pela nossa equipe.
                  </p>
                </div>
                <a
                  href={getWhatsAppLink("Olá! Gostaria de montar um combo com mais de uma experiência!")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 text-center py-3 bg-paradise-dark text-white rounded-xl font-bold text-sm hover:bg-slate-800 transition"
                >
                  Falar com Especialista
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-4">
              <span className="text-paradise-orange font-black uppercase tracking-wider text-xs">Dúvidas Frequentes</span>
              <h2 className="text-3xl sm:text-4xl font-black text-paradise-dark mt-2">Tudo o que Você Precisa Saber</h2>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <Faq />
          </Reveal>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-20 bg-[#FFFDFB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-paradise-dark px-8 py-14 sm:px-16 sm:py-20 text-center">
              <div className="pointer-events-none absolute -top-16 -left-16 w-72 h-72 rounded-full bg-paradise-orange/20 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-16 -right-16 w-72 h-72 rounded-full bg-paradise-blue/20 blur-3xl" />
              <div className="relative">
                <span className="text-paradise-orange text-xs font-black uppercase tracking-widest">Bora pro Mar?</span>
                <h2 className="text-3xl sm:text-5xl font-black text-white mt-3 max-w-2xl mx-auto text-balance">
                  Seu próximo dia inesquecível no Rio começa com uma mensagem.
                </h2>
                <a
                  href={getWhatsAppLink("Olá! Vim pelo site da Paradise e quero agendar minha experiência.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2 px-9 py-4 rounded-xl bg-paradise-orange hover:bg-paradise-orangeDark text-white font-bold shadow-xl shadow-paradise-orange/30 transition active:scale-95"
                >
                  <MessageCircle className="w-5 h-5" /> Chamar no WhatsApp
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
