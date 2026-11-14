import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function PageHero({
  kicker,
  title,
  subtitle,
  imageSrc,
  imageAlt,
  badgeClass = "bg-white text-[#2b2b2b]",
  ctaHref,
  ctaLabel,
  ctaClass = "",
}: {
  kicker: string;
  title: string;
  subtitle: string;
  imageSrc: string;
  imageAlt: string;
  badgeClass?: string;
  ctaHref: string;
  ctaLabel: string;
  ctaClass?: string;
}) {
  return (
    <section className="relative h-[62vh] min-h-[440px] w-full overflow-hidden bg-paradise-dark">
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/40" />
      
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 flex flex-col justify-end pb-14">
        <Link
          href="/"
          className="inline-flex w-fit items-center gap-1.5 text-xs font-semibold text-white/70 hover:text-white transition mb-6"
        >
          Início <span className="opacity-50">/</span> {kicker}
        </Link>

        <span
          className={`inline-flex w-fit items-center gap-2 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-widest mb-5 ${badgeClass}`}
        >
          {kicker}
        </span>
        <h1 className="text-4xl sm:text-6xl font-bold text-white leading-[1.05] max-w-3xl text-balance">
          {title}
        </h1>
        <p className="mt-5 text-base sm:text-lg text-white/85 leading-relaxed max-w-2xl">
          {subtitle}
        </p>

        <a
          href={ctaHref}
          target="_blank"
          rel="noopener noreferrer"
          className={`mt-8 btn btn-light w-fit`}
        >
          {ctaLabel} <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}
