import * as React from 'react';
import { useForm } from '@mantine/form';

import { Container, Group, Button, useMantineTheme, Loader, Center } from '@mantine/core';
import { FloatingLabelInputMask } from '../../components/Inputs/FloatingLabelInputMask';
import { FloatingLabelInput } from '../../components/Inputs/FloatingLabelInput';
import { useMutation, useQuery, useReactiveVar } from '@apollo/client';
import { GetUserAdminInfoQuery, PatientRegistration, UserAdminInputAdm } from '../../__generated__/graphql';
import { ErrorMessage } from '../../components/Errors/ErrorMessage';
import { formatDateRuToNormal } from '../../utils/dateRuToNormal';
import { Title1_main, TitleLabel } from '../TextBlocks/TextBlocks';
import { TRegStep } from '@/app/registration/page';
import {
  patientRegistrationInitValue,
  patientRegistrationVar,
  phoneNumberVar,
} from '@/apollo/state/Registration';
import { PATIENT_REGISTRATION } from '@/apollo/queries/accounts/mutations/patientRegistration';
import { FloatingLabelSelect } from '../Inputs/FloatingLabelSelect';
import { FormPaper } from '../Containers/FormPaper';
import { GET_USER_ADMIN_INFO } from '@/apollo/queries/admin/getUserAdminInfo';
import { Preloader } from '../Preloader/Preloader';
import { useFetch } from '@/services/useFetch';
import { GlobalContext } from '@/context/ContextGlobal';

type TRegFormProps = {
  setStep: React.Dispatch<React.SetStateAction<TRegStep>>;
};

