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
import JsonLd from '@/lib/jsonld';
import { FAQS } from '@/data/faq';
import Gallery from '@/components/Gallery';
import { HOME_GALLERY } from '@/data/galleries';

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
    <main className="bg-white">
      {/* HERO TELA CHEIA */}
      <section className="relative h-[80vh] min-h-[520px] w-full overflow-hidden bg-[#2b2b2b]">
        <Image
          src="/images/hero-surf.jpg"
          alt="Surfista na onda ao entardecer no Rio"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative h-full max-w-4xl mx-auto px-4 sm:px-6 flex flex-col items-center justify-center text-center animate-fade-up">
          <h1 className="text-4xl sm:text-6xl font-bold text-white leading-[1.05] text-balance">
            Sinta a energia do mar. Viva o estilo Paradise.
          </h1>
          <p className="mt-6 text-base sm:text-lg text-white/90 max-w-2xl leading-relaxed">
            Aulas de surf para iniciantes e quem quer evoluir, além de vivências únicas no amanhecer, trilhas panorâmicas, cachoeiras e praias secretas no Rio.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/aulas-de-surf" className="btn btn-light">Ver Aulas de Surf</Link>
            <a
              href={getWhatsAppLink("Olá! Gostaria de tirar dúvidas com a equipe da Paradise.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              Falar com a Equipe
            </a>
          </div>
        </div>
      </section>

      {/* FAIXA DE DIFERENCIAIS */}
      <section className="border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 flex flex-wrap justify-center gap-x-10 gap-y-2 text-[11px] font-semibold uppercase tracking-widest text-[#333]">
          <span>Instrutores Qualificados</span>
          <span>Equipamento Incluso</span>
          <span>Fotos da Experiência</span>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-paradise-red font-bold uppercase tracking-widest text-[11px]">Simples Assim</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-paradise-dark mt-2">Como Funciona</h2>
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
                <div className="relative p-8 rounded-2xl border border-slate-200 bg-[#F4F4F4] h-full">
                  <span className="absolute top-6 right-6 text-4xl font-bold text-[#333]/10">
                    {item.step}
                  </span>
                  <div className="w-12 h-12 rounded-xl bg-paradise-orange text-white flex items-center justify-center mb-6">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-paradise-dark text-lg mb-2">{item.title}</h3>
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
                <span className="text-paradise-red font-bold uppercase tracking-widest text-[11px]">Atividade Principal</span>
                <h2 className="text-3xl sm:text-4xl font-bold text-paradise-dark mt-1">Aulas de Surf Paradise</h2>
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
              <div className="p-8 rounded-2xl bg-[#F4F4F4] border border-slate-200 flex flex-col justify-between h-full hover:border-[#333] transition-colors">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-paradise-orange text-white flex items-center justify-center mb-6">
                    <Waves className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-paradise-dark text-xl mb-2">Para Iniciantes</h3>
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
              <div className="p-8 rounded-2xl bg-[#F4F4F4] border border-slate-200 flex flex-col justify-between h-full hover:border-[#333] transition-colors">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-paradise-blue text-white flex items-center justify-center mb-6">
                    <SunMedium className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-paradise-dark text-xl mb-2">Turistas e Grupos</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Experiência descontraída e segura para amigos ou famílias que querem sentir a verdadeira vibe da praia no Rio.
                  </p>
                </div>
                <Link href="/aulas-de-surf" className="mt-6 text-sm font-bold text-white inline-flex items-center gap-1">
                  Ver detalhes <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </Reveal>

            <Reveal delay={240}>
              <div className="p-8 rounded-2xl bg-[#2b2b2b] text-white flex flex-col justify-between h-full hover:border-[#333] transition-colors">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-paradise-blue text-white flex items-center justify-center mb-6">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-xl mb-2">Evolução Técnica</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Aperfeiçoe suas manobras, remada, posicionamento no pico e transição de prancha com análise do instrutor.
                  </p>
                </div>
                <Link href="/aulas-de-surf" className="mt-6 text-sm font-bold text-white inline-flex items-center gap-1">
                  Ver evolução <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* GRADE DE EXPERIÊNCIAS SECUNDÁRIAS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-paradise-red font-bold uppercase tracking-widest text-[11px]">Rio Outdoor & Vivências</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-paradise-dark mt-2">Escolha Sua Próxima Aventura</h2>
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
                    className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-[#333] transition-colors block h-full"
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
                      <div className="absolute bottom-3 left-4 w-10 h-10 rounded-xl bg-white flex items-center justify-center text-[#333]">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>
                    <div className="p-7">
                      <h3 className="text-xl font-bold text-paradise-dark group-hover:text-paradise-red transition">
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
              <div className="bg-[#2b2b2b] p-7 text-white flex flex-col justify-between h-full">
                <div>
                  <span className="text-xs text-white/70 font-bold uppercase tracking-wider">Experiência VIP</span>
                  <h3 className="text-xl font-bold mt-2 mb-2">Roteiro Completo no Rio</h3>
                  <p className="text-white/80 text-sm leading-relaxed">
                    Combine surf ou SUP pela manhã e trilha ou cachoeira à tarde com logística organizada pela nossa equipe.
                  </p>
                </div>
                <a
                  href={getWhatsAppLink("Olá! Gostaria de montar um combo com mais de uma experiência!")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 btn btn-light"
                >
                  Falar com Especialista
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <Gallery kicker="Momentos Paradise" title="Veja Como É Viver o Rio com a Gente" images={HOME_GALLERY} />

      {/* FAQ */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-4">
              <span className="text-paradise-red font-bold uppercase tracking-widest text-[11px]">Dúvidas Frequentes</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-paradise-dark mt-2">Tudo o que Você Precisa Saber</h2>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <JsonLd data={{ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: FAQS.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) }} />
            <Faq />
          </Reveal>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Reveal>
            <div className="relative overflow-hidden bg-[#2b2b2b] px-8 py-14 sm:px-16 sm:py-20 text-center">
              <div className="pointer-events-none absolute -top-16 -left-16 w-72 h-72 rounded-full bg-paradise-orange/20 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-16 -right-16 w-72 h-72 rounded-full bg-paradise-blue/20 blur-3xl" />
              <div className="relative">
                <span className="text-white/70 text-xs font-bold uppercase tracking-widest">Bora pro Mar?</span>
                <h2 className="text-3xl sm:text-5xl font-bold text-white mt-3 max-w-2xl mx-auto text-balance">
                  Seu próximo dia inesquecível no Rio começa com uma mensagem.
                </h2>
                <a
                  href={getWhatsAppLink("Olá! Vim pelo site da Paradise e quero agendar minha experiência.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 btn btn-light"
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
