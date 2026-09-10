import type { MetadataRoute } from 'next';
import { SITE_CONFIG, EXPERIENCES } from '@/data/experiences';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: SITE_CONFIG.url,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 1,
    },
    ...EXPERIENCES.map((exp) => ({
      url: `${SITE_CONFIG.url}${exp.href}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ];
}
