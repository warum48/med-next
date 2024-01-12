'use client';
import React, { createContext, useState, useEffect } from 'react';
import { TColorScheme, TDesignService, useDesign } from './useDesign';
import { useMediaQuery } from '@mantine/hooks';
import { em } from '@mantine/core';

interface IContext {
  isDemo: boolean;
  asideOpen: boolean;
  setAsideOpen: React.Dispatch<React.SetStateAction<boolean>>;
  pathtoserver: string;
  isDebug: boolean;
  DesignService: TDesignService;
  isMobile: boolean | undefined;
  navBarCollapsed: boolean;
  setNavBarCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
}

export const GlobalContext = createContext({} as IContext);

type Props = {
  children?: React.ReactNode;
};

//--------------component-----------

export const GlobalProvider = ({ children }: Props) => {
  const isDemo = true;
  const [asideOpen, setAsideOpen] = React.useState(false);
  const [navBarCollapsed, setNavBarCollapsed] = React.useState(false); //TODO make persistent
  const [isDebug, setIsDebug] = useState<boolean>(false);
  const isMobile = useMediaQuery(`(max-width: ${em(750)})`);
  const { DesignService } = useDesign();

  let pathtoserver = '/';

  useEffect(() => {
    const handleResize = () => {
      if (isMobile) {
        setNavBarCollapsed(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const value = {
    isDemo,
    asideOpen,
    setAsideOpen,
    pathtoserver,
    isDebug,
    DesignService,
    isMobile,
    navBarCollapsed,
    setNavBarCollapsed,
  };

  return <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>;
};
