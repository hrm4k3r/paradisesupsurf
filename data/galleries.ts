export type GalleryImage = { src: string; alt: string };

function album(folder: string, count: number, alt: string): GalleryImage[] {
  return Array.from({ length: count }, (_, i) => ({
    src: `/images/galeria/${folder}/${String(i + 1).padStart(2, "0")}.jpg`,
    alt: `${alt} — foto ${i + 1}`,
  }));
}

export const GALLERIES = {
  sup: album("sup", 39, "Stand Up Paddle no amanhecer em Copacabana"),
  surf: album("surf", 14, "Aula de surf no Rio de Janeiro"),
  trilhas: album("trilhas", 23, "Trilha e mirante no Rio de Janeiro"),
  cachoeiras: album("cachoeiras", 8, "Cachoeira na Mata Atlântica do Rio"),
  praias: album("praias", 8, "Praia e vista do litoral do Rio"),
};

// Seleção variada para a home
export const HOME_GALLERY: GalleryImage[] = [
  GALLERIES.surf[0],
  GALLERIES.sup[0],
  GALLERIES.trilhas[0],
  GALLERIES.cachoeiras[0],
  GALLERIES.praias[0],
  GALLERIES.sup[4],
  GALLERIES.surf[3],
  GALLERIES.trilhas[7],
  GALLERIES.cachoeiras[3],
  GALLERIES.sup[14],
  GALLERIES.surf[8],
  GALLERIES.trilhas[14],
];
