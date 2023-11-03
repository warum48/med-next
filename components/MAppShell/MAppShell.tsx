'use client'
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
//import { RoutesTypes } from 'ROUTES';

export function MAppShell({children}:any) {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const [cookieToken, setCookieToken, removeCookieToken] = useCookies(['mednekot']);
  const theme = useMantineTheme();
  const [openedAside, setOpenedAside] = useState(false);
  const largeScreen = useMediaQuery('(min-width: 88em)');
  const midUpScreen = useMediaQuery('(min-width: 75em)');
  const { DesignService, asideOpen, setAsideOpen } = React.useContext(GlobalContext);
 // const [opened, { toggle }] = useDisclosure();
 const [opened, setOpened] = useState(false);
  //const location = useLocation();
  const headerProps = {opened, setOpened, asideOpen, setAsideOpen}

  return (
    <AppShell
      header={{ height: { base: 60, md: 70, lg: 80 } }}
      navbar={{
        width: { base: 320,
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
          <Header {...headerProps}/>
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p="md" pb={0}
     // pr={{base: 0, md: 'md'}}
     pr={0}
      >
       
        {/*Array(15)
          .fill(0)
          .map((_, index) => (
            <Skeleton key={index} h={28} mt="sm" animate={false} />
          ))
          
          */}
          <NavbarNested/>
      </AppShell.Navbar>
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}

//https://stackoverflow.com/questions/72429205/git-rebase-vs-checkout //
