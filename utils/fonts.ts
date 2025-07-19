import { Roboto } from 'next/font/google';
import localFont from 'next/font/local';

export const bricolage = localFont({ src: '../public/BricolageGrotesque.ttf' });

export const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
  display: 'swap',
  variable: '--font-roboto',
});
