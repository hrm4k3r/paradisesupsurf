import type { GalleryImage } from "@/data/galleries";

export type Trail = {
  slug: string;
  name: string;
  difficulty: "Moderada" | "Difícil";
  price: string;
  images: GalleryImage[];
};

function photos(slug: string, count: number, name: string): GalleryImage[] {
  return Array.from({ length: count }, (_, i) => ({
    src: `/images/trilhas/${slug}/${String(i + 1).padStart(2, "0")}.jpg`,
    alt: `Trilha ${name} — foto ${i + 1}`,
  }));
}

export const TRAILS: Trail[] = [
  { slug: "pedra-bonita", name: "Pedra Bonita", difficulty: "Moderada", price: "R$ 180,00", images: photos("pedra-bonita", 2, "Pedra Bonita") },
  { slug: "pedra-dois-irmaos", name: "Pedra Dois Irmãos", difficulty: "Moderada", price: "R$ 180,00", images: photos("pedra-dois-irmaos", 2, "Pedra Dois Irmãos") },
  { slug: "pedra-da-gavea", name: "Pedra da Gávea", difficulty: "Difícil", price: "R$ 450,00", images: photos("pedra-da-gavea", 4, "Pedra da Gávea") },
];
