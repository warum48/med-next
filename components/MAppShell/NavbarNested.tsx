import { Group, Code, ScrollArea, rem, Divider, Text } from '@mantine/core';
import {
  IconNotes,
  IconCalendarStats,
  IconGauge,
  IconPresentationAnalytics,
  IconFileAnalytics,
  IconAdjustments,
  IconLock,
  TablerIconsProps,
} from '@tabler/icons-react';
import { UserButton } from './UserButton';
import { LinksGroup } from './NavbarLinksGroup';
//import { Logo } from './Logo';
import classes from './NavbarNested.module.css';
//import { pages } from '@/global/ROUTES';
import { demoPages } from '@/global/ROUTES';
import { useCookies } from 'react-cookie';
import React from 'react';
import { usePages } from '@/context/usePages';
import { GlobalContext } from '@/context/ContextGlobal';
import { CollapseButton } from './CollapseButton';

type PageItem =  {
  label: string;
  icon: (props: TablerIconsProps) => JSX.Element;
  link?: string ;
  links?: any //{ label: string; link: string; }[] | unknown;//unknown; //  any//
}

//TODO remove any for links, fix type
/*
Type 'unknown' is not assignable to type '{ label: string; link: string; }[] | undefined' */

type TProps = {
  setOpened: React.Dispatch<React.SetStateAction<boolean>>
}

export function NavbarNested({setOpened}:TProps) {
  const {pages} = usePages();
  const [cookieToken, setCookieToken, removeCookieToken] = useCookies(['mednekot']);
  const {navBarCollapsed, isMobile} = React.useContext(GlobalContext);
  //const links = mockdata.map((item) => <LinksGroup {...item} key={item.label} />);
  const links = pages.map((item:PageItem) => <LinksGroup {...item } key={item.label} setOpened={setOpened}/>);
  const demolinks = demoPages.map((item) => <LinksGroup {...item} key={item.label} setOpened={setOpened}/>);

  return (
    <nav className={`${classes.navbar} ${navBarCollapsed? classes.collapsed : ''}`}>
     {cookieToken.mednekot &&
      <div className={classes.header}>
        <UserButton />
        { !isMobile && <CollapseButton />}
        
      </div>
}



      <ScrollArea className={classes.links}>
        <div className={classes.linksInner}>{links}</div>
       
      
        <Divider my="sm" mt='-sm'/>
        { !navBarCollapsed && 
       <Text size='xs' pl='xl' >демо ссылки:</Text>
        }
        <div className={classes.linksInner}>{demolinks}</div> 
      </ScrollArea>

      {/*}   <div className={classes.footer}>
        <UserButton />
  </div> */}
    </nav>
  );
}
