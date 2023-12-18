import { RoutesTypes } from '@/global/ROUTES';
import { useFetch } from '@/services/useFetch';
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

export const usePages = () => {

  const {data: dataAbonement, loading: loadingAbonement, error: errorAbonement} = useFetch("/mock/abonements.json");
  const defpages = [
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
      label: 'Комплексный продукт',
      icon: IconTicket,
     //  link: RoutesTypes.Abonement,
     /* links: [
        { label: 'Upcoming releases', link: '/' },
        { label: 'Previous releases', link: '/' },
        { label: 'Releases schedule', link: '/' },
      ]*/
      links: dataAbonement
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
  ];

  return {
    pages: defpages,
  };
};
