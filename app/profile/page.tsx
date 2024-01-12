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
import { MutationResult, useMutation, useQuery, useReactiveVar } from '@apollo/client';
import { GlobalContext } from '@/context/ContextGlobal';
import { GET_CITIES } from '@/apollo/queries/main/getCities';
import { Preloader } from '@/components/Preloader/Preloader';
import { useFetch } from '@/services/useFetch';
import {
  ChangeUserMutation,
  GetCentersAndCitiesQuery,
  GetUserDataQuery,
  UserInput,
} from '@/__generated__/graphql';
import { GET_USER_DATA } from '@/apollo/queries/accounts/getUserData';
import { formatDateNormalToRu } from '@/utils/formatDates';
import { formatPhoneNumber } from '@/utils/formatPhone';
import { CHANGE_USER } from '@/apollo/queries/accounts/mutations/changeUser';
import { updatedUserFields } from '@/apollo/state/updateUser';
import { useMutationNotifications } from '@/services/useNotifications';
import { useMockMutation } from '@/services/useMockMutation';

type TFields = {
  field: string;
  mutationField?: string;
  mutationFunction?: (value: any) => any;
  name: string;
  mock: string;
  required: boolean;
  newValue: string | any;
  value: string;
  autosize?: boolean;
  mask?: string;
  type?: TEditTypes; //'select',
  data?: any; //null |     (  { value: any, label: any }[])
}; //TODO better typing for mutationFields and functions

