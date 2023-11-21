import { Alegreya, Alegreya_Sans } from 'next/font/google';

export const alegreya = Alegreya_Sans({
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
  weight: '400',
});

export const alegreya_bold = Alegreya_Sans({
    subsets: ['latin', 'cyrillic'],
    display: 'swap',
    weight: '500',
  });