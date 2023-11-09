'use client';
import { MantineProvider, ColorSchemeScript, CSSVariablesResolver } from '@mantine/core';
import { theme } from '../theme';
import { MAppShell } from '@/components/MAppShell/MAppShell';
import { GlobalProvider } from '@/context/ContextGlobal';
import { AuthProvider } from '@/context/AuthContext';
//import { ApolloWrapper } from '@/apollo/apollo-wrapper';
import { ApolloSettingsProvider } from '@/apollo';

const resolver: CSSVariablesResolver = (theme) => ({
  variables: {
    // '--mantine-hero-height': theme.other.heroHeight,
  },
  light: {
    '--mantine-color-second': theme.colors.brightPink[5],
    '--mantine-color-second-4': theme.colors.brightPink[4],
    '--mantine-color-second-0': theme.colors.brightPink[0],
  },
  dark: {
    '--mantine-color-second': theme.colors.brightPink[5],
    '--mantine-color-second-4': theme.colors.brightPink[4],
    '--mantine-color-second-0': theme.colors.brightPink[0],
  },
});

export const ProvidersWrapper = ({ children }: any) => {
  if (theme?.colors?.brightPink) {
    console.log('theme.colors.brightPink[5]', theme?.colors?.brightPink[5]);
  }

  return (
    <ApolloSettingsProvider>
    <GlobalProvider>
      <AuthProvider>
        <MantineProvider theme={theme} cssVariablesResolver={resolver}>
          <MAppShell>{children}</MAppShell>
        </MantineProvider>
      </AuthProvider>
    </GlobalProvider>
    </ApolloSettingsProvider>
  );
};
