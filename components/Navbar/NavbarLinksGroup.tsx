import { useState } from 'react';
//import { NavLink as RouterLink, useSearchParams } from 'react-router-dom';
import {
  Group,
  Box,
  Collapse,
  ThemeIcon,
  Text,
  UnstyledButton,
 // createStyles,
  rem,
  useMantineTheme,
} from '@mantine/core';
import { IconCalendarStats, IconChevronLeft, IconChevronRight } from '@tabler/icons-react';


/*
const theme = useMantineTheme();

//const useStyles = createStyles((theme) => ({
  const control = style({  
  
    fontWeight: 500,
    display: 'block',
    width: '100%',
    padding: `${theme.spacing.xs} ${theme.spacing.md}`,
   // color:  theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
    fontSize: theme.fontSizes.sm,

    ':hover': {
     // backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.oceanBlue[0],//theme.colors.gray[0],
     // color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    },
  })

  const link = style( {
    fontWeight: 500,
    display: 'block',
    textDecoration: 'none',
    padding: `${theme.spacing.xs} ${theme.spacing.md}`,
    paddingLeft: rem(31),
    marginLeft: rem(30),
    fontSize: theme.fontSizes.sm,
   // color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
   // borderLeft: `${rem(1)} solid ${
   //   theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
  //  }`,

    ':hover': {
     // backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.oceanBlue[0],//theme.colors.gray[0],
     // color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    },
    selectors: {
    '.active button div div div div': {
        fontWeight: 700,
      //  backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
      //  color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        borderLeft: '4px solid pink',
        border: '4px solid pink'
      },
    }
      
  })

  const level1link = style({
    fontWeight: 500,
    display: 'block',
    textDecoration: 'none',

    fontSize: theme.fontSizes.sm,
   //color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],


    ':hover': {
     // backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.oceanBlue[0],
     // color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    },
    selectors: {
    '.active ': {
      fontWeight: 700,
     // color: theme.colorScheme === 'dark' ? theme.white : theme.black,
      borderRight: '3px solid #fb6eb5!important',
     
    },
    '.active  div': {
        fontWeight: 700,
      },
      '&.active  .mantine-ThemeIcon-root ': {
        color: theme.colors.brightPink[6],
        backgroundColor:theme.colors.brightPink[0]

      },
    }
  })

  const chevron = style ({
    transition: 'transform 200ms ease',
  })
//});
*/

interface LinksGroupProps {
  icon: React.FC<any>;
  label: string;
  initiallyOpened?: boolean;
  links?: { label: string; link: string }[];
  link?: string;
}

export function LinksGroup({ icon: Icon, label, initiallyOpened, links, link }: LinksGroupProps) {
 // const { classes, theme } = useStyles();
  const hasLinks = Array.isArray(links);
  const [opened, setOpened] = useState(initiallyOpened || false);
  const ChevronIcon = IconChevronLeft;//theme.dir === 'ltr' ? IconChevronRight : IconChevronLeft;
  const items = (hasLinks ? links : []).map((link) => (
    <Text<'a'>
      component="a"
      //className={{link}}
      style={link}
      href={link.link}
      key={link.label}
      //onClick={(event) => event.preventDefault()}
    >
      {link.label}
    </Text>
  ));

  return (
    <>
      {link ? (
        <>
        {/*<RouterLink to={link} className={classes.level1link}> */}
          <UnstyledButton onClick={() => setOpened((o) => !o)} 
         // className={classes.control}
          >
            <Group 
           // position="apart" spacing={0}
            >
              <Box style={{ display: 'flex', alignItems: 'center' , paddingLeft:'0.5rem'}}>
                <ThemeIcon variant="light" size={30} radius="xl" p={'.1rem'} 
               // color={opened?'red':'green'}
                >
                  <Icon size="1.5rem" />
                </ThemeIcon>
                <Box ml="md">{label}</Box>
              </Box>
              {hasLinks && (
                <ChevronIcon
                 // className={classes.chevron}
               //  style={chevron}
                  size="1rem"
                  stroke={1.5}
                  style={{
                    transform: opened ? `90deg` : 'none',
                  }}
                />
              )}
            </Group>
          </UnstyledButton>

          {hasLinks ? <Collapse in={opened} pl="xs">{items}</Collapse> : null}
          
        {/*</RouterLink>*/}
        </>
      ) : (
        <>
          <UnstyledButton onClick={() => setOpened((o) => !o)} 
          //className={classes.control}
          >
            <Group 
           // position="apart" 
           // spacing={0}
            >
              <Box style={{ display: 'flex', alignItems: 'center', paddingLeft:'0.5rem'  }}>
                <ThemeIcon variant="light" size={30}>
                  <Icon size="1.1rem" />
                </ThemeIcon>
                <Box ml="md">{label}</Box>
              </Box>
              {hasLinks && (
                <ChevronIcon
                 // className={classes.chevron}
               //  style={chevron}
                  size="1rem"
                  stroke={1.5}
                  style={{
                    //transform: opened ? `rotate(${theme.dir === 'rtl' ? -90 : 90}deg)` : 'none',
                    transform: opened ? `90deg` : 'none',
                  }}
                />
              )}
            </Group>
          </UnstyledButton>

          {hasLinks ? <Collapse in={opened} pl="xs">{items}</Collapse> : null}
        </>
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

export function NavbarLinksGroup() {
  return (
    <Box
      style={{
        minHeight: rem(220),
       // padding: theme.spacing.md, //md
        backgroundColor: 'white'//theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
      }}
    >
      <LinksGroup {...mockdata} />
    </Box>
  );
}
