"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Mountain, ZoomIn } from "lucide-react";
import Lightbox from "@/components/Lightbox";
import { getWhatsAppLink } from "@/data/experiences";
import type { Trail } from "@/data/trilhas";

export default function TrailCard({ trail }: { trail: Trail }) {
  const [cover, setCover] = useState(0);
  const [open, setOpen] = useState(false);
  const n = trail.images.length;
  const hard = trail.difficulty === "Difícil";

  return (
    <article className="h-full flex flex-col border border-slate-200 bg-white">
      <div className="relative aspect-[4/5] bg-slate-100 overflow-hidden group">
        <button onClick={() => setOpen(true)} aria-label={`Ampliar foto da trilha ${trail.name}`} className="absolute inset-0">
          <Image
            src={trail.images[cover].src}
            alt={trail.images[cover].alt}
            fill
            loading="eager"
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <ZoomIn className="absolute bottom-3 right-3 w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow" />
        </button>
        <span className={`absolute top-3 left-3 px-3 py-1.5 text-[11px] font-bold uppercase tracking-widest ${hard ? "bg-paradise-red text-white" : "bg-white text-[#2b2b2b]"}`}>
          Trilha {trail.difficulty.toLowerCase()}
        </span>
        {n > 1 && (
          <>
            <button onClick={() => setCover((cover - 1 + n) % n)} aria-label="Foto anterior" className="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center bg-black/40 text-white hover:bg-black/70">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={() => setCover((cover + 1) % n)} aria-label="Próxima foto" className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center bg-black/40 text-white hover:bg-black/70">
              <ChevronRight className="w-5 h-5" />
            </button>
            <span className="absolute bottom-3 left-3 text-white text-[11px] font-semibold tracking-widest drop-shadow">
              {cover + 1} / {n}
            </span>
          </>
        )}
      </div>

      <div className="p-6 flex flex-col gap-4 flex-1">
        <div>
          <h3 className="text-2xl font-bold text-paradise-dark flex items-center gap-2">
            <Mountain className="w-5 h-5 shrink-0" /> {trail.name}
          </h3>
          <p className="mt-1 text-sm text-slate-600">Dificuldade: {trail.difficulty}</p>
        </div>
        <div className="mt-auto flex items-end justify-between gap-4">
          <div>
            <span className="block text-[11px] font-bold uppercase tracking-widest text-slate-500">Valor</span>
            <span className="text-2xl font-bold text-paradise-dark whitespace-nowrap">{trail.price}</span>
          </div>
          <a
            href={getWhatsAppLink(`Olá! Quero reservar a trilha ${trail.name} (${trail.price}). Quais as próximas datas?`)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-dark !px-5"
          >
            Reservar
          </a>
        </div>
      </div>

      {open && <Lightbox images={trail.images} index={cover} label={`Trilha ${trail.name}`} onChange={setCover} onClose={() => setOpen(false)} />}
    </article>
  );
}
