import { AppShell, Group, Code, ScrollArea,  rem } from '@mantine/core';

//import { UserButton } from '../UserButton/UserButton';
import { LinksGroup } from './NavbarLinksGroup';

import {
  IconNotes,
  IconCalendarStats,
  IconGauge,
  IconPresentationAnalytics,
  IconFileAnalytics,
  IconAdjustments,
  IconLock,
  IconHelp,
  IconUsersGroup,
  IconUserCircle,
  IconCurrencyRubel,
  IconFiles,
  IconCalendar,
  IconCalendarPlus,
  IconId,
  IconHome,
} from '@tabler/icons-react';
//import { LinksGroup } from '../NavbarLinksGroup/NavbarLinksGroup';
//import { Logo } from './Logo';
//import { LinksGroup } from '../NavbarLinksGroup/NavbarLinksGroup';

//import { pages } from '../../main';

export const pages = [
  { label: 'Главная', icon: IconHome, link: '/' },
  {
    label: 'Записаться на прием',
    icon: IconCalendarPlus, //IconCalendarStats,
    //link: RoutesTypes.Appointment,
    /* links: [
      { label: 'Upcoming releases', link: '/' },
      { label: 'Previous releases', link: '/' },
      { label: 'Releases schedule', link: '/' },
    ],*/
  },

  {
    label: 'Личный кабинет / регистрация',
    icon: IconId,
    //link: RoutesTypes.Auth,
  },
  {
    label: 'Календарь посещений',
    icon: IconCalendar,
    //link: RoutesTypes.Calendar,
  },
  {
    label: 'Документы',
    icon: IconFiles,
    //link: RoutesTypes.Documents,
  },

  {
    label: 'Платежи',
    icon: IconCurrencyRubel,
    //link: RoutesTypes.Payments,
  },

  {
    label: 'Профиль',
    icon: IconUserCircle,
    //link: RoutesTypes.Profile,
  },

  {
    label: 'Моя семья',
    icon: IconUsersGroup,
    //link: RoutesTypes.Family,
  },

  {
    label: 'Медицинская карта',
    icon: IconUsersGroup,
    //link: RoutesTypes.MedicalCard,
  },

  {
    label: 'Техподдержка',
    icon: IconHelp,
    //link: RoutesTypes.Support,
  },
]


/*

const useStyles = createStyles((theme) => ({
  navbar: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
    paddingBottom: 0,
  },

  header: {
    padding: theme.spacing.md,
    paddingTop: 0,
    marginLeft: `calc(${theme.spacing.md} * -1)`,
    marginRight: `calc(${theme.spacing.md} * -1)`,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    borderBottom: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },

  links: {
    marginLeft: `calc(${theme.spacing.md} * -1)`,
    marginRight: `calc(${theme.spacing.md} * -1)`,
  },

  linksInner: {
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
  },

  footer: {
    marginLeft: `calc(${theme.spacing.md} * -1)`,
    marginRight: `calc(${theme.spacing.md} * -1)`,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
    //backgroundColor:'white'
    //
  },
}));

*/

export function NavbarNested({...props}) {
  //const { classes } = useStyles();
  const links = pages.map((item:any) => <LinksGroup {...item}  key={item.label} />);

  return (
    <AppShell.Navbar 
    {...props}
    >
     
nav
    </AppShell.Navbar>
  );
}