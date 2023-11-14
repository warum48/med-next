'use client';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { QueryResult, useQuery } from '@apollo/client';
import InputMask from 'react-input-mask';
import {
  Stepper,
  Button,
  Group,
  TextInput,
  PasswordInput,
  Code,
  Box,
  useMantineTheme,
  Center,
  Title,
  Text,
  //createStyles,
  rem,
  Radio,
  Stack,
  ActionIcon,
  Space,
  Select,
  Grid,
  Checkbox,
} from '@mantine/core';
import { useForm } from '@mantine/form';
////import { FastCommentsCommentWidget } from 'fastcomments-react';
import { IconArrowLeft, IconArrowRight, IconSearch } from '@tabler/icons-react';
//import { UserInfoIcons } from './components/userInfoIcons';
import { FloatingLabelInput } from '@/components/Inputs/FloatingLabelInput';
import { FloatingLabelInputMask } from '@/components/Inputs/FloatingLabelInputMask';
//import {
//  TextInfo,
//  Title1_main,
//  Title2_second,
//  TitleLabel,
//  useHeadersStyles,
//} from '../../_styles/headers';
import { InnerPageContainer } from '@/components/Containers/InnerPageContainer';
//import { AppointmentForm } from './Form';
//import { DoctorConfirm } from './components/DoctorConfirm';
//import { FastCommentBlock } from '../../components/FastComment/FastCommentBlock';
//import { StyledButton } from '../../components/Buttons/StyledButton';
//import { GET_MEDICAL_CENTERS } from '../../_apollo/queries/main/getMedicalCenters';

//import { DataPreview } from '../../components/Debug/DataPreview';
//import { GET_SERVICES } from '../../_apollo/queries/main/getServices';
import {
  GetDoctorsQuery,
  GetMedicalCentersQuery,
  GetServicesDirectionsQuery,
  ServiceDirection,
} from '@/__generated__/graphql';
import { GET_MEDICAL_CENTERS } from '@/apollo/queries/main/getMedicalCenters';
import { GET_SERVICES } from '@/apollo/queries/main/getServices';
import { GET_SERVICES_DIRECTIONS } from '@/apollo/queries/main/getServicesDirections';
import { RoutesTypes } from '@/global/ROUTES';
import {
  Title1_main,
  Title2_main,
  Title2_second,
  TitleLabel,
} from '@/components/TextBlocks/TextBlocks';
import { AgeChooser } from '@/components/Appointment/AgeChooser';
import { MedCenterChooser } from '@/components/Appointment/MedCenterChooser';
import { StyledButton } from '@/components/Buttons/StyledButton';
import { AppointmentForm } from '@/components/Appointment/Form';
import { DoctorConfirm } from '@/components/Appointment/DoctorConfirm';
import { mockDoctor, profAr } from '@/components/Appointment/mockdata';
import { DataPreview } from '@/components/Debug/DataPreview';
import { DoctorChooser } from '@/components/Appointment/DoctorChooser';
import { useParams, useRouter } from 'next/navigation';

//import { mockDoctor, profAr, uslAr } from './mock/data';
//import { ErrorMessage } from '../../components/Errors/ErrorMessage';
//import { MedCenterChooser } from './components/MedCenterChooser';
//import { AgeChooser } from './components/AgeChooser';
//import { GET_SERVICES_DIRECTIONS } from '../../_apollo/queries/main/getServicesDirections';
////import { useNavigate, useParams } from 'react-router-dom';
//import { RoutesTypes } from 'ROUTES';
//import { GET_DOCTORS } from '../../_apollo/queries/main/getDoctors';
//import { DoctorChooser } from './components/DoctorChooser';
//import { GetMedicalCentersQuery, MedicalCenter, MedicalCenterResult } from '../../../__generated__/graphql';

