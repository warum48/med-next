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
  //const links = mockdata.map((item) => <LinksGroup {...item} key={item.label} />);
  const links = pages.map((item:PageItem) => <LinksGroup {...item } key={item.label} setOpened={setOpened}/>);
  const demolinks = demoPages.map((item) => <LinksGroup {...item} key={item.label} setOpened={setOpened}/>);

  return (
    <nav className={classes.navbar}>
     {cookieToken.mednekot &&
      <div className={classes.header}>
        <UserButton />
      </div>
}

      <ScrollArea className={classes.links}>
        <div className={classes.linksInner}>{links}</div>
       
      
        <Divider my="sm" mt='-sm'/>
       <Text size='xs' pl='xl' >демо ссылки:</Text>
        <div className={classes.linksInner}>{demolinks}</div> 
      </ScrollArea>

      {/*}   <div className={classes.footer}>
        <UserButton />
  </div> */}
    </nav>
  );
}
