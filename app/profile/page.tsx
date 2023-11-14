'use client'
import * as React from 'react';
import {
  Anchor,
  Box,
  Divider,
  Group,
  PasswordInput,
  Space,
  Stack,
  Tabs,
  Text,
} from '@mantine/core';
//import { TextInfo, Title1_main, TitleLabel, useHeadersStyles } from '../../_styles/headers';
import { InnerPageContainer } from '../../components/Containers/InnerPageContainer';
//import { Link } from 'react-router-dom';
//import { RoutesTypes } from 'ROUTES';
//import { StyledButton } from '../../components/Buttons/StyledButton';
//import { EditableText } from '../../components/Inputs/EditableText';
import { useState, useCallback } from 'react';
import { produce } from 'immer';
import { StyledButton } from '@/components/Buttons/StyledButton';
import { RoutesTypes } from '@/global/ROUTES';
import Link from 'next/link';
import { Title1_main, TitleLabel } from '@/components/TextBlocks/TextBlocks';
import { EditableText } from '@/components/Inputs/EditableText';

export default function Profile() {
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
      <Title1_main>Профиль</Title1_main>
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
          <Tabs.Tab value="type1">ИНФОРМАЦИЯ</Tabs.Tab>
          <Tabs.Tab value="type2">СМЕНИТЬ ПАРОЛЬ</Tabs.Tab>
        </Tabs.List>
        <Space h="xl" />
        <Tabs.Panel value="type1" pt="xs">
          <Stack>
            {userInfo.map((item, index) => (
              <Group key={'uinf' + index}>
                <TitleLabel>{item.name}:</TitleLabel>
                <EditableText
                  autosize={item.autosize}
                  text={item.newValue || item.mock}
                  onChange={(
                    e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>
                  ) => changeInfo(e.currentTarget.value, item.field)}
                />
              </Group>
            ))}

            <Group>
              {userInfo.filter((item: any) => item.newValue != '').length > 0 && (
                <>
                  <StyledButton appearence={'main_cancel'} maw={150} onClick={resetChanges}>
                    Отмена
                  </StyledButton>
                  <StyledButton appearence={'main_second'} maw={150}>
                    Сохранить
                  </StyledButton>
                </>
              )}
            </Group>
            <Divider />
            <Link href={RoutesTypes.Family}>
              <Anchor size="sm" component="button">
                Назначить главного Пациента
              </Anchor>
            </Link>
            <Link href={RoutesTypes.Family}>
              <Anchor size="sm" component="button">
                Добавить родственника
              </Anchor>
            </Link>
          </Stack>
        </Tabs.Panel>
        <Tabs.Panel value="type2" pt="xs">
          {' '}
          <Stack maw={320}>
            <PasswordInput label="Старый пароль" placeholder="Ваш пароль" required mt={'-.25rem'} />
            <PasswordInput
              label="Новый пароль (минимум 8 символов)"
              placeholder="Новый пароль"
              required
              mt="md"
            />
            <PasswordInput placeholder="Повторите новый пароль" required />
            <StyledButton appearence={'main_second'} maw={150}>
              Сохранить
            </StyledButton>
          </Stack>{' '}
        </Tabs.Panel>
      </Tabs>
    </InnerPageContainer>
  );
}
