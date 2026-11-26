"use client";

import React, { useCallback, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { GalleryImage } from "@/data/galleries";

export default function Lightbox({
  images,
  index,
  label,
  onChange,
  onClose,
}: {
  images: GalleryImage[];
  index: number;
  label: string;
  onChange: (i: number) => void;
  onClose: () => void;
}) {
  const touchX = useRef<number | null>(null);
  const total = images.length;
  const go = useCallback((dir: 1 | -1) => onChange((index + dir + total) % total), [index, total, onChange]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    [1, -1].forEach((d) => {
      const img = new window.Image();
      img.src = images[(index + d + total) % total].src;
    });
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [index, go, onClose, images, total]);

  const multi = total > 1;

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={label}
      className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
      onClick={onClose}
      onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchX.current === null || !multi) return;
        const dx = e.changedTouches[0].clientX - touchX.current;
        if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
        touchX.current = null;
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={images[index].src}
        alt={images[index].alt}
        className="max-w-[94vw] max-h-[88vh] object-contain select-none"
        onClick={(e) => e.stopPropagation()}
      />
      <button onClick={onClose} aria-label="Fechar" className="absolute top-4 right-4 w-11 h-11 flex items-center justify-center text-white hover:bg-white/10">
        <X className="w-6 h-6" />
      </button>
      {multi && (
        <>
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
            {index + 1} / {total}
          </span>
        </>
      )}
    </div>,
    document.body
  );
}
