export const SITE_CONFIG = {
  name: "Paradise Sup&Surf",
  city: "Rio de Janeiro, RJ",
  whatsappNumber: "5521951008034",
};

export function getWhatsAppLink(message: string) {
  return `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const NAV_LINKS = [
  { label: "Início", href: "/" },
  { label: "Aulas de Surf", href: "/aulas-de-surf" },
  { label: "SUP no Amanhecer", href: "/stand-up-paddle-amanhecer" },
  { label: "Tour Cultural", href: "/tour-cultural-comunidade" },
  { label: "Trilhas & Aventura", href: "/trilhas-e-mirantes" },
  { label: "Cachoeiras", href: "/expedicao-cachoeiras" },
  { label: "Praias Secretas", href: "/praias-secretas" },
];

export const EXPERIENCES = [
  {
    slug: "aulas-de-surf",
    href: "/aulas-de-surf",
    label: "Aulas de Surf",
    tagline: "Do zero à sua melhor onda",
    image:
      "https://images.unsplash.com/photo-1502933691298-84fc14542831?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Pés sobre prancha de surf cortando onda azul-turquesa",
  },
  {
    slug: "stand-up-paddle-amanhecer",
    href: "/stand-up-paddle-amanhecer",
    label: "SUP no Amanhecer",
    tagline: "O mar espelhado ao nascer do sol",
    image:
      "https://images.unsplash.com/photo-1601283261983-543e77949437?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Silhueta de pessoa em stand up paddle sobre água calma e dourada ao entardecer",
  },
  {
    slug: "tour-cultural-comunidade",
    href: "/tour-cultural-comunidade",
    label: "Tour Cultural Comunitário",
    tagline: "História viva, arte e mirantes",
    image:
      "https://images.unsplash.com/photo-1701204290431-63468bf3351c?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Vista aérea de comunidade no morro cercada pela Mata Atlântica no Rio de Janeiro",
  },
  {
    slug: "trilhas-e-mirantes",
    href: "/trilhas-e-mirantes",
    label: "Trilhas & Mirantes",
    tagline: "O Rio visto lá de cima",
    image:
      "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Vista aérea da Baía de Guanabara e Pão de Açúcar no Rio de Janeiro",
  },
  {
    slug: "expedicao-cachoeiras",
    href: "/expedicao-cachoeiras",
    label: "Expedição Cachoeiras",
    tagline: "Poços de água doce na Mata Atlântica",
    image:
      "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Cachoeira cercada por floresta densa",
  },
  {
    slug: "praias-secretas",
    href: "/praias-secretas",
    label: "Praias Secretas",
    tagline: "Enseadas fora do circuito turístico",
    image:
      "https://images.unsplash.com/photo-1541417904950-b855846fe074?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Vista aérea de praia deserta com coqueiro e mar turquesa",
  },
] as const;