export const SITE_CONFIG = {
  name: "Paradise Sup&Surf",
  city: "Rio de Janeiro, RJ",
  whatsappNumber: "5521951008034",
  // TODO: atualizar para o domínio real assim que o site for publicado
  url: "https://paradisesupsurf.com.br",
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
    image: "/images/aulas-de-surf.jpg",
    imageAlt: "Pés sobre prancha de surf cortando onda azul-turquesa",
  },
  {
    slug: "stand-up-paddle-amanhecer",
    href: "/stand-up-paddle-amanhecer",
    label: "SUP no Amanhecer",
    tagline: "O mar espelhado ao nascer do sol",
    image: "/images/stand-up-paddle-amanhecer.jpg",
    imageAlt: "Silhueta de pessoa em stand up paddle sobre água calma e dourada ao entardecer",
  },
  {
    slug: "tour-cultural-comunidade",
    href: "/tour-cultural-comunidade",
    label: "Tour Cultural Comunitário",
    tagline: "História viva, arte e mirantes",
    image: "/images/tour-cultural-comunidade.jpg",
    imageAlt: "Vista aérea de comunidade no morro cercada pela Mata Atlântica no Rio de Janeiro",
  },
  {
    slug: "trilhas-e-mirantes",
    href: "/trilhas-e-mirantes",
    label: "Trilhas & Mirantes",
    tagline: "O Rio visto lá de cima",
    image: "/images/trilhas-e-mirantes.jpg",
    imageAlt: "Vista aérea da Baía de Guanabara e Pão de Açúcar no Rio de Janeiro",
  },
  {
    slug: "expedicao-cachoeiras",
    href: "/expedicao-cachoeiras",
    label: "Expedição Cachoeiras",
    tagline: "Poços de água doce na Mata Atlântica",
    image: "/images/expedicao-cachoeiras.jpg",
    imageAlt: "Cachoeira cercada por floresta densa",
  },
  {
    slug: "praias-secretas",
    href: "/praias-secretas",
    label: "Praias Secretas",
    tagline: "Enseadas fora do circuito turístico",
    image: "/images/praias-secretas.jpg",
    imageAlt: "Vista aérea de praia deserta com coqueiro e mar turquesa",
  },
] as const;