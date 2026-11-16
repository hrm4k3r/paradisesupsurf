export type GalleryImage = { src: string; alt: string };

function album(folder: string, count: number, alt: string): GalleryImage[] {
  return Array.from({ length: count }, (_, i) => ({
    src: `/images/galeria/${folder}/${String(i + 1).padStart(2, "0")}.jpg`,
    alt: `${alt} — foto ${i + 1}`,
  }));
}

export const GALLERIES = {
  sup: album("sup", 23, "Stand Up Paddle ao nascer e pôr do sol no Rio"),
};

// Seleção para a home
export const HOME_GALLERY: GalleryImage[] = GALLERIES.sup.slice(0, 12);
