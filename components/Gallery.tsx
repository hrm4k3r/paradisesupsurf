"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import type { GalleryImage } from "@/data/galleries";
import Lightbox from "@/components/Lightbox";

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
  const total = images.length;

  const scrollTrack = (dir: 1 | -1) => {
    const el = track.current;
    if (el) el.scrollBy({ left: dir * el.clientWidth * 0.85, behavior: "smooth" });
  };

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
              <Image src={img.src} alt={img.alt} fill sizes="(max-width: 640px) 72vw, 320px" className="object-cover group-hover:scale-105 transition-transform duration-500" />
              <span className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
              <ZoomIn className="absolute bottom-3 right-3 w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow" />
            </button>
          ))}
        </div>
      </div>

      {active !== null && (
        <Lightbox images={images} index={active} label={title} onChange={setActive} onClose={() => setActive(null)} />
      )}
    </section>
  );
}
