"use client"
import * as React from 'react';
//import { FastCommentsCommentWidget } from 'fastcomments-react';
import { useForm } from '@mantine/form';
//import { NavLink as RouterLink, useSearchParams } from 'react-router-dom';

import {
  TextInput,
  PasswordInput,
  Checkbox,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Group,
  Button,
  Box,
  useMantineTheme,
} from '@mantine/core';
import { ApolloSettingsContext } from '@/apollo/context';
import { phoneNumberVar } from '@/apollo/state/Registration';
import { useLazyQuery, useReactiveVar } from '@apollo/client';
import { PATIENT_LOGIN_BY_PASSWORD } from '@/apollo/queries/accounts/patienLoginByPassword';
import { Title1_main } from '@/components/TextBlocks/TextBlocks';
import Link from 'next/link';
import { RoutesTypes } from '@/global/ROUTES';
import { FloatingLabelInputMask } from '@/components/Inputs/FloatingLabelInputMask';
import { FloatingLabelInput } from '@/components/Inputs/FloatingLabelInput';
import { useCookies } from 'react-cookie';
import { AuthContext } from '@/context/AuthContext';
//import { Title1_main } from '../../_styles/headers';
//import { FloatingLabelInputMask } from '../../components/Inputs/FloatingLabelInputMask';
//import { FastCommentBlock } from '../../components/FastComment/FastCommentBlock';
//import { RoutesTypes } from 'ROUTES';
//import { useLazyQuery, useReactiveVar } from '@apollo/client';
//import { PATIENT_LOGIN_BY_PHONE } from '../../_apollo/queries/accounts/patientLoginByPhone';
//import { phoneNumberVar } from '../../_apollo/state/Registration';
//import { FloatingLabelInput } from '../../components/Inputs/FloatingLabelInput';
//import { PATIENT_LOGIN_BY_PASSWORD } from '../../_apollo/queries/accounts/patienLoginByPassword';
//import { UserDetails } from './UserDetails';
//import { GlobalContext } from '../../_context';
//import { ApolloSettingsContext } from '../../_apollo/context';

export default function AuthPhonePass() {
  console.log('AuthPhonePass()')
  const theme = useMantineTheme();
  const {setCookieToken} = React.useContext(ApolloSettingsContext);
  //const [cookiesToken, setCookieToken] = useCookies(["mednekot"]);
  const phoneNumberVar_re = useReactiveVar(phoneNumberVar);
  //const {checkAuth} = useAuth();
 const {checkAuth} = React.useContext(AuthContext);

 

  const form = useForm({
    initialValues: {
      phone: '',
      password: ''
    },

    validate: (values) => {
      return {

      };
    },
  });

  const [doAuth, { loading, error, data }] = useLazyQuery(PATIENT_LOGIN_BY_PASSWORD, {
    variables: {
      phoneNumber:  phoneNumberVar_re ,
      password: form.values.password
    }});

  const onSubmit = (values:any) => {
    const result = values.phone.replace(/\D/g, '');
    console.log('result', result);
    console.log('values', values);
    phoneNumberVar(result);
    doAuth()
  }

  React.useEffect(() => {
    console.log(' auth data', data)
    if (data && data?.patienLoginByPassword?.data?.token) {
      var d = new Date();
      d.setFullYear(d.getFullYear() + 100);
      console.log('SETTING TOKEN', data?.patienLoginByPassword?.data?.token);
      setCookieToken("mednekot", data?.patienLoginByPassword?.data?.token, { path: "/", expires: d });
      checkAuth();
    }
  }, [data]);

  return (
    <>
      <Container size={420} my={40}>
        
        <Title1_main 
        //align="center"
        >Добро пожаловать!</Title1_main>
        <Text c="dimmed" size="sm"
        // align="center" 
         mt={5}>
          Нет аккаунта?{' '}
          <Link href={RoutesTypes.Registration}>
          <Anchor size="sm" component="button">
             Зарегистрироваться
          </Anchor>
          </Link>
        </Text>

        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <form onSubmit={form.onSubmit((values) => onSubmit(values))}>
          <FloatingLabelInputMask
            label="Телефон"
            form={form}
            formField="phone"
            required
            mask="+7 (999) 999-99-99"
            type="tel"
          //  {...form.getInputProps('phone')}
            name="phone"
            id="phone"
  />
          
          <FloatingLabelInput
            label="Пароль"
            form={form}
            type="password"
            formField="password"
            required
          />

          <Group 
         // position="apart" 
          mt="lg">
            {/* <Checkbox label="Запомнить меня" /> */}
            <Anchor component="button" size="sm">
              Забыли пароль?
            </Anchor>
          </Group>
          <Button fullWidth mt="xl" type='submit'>
            Войти
          </Button>
          </form>
          
        </Paper>
       
      </Container>
     {/* <FastCommentBlock/> */}
    </>
  );
}
