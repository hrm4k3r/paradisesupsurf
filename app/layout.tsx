import type { Metadata, Viewport } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
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
  themeColor: '#E85D36',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={poppins.variable}>
      <body className={`${poppins.className} antialiased bg-slate-50 text-slate-800`}>
        <Navbar />
        <div className="pt-20">
          {children}
        </div>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}