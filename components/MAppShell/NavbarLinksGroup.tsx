import { useState } from 'react';
import { Group, Box, Collapse, ThemeIcon, Text, UnstyledButton, rem, Tooltip } from '@mantine/core';
import { IconCalendarStats, IconChevronRight } from '@tabler/icons-react';

import classes from './NavbarLinksGroup.module.css';
import Link from 'next/link';

import { useRouter } from 'next/navigation'; //'next/router';
import { usePathname, useSearchParams } from 'next/navigation';
import { GlobalContext } from '@/context/ContextGlobal';
import React from 'react';

interface LinksGroupProps {
  icon: React.FC<any>;
  label: string;
  initiallyOpened?: boolean;
  links?: { label: string; link: string }[];
  link?: string;
  setOpened : React.Dispatch<React.SetStateAction<boolean>>
}

export function LinksGroup({ icon: Icon, label, initiallyOpened, links, link, setOpened:setMenuOpened }: LinksGroupProps) {
  const hasLinks = Array.isArray(links);
  const [opened, setOpened] = useState(initiallyOpened || false);
  const router = useRouter();
  const pathname = usePathname();
  const {navBarCollapsed} = React.useContext(GlobalContext);

  console.log('pathname.substring(1, pathname.length)', pathname.substring(1, pathname.length));

  const items = (hasLinks ? links : []).map((link, index) => (
    <Tooltip label={link.label} disabled={!navBarCollapsed} offset={-5} transitionProps={{ transition: 'pop', duration: 300 }} key={"tooltip_menu-l-g"+index}>
    <Link
   // ml='xl'
      //className={classes.link}
      className={
        //!!pathname == link 
       // pathname.replace('/','').includes(link.replace('/','')) 
       pathname == link.link 
      // || link.link.substring(1, link.link.length).includes(pathname.substring(1, pathname.length)) 
       && link.link.substring(1, link.link.length) != ''
        ? classes.active_with_link + ' ' + classes.link : classes.link
      }
      href={link.link}
      key={link.label}
     // onClick={(event) => event.preventDefault()}
    // onClick={() => setOpened((o) => !o)}
    onClick={() => { setMenuOpened(false);
      setOpened((o) => !o)
    }}
    >
      {!navBarCollapsed ?
      <Box ml='md'>{link.label}</Box>
      : <div className={classes.green_dot} />}
      </Link>
      </Tooltip>
  ));

  const Item = (
    <>
    <Tooltip label={label} disabled={!navBarCollapsed}  offset={-5} transitionProps={{ transition: 'pop', duration: 300 }}>
      <UnstyledButton onClick={() => setOpened((o) => !o)} className={classes.control}>
        <Group justify="space-between" gap={0} wrap='nowrap' className='relative'>
          <Box style={{ display: 'flex', alignItems: 'center' }}>
            <ThemeIcon variant="light" size={30} radius="xl" p={'0.1rem'}>
            <Icon style={{ width: rem(18), height: rem(18) }} />
            </ThemeIcon>
            {! navBarCollapsed && 
            <Box ml="md" style={{textDecoration: 'none !important'}}>{label}</Box>
}
          </Box>
          {hasLinks && (
            <IconChevronRight
              className={ navBarCollapsed ? classes.chevron_collapsed : classes.chevron}
              stroke={1.5}
              style={{
                width: rem(16),
                height: rem(16),
                transform: opened ? 'rotate(90deg)' : 'none',
              }}
            />
          )}
        </Group>
      </UnstyledButton>
      </Tooltip>
      {hasLinks ? <Collapse in={opened} ml='md'>{items}</Collapse> : null}
      </>
  );

  //asPath

  //console.log('router.pathname', pathname);
  //console.log('link ', link );
  //console.log('-----link.substring(1, link.length)', link?.substring(1, link?.length));

  return (
    <>
      { link ? (
        <Link
        onClick={() =>setMenuOpened(false)}
          href={link}
          className={
            //!!pathname == link 
           // pathname.replace('/','').includes(link.replace('/','')) 
           pathname == link || pathname.substring(1, pathname.length).includes(link.substring(1, link.length)) && link.substring(1, link.length) != ''
            ? classes.active_with_link + ' ' + classes.level1link : classes.level1link
          }
        >
          {Item}
        </Link>
      ) : (
        Item
      )}
    </>
  );
}

const mockdata = {
  label: 'Releases',
  icon: IconCalendarStats,
  links: [
    { label: 'Upcoming releases', link: '/' },
    { label: 'Previous releases', link: '/' },
    { label: 'Releases schedule', link: '/' },
  ],
};

export function NavbarLinksGroup({setOpened}:any) {
  return (
    <Box mih={220} p="md">
      <LinksGroup {...mockdata} setOpened={setOpened}/>
    </Box>
  );
}