export default function Appointment({ params }: { params: { slug: string } }) {
  const theme = useMantineTheme();
  const router = useRouter();
  //const params = useParams()
  //let { stepId } = useParams();

  console.log('params.slug', params.slug);
  const stepId = params.slug;
  console.log('params', stepId);
  //const navigate = useNavigate();
  //console.log('stepId', stepId);
  //const { data, loading, error } = useQuery(GET_MEDICAL_CENTERS, { context: { clientName: 'main' } });
  const {
    data: data_medcenter,
    loading: loading_mc,
    error: error_mc,
    refetch: refetch_mc,
    networkStatus: networkStatus_mc,
  }: QueryResult<GetMedicalCentersQuery> = useQuery<GetMedicalCentersQuery>(GET_MEDICAL_CENTERS, {
    context: { clientName: 'main' },
  });

  const {
    data: servicesData,
    loading: servicesLoading,
    error: servicesError,
  } = useQuery(GET_SERVICES, { context: { clientName: 'main' } });

  const {
    data: data_services_directions,
    loading: loading_services_directions,
    error: error_services_directions,
  }: QueryResult<GetServicesDirectionsQuery> = useQuery<GetServicesDirectionsQuery>(
    GET_SERVICES_DIRECTIONS,
    { context: { clientName: 'main' } }
  );

  //TODO write a useQuery for getServices
  const [active, setActive] = useState(stepId ? Number(stepId) - 1 : 0); //0
  const [highestStepVisited, setHighestStepVisited] = useState(active);
  //const theme = useMantineTheme();
  //const { classes, theme } = useHeadersStyles();
  // const { classes : inputClasses  } = useHeadersStylesInput();

  // const [valueType, setValueType] = useState('react');
  // const [valueAge, setValueAge] = useState('age3');
  // const [valueAdress, setValueAdress] = useState<string[]>([]);

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
          firstName:
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
    <InnerPageContainer className="appointment">
      <Box
        maw={1200}
        mx="auto"
        w={'100%'}
        //mt="xl"
      >
        <Box mih={'80vh'}>
          {/*<h4> Записаться на прием </h4>*/}
          <Title1_main>Записаться на прием</Title1_main>
          <Space h="xl" />

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
              {/*} <Title mt="xl">
                <Text
                  className={classes.title2}
                  component="span"
                  inherit
                >
                  Вводные данные
                </Text>
  </Title> */}
              <Space h="xl" />
              <Title2_second>Вводные данные</Title2_second>
              <Box mb="xl">
                <Stack mt="xl" mb="xl">
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
              <Box>
                <Space h="xl" />
                <Title2_second>Выбор специалиста / услуги</Title2_second>
                <Stack mt="xl">
                  {/*
                  <TextInput
                    icon={<IconSearch size="1.1rem" stroke={1.5} />}
                    radius="xl"
                    size="md"
                    width="400px"
                    rightSection={
                      <ActionIcon size={32} radius="xl" color={theme.primaryColor} variant="filled">
                        {theme.dir === 'ltr' ? (
                          <IconArrowRight size="1.1rem" stroke={1.5} />
                        ) : (
                          <IconArrowLeft size="1.1rem" stroke={1.5} />
                        )}
                      </ActionIcon>
                    }
                    placeholder="Поиск услуг и врачей"
                    rightSectionWidth={42}
                    sx={{ border: theme.colors.oceanBlue[8], width: '500px' }}
                    {...form.getInputProps('search')}
                    // {...props}
                />*/}
                  <TextInput
                    radius="xl"
                    size="md"
                    placeholder="Search questions"
                    rightSectionWidth={42}
                    leftSection={
                      <IconSearch style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
                    }
                    rightSection={
                      <ActionIcon size={32} radius="xl" color={theme.primaryColor} variant="filled">
                        <IconArrowRight style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
                      </ActionIcon>
                    }
                    //{...props}
                  />
                  <Space h="xxs" />
                  <TitleLabel>
                    По специальности ( <u>популярные</u> / <u>все</u> )
                  </TitleLabel>

                  <Group>
                    {profAr.map((item: string, index: number) => (
                      <Button variant="outline" key={'profAr' + index}>
                        {item}
                      </Button>
                    ))}
                  </Group>
                  <Space h="xxs" />
                  <TitleLabel>
                    По услугам ( <u>популярные</u> / <u>все</u> )
                  </TitleLabel>

                  <Group gap="xs">
                    {data_services_directions?.getServicesDirections?.data?.map(
                      (item: ServiceDirection, index: number) => (
                        <Button
                          variant="default"
                          size="compact_xs"
                          style={{ fontWeight: 300 }}
                          key={'b_uslAr' + index}
                        >
                          {item.name}
                        </Button>
                      )
                    )}
                  </Group>
                  <Space h="xxs" />

                  <DoctorChooser />
                </Stack>
              </Box>
            </Stepper.Step>

            <Stepper.Step
              label="Шаг 3"
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
                  <DoctorConfirm {...mockDoctor} />
                </Grid.Col>
              </Grid>
            </Stepper.Step>

            {/*   <Stepper.Step
              label="Завершение"
              description="Данные приема"
              allowStepSelect={shouldAllowSelectStep(3)}
            >
              <Box maw={400} mx="auto" w={'100%'} mt="xl">
                <TextInput label="..." placeholder="..." {...form.getInputProps('website')} />
                <TextInput
                  mt="md"
                  label="..."
                  placeholder="..."
                  {...form.getInputProps('github')}
                />
              </Box>
                  </Stepper.Step> */}
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
                <StyledButton appearence={'main_first'} onClick={prevStep}>
                  Назад
                </StyledButton>
                {/* <Button
                variant="gradient"
                gradient={{ from: '#01868a', to: '#0dab5f' }}
                size="md"
                // size="xl"
                //className={classes.control}
                // mt={40}
                sx={{ borderRadius: '100px' }}
                onClick={prevStep}
              >
                Назад
            </Button>*/}
              </>
            )}
            {active !== 3 && (
              <>
                {/* <Button
                variant="gradient"
                gradient={{ from: 'pink', to: '#ff3ebb' }}
                size="md"
                //className={classes.control}
                //mt={40}
                sx={{ borderRadius: '100px' }}
                onClick={nextStep}
              >
                Дальше
            </Button> */}
                <StyledButton appearence={'main_second'} onClick={nextStep}>
                  Дальше
                </StyledButton>
              </>
            )}
          </Group>
        </Box>
        {/*  <DataPreview data={data_medcenter} />
        <FastCommentBlock />*/}
      </Box>
    </InnerPageContainer>
  );
}
