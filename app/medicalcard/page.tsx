'use client'
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
import { TextInfo, Title1_main, TitleLabel } from '@/components/TextBlocks/TextBlocks';
import {  TreatmentHistory } from '@/components/_medicalcard/CardHistory/History';

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
      <Title1_main>Медицинская карта</Title1_main>
      <Space h="xl" />
      <Tabs
        defaultValue="type1"
        //styles={(theme) => ({
        //  tab: {
        //    ...theme.fn.focusStyles(),
        //    '&[data-active]': {
        //      backgroundColor: theme.colors.oceanBlue[0],
        //    },
        //  },
        //})}
      >
        <Tabs.List>
          <Tabs.Tab value="type1">ИСТОРИЯ ЛЕЧЕНИЯ</Tabs.Tab>
          <Tabs.Tab value="type2">ИСТОРИЯ ПОСЕЩЕНИЙ</Tabs.Tab>
        </Tabs.List>
        <Space h="xl" />
        <Tabs.Panel value="type1" pt="xs">
          <Stack>
            <FromTo />
            <Select
              maw={420}
              label="Специальность врача"
              placeholder="..."
              data={[
                { value: 'react', label: 'Хирург' },
                { value: 'ng', label: 'Гастроэнтеролог' },
                // { value: 'svelte', label: 'Svelte' },
                // { value: 'vue', label: 'Vue' },
              ]}
            />
            <Select
              maw={420}
              label="ФИО врача"
              placeholder="..."
              data={[
                { value: 'react', label: 'Петров' },
                { value: 'ng', label: 'Иванов' },
                // { value: 'svelte', label: 'Svelte' },
                // { value: 'vue', label: 'Vue' },
              ]}
            />
            <Space h="xs" />
            <TreatmentHistory/>
          </Stack>
        </Tabs.Panel>
        <Tabs.Panel value="type2" pt="xs">
          {' '}
          <Stack 
          //maw={320}
          >
            <FromTo />
            {/*
            <Space h="xl" />
            <Group gap={0} grow={true}>
              <Box style={{flexGrow:0}}>lala</Box>
            <Divider orientation="horizontal" style={{maxWidth: '100%'}}/>
            </Group>
            
            {[1,2].map((item, index) => (
              <Stack key={'uinf' + index}>
              <Group >
                <TitleLabel>Название услуги:</TitleLabel>
                <TextInfo>услуга</TextInfo>
              </Group>
              <Group >
                <TitleLabel>Название услуги:</TitleLabel>
                <TextInfo>услуга</TextInfo>
              </Group>
              </Stack>
            ))}
            */}
            <Space h="xs" />
            <TreatmentHistory/>

          </Stack>{' '}
          
        </Tabs.Panel>
      </Tabs>
    </InnerPageContainer>
  );
}
