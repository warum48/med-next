'use client';
import * as React from 'react';
import {
  Anchor,
  Avatar,
  Box,
  Divider,
  Group,
  PasswordInput,
  Space,
  Stack,
  Tabs,
  Text,
} from '@mantine/core';
import { InnerPageContainer } from '../../components/Containers/InnerPageContainer';
import { useState, useCallback } from 'react';
import { produce } from 'immer';
import { StyledButton } from '@/components/Buttons/StyledButton';
import { RoutesTypes } from '@/global/ROUTES';
import Link from 'next/link';
import { InnerPageTitle, Title1_main, TitleLabel } from '@/components/TextBlocks/TextBlocks';
import { EditableText, TEditTypes, TTfOnChange } from '@/components/Inputs/EditableText';
import { DropZone } from '@/components/_profile/DropZone';
import { GET_PROFILE_FORM_DATA } from '@/apollo/queries/main/_getProfile';
import { useQuery } from '@apollo/client';
import { GlobalContext } from '@/context/ContextGlobal';
import { GET_CITIES } from '@/apollo/queries/main/getCities';
import { Preloader } from '@/components/Preloader/Preloader';
import { useFetch } from '@/services/useFetch';
import { GetCentersAndCitiesQuery } from '@/__generated__/graphql';
import { GET_USER_DATA } from '@/apollo/queries/accounts/getUserData';

type TFields = {
  field: string;
  name: string;
  mock: string;
  required: boolean;
  newValue: string | any;
  value: string;
  autosize?: boolean;
  mask?: string;
  type?: TEditTypes; //'select',
  data?: any; //null |     (  { value: any, label: any }[])
};

