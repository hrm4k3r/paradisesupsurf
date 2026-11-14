import type { Metadata, Viewport } from 'next';
import { Montserrat, Jost } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import { SITE_CONFIG } from '@/data/experiences';

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
  openGraph: {
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
      </body>
    </html>
  );
}