export function RegForm({ setStep }: TRegFormProps) {
  const theme = useMantineTheme();
  const patientRegistrationVar_re = useReactiveVar(patientRegistrationVar);
  const defaultFormConfig = {
    registrationRequiredFields: 'first_name, last_name, email, phone_number, birth_date, password',
    registrationVisibleFields:
      'first_name, last_name, patronymic, email, gender, phone_number, birth_date, additional_phone_number, password',
  };
  const [formConfig, setFromConfig] = React.useState<UserAdminInputAdm>();

  const onSubmit = (values: PatientRegistration) => {
    doReg();
  };

  const form = useForm<PatientRegistration>({
    initialValues: patientRegistrationInitValue, //initialValues,

    validate: (values) => {
      return {
        firstName:
          !!values.firstName && values.firstName.trim().length < 2
            ? 'Имя должно содержать хотя бы 2 буквы'
            : null,
        lastName:
          !!values.lastName && values.lastName.trim().length < 2
            ? 'Фамилия должна содержать хотя бы 2 буквы'
            : null,
        patronymic:
          !!values.patronymic &&
          values.patronymic.trim().length > 0 &&
          values.patronymic.trim().length < 2
            ? 'Фамилия должна содержать хотя бы 2 буквы'
            : null,
        // name: values.name.trim().length < 2 ? 'Имя должно содержать хотя бы 2 буквы' : null,
        email: !!values.email && /^\S+@\S+$/.test(values.email) ? null : 'Некорректный email',
        birthDate:
          !!values.birthDate && values.birthDate.includes('_') ? 'Заполнено не верно' : null,
        // username:values.username.trim().length < 2 ? 'Имя должно содержать хотя бы 2 буквы' : null,
        password:  !!values.password && values.password.length < 8 ? 'Пароль должен содержать хотя бы 8 знаков' : null,
        // age:
        //   values.age.trim().length < 8 || values.age.trim().includes('_')
        //     ? 'Это поле обязательно'
        //     : null,
      };
    },
  });
  const {isDemo} = React.useContext(GlobalContext);

  const {
    data: data_config, //DoctorResult
    loading: loading_config,
    error: error_config,
    refetch: refetch_config,
    networkStatus: networkStatus_config,
  } = 
  isDemo
  ? useFetch<GetUserAdminInfoQuery>('/mock/getUserAdminInfo.json')
  : 
  useQuery(GET_USER_ADMIN_INFO, {
    context: { clientName: 'admin' },
    notifyOnNetworkStatusChange: true,
  }); //<GetDoctorsQuery>

  React.useEffect(() => {
   // console.log('data_config?.getUserAdminInfo?.data', data_config?.getUserAdminInfo?.data);
   if( data_config?.getUserAdminInfo) {
    setFromConfig(data_config?.getUserAdminInfo?.data?.[0]);
   }
  }, [data_config]);

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
    console.log('birth:', form.values?.birthDate);
    //console.log(dayjs(form.values?.birthDate).format('YYYY-MM-DD'));
    // console.log('formatDateRuToNormal', formatDateRuToNormal(form.values?.birthDate));
    patientRegistrationVar({
      ...form.values,
      phoneNumber: form.values.phoneNumber.replace(/\D/g, ''),
      additionalPhoneNumber: form.values?.additionalPhoneNumber?.replace(/\D/g, ''),
      birthDate: formatDateRuToNormal(form.values?.birthDate || ''), //'2012-12-31',
      gender: form.values?.gender?.substring(0, 1).toLowerCase(),
    });
    phoneNumberVar(form.values.phoneNumber.replace(/\D/g, ''));
  }, [form.values]);

  React.useEffect(() => {
    if (data_reg?.patientRegistration?.statusCode == 200) {
      setStep('confirmCode');
    }
  }, [data_reg]);

  return (
    <Container size={500} mb={40} pt={{ base: 'xl', md: '0' }}>
      <Center>
        <Title1_main
          //align="center"
          ta="center"
        >
          Регистрация
        </Title1_main>
        </Center>
      

      <FormPaper>
        {formConfig && formConfig?.registrationVisibleFields && (
          <form onSubmit={form.onSubmit((values) => onSubmit(values))}>
            {/*<TextInput label="Телефон" placeholder="you@yourmail.ru" required />*/}
            <TitleLabel>Ваши данные</TitleLabel>

            {formConfig.registrationVisibleFields.includes('first_name') && (
              <FloatingLabelInput
                label="Имя "
                form={form}
                formField="firstName"
                required={formConfig.registrationRequiredFields?.includes('first_name')}
              />
            )}
            {formConfig.registrationVisibleFields?.includes('last_name') && (
              <FloatingLabelInput
                label="Фамилия "
                form={form}
                formField="lastName"
                required={formConfig.registrationRequiredFields?.includes('last_name')}
              />
            )}
            {formConfig.registrationVisibleFields.includes('patronymic') && (
              <FloatingLabelInput
                label="Отчество"
                form={form}
                formField="patronymic"
                required={formConfig.registrationRequiredFields?.includes('patronymic')}
              />
            )}
            {formConfig.registrationVisibleFields.includes('email') && (
              <FloatingLabelInput
                label="Email "
                form={form}
                formField="email"
                required={formConfig.registrationRequiredFields?.includes('email')}
              />
            )}
            {formConfig.registrationVisibleFields.includes('gender') && (
              <FloatingLabelSelect
                label="Пол "
                form={form}
                formField="gender"
                required={formConfig.registrationRequiredFields?.includes('gender')}
              />
            )}
            {formConfig.registrationVisibleFields.includes('phone_number') && (
              <FloatingLabelInputMask
                label="Телефон "
                form={form}
                formField="phoneNumber"
                required={formConfig.registrationRequiredFields?.includes('phone_number')}
                mask="+7 (999) 999-99-99"
                type="tel"
                //name="phone"
                //id="phone"
              />
            )}
            {formConfig.registrationVisibleFields.includes('birth_date') && (
              <FloatingLabelInputMask
                label="Дата рождения "
                form={form}
                formField="birthDate"
                required={formConfig.registrationRequiredFields?.includes('birth_date')}
                mask="99.99.9999"
                //type="tel"
              />
            )}

            {/*---OPTIONAL---*/}
            {formConfig.registrationVisibleFields.includes('additional_phone_number') && (
              <FloatingLabelInputMask
                label="Дополнительный телефон "
                form={form}
                formField="additionalPhoneNumber"
                required={formConfig.registrationRequiredFields?.includes(
                  'additional_phone_number'
                )}
                mask="+7 (999) 999-99-99"
                type="tel"
                //name="phone"
                //id="phone"
              />
            )}
            {formConfig.registrationVisibleFields.includes('password') && (
              <FloatingLabelInput
                label="Пароль"
                form={form}
                type="password"
                formField="password"
                required={formConfig.registrationRequiredFields?.includes('password')}
              />
            )}

            {/*<PasswordInput placeholder="Повторите пароль" required mt="md" /> */}

            <Button fullWidth mt="xl" type="submit">
              Зарегистрироваться
            </Button>
          </form>
        )}
        {/* <Text>{data_reg?.patientRegistration?.detail}</Text> */}
        {loading_config  && <Preloader/>}
        {error_config && (
          <ErrorMessage
            detail={data_config?.getUserAdminInfo?.details}
            refetch={refetch_config}
            networkStatus={networkStatus_config}
          />
        )}
        {error_reg && <ErrorMessage detail={data_reg?.patientRegistration?.details} />}
      </FormPaper>
    </Container>
  );
}
