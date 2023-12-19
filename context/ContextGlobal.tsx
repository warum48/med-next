'use client';
import React, { createContext, useState, useEffect } from 'react';
//import { useLocation } from "react-router-dom";
import { TColorScheme, TDesignService, useDesign } from './useDesign';
import { useMediaQuery } from '@mantine/hooks';
import { em } from '@mantine/core';
/*import {useSearchParamsService} from "_utilslib";
import type { TSearchParamsService } from "_utilslib";
import { useQuery } from "@apollo/client";
import { GET_SOURCES_PERMITION_OF_USER } from "_apollo/queries/getSourcesPermitionOfUser";
import { useUpdatingQuery } from "_serviceslib";
import { GET_LINK_ZIP_FILE } from "_apollo/queries/export/getLinkZipfile";
import { exportImagesZipFileNameVar } from "_apollo/state/Export_Images";
import { exportImagesZipLinkVar } from "_apollo/state/Export_Images";*/

interface IContext {
  isDemo: boolean;
  //token: string; //авторизация
  //setToken: React.Dispatch<React.SetStateAction<string>>;
  asideOpen: boolean;
  setAsideOpen: React.Dispatch<React.SetStateAction<boolean>>;
  pathtoserver: string;
  isDebug: boolean;
  DesignService: TDesignService;
  isMobile?: boolean;
  navBarCollapsed: boolean;
  setNavBarCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
 
  /*  SearchParamsService: TSearchParamsService;  //много функций
  
  UpdatingQueryService: any;
  
  setIsDebug: React.Dispatch<React.SetStateAction<boolean>>;*/
}

export const GlobalContext = createContext({} as IContext);

type Props = {
  children?: React.ReactNode;
};

//--------------component-----------

export const GlobalProvider = ({ children }: Props) => {
const isDemo = false;
  const [asideOpen, setAsideOpen] = React.useState(false);
  const [navBarCollapsed, setNavBarCollapsed] = React.useState(true); //TODO make persistent
  const [isDebug, setIsDebug] = useState<boolean>(false);
  const isMobile = useMediaQuery(`(max-width: ${em(750)})`);
  
  //const location = useLocation();
  const { DesignService } = useDesign();
  //console.log('location', location);
  // console.log('window.location.origin', window.location.origin);

  //let pathtoserver = "https://dev.shop-survey.ru:8002/";
  //let pathtoserver = window.location.origin ? window.location.origin+"/" : '/';
  let pathtoserver = '/';
  try {
    //if(  import.meta.env.VITE_PATH_TO_SERVER){
    //pathtoserver = import.meta.env.VITE_PATH_TO_SERVER;
    //}
  } catch (e) {
    console.log(e);
  }

  useEffect(() => {
    // if(window?.location?.origin?.includes('localhost')){
    //  setIsDebug(true);
    // }
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
    //token,
    //setToken,
    isDemo,
    asideOpen,
    setAsideOpen,
    pathtoserver,
    isDebug,
    DesignService,
    isMobile,
    navBarCollapsed,
    setNavBarCollapsed
    
    /* setIsDebug,
    
    SearchParamsService,
    
    UpdatingQueryService*/
  };

  return <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>;
};
