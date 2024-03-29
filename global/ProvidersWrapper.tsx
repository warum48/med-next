'use client';
import {
  MantineProvider,
  ColorSchemeScript,
  CSSVariablesResolver,
  MantineColorsTuple,
} from '@mantine/core';
import { theme } from '../theme';
//import { MAppShell } from '@/components/MAppShell/MAppShell';
import { GlobalProvider } from '@/context/ContextGlobal';
import { AuthProvider } from '@/context/AuthContext';
//import { ApolloWrapper } from '@/apollo/apollo-wrapper';
import { ApolloSettingsProvider } from '@/apollo';
import dynamic from 'next/dynamic';
import { UserProvider } from '@/context/UserContext';
import { Notifications } from '@mantine/notifications';

const MAppShell = dynamic(
  () => import('@/components/MAppShell/MAppShell').then((mod) => mod.MAppShell),
  {
    ssr: false,
  }
);

// docs: https://mantine.dev/styles/css-variables/

const resolver: CSSVariablesResolver = (theme) => ({
  variables: {
    // '--mantine-hero-height': theme.other.heroHeight,
    //  '--switchtext-height': '64px'
  },
  light: {
    //'--text-color': '#999999',
    '--mantine-color-virilis-gray-highlight': theme.other.grayHighligt,
    '--mantine-color-virilis-darkgreen': theme.other.virilisDarkGreen,
    '--mantine-color-virilis-pink': theme.other.virilisPink,
    '--mantine-color-virilis-green': theme.other.virilisGreen,
    '--mantine-color-main': theme.other.virilisGreen,
    '--mantine-color-second': theme.colors.brightPink[5],
    '--mantine-color-second-4': theme.colors.brightPink[4],
    '--mantine-color-second-0': theme.colors.brightPink[0],
  },
  dark: {
    '--mantine-color-virilis-gray-highlight': theme.other.grayHighligt,
    '--mantine-color-virilis-darkgreen': theme.other.virilisGreen,
    '--mantine-color-virilis-pink': theme.other.virilisPink,
    '--mantine-color-virilis-green': theme.other.virilisGreen,
    '--mantine-color-main': theme.other.virilisGreen,
    '--mantine-color-second': theme.colors.brightPink[5],
    '--mantine-color-second-4': theme.colors.brightPink[4],
    '--mantine-color-second-0': theme.colors.brightPink[0],
  },
});

const addColors = {
  colors: {
    'ocean-blue': [
      '#7AD1DD',
      '#5FCCDB',
      '#44CADC',
      '#2AC9DE',
      '#1AC2D9',
      '#11B7CD',
      '#09ADC3',
      '#0E99AC',
      '#128797',
      '#147885',
    ] as MantineColorsTuple,
    //'bright-pink': ['#F0BBDD', '#ED9BCF', '#EC7CC3', '#ED5DB8', '#F13EAF', '#F71FA7', '#FF00A1', '#E00890', '#C50E82', '#AD1374'] as MantineColorsTuple,
    'secondary-array': [
      '#F0BBDD',
      '#ED9BCF',
      '#EC7CC3',
      '#ED5DB8',
      '#F13EAF',
      '#F71FA7',
      '#FF00A1',
      '#E00890',
      '#C50E82',
      '#AD1374',
    ] as MantineColorsTuple,
  },
};

export const ProvidersWrapper = ({ children }: any) => {
  if (theme?.colors?.brightPink) {
    console.log('theme.colors.brightPink[5]', theme?.colors?.brightPink[5]);
  }

  return (
    <ApolloSettingsProvider>
      <GlobalProvider>
        <AuthProvider>
          <UserProvider>
            <MantineProvider theme={{ ...addColors, ...theme }} cssVariablesResolver={resolver}>
              <Notifications />
              <MAppShell>{children}</MAppShell>
            </MantineProvider>
          </UserProvider>
        </AuthProvider>
      </GlobalProvider>
    </ApolloSettingsProvider>
  );
};
