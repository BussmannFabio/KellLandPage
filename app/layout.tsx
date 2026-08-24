import type { Metadata } from 'next';
import Script from 'next/script';
import '../style.css';

export const metadata: Metadata = {
  title: 'Kellynha | Conforto que faz parte da sua história',
  description: 'Moda íntima para toda a família, produzida com conforto, qualidade e carinho desde 1984.',
  openGraph: {
    title: 'Kellynha | Conforto que faz parte da sua história',
    description: 'Moda íntima para toda a família, feita com cuidado desde 1984.',
    type: 'website',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Kellynha — Moda íntima desde 1984' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kellynha | Conforto que faz parte da sua história',
    description: 'Moda íntima para toda a família, feita com cuidado desde 1984.',
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <head>
        <meta name="theme-color" content="#302c76" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=Manrope:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        {children}
        <Script src="/main.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
