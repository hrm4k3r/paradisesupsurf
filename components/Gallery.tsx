"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import type { GalleryImage } from "@/data/galleries";

export default function Gallery({
  kicker,
  title,
  images,
}: {
  kicker: string;
  title: string;
  images: GalleryImage[];
}) {
  const [active, setActive] = useState<number | null>(null);
  const track = useRef<HTMLDivElement>(null);
  const touchX = useRef<number | null>(null);
  const total = images.length;

  const scrollTrack = (dir: 1 | -1) => {
    const el = track.current;
    if (el) el.scrollBy({ left: dir * el.clientWidth * 0.85, behavior: "smooth" });
  };

  const go = useCallback(
    (dir: 1 | -1) => setActive((i) => (i === null ? i : (i + dir + total) % total)),
    [total]
  );

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    // pré-carrega vizinhas
    [1, -1].forEach((d) => {
      const img = new window.Image();
      img.src = images[(active + d + total) % total].src;
    });
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [active, go, images, total]);

  return (
    <section className="py-16 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-paradise-red font-bold uppercase tracking-widest text-[11px]">{kicker}</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-paradise-dark mt-1">{title}</h2>
          </div>
          <div className="hidden sm:flex gap-2">
            <button onClick={() => scrollTrack(-1)} aria-label="Fotos anteriores" className="w-11 h-11 border border-slate-300 flex items-center justify-center hover:bg-[#2b2b2b] hover:text-white transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={() => scrollTrack(1)} aria-label="Próximas fotos" className="w-11 h-11 border border-slate-300 flex items-center justify-center hover:bg-[#2b2b2b] hover:text-white transition-colors">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div ref={track} className="flex gap-3 overflow-x-auto snap-x snap-mandatory pb-2 [scrollbar-width:thin]">
          {images.map((img, i) => (
            <button
              key={img.src}
              onClick={() => setActive(i)}
              aria-label={`Ampliar foto ${i + 1} de ${total}`}
              className="group relative shrink-0 snap-start w-[72%] sm:w-[320px] aspect-[4/5] overflow-hidden bg-slate-100"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 640px) 72vw, 320px"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
              <ZoomIn className="absolute bottom-3 right-3 w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow" />
            </button>
          ))}
        </div>
      </div>

      {active !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={title}
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
          onClick={() => setActive(null)}
          onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
          onTouchEnd={(e) => {
            if (touchX.current === null) return;
            const dx = e.changedTouches[0].clientX - touchX.current;
            if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
            touchX.current = null;
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={images[active].src}
            alt={images[active].alt}
            className="max-w-[94vw] max-h-[88vh] object-contain select-none"
            onClick={(e) => e.stopPropagation()}
          />
          <button onClick={() => setActive(null)} aria-label="Fechar" className="absolute top-4 right-4 w-11 h-11 flex items-center justify-center text-white hover:bg-white/10">
            <X className="w-6 h-6" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); go(-1); }}
            aria-label="Foto anterior"
            className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center text-white bg-black/40 hover:bg-white/20"
          >
            <ChevronLeft className="w-7 h-7" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); go(1); }}
            aria-label="Próxima foto"
            className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center text-white bg-black/40 hover:bg-white/20"
          >
            <ChevronRight className="w-7 h-7" />
          </button>
          <span className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/80 text-xs font-semibold tracking-widest">
            {active + 1} / {total}
          </span>
        </div>
      )}
    </section>
  );
}
