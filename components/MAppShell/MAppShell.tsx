'use client';
import { useState } from 'react';
import {
  AppShell,
  Text,
  Burger,
  useMantineTheme,
  Image,
  Title,
  Group,
  useMantineColorScheme,
  Box,
  Grid,
} from '@mantine/core';

import { useDisclosure } from '@mantine/hooks';
import { Skeleton } from '@mantine/core';

import React from 'react';
import { IconPhone } from '@tabler/icons-react';
//import { NavbarNested } from './components/NavBar/NavbarNested';
//import { Outlet, useLocation } from 'react-router-dom';
import { useCookies } from 'react-cookie';
//import { DemoLogIn } from './components/Debug/LogIn';
//import { AsideComp } from './components/AppShell/Aside';
import { useMediaQuery } from '@mantine/hooks';
//import { GlobalContext } from '../context';
import { IconSettings } from '@tabler/icons-react';
import { GlobalContext } from '@/context/ContextGlobal';
import { NavbarNested } from './NavbarNested';
import { Header } from './Header';
import { ColorSchemeToggle } from '../ColorSchemeToggle/ColorSchemeToggle';
import { innerPageMaxWidth } from '@/global/CONSTS';
//import { RoutesTypes } from 'ROUTES';

export function MAppShell({ children }: any) {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  //const [cookieToken, setCookieToken, removeCookieToken] = useCookies(['mednekot']);
  const theme = useMantineTheme();
  //const [openedAside, setOpenedAside] = useState(false);
  const largeScreen = useMediaQuery('(min-width: 88em)');
  const midUpScreen = useMediaQuery('(min-width: 75em)');
  const { DesignService, asideOpen, setAsideOpen } = React.useContext(GlobalContext);
  // const [opened, { toggle }] = useDisclosure();
  const [opened, setOpened] = useState(false);
  //const location = useLocation();
  const headerProps = { opened, setOpened, asideOpen, setAsideOpen };
  const [cookieToken, setCookieToken, removeCookieToken] = useCookies(['mednekot']);

  return (
    <AppShell
      header={{ height: { base: 60, md: 70, lg: 80 } }}
      navbar={{
        width: {
          base: cookieToken.mednekot ? 320 : 1,
          // md: 300, lg: 400
        },
        breakpoint: 'sm',
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          {/* <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" /> */}
          <Header {...headerProps} />
        </Group>
      </AppShell.Header>


{cookieToken.mednekot ?
      <AppShell.Navbar
        p="md"
        pb={0}
        // pr={{base: 0, md: 'md'}}
        pr={0}
      >
        <NavbarNested />
      </AppShell.Navbar> : ''}


      <AppShell.Main
        style={{
         // background:
         //   'linear-gradient(180deg, #99999907 -4.58%, #66666605 33.11%, #66666611 74.48%, #99999907 94.27%)',
        }}
      >
        
        {!asideOpen ? 
        
        children 
        
        : 
        <Grid gutter="md" pb='xl'>
          <Grid.Col span={9}>{children}</Grid.Col>
          <Grid.Col span={3}><ColorSchemeToggle /></Grid.Col>
      </Grid> }
     
      </AppShell.Main>
    </AppShell>
  );
}

//https://stackoverflow.com/questions/72429205/git-rebase-vs-checkout //
