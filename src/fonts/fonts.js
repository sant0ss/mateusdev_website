import { Inter, Outfit, Instrument_Serif } from 'next/font/google';

export const dmMono = Inter({
  weight: ['400', '500'],
  subsets: ['latin', 'latin-ext'],
  variable: '--font-mono',
  display: 'swap',
});

export const syne = Outfit({
  weight: ['400', '700', '800'],
  subsets: ['latin', 'latin-ext'],
  variable: '--font-syne',
  display: 'swap',
});

export const instrumentSerif = Instrument_Serif({
  weight: ['400'],
  subsets: ['latin', 'latin-ext'],
  variable: '--font-instrument',
  display: 'swap',
});
