'use client';
import * as React from 'react';
import { ReactElement, useEffect, useState } from 'react';
import { OperationVariables, QueryResult, useQuery, useReactiveVar } from '@apollo/client';
import {
  Stepper,
  Button,
  Group,
  TextInput,
  Code,
  Box,
  useMantineTheme,
  rem,
  Radio,
  Stack,
  ActionIcon,
  Space,
  Grid,
  Checkbox,
  Center,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { IconArrowRight, IconSearch } from '@tabler/icons-react';
import { InnerPageContainer } from '@/components/Containers/InnerPageContainer';

import {
  //GetMedicalCenters,
  //GetServicesDirectionsQuery,
  //ServiceDirection,
  MedicalCenterResult,
} from '@/__generated__/graphql';
//import { GET_MEDICAL_CENTERS } from '@/apollo/queries/main/getMedicalCenters';
import { GET_SERVICES } from '@/apollo/queries/main/getServices';
//import {
//GET_SERVICES_DIRECTIONS,
//  GET_SERVICES_TYPES } from '@/apollo/queries/main/getServicesDirections';
import { RoutesTypes } from '@/global/ROUTES';
import { Title1_main, Title2_second, TitleLabel } from '@/components/TextBlocks/TextBlocks';
import { AgeChooser } from '@/components/_appointment/AgeChooser';
import { MedCenterChooser } from '@/components/_appointment/MedCenterChooser';
import { StyledButton } from '@/components/Buttons/StyledButton';
import { AppointmentForm } from '@/components/_appointment/Form';
import { DoctorConfirm } from '@/components/_appointment/DoctorConfirm';
import { mockDoctor, profAr } from '@/components/_appointment/mockdata';
import { DoctorChooser } from '@/components/_appointment/DoctorChooser';
import { useRouter } from 'next/navigation';
import { SpaceYMain } from '@/components/Spacers/Spacers';
import { SwitchWithText } from '@/components/Switch/Switch';
import { SwitchWithTextMantine } from '@/components/Switch/SwitchMantine';
import { GET_MEDICAL_CENTERS } from '@/apollo/queries/main/getMedicalCenters';
import { GET_SERVICES_TYPES } from '@/apollo/queries/main/getServicesTypes';
import { Step2 } from '@/components/_appointment/Step2';
import { Calendar } from '@mantine/dates';
import { Step3Doctor } from '@/components/_appointment/Step3Doctor';
import { Layout } from '@/components/_appointment/Layout';
import { Step3Speciality } from '@/components/_appointment/Step3Speciality';
import { TAppointmentType } from '@/types/types';
import {appointmentTypeVar} from '@/apollo/appstate/globalvars';

//export default
function Page({ params }: { params: { slug: string } }) {
  const theme = useMantineTheme();
  const router = useRouter();
  const stepId = params.slug;
  const [appointmentType, setAppointmentType] = useState<TAppointmentType>('doctor'); //TODO remove
  const appointmentTypeVar_re = useReactiveVar(appointmentTypeVar);

  
  //console.log('params.slug', params.slug);
  // console.log('params', stepId);
  const {
    data: data_medcenter,
    loading: loading_mc,
    error: error_mc,
    refetch: refetch_mc,
    networkStatus: networkStatus_mc,
  } = useQuery(GET_MEDICAL_CENTERS, {
    context: { clientName: 'main' },
  });

  /*
  const {
    data: servicesData,
    loading: servicesLoading,
    error: servicesError,
  } = useQuery(GET_SERVICES, { context: { clientName: 'main' } });*/

  const {
    data: data_services_directions,
    loading: loading_services_directions,
    error: error_services_directions,
  } = useQuery(GET_SERVICES_TYPES, { context: { clientName: 'main' } });

  //TODO write a useQuery for getServices
  const [active, setActive] = useState(stepId ? Number(stepId) - 1 : 0); //0
  const [highestStepVisited, setHighestStepVisited] = useState(active);

  const form = useForm({
    initialValues: {
      firstName: '',
      middleName: '',
      lastName: '',
      phone: '',
      comment: '',
      password: '',
      firstName_our: '',
      birthday: '',

      email: '',
      search: '',
      age: '', //age0-age3
      appointmentType: 'apt0', //apt0-3
      paymentType: true,
      address: [''],
      // search: '',

      name: '',
      username: '',
      website: '',
      github: '',
    },

    validate: (values) => {
      if (active === 0) {
        return {
          // username:
          //   values.username.trim().length < 2 ? 'Имя должно содержать хотя бы 2 буквы' : null,
          // password: values.password.length < 6 ? 'Пароль должен содержать хотя бы 6 знаков' : null,
        };
      }

      if (active === 2) {
        return {
          birthday: values.birthday.trim().includes('_') ? 'Проведите дату рождения' : null,
          firstName:
            values.firstName.trim().length < 2 ? 'Имя должно содержать хотя бы 2 буквы' : null,
          lastName:
            values.lastName.trim().length < 2 ? 'Фамилия должна содержать хотя бы 2 буквы' : null,
          // name: values.name.trim().length < 2 ? 'Имя должно содержать хотя бы 2 буквы' : null,
          email: /^\S+@\S+$/.test(values.email) ? null : 'Некорректный email',
          // username:values.username.trim().length < 2 ? 'Имя должно содержать хотя бы 2 буквы' : null,
          //password: values.password.length < 6 ? 'Пароль должен содержать хотя бы 6 знаков' : null,
          //!! age:
          //!!   values.age.trim().length < 8 || values.age.trim().includes('_')
          //!!     ? 'Это поле обязательно'
          //!!     : null,
        };
      }

      return {};
    },
  });

  const nextStep = () =>
    setActive((current) => {
      if (form.validate().hasErrors) {
        console.log('!ERROR IN VALID');
        return current;
      }
      setHighestStepVisited((hSC) => Math.max(hSC, current < 5 ? current + 1 : current));
      return current < 5 ? current + 1 : current;
    });

  const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

  const shouldAllowSelectStep = (step: number) => highestStepVisited >= step && active !== step;

  useEffect(() => {
    const storedValue = window.localStorage.getItem('user-form') as string;
    if (storedValue) {
      try {
        form.setValues(JSON.parse(storedValue)); //window.localStorage.getItem('user-form')));
      } catch (e) {
        console.log('Failed to parse stored value');
      }
    }
  }, []);

  useEffect(() => {
    //window.localStorage.setItem('user-form', JSON.stringify(form.values));
    //!! assign the key password to the variable _ indicating it will be unused
    const { password: _, ...newObj } = form.values;
    window.localStorage.setItem('user-form', JSON.stringify(newObj));
  }, [form.values]);

  useEffect(() => {
    console.log('+++active', active);
    const options = {
      pathname: RoutesTypes.Appointment + '/' + (active + 1),
    };
    //navigate(options, { replace: false });
    router.push(options.pathname);
  }, [active]);

  useEffect(() => {
    if (stepId) {
      setActive(parseFloat(stepId[0]) - 1);
      console.log('---stepId', stepId);
    }
  }, [stepId]);

  return (
    <>
      {/*
    <InnerPageContainer className="appointment">
      <Title1_main>Записаться на прием</Title1_main>
  <SpaceYMain /> */}

      <Stepper
        active={active}
        //!!breakpoint="sm"
        onStepClick={setActive}
      >
        <Stepper.Step
          label="Шаг 1"
          description="Вводные данные"
          allowStepSelect={shouldAllowSelectStep(0)}
        >
          <SpaceYMain />
          <Title2_second>Вводные данные</Title2_second>
          <SpaceYMain />
          <Box mb="xl">
            <Stack mb="xl">
              <Radio.Group
                name="appointment"
                label="Тип приема"
                {...form.getInputProps('appointmentType')}
                //value={valueType}
                //onChange={setValueType}
                // description="This is anonymous"
                // withAsterisk
              >
                <Group mt="xs">
                  <Radio value="apt0" label="В медцентре" />
                  <Radio disabled value="apt1" label="Телемедицина" />
                  <Radio disabled value="apt2" label="Вызов врача на дом" />
                  <Radio disabled value="apt3" label="Забор анализов" />
                </Group>
              </Radio.Group>

              <Space h="xxs" />
              {/*<SwitchWithText
        leftText="Ребенок"
        rightText="Взрослый"
        label="Возраст пациента"
        //checked={checked}
        //handleChange={handleChange}
  /> */}
              <SwitchWithTextMantine
                leftText="Обычная запись"
                rightText="По полису дмс"
                label="Форма оплаты"
                {...form.getInputProps('paymentType', { type: 'checkbox' })}
              />
              <AgeChooser form={form} />

              <Space h="xxs" />
              <MedCenterChooser
                form={form}
                data_medcenter={data_medcenter}
                refetch_mc={refetch_mc}
                networkStatus_mc={networkStatus_mc}
                loading_mc={loading_mc}
                error_mc={error_mc}
              />
            </Stack>
          </Box>
        </Stepper.Step>

        <Stepper.Step
          label="Шаг 2"
          description="Данные о приеме"
          allowStepSelect={shouldAllowSelectStep(1)}
        >
          {/*appointmentType*/}
          <Step2 setAppointmentType={setAppointmentType}/>
        </Stepper.Step>

        <Stepper.Step
          label="Шаг 3"
          description="Время приема"
          allowStepSelect={shouldAllowSelectStep(2)}
        >
          {/*appointmentTypeVar_re*/}
          {appointmentTypeVar_re === 'doctor' ? <Step3Doctor /> :
          <Step3Speciality /> }
        </Stepper.Step>

        <Stepper.Step
          label="Шаг 4"
          description="Персональная информация"
          allowStepSelect={shouldAllowSelectStep(2)}
        >
          <Grid>
            <Grid.Col
              //xs={12} lg={6}
              span={{ base: 12, lg: 6 }}
            >
              {' '}
              <AppointmentForm form={form} />
            </Grid.Col>
            <Grid.Col
              // xs={12} lg={6}
              span={{ base: 12, lg: 6 }}
            >
              <Space h='xl' />
              <DoctorConfirm {...mockDoctor} />
              <Box
        mx={'0.25rem'}
        w={'100%'}
        mb="xl"
       // p="md"
        // bga={theme.colors.oceanBlue[0]}
        //sx={{backgroundColor:theme.colors.oceanBlue[0]}}
      >
         <Space h='md'/>
        <Checkbox
      label="Согласен на обработку персональных данных"
    />
    <Space h='xl'/>
        <Center>
          <StyledButton appearence="main_second">Оплатить</StyledButton>
        </Center>
      </Box>
            </Grid.Col>
          </Grid>
        </Stepper.Step>

        <Stepper.Completed>
          Готово! Данные формы:
          <Code block mt="xl">
            {JSON.stringify(form.values, null, 2)}
          </Code>
        </Stepper.Completed>
      </Stepper>

      <Group justify="center" mt="xl">
        {active !== 0 && (
          //<Button variant="default" onClick={prevStep}>
          <>
            <StyledButton appearence={'main_second_outlined'} onClick={prevStep}>
              Назад
            </StyledButton>
          </>
        )}
        {active !== 3 && (
          <>
            <StyledButton appearence={'main_second'} onClick={nextStep}>
              Дальше
            </StyledButton>
          </>
        )}
      </Group>
      {/*
    </InnerPageContainer> */}
    </>
  );
}

/*

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

*/

export default Page;
