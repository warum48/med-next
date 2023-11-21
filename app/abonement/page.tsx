'use client';
import * as React from 'react';
import {
  Anchor,
  Box,
  Divider,
  Group,
  PasswordInput,
  Select,
  Space,
  Stack,
  Tabs,
  Text,
} from '@mantine/core';
//import { TextInfo, Title1_main, TitleLabel, useHeadersStyles } from '../../_styles/headers';
import { InnerPageContainer } from '../../components/Containers/InnerPageContainer';
//import { NavLink } from 'react-router-dom';

import { useState, useCallback } from 'react';
import { produce } from 'immer';
import { FromTo } from '../../components/Dates/FromTo';
import {
  TextInfo,
  Title1_main,
  Title2_second,
  TitleLabel,
} from '@/components/TextBlocks/TextBlocks';
import { TreatmentHistory } from '@/components/_medicalcard/CardHistory/History';
import { PostponedPayments } from '@/components/_payments/Postponed/PostponedPayments';
import { MyAbonements } from '@/components/_abonement/MyAbonements';
import { AllAbonements } from '@/components/_abonement/AllAbonements';

export default function MedicalCard() {
  const changeInfo = useCallback((text: string, fieldId: string) => {
    setUserInfo(
      produce((draft) => {
        const item = draft.find((item) => item.field === fieldId);
        if (item) {
          item.newValue = text;
        }
      })
    );
  }, []);

  const resetChanges = () => {
    setUserInfo(
      produce((draft) => {
        draft.forEach((item) => {
          item.newValue = '';
        });
      })
    );
  };

  const [userInfo, setUserInfo] = useState([
    {
      field: 'secondName',
      name: 'Фамилия',
      mock: 'Антонова',
      required: true,
      newValue: '',
      value: '',
    },
    { field: 'firstdName', name: 'Имя', mock: 'Анна', required: true, newValue: '', value: '' },
    {
      field: 'middleName',
      name: 'Отчество',
      mock: 'Антоновка',
      required: false,
      newValue: '',
      value: '',
    },
    {
      field: 'phone',
      name: 'Телефон',
      mock: '+71234567890',
      required: true,
      newValue: '',
      value: '',
      mask: '',
    },
    {
      field: 'email',
      name: 'Email',
      mock: 'mail@gmail.com',
      required: true,
      newValue: '',
      value: '',
      mask: '',
    },
    {
      field: 'birthday',
      name: 'Дата рождения',
      mock: '01.01.2001',
      required: true,
      newValue: '',
      value: '',
      mask: '',
    },
    {
      field: 'city',
      name: 'Город',
      mock: 'Санкт-Петербург',
      required: true,
      newValue: '',
      value: '',
      mask: '',
    },
    {
      field: 'address',
      name: 'Адрес',
      mock: 'Цветочный бульварб д.8 кв.88',
      required: true,
      newValue: '',
      value: '',
      mask: '',
      autosize: true,
    },
    { field: 'inn', name: 'ИНН', mock: '', required: false, newValue: '', value: '', mask: '' },
    { field: 'snils', name: 'Снилс', mock: '', required: false, newValue: '', value: '', mask: '' },
  ]);
  return (
    <InnerPageContainer>
      <Title1_main>Комплексный продукт (Абонемент)</Title1_main>
      <Space h="md" />
      <Title2_second>Мои абонементы</Title2_second>
      <Space h="xs" />
      <MyAbonements />
      <Space h="md" />
      <Title2_second>Доступные абонементы</Title2_second>
      <Space h="xs" />
      <AllAbonements />
    </InnerPageContainer>
  );
}