export default function Profile() {
  const renderCount = React.useRef(0);
  const [photoUpload, setPhotoUpload] = useState<boolean>(false);
  const [userInfo, setUserInfo] = useState<TFields[]>([]);
  const updatedUserFields_re = useReactiveVar(updatedUserFields);
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
          item.newValue = null;
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
  } = isDemo
    ? useFetch<GetUserDataQuery>('/mock/getUserData.json')
    : useQuery(GET_USER_DATA, {
        context: { clientName: 'accounts' },
      });

  type TmutRes = { loading: boolean; error: any; data: any; refetch?: any; networkStatus?: any };
  type TMuta = [() => void, TmutRes];

  const [
    mutateUser,
    { loading: loading_mutate_user, error: error_mutate_user, data: data_mutate_user },
  ] = isDemo
    ? useMockMutation<any>('/mock/changeUser.json', {})
    : useMutation(CHANGE_USER, {
        variables: {
          userChangings: updatedUserFields_re, //{...values, phoneNumber:values.phoneNumber.replace(/\D/g, ''), birthDate: '2012-12-31'} ,
        },
      });

  function onSuccess() {
    refetch_user_info();
    resetChanges();
  }

  useMutationNotifications({
    text: 'Профиль обновлен',
    data: data_mutate_user,
    data_code: data_mutate_user?.changeUser?.statusCode,
    data_details: data_mutate_user?.changeUser?.details,
    error: error_mutate_user,
    onSuccess: onSuccess,
  });

  React.useEffect(() => {
    //console.log('=-=data_user_info', data_user_info);
    //console.log('=-=data_user_info----', data_user_info?.getUserData?.data);
    if (data_user_info?.getUserData?.data) {
      for (const element in data_user_info?.getUserData?.data) {
        //console.log('-=element', element);
        //console.log(
        //  'data_user_info?.getUserData?.data-element',
        //  data_user_info?.getUserData?.data[element as keyof typeof data_user_info.getUserData.data]
        //); //keyof typeof data_user_info?.getUserData?.data
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
      field: 'firstName',
      name: 'Имя',
      mock: 'Анна',
      required: true,
      newValue: null,
      value: data_user_info?.getUserData?.data?.firstName ?? '',
    },
    {
      field: 'lastName',
      name: 'Фамилия',
      mock: 'Антонова',
      required: true,
      newValue: null,
      value: data_user_info?.getUserData?.data?.lastName ?? '',
    },
    {
      field: 'patronymic',
      name: 'Отчество',
      mock: 'Антоновка',
      required: false,
      newValue: null,
      value: data_user_info?.getUserData?.data?.patronymic ?? '',
    },
    {
      field: 'phoneNumber',
      name: 'Телефон',
      mock: '+71234567890',
      required: true,
      newValue: null,
      value: formatPhoneNumber(data_user_info?.getUserData?.data?.phoneNumber) ?? '',
      mask: '',
    },
    {
      field: 'email',
      name: 'Email',
      mock: 'mail@gmail.com',
      required: true,
      newValue: null,
      value: data_user_info?.getUserData?.data?.email ?? '',
      mask: '',
    },
    {
      field: 'birthDate',
      name: 'Дата рождения (дд.мм.гггг)',
      mock: '01.01.2001',
      required: true,
      newValue: null,
      value: formatDateNormalToRu(data_user_info?.getUserData?.data?.birthDate) ?? '',
      mask: '',
    },
    {
      field: 'city',
      mutationField: 'cityId',
      mutationFunction: (value: string) => parseFloat(value),
      name: 'Город',
      mock: 'Санкт-Петербург',
      required: true,
      newValue: null,
      value: data_user_info?.getUserData?.data?.city?.id.toString() ?? '1',
      mask: '',
      type: 'select',
      data: data_profile?.getCities?.data?.map(({ id, name }: any) => ({
        value: id.toString(),
        label: name,
      })),
    },
    {
      field: 'defaultMedicalCenter',
      mutationField: 'defaultMedicalCenterId',
      mutationFunction: (value: string) => parseFloat(value),
      name: 'Медцентр по умолчанию',
      mock: 'Онни',
      required: true,
      newValue: null,
      value: data_user_info?.getUserData?.data?.defaultMedicalCenter?.id.toString() ?? '31',
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
    { field: 'inn', name: 'ИНН', mock: '', required: false, newValue: null, value: '', mask: '' },
    {
      field: 'snils',
      name: 'Снилс',
      mock: '',
      required: false,
      newValue: null,
      value: '',
      mask: '',
    },
  ];

  /*const complexFields = {
    city: {},
  };*/

  function updateUserData() {
    //userInfo: TFields[]
    const updatedData: UserInput = {};
    userInfo.forEach((field) => {
      if (field.newValue !== null) {
        //updatedData[field.mutationField ? field.mutationField as keyof typeof updatedData : field.field as keyof typeof updatedData] = field.newValue;
        let castedValue = field.mutationFunction
          ? field.mutationFunction(field.newValue)
          : field.newValue;
        updatedData[
          field.mutationField
            ? (field.mutationField as keyof typeof updatedData)
            : (field.field as keyof typeof updatedData)
        ] = castedValue; //field.newValue;
      }
    });
    // console.log('updatedData', updatedData);
    updatedUserFields(updatedData);
    //  console.log('updatedUserFields_re', updatedUserFields_re);
    // mutateUser();
    //return updatedData;
  }

  React.useEffect(() => {
    // setUserInfo(userInfo);
    //console.log('data_profile', data_profile);
    renderCount.current += 1;
    if (data_profile && data_user_info) {
      setUserInfo(defaultUserInfo);
    }
  }, [data_profile, data_user_info]);

  React.useEffect(() => {
    updateUserData();
  }, [userInfo]);

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
          <Stack
            gap={6}
            // key={'user_render'+data_user_info?.getUserData?.data?.clientId}
          >
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
                  text={item.newValue === null ? item.value : item.newValue} //item.mock
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
            {/*userInfo.filter((item: any) => item.newValue != null).length}
            {JSON.stringify(userInfo)*/}

            {loading_profile && <Preloader />}

            <Group py="md">
              {userInfo.filter((item: any) => item.newValue != null).length > 0 && (
                <>
                  <StyledButton appearence={'main_first_outlined'} maw={150} onClick={resetChanges}>
                    Отмена
                  </StyledButton>
                  <StyledButton appearence={'main_second'} maw={150} onClick={() => mutateUser()}>
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