export default function Profile() {
  const renderCount = React.useRef(0);
  const [photoUpload, setPhotoUpload] = useState<boolean>(false);
  const [userInfo, setUserInfo] = useState<TFields[]>([]);
  //const defaultUserInfo: TFields[] = []
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

  const { isDemo } = React.useContext(GlobalContext);
  const {
    data: data_profile,
    loading: loading_profile,
    error: error_profile,
    refetch: refetch_profile,
    networkStatus: networkStatus_profile,
  } = isDemo
    ? useFetch<GetCentersAndCitiesQuery>('/mock/_getProfile.json')
    : useQuery(GET_PROFILE_FORM_DATA, {
        context: { clientName: 'main' },
      });

  const {
    data: data_user_info,
    loading: loading_user_info,
    error: error_user_info,
    refetch: refetch_user_info,
    networkStatus: networkStatus_user_info,
  } =
    //isDemo
    //  ? useFetch<GetCentersAndCitiesQuery>('/mock/_getProfile.json')
    //  :
    useQuery(GET_USER_DATA, {
      context: { clientName: 'accounts' },
    });

  React.useEffect(() => {
    console.log('=-=data_user_info', data_user_info);
    console.log('=-=data_user_info----', data_user_info?.getUserData?.data);
    if (data_user_info?.getUserData?.data) {
      for (const element in data_user_info?.getUserData?.data) {
        console.log('-=element', element);
        console.log(
          'data_user_info?.getUserData?.data-element',
          data_user_info?.getUserData?.data[element as keyof typeof data_user_info.getUserData.data]
        ); //keyof typeof data_user_info?.getUserData?.data
      }
    }
  }, [data_user_info]);

  /*
  id
            clientId
            firstName
            lastName
            patronymic
            birthDate
            gender
            email
            phoneNumber
            */

  const defaultUserInfo: TFields[] = [
    // React.useMemo(() => (
   
    {
      field: 'firstdName',
      name: 'Имя',
      mock: 'Анна',
      required: true,
      newValue: '',
      value: data_user_info?.getUserData?.data?.firstName ?? '',
    },
    {
      field: 'lastName',
      name: 'Фамилия',
      mock: 'Антонова',
      required: true,
      newValue: '',
      value: data_user_info?.getUserData?.data?.lastName ?? '',
    },
    {
      field: 'patronymic',
      name: 'Отчество',
      mock: 'Антоновка',
      required: false,
      newValue: '',
      value: data_user_info?.getUserData?.data?.patronymic ?? '',
    },
    {
      field: 'phoneNumber',
      name: 'Телефон',
      mock: '+71234567890',
      required: true,
      newValue: '',
      value: data_user_info?.getUserData?.data?.patronymic ?? '',
      mask: '',
    },
    {
      field: 'email',
      name: 'Email',
      mock: 'mail@gmail.com',
      required: true,
      newValue: '',
      value: data_user_info?.getUserData?.data?.email ?? '',
      mask: '',
    },
    {
      field: 'birthDate',
      name: 'Дата рождения (дд.мм.гггг)',
      mock: '01.01.2001',
      required: true,
      newValue: '',
      value: data_user_info?.getUserData?.data?.birthDate ?? '',
      mask: '',
    },
    {
      field: 'city',
      name: 'Город',
      mock: 'Санкт-Петербург',
      required: true,
      newValue: '',
      value: data_user_info?.getUserData?.data?.patronymic ?? '1',
      mask: '',
      type: 'select',
      data: data_profile?.getCities?.data?.map(({ id, name }: any) => ({
        value: id.toString(),
        label: name,
      })),
    },
    {
      field: 'defaultMedicalCenter',
      name: 'Медцентр по умолчанию',
      mock: 'Онни',
      required: true,
      newValue: '',
      value: data_user_info?.getUserData?.data?.patronymic ?? '31',
      mask: '',
      type: 'select',
      data: data_profile?.getMedicalCenters?.data?.map(({ id, name }: any) => ({
        value: id.toString(),
        label: name,
      })),
    },
    /* {
      field: 'address',
      name: 'Адрес',
      mock: 'Цветочный бульварб д.8 кв.88',
      required: true,
      newValue: '',
      value: '',
      mask: '',
      autosize: true,
    },*/
    { field: 'inn', name: 'ИНН', mock: '', required: false, newValue: '', value: '', mask: '' },
    { field: 'snils', name: 'Снилс', mock: '', required: false, newValue: '', value: '', mask: '' },
  ];

  const complexFields = {
    city: {},
  };

  React.useEffect(() => {
    // setUserInfo(userInfo);
    console.log('data_profile', data_profile);
    renderCount.current += 1;
    if (data_profile && data_user_info) {
      setUserInfo(defaultUserInfo);
    }
  }, [data_profile, data_user_info]);

  /*
    queryMapping: data?.getGoodsCategories?.resultsList.map(
        ({ id, name }: TypeGQLFiltersItem) => ({ value: id, label: name })
      ),
      */

  return (
    <InnerPageContainer>
      <Group w="100%" justify="space-between" align="flex-start">
        <Title1_main>Профиль</Title1_main>
        {!photoUpload ? (
          <Avatar
            className="cursor-pointer"
            src="avatar.png"
            alt="Загрузить фото"
            size={50}
            onClick={() => setPhotoUpload(true)}
          />
        ) : (
          <DropZone setPhotoUpload={setPhotoUpload} />
        )}
      </Group>
      <Space h="xl" />
      <Tabs defaultValue="type1">
        <Tabs.List>
          <Tabs.Tab value="type1">ИНФОРМАЦИЯ</Tabs.Tab>
          <Tabs.Tab value="type2">СМЕНИТЬ ПАРОЛЬ</Tabs.Tab>
        </Tabs.List>
        <Space h="xl" />
        <Tabs.Panel value="type1" pt="xs">
          <Stack gap={6} key={'user_render'+data_user_info?.getUserData?.data?.clientId}>
            {userInfo.map((item, index) => (
              <Group
                key={'uinf' + index + '_' + renderCount.current}
                px="md"
                py="8"
                //style={index % 2 == 1 ? { backgroundColor: '#f5f5f5' } : {}}
                className={index % 2 == 1 ? 'gray_highlight' : ''}
              >
                <TitleLabel>{item.name}:</TitleLabel>
                <EditableText
                  type={item.type}
                  autosize={item.autosize}
                  text={item.newValue || item.value} //item.mock
                  data={item.data}
                  value={item.newValue || item.value}
                  //onChange={(
                  //  e: any
                  //  //React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>
                  //) => {
                  //  console.log('e', e)
                  //  console.log('e.currentTarget.value', e.currentTarget.value);
                  //  changeInfo(e.currentTarget.value, item.field)
                  //}

                  onUpdate={(newValue: string) => changeInfo(newValue, item.field)}
                />
                {/*<button onClick={()=>console.log('userInfo', userInfo)}>chusi</button>*/}
              </Group>
            ))}

            {loading_profile && <Preloader />}

            <Group py='md'>
              {userInfo.filter((item: any) => item.newValue != '').length > 0 && (
                <>
                  <StyledButton appearence={'main_first_outlined'} maw={150} onClick={resetChanges}>
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
      {/*JSON.stringify(data_profile?.getCities?.data)*/}
    </InnerPageContainer>
  );
}
