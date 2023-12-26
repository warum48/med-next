import * as React from 'react';
import { useForm } from '@mantine/form';

import {
  Container,
  Group,
  Button,
  useMantineTheme,
  Loader,
  Center,
  Switch,
  Box,
} from '@mantine/core';
import { FloatingLabelInputMask } from '../../components/Inputs/FloatingLabelInputMask';
import { FloatingLabelInput } from '../../components/Inputs/FloatingLabelInput';
import { useMutation, useQuery, useReactiveVar } from '@apollo/client';
import {
  GetUserAdminInfoQuery,
  PatientRegistration,
  UserAdminInputAdm,
} from '../../__generated__/graphql';
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
import { InnerPageContainer } from '../Containers/InnerPageContainer';
import { innerPageMaxWidth } from '@/global/CONSTS';
import { GridStretcher } from '../GridStrecher/GridStretcher';
import { SpaceYMain } from '../Spacers/Spacers';
import { GET_PROFILE_FORM_DATA } from '@/apollo/queries/main/_getProfile';

type TRegFormProps = {
  setStep: React.Dispatch<React.SetStateAction<TRegStep>>;
};

export function RegFormMax({ setStep }: TRegFormProps) {
  const theme = useMantineTheme();
  const patientRegistrationVar_re = useReactiveVar(patientRegistrationVar);
  const defaultFormConfig = {
    registrationRequiredFields: 'first_name, last_name, email, phone_number, birth_date, password',
    registrationVisibleFields:
      'first_name, last_name, patronymic, email, gender, phone_number, birth_date, additional_phone_number, password',
  };
  const maxFormConfig = {
    registrationRequiredFields: 'first_name, last_name, email, phone_number, birth_date, password',
    registrationVisibleFields:
      'first_name, last_name, patronymic, email, gender, phone_number, birth_date, additional_phone_number, password,' +
      'inn, snils, city_id, doc_type, doc_series, doc_number, doc_date, doc_reg_address, doc_giving_dep_name, doc_giving_dep_code',
  };
  const [formConfig, setFromConfig] = React.useState<UserAdminInputAdm>();

  const onSubmit = (values: PatientRegistration) => {
    doReg();
  };

  /*
   first_name: Optional[str] = None
    last_name: Optional[str] = None
    patronymic: Optional[str] = None
    birth_date: Optional[str] = None
    gender: Optional[str] = None
    email: Optional[str] = None
    phone_number: str
    additional_phone_number: Optional[str] = None
    doc_type: Optional[str] = None
    doc_series: Optional[str] = None
    doc_number: Optional[str] = None
    doc_giving_dep_name: Optional[str] = None
    doc_giving_dep_code: Optional[str] = None
    doc_date: Optional[datetime] = None
    doc_reg_address: Optional[str] = None
    snils: Optional[str] = None
    inn: Optional[str] = None
    city_id: Optional[int] = None
    address_mis_kladr_id: Optional[int] = None
    longitude: Optional[float] = None
    latitude: Optional[float] = None
    default_medical_center_id: Optional[int] = None
    login_phone_number: Optional[str] = None
    password: Optional[str] = None
    info_way_id: Optional[int] = None
    notification_time: Optional[time] = None
    pref_notification_contact_id: Optional[int] = None
*/

  const maxfields = {
    phoneNumber: '',
    additionalPhoneNumber: '',

    birthDate: '',
    cityId: 10,

    //паспорт
    docDate: '',
    docGivingDepCode: '',
    docGivingDepName: '',
    docNumber: '',
    docRegAddress: '',
    docSeries: '',
    docType: '',
    email: '',
    firstName: '',
    gender: '',
    inn: '',
    lastName: '',
    password: '',
    patronymic: '',
    snils: '',
    //-------not reg fields
    notificationTime: '',
    prefNotificationContactId: 10,
    relativeId: 10,
    relativeTypeId: 10,

    //------strange fields-------
    id: 10,
    loginPhoneNumber: '',
    addressMisKladrId: 10,
    clientId: 10,
    defaultMedicalCenterId: 10,
    longitude: 1.5,
    latitude: 1.5,
    infoWayId: 10,
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

        //-------------------------extra---------------------------
        snils:
          !!values.snils && values.snils.trim().length < 2
            ? 'Снилс должен содержать хотя бы 11 цифр'
            : null,
        //Формат СНИЛС: «ХХХ-ХХХ-ХХХ YY», где X,Y — цифры, причём первые девять цифр 'X' — это любые цифры, а последние две 'Y' фактически являются контрольной суммой
        inn:
          !!values.inn && values.inn.trim().length < 2
            ? 'ИНН должен содержать хотя бы 10 цифр'
            : null,
        //ИНН физического лица представляет собой последовательность из 12 арабских цифр.
        docType:
          !!values.docType && values.docType.trim().length < 1
            ? 'Поле не должно быть пустым'
            : null,
        docSeries:
          !!values.docSeries && values.docSeries.trim().length < 1
            ? 'Поле не должно быть пустым'
            : null,

        //------------------------password---------------------------
        password:
          !!values.password && values.password.length < 8
            ? 'Пароль должен содержать хотя бы 8 знаков'
            : null,
        // age:
        //   values.age.trim().length < 8 || values.age.trim().includes('_')
        //     ? 'Это поле обязательно'
        //     : null,
      };
    },
  });
  const { isDemo } = React.useContext(GlobalContext);
  const [isFormDemo, setisFormDemo] = React.useState(true);

  const {
    data: data_profile,
    loading: loading_profile,
    error: error_profile,
    refetch: refetch_profile,
    networkStatus: networkStatus_profile,
  } = 
  //    isDemo
  //  ? useFetch<GetMedicalCentersQuery>('/mock/getMedicalCenters.json')
  //  :
  useQuery( GET_PROFILE_FORM_DATA, {
    context: { clientName: 'main' },
  });

  const {
    data: data_config, //DoctorResult
    loading: loading_config,
    error: error_config,
    refetch: refetch_config,
    networkStatus: networkStatus_config,
  } = isDemo
    ? useFetch<GetUserAdminInfoQuery>('/mock/getUserAdminInfo.json')
    : useQuery(GET_USER_ADMIN_INFO, {
        context: { clientName: 'admin' },
        notifyOnNetworkStatusChange: true,
      }); //<GetDoctorsQuery>

  React.useEffect(() => {
    // console.log('data_config?.getUserAdminInfo?.data', data_config?.getUserAdminInfo?.data);
    if (!isFormDemo) {
      if (data_config?.getUserAdminInfo) {
        setFromConfig(data_config?.getUserAdminInfo?.data?.[0]);
      }
    } else {
      setFromConfig(maxFormConfig);
    }
  }, [data_config, isFormDemo]);

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

  const FormContainerComponent = FormPaper; //!true ? InnerPageContainer : ;

  return (
    <Container size={isFormDemo ? innerPageMaxWidth : 800} mb={0} pt={{ base: 'xl', md: '0' }}>
      <Center>
        <Title1_main
          //align="center"
          ta="center"
        >
          Регистрация
        </Title1_main>
      </Center>

      <FormContainerComponent>
        {formConfig && formConfig?.registrationVisibleFields && (
          <form onSubmit={form.onSubmit((values) => onSubmit(values))}>
            {/*<TextInput label="Телефон" placeholder="you@yourmail.ru" required />*/}
            <Box w="100%" className="flex">
              <div className="flex-1">
                <TitleLabel>Ваши данные</TitleLabel>
              </div>
              <Switch
                checked={isFormDemo}
                label="Все поля"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  setisFormDemo(event.currentTarget.checked)
                }
              />
            </Box>

            <GridStretcher>
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

              {/*formConfig.registrationVisibleFields.includes('city_id') && (
                <FloatingLabelInput
                  label="Город"
                  form={form}
                  formField="cityId"
                  required={formConfig.registrationRequiredFields?.includes('city_id')}
                  //data: data_profile?.getCities?.data?.map(({ id, name }: any) => ({ value: id.toString(), label: name }))
                />
              )*/}
              {formConfig.registrationVisibleFields.includes('city_id') && (
                <FloatingLabelSelect
                  label="Город"
                  form={form}
                  formField="cityId"
                  required={formConfig.registrationRequiredFields?.includes('city_id')}
                  data={ data_profile?.getCities?.data?.map(({ id, name }: any) => ({ value: id.toString(), label: name }))}
                />
              )}
              {formConfig.registrationVisibleFields.includes('snils') && (
                <FloatingLabelInput
                  label="СНИЛС"
                  form={form}
                  formField="snils"
                  required={formConfig.registrationRequiredFields?.includes('snils')}
                />
              )}
              {formConfig.registrationVisibleFields.includes('inn') && (
                <FloatingLabelInput
                  label="ИНН"
                  form={form}
                  formField="inn"
                  required={formConfig.registrationRequiredFields?.includes('inn')}
                />
              )}
              {formConfig.registrationVisibleFields.includes('doc_type') && (
                <FloatingLabelInput
                  label="Тип документа"
                  form={form}
                  formField="docType"
                  required={formConfig.registrationRequiredFields?.includes('doc_type')}
                />
              )}
              {formConfig.registrationVisibleFields.includes('doc_series') && (
                <FloatingLabelInput
                  label="Серия документа"
                  form={form}
                  formField="docSeries"
                  required={formConfig.registrationRequiredFields?.includes('doc_series')}
                />
              )}
              {formConfig.registrationVisibleFields.includes('doc_number') && (
                <FloatingLabelInput
                  label="Номер документа"
                  form={form}
                  formField="docNumber"
                  required={formConfig.registrationRequiredFields?.includes('doc_number')}
                />
              )}
              {formConfig.registrationVisibleFields.includes('doc_giving_dep_name') && (
                <FloatingLabelInput
                  label="Кем выдан"
                  form={form}
                  formField="docGivingDepName"
                  required={formConfig.registrationRequiredFields?.includes('doc_giving_dep_name')}
                />
              )}
              {formConfig.registrationVisibleFields.includes('doc_giving_dep_code') && (
                <FloatingLabelInput
                  label="Код подразделения"
                  form={form}
                  formField="docGivingDepCode"
                  required={formConfig.registrationRequiredFields?.includes('doc_giving_dep_code')}
                />
              )}
              {formConfig.registrationVisibleFields.includes('doc_reg_address') && (
                <FloatingLabelInput
                  label="Адрес регистрации"
                  form={form}
                  formField="docRegAddress"
                  required={formConfig.registrationRequiredFields?.includes('doc_reg_address')}
                />
              )}
            </GridStretcher>
            {/*//------------------password ----------*/}
            <SpaceYMain />
            <TitleLabel>Введите пароль (минимум 8 символов)</TitleLabel>
            <GridStretcher>
              {formConfig.registrationVisibleFields.includes('password') && (
                <FloatingLabelInput
                  label="Пароль"
                  form={form}
                  type="password"
                  formField="password"
                  required={formConfig.registrationRequiredFields?.includes('password')}
                />
              )}
              {formConfig.registrationVisibleFields.includes('password') && (
                <FloatingLabelInput
                  label="Повторите пароль"
                  form={form}
                  type="password"
                  formField="password_repeat"
                  required={formConfig.registrationRequiredFields?.includes('password')}
                />
              )}
            </GridStretcher>

            {/*<PasswordInput placeholder="Повторите пароль" required mt="md" /> */}
            <Center>
              <Button fullWidth maw="350" mt="xl" type="submit">
                Зарегистрироваться
              </Button>
            </Center>
          </form>
        )}
        {/* <Text>{data_reg?.patientRegistration?.detail}</Text> */}
        {loading_config && <Preloader />}
        {error_config && (
          <ErrorMessage
            detail={data_config?.getUserAdminInfo?.details}
            refetch={refetch_config}
            networkStatus={networkStatus_config}
          />
        )}
        {error_reg && <ErrorMessage detail={data_reg?.patientRegistration?.details} />}
      </FormContainerComponent>
    </Container>
  );
}
