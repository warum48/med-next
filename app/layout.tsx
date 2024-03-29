
import React from 'react';
import { MantineProvider, ColorSchemeScript, CSSVariablesResolver } from '@mantine/core';
import { theme } from '../theme';
import { MAppShell } from '@/components/MAppShell/MAppShell';
import '@mantine/core/styles.css';
//import '@mantine/core/styles.layer.css';
import '@mantine/carousel/styles.css';

import '@mantine/dates/styles.css';
import '@/styles/index.css';
import '@mantine/notifications/styles.css';
import { ProvidersWrapper } from '../global/ProvidersWrapper';

import { Alegreya } from 'next/font/google'

const alegreya = Alegreya({
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
})

export const metadata = {
  title: 'Virilis',
  description: 'Сеть детских клиник Вирилис',
};



export default function RootLayout({ children }: { children: any }) {
  console.log('__root.layput');
  return (
    <html lang="en" className={alegreya.className}>
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <ProvidersWrapper>{children}</ProvidersWrapper>
      </body>
    </html>
  );
}

