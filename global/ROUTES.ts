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
    IconTicket,
  } from '@tabler/icons-react';

/**
 * Все пути надо объявлять здесь и обращаться к ним через RoutesTypes.<path> чтобы был единый источник правды и не было опечаток 
 */
export enum RoutesTypes { 
    Home = "/",
    Reports = "/reports",
    Auth = "/auth",
    Registration = "/registration",
    ChangePassword = "/changepassword",
    Calendar = "/calendar",
    Orders = "/orders",
    Documents = "/documents",
    Payments = "/payments",
    Family = "/family",
    Profile = "/profile",
    Support = "/support",
    Empty = "/empty",
    MedicalCard = "/medicalcard",
    Abonement = "/abonement",
    //---export:---
    Execution = "/execution",
    Pictures = "/pictures",
    Reasons = "/reasons",
    //---debug---
    Pictures_debug = "/pictures_debug",
    Debug_GQL = "/debug_gql",
    Debug_LazyGQL = "/debug_lazygql",
    Debug_LazySelect = "/debug_lazyselect",
    Debug_LeafletPure = "/debug_leafletpure",
    Debug_SharedComponents = "/debug_shared",

    Appointment = "/appointment"
  }

  export const pages = [
    { label: 'Главная', icon: IconHome, link: '/' },
    {
      label: 'Записаться на прием',
      icon: IconCalendarPlus, //IconCalendarStats,
      link: RoutesTypes.Appointment,
      /* links: [
        { label: 'Upcoming releases', link: '/' },
        { label: 'Previous releases', link: '/' },
        { label: 'Releases schedule', link: '/' },
      ],*/
    },
  
    
    {
      label: 'Календарь посещений',
      icon: IconCalendar,
      link: RoutesTypes.Calendar,
    },
    {
      label: 'Медицинская карта',
      icon: IconNotes,
      link: RoutesTypes.MedicalCard,
    },
    {
      label: 'Платежи',
      icon: IconCurrencyRubel,
      link: RoutesTypes.Payments,
    },
    {
      label: 'Абонемент',
      icon: IconTicket,
      link: RoutesTypes.Abonement,
    },
    {
      label: 'Моя семья',
      icon: IconUsersGroup,
      link: RoutesTypes.Family,
    },
    {
      label: 'Запросить документы', //TODO review
      icon: IconFiles,
      link: RoutesTypes.Documents,
    },
  
    
  
  /*  {
      label: 'Профиль',
      icon: IconUserCircle,
      link: RoutesTypes.Profile,
    },
    */
  
    
  
    

    
  
    {
      label: 'Обратная связь',
      icon: IconHelp,
      link: RoutesTypes.Support,
    },
]

export const demoPages = [
  {
    label: 'Авторизация',
    icon: IconId,
    link: RoutesTypes.Auth,
  },
  {
    label: 'Регистрация',
    icon: IconId,
    link: RoutesTypes.Registration,
  },
]