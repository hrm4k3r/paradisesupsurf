import type { Metadata, Viewport } from 'next';
import { Montserrat, Jost } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import Analytics from '@/components/Analytics';
import JsonLd from '@/lib/jsonld';
import { SITE_CONFIG, EXPERIENCES } from '@/data/experiences';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-montserrat',
});

const jost = Jost({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-jost',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: 'Paradise Sup&Surf | Escola de Surf & Experiências de Natureza no Rio de Janeiro',
    template: '%s | Paradise Sup&Surf',
  },
  description: 'Aulas de surf para iniciantes e evolução, Stand Up Paddle no amanhecer, trilhas panorâmicas, cachoeiras e praias secretas no Rio de Janeiro.',
  keywords: ['aula de surf rio de janeiro', 'escola de surf', 'stand up paddle', 'trilhas rio de janeiro', 'cachoeiras rio de janeiro', 'praias secretas rio'],
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
  alternates: { canonical: '/' },
  verification: { google: process.env.NEXT_PUBLIC_GSC_VERIFICATION },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
  twitter: {
    card: 'summary_large_image',
    title: 'Paradise Sup&Surf | Surf, SUP e Trilhas no Rio de Janeiro',
    description: 'Aulas de surf, SUP ao amanhecer, trilhas, cachoeiras e praias secretas no Rio de Janeiro.',
    images: ['/images/og.jpg'],
  },
  openGraph: {
    url: '/',
    images: [{ url: '/images/og.jpg', width: 1200, height: 630, alt: 'Paradise Sup&Surf — surf e SUP no Rio de Janeiro' }],
    title: 'Paradise Sup&Surf | Escola de Surf & Experiências no Rio de Janeiro',
    description: 'Aulas de surf, SUP ao amanhecer, trilhas, cachoeiras e praias secretas com a Paradise Sup&Surf.',
    locale: 'pt_BR',
    type: 'website',
    siteName: 'Paradise Sup&Surf',
  },
};

export const viewport: Viewport = {
  themeColor: '#2b2b2b',
};

const businessJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['LocalBusiness', 'SportsActivityLocation', 'TravelAgency'],
      '@id': `${SITE_CONFIG.url}/#business`,
      name: 'Paradise Sup&Surf',
      url: SITE_CONFIG.url,
      logo: `${SITE_CONFIG.url}/logo.png`,
      image: `${SITE_CONFIG.url}/images/og.jpg`,
      description: 'Escola de surf e stand up paddle com trilhas, cachoeiras, praias secretas e tour cultural no Rio de Janeiro.',
      telephone: `+${SITE_CONFIG.whatsappNumber}`,
      address: { '@type': 'PostalAddress', addressLocality: 'Rio de Janeiro', addressRegion: 'RJ', addressCountry: 'BR' },
      areaServed: { '@type': 'City', name: 'Rio de Janeiro' },
      priceRange: 'R$$',
      knowsLanguage: ['pt-BR'],
      makesOffer: EXPERIENCES.map((e) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: e.label, description: e.tagline, url: `${SITE_CONFIG.url}${e.href}` },
      })),
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_CONFIG.url}/#website`,
      url: SITE_CONFIG.url,
      name: 'Paradise Sup&Surf',
      inLanguage: 'pt-BR',
      publisher: { '@id': `${SITE_CONFIG.url}/#business` },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${montserrat.variable} ${jost.variable}`}>
      <body className={`font-sans antialiased bg-white text-[#333]`}>
        <Navbar />
        <div className="pt-[calc(2.25rem+5rem)]">
          {children}
        </div>
        <Footer />
        <WhatsAppFloat />
        <JsonLd data={businessJsonLd} />
        <Analytics />
      </body>
    </html>
  );
}