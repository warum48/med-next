import * as React from 'react';
//import { FastCommentsCommentWidget } from 'fastcomments-react';
import { useForm } from '@mantine/form';

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
//import { Title1_main, TitleLabel } from '../../_styles/headers';
import { FloatingLabelInputMask } from '../../components/Inputs/FloatingLabelInputMask';
//import { FastCommentBlock } from '../../components/FastComment/FastCommentBlock';
import { FloatingLabelInput } from '../../components/Inputs/FloatingLabelInput';
import {
  DocumentNode,
  OperationVariables,
  TypedDocumentNode,
  useMutation,
  useReactiveVar,
} from '@apollo/client';
//import { PATIENT_REGISTRATION } from '../../_apollo/queries/accounts/mutations/patientRegistration';
import { PatientRegistration } from '../../__generated__/graphql';
//import {
//  patientRegistrationInitValue,
//  patientRegistrationVar,
//  phoneNumberVar,
//} from '../../_apollo/state/Registration';
import { CodeConfirm } from './CodeConfirm';
//import { FloatingLabelSelect } from '../../components/Inputs/FloatingLabelSelect';
//import type {TRegStep}  from './Registration';
import { ErrorMessage } from '../../components/Errors/ErrorMessage';
import dayjs from 'dayjs';
import { formatDateRuToNormal } from '../../utils/dateRuToNormal';
import { Title1_main, TitleLabel } from '../TextBlocks/TextBlocks';
import { TRegStep } from '@/app/registration/page';
import { patientRegistrationInitValue, patientRegistrationVar, phoneNumberVar } from '@/apollo/state/Registration';
import { PATIENT_REGISTRATION } from '@/apollo/queries/accounts/mutations/patientRegistration';
import { FloatingLabelSelect } from '../Inputs/FloatingLabelSelect';
import { FormPaper } from '../Containers/FormPaper';
//import {formatDateRuToNormal} from 

type TRegFormProps = { //<T>
  setStep: React.Dispatch<React.SetStateAction<TRegStep>>; //
};

export function RegForm({ setStep }: TRegFormProps) { //<T><T>
  const theme = useMantineTheme();
  const patientRegistrationVar_re = useReactiveVar(patientRegistrationVar);

  const onSubmit = (values: PatientRegistration) => {
    doReg();
  };

  const form = useForm<PatientRegistration>({
    initialValues: patientRegistrationInitValue, //initialValues,

    validate: (values) => {
      return {
        firstName:
          values.firstName.trim().length < 2 ? 'Имя должно содержать хотя бы 2 буквы' : null,
        lastName:
          values.lastName.trim().length < 2 ? 'Фамилия должна содержать хотя бы 2 буквы' : null,
        patronymic:
          values.lastName.trim().length > 0 && values.lastName.trim().length < 2
            ? 'Фамилия должна содержать хотя бы 2 буквы'
            : null,
        // name: values.name.trim().length < 2 ? 'Имя должно содержать хотя бы 2 буквы' : null,
        email: /^\S+@\S+$/.test(values.email) ? null : 'Некорректный email',
        birthDate: values.birthDate.includes('_')  ? 'Заполнено не верно' : null,
        // username:values.username.trim().length < 2 ? 'Имя должно содержать хотя бы 2 буквы' : null,
        //password: values.password.length < 6 ? 'Пароль должен содержать хотя бы 6 знаков' : null,
        // age:
        //   values.age.trim().length < 8 || values.age.trim().includes('_')
        //     ? 'Это поле обязательно'
        //     : null,
      };
    },
  });

  const [doReg, { loading: loading_reg, error: error_reg, data: data_reg }] = useMutation(
    PATIENT_REGISTRATION,
    {
      variables: {
        patient: patientRegistrationVar_re, //{...values, phoneNumber:values.phoneNumber.replace(/\D/g, ''), birthDate: '2012-12-31'} ,
      },
    }
  ); //<DocumentNode | TypedDocumentNode<any, OperationVariables>>

  React.useEffect(() => {
    // window.localStorage.setItem('user-form', JSON.stringify(form.values));
    console.log('birth:', form.values?.birthDate)
    //console.log(dayjs(form.values?.birthDate).format('YYYY-MM-DD'));
    console.log('formatDateRuToNormal', formatDateRuToNormal(form.values?.birthDate))
    patientRegistrationVar({
      ...form.values,
      phoneNumber: form.values.phoneNumber.replace(/\D/g, ''),
      additionalPhoneNumber: form.values?.additionalPhoneNumber?.replace(/\D/g, ''),
      birthDate: formatDateRuToNormal(form.values?.birthDate),//'2012-12-31',
      gender: form.values?.gender?.substring(0,1).toLowerCase()
    });
    phoneNumberVar(form.values.phoneNumber.replace(/\D/g, ''));
  }, [form.values]);

  React.useEffect(() => {
    if (data_reg?.patientRegistration?.statusCode == 200) {
      setStep('confirmCode');
    }
  }, [data_reg]);

  return (
    <Container size={500} mb={40} pt={{base: 'xl', md: '0'}} >
     <Group grow> <Title1_main 
      //align="center"
      ta="center"
      >Регистрация</Title1_main></Group>

      <FormPaper>
        <form onSubmit={form.onSubmit((values) => onSubmit(values))}>
          {/*<TextInput label="Телефон" placeholder="you@yourmail.ru" required />*/}
          <TitleLabel>Ваши данные</TitleLabel>

          <FloatingLabelInput label="Имя " form={form} formField="firstName" required />
          <FloatingLabelInput label="Фамилия " form={form} formField="lastName" required />
          <FloatingLabelInput label="Отчество" form={form} formField="patronymic" />
          <FloatingLabelInput label="Email " form={form} formField="email" required />
          <FloatingLabelSelect
            label="Пол "
            form={form}
            formField="gender"
            //required
          />

          <FloatingLabelInputMask
            label="Телефон "
            form={form}
            formField="phoneNumber"
            required
            mask="+7 (999) 999-99-99"
            type="tel"
            //name="phone"
            //id="phone"
          />
          <FloatingLabelInputMask
            label="Дата рождения "
            form={form}
            formField="birthDate"
            required
            mask="99.99.9999"
            //type="tel"
          />

          {/*---OPTIONAL---*/}
          <FloatingLabelInputMask
            label="Дополнительный телефон "
            form={form}
            formField="additionalPhoneNumber"
            //required
            mask="+7 (999) 999-99-99"
            type="tel"
            //name="phone"
            //id="phone"
          />

          <FloatingLabelInput
            label="Пароль"
            form={form}
            type="password"
            formField="password"
            required
          />

          {/*<PasswordInput placeholder="Повторите пароль" required mt="md" /> */}

          <Button fullWidth mt="xl" type="submit">
            Зарегистрироваться
          </Button>
        </form>
       {/* <Text>{data_reg?.patientRegistration?.detail}</Text> */}
       {error_reg &&
        <ErrorMessage detail={data_reg?.patientRegistration?.details} />
       }
      </FormPaper>
    </Container>
  );
}
