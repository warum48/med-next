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
import { FloatingLabelInputMask } from '../../components/Inputs/FloatingLabelInputMask';
import { useLazyQuery, useReactiveVar } from '@apollo/client';
import { FloatingLabelInput } from '../../components/Inputs/FloatingLabelInput';
import { ApolloSettingsContext } from '@/apollo/context';
import { phoneNumberVar } from '@/apollo/state/Registration';
import { Title1_main } from '../TextBlocks/TextBlocks';
import { RoutesTypes } from '@/global/ROUTES';
import Link from 'next/link';
import { PATIENT_LOGIN_BY_PASSWORD } from '@/apollo/queries/accounts/patienLoginByPassword';
//import { Title1_main } from '../../_styles/headers';
//import { FastCommentBlock } from '../../components/FastComment/FastCommentBlock';
//import { RoutesTypes } from 'ROUTES';
////import { PATIENT_LOGIN_BY_PHONE } from '../../_apollo/queries/accounts/patientLoginByPhone';
//import { phoneNumberVar } from '../../_apollo/state/Registration';
//import { PATIENT_LOGIN_BY_PASSWORD } from '../../_apollo/queries/accounts/patienLoginByPassword';
//import { UserDetails } from './UserDetails';
//import { GlobalContext } from '../../_context';
//import { ApolloSettingsContext } from '../../_apollo/context';

export function AuthPhonePass() {
  console.log('AuthPhonePass()')
  const theme = useMantineTheme();
  const {setCookieToken} = React.useContext(ApolloSettingsContext);
  const phoneNumberVar_re = useReactiveVar(phoneNumberVar)

 

  const form = useForm({
    initialValues: {
      phone: '',
      password: ''
    },

    validate: (values) => {
      return {
        /*firstName:
              values.firstName.trim().length < 2 ? 'Имя должно содержать хотя бы 2 буквы' : null,
            lastName:
              values.lastName.trim().length < 2 ? 'Фамилия должна содержать хотя бы 2 буквы' : null,
            // name: values.name.trim().length < 2 ? 'Имя должно содержать хотя бы 2 буквы' : null,
            email: /^\S+@\S+$/.test(values.email) ? null : 'Некорректный email',
            // username:values.username.trim().length < 2 ? 'Имя должно содержать хотя бы 2 буквы' : null,
            //password: values.password.length < 6 ? 'Пароль должен содержать хотя бы 6 знаков' : null,
            age:
              values.age.trim().length < 8 || values.age.trim().includes('_')
                ? 'Это поле обязательно'
                : null,
                */
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
     // setIsLoggedIn(true);
    // setCookie(data.login?.token);
      var d = new Date();
      d.setFullYear(d.getFullYear() + 100);
      console.log('SETTING TOKEN', data?.patienLoginByPassword?.data?.token);
      setCookieToken("mednekot", data?.patienLoginByPassword?.data?.token, { path: "/", expires: d });

    /*  if (changePassword) {
        setPasswordChangedSuccessfully(true);
      } else {
        if (email) {
          setCookieEmail("liame", email, { path: "/", expires: d });
        }
      }*/
    }
  }, [data]);

  return (
    <>
      <Container size={420} my={40}>
        {/* <Title
          align="center"
          variant="h4"
          sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}`, fontWeight: 900 })}
        >
          Добро пожаловать!
    </Title> */}
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
          {/*<TextInput label="Телефон" placeholder="you@yourmail.ru" required />*/}
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
  {/*<PasswordInput label="Пароль" placeholder="Ваш пароль" required mt="md" /> */}
          <Group 
          //position="apart"
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
          {/*     <Text>{data?.patienLoginByPassword?.details}</Text>
data?.patienLoginByPassword?.statusCode== 200 &&
         
  */}
        </Paper>
       
      </Container>
      {/*<FastCommentBlock/>*/}
    </>
  );
}
