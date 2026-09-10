import { MessageCircle } from "lucide-react";
import { getWhatsAppLink } from "@/data/experiences";

export default function WhatsAppFloat() {
  return (
    <a
      href={getWhatsAppLink("Olá! Vim pelo site e gostaria de mais informações.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="group fixed bottom-6 right-6 z-40 flex items-center gap-3"
    >
      <span className="hidden sm:block max-w-0 overflow-hidden whitespace-nowrap rounded-full bg-paradise-dark px-0 py-3 text-sm font-bold text-white opacity-0 transition-all duration-300 group-hover:max-w-xs group-hover:px-4 group-hover:opacity-100">
        Fale no WhatsApp
      </span>
      <span className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white shadow-xl shadow-emerald-500/40 transition-transform active:scale-90 group-hover:scale-105">
        <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-75" />
        <MessageCircle className="relative w-7 h-7" fill="currentColor" strokeWidth={0} />
      </span>
    </a>
  );
}
