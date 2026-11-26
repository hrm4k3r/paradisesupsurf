import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Serve as imagens como arquivos estáticos (já redimensionadas em public/images).
    // Evita a cobrança/cota da Otimização de Imagens da Vercel (erro 402).
    unoptimized: true,
  },
};

export default nextConfig;
