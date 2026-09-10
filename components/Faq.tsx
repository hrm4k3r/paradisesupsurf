"use client";

import React, { useState } from "react";
import { Plus } from "lucide-react";

const FAQS = [
  {
    q: "Preciso saber nadar para participar?",
    a: "Recomendamos que sim, um nado básico de sobrevivência. Nas aulas de surf e SUP trabalhamos sempre próximo à arrebentação, com prancha e leash, e o instrutor fica ao seu lado na água. Já as praias secretas e cachoeiras exigem apenas conforto ao entrar na água.",
  },
  {
    q: "O que devo levar para a experiência?",
    a: "Roupa de banho, protetor solar, toalha e disposição! O equipamento específico de cada atividade (prancha, colete, lycra) já está incluso. Para trilhas, indicamos tênis fechado e uma garrafa de água.",
  },
  {
    q: "As aulas e passeios têm fotos e vídeos inclusos?",
    a: "Sim, sempre que possível registramos momentos da sua experiência para você guardar de recordação, especialmente nos grupos de turistas e no Tour Cultural.",
  },
  {
    q: "Como funciona o agendamento?",
    a: "Todo o agendamento é feito diretamente pelo WhatsApp. Você conta o que procura, sugerimos as melhores datas e horários de acordo com maré, vento e disponibilidade, e confirmamos sua vaga.",
  },
  {
    q: "Vocês atendem grupos, famílias e crianças?",
    a: "Sim! Montamos experiências para grupos, famílias e crianças (a partir da idade recomendada para cada atividade). É só nos contar o perfil do grupo que adaptamos o roteiro.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="max-w-3xl mx-auto divide-y divide-slate-200 border-t border-b border-slate-200">
      {FAQS.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={item.q}>
            <button
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="w-full flex items-center justify-between gap-4 py-6 text-left"
              aria-expanded={isOpen}
            >
              <span className="font-bold text-paradise-dark text-base sm:text-lg">
                {item.q}
              </span>
              <Plus
                className={`w-5 h-5 shrink-0 text-paradise-orange transition-transform duration-300 ${
                  isOpen ? "rotate-45" : ""
                }`}
              />
            </button>
            <div
              className={`grid transition-all duration-300 ease-out ${
                isOpen ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"
              }`}
              style={{ display: "grid" }}
            >
              <div className="overflow-hidden">
                <p className="text-slate-600 text-sm leading-relaxed pr-8">
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
