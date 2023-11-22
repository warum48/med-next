import { Group, Code, ScrollArea, rem, Divider, Text } from '@mantine/core';
import {
  IconNotes,
  IconCalendarStats,
  IconGauge,
  IconPresentationAnalytics,
  IconFileAnalytics,
  IconAdjustments,
  IconLock,
} from '@tabler/icons-react';
import { UserButton } from './UserButton';
import { LinksGroup } from './NavbarLinksGroup';
//import { Logo } from './Logo';
import classes from './NavbarNested.module.css';
import { pages } from '@/global/ROUTES';
import { demoPages } from '@/global/ROUTES';
import { useCookies } from 'react-cookie';



export function NavbarNested() {
  const [cookieToken, setCookieToken, removeCookieToken] = useCookies(['mednekot']);
  //const links = mockdata.map((item) => <LinksGroup {...item} key={item.label} />);
  const links = pages.map((item) => <LinksGroup {...item} key={item.label} />);
  const demolinks = demoPages.map((item) => <LinksGroup {...item} key={item.label} />);

  return (
    <nav className={classes.navbar}>
     {cookieToken.mednekot &&
      <div className={classes.header}>
        <UserButton />
      </div>
}

      <ScrollArea className={classes.links}>
        <div className={classes.linksInner}>{links}</div>
       
       {/* 
        <Divider my="sm" mt='-sm'/>
       <Text size='xs' pl='xl' >демо ссылки:</Text>
        <div className={classes.linksInner}>{demolinks}</div> */}
      </ScrollArea>

      {/*}   <div className={classes.footer}>
        <UserButton />
  </div> */}
    </nav>
  );
}
