import type { Metadata, Viewport } from 'next';
import { Lilita_One, Cabin } from 'next/font/google';
import './globals.css';
import { Providers } from '@/components/Providers';

const lilita = Lilita_One({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-display-font',
  display: 'swap',
});

const cabin = Cabin({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-body-font',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  viewportFit: 'cover',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://bakmiebites.vercel.app'),
  title: 'BakmieBites | Bold Plant-Powered Popcorn',
  description:
    'Handcrafted small-batch gourmet popcorn. Peri Peri, Tangy Tomato, and Cheddar Cheese. Popped in refined sunflower oil with natural protein, zero palm oil, and 100% whole grain.',
  icons: { icon: '/favicon.svg' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${lilita.variable} ${cabin.variable}`}>
      <body className="antialiased selection:bg-[var(--yellow)] selection:text-[var(--ink)]">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
