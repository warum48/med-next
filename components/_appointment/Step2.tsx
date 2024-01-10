import {
  ActionIcon,
  Box,
  Button,
  Divider,
  Group,
  Space,
  Stack,
  Tabs,
  TextInput,
  rem,
  useMantineTheme,
} from '@mantine/core';
import { SpaceYMain } from '../Spacers/Spacers';
import { FormItemLabel, Title2_second, TitleLabel } from '../TextBlocks/TextBlocks';
import { IconArrowRight, IconSearch } from '@tabler/icons-react';
import { profAr } from './mockdata';
import { DoctorChooser } from './DoctorChooser';
import { elementMaxWidth } from '@/global/CONSTS';
import { SpecialityChooser } from './SpecialityChooser';
import { useCallback, useEffect, useState } from 'react';
import { TAppointmentType } from '@/types/types';
import { appointmentTypeVar } from '@/apollo/state/appointment/globalvars';
import { ServiceChooser } from './ServiceChooser';
import { ServiceChooserTree } from './ServiceChooserTree';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

type TProps = {
  setAppointmentType: React.Dispatch<React.SetStateAction<TAppointmentType>>;
  nextStep: () => void;
};

export const Step2 = ({ setAppointmentType, nextStep }: TProps) => {
  const theme = useMantineTheme();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const searchTab = searchParams.get('tab');
  //!!we need these objects to make an adaptor between mantine tab onChange funtion type ,that is 'string | null' and custom union TAppointmentType , that is more precise
  const tabMatch = {
    doctor: 'type2',
    speciality: 'type1',
    service: 'type3',
  };
  const matchOb = {
    type2: 'doctor',
    type1: 'speciality', //'specialization',
    type3: 'service',
  };

  // const search = searchParams.get('search')

  const [activeTab, setActiveTab] = useState<string | null>(
    searchTab || tabMatch[appointmentTypeVar()]
  ); //('type1');

  type TTab = 'type1' | 'type2' | 'type3';
  function isTTab(ty: any): ty is TTab {
    return ['type1', 'type2', 'type3'].indexOf(ty) !== -1; //'doctor' , 'speciality' , 'service'
  }

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  useEffect(() => {
    //const typ = isTAppointmentType(activeTab) ? matchOb[activeTab] : 'doctor';
    //setAppointmentType(typ)
    console.log('activeTab', activeTab);

    if (isTTab(activeTab)) {
      console.log(matchOb[activeTab]);
      setAppointmentType(matchOb[activeTab] as TAppointmentType);
      appointmentTypeVar(matchOb[activeTab] as TAppointmentType);
      //setAppointmentType(matchOb[activeTab]!);
    }
    // window.scrollTo(0, 0);
    /* console.log('active Tab', activeTab);
    const params = new URLSearchParams(searchParams)
    if (activeTab){
    params.set('tab', activeTab)
    }*/
    if (activeTab) {
      router.push(pathname + '?' + createQueryString('tab', activeTab));
    } else {
    }
  }, [activeTab]);

  return (
    <>
      <SpaceYMain />
      <Title2_second>Выбор специалиста / услуги</Title2_second>
      <SpaceYMain />
      <Tabs
        //defaultValue="type1"
        value={activeTab}
        onChange={setActiveTab}
      >
        <Tabs.List>
          <Tabs.Tab value="type1">СПЕЦИАЛИЗАЦИЯ</Tabs.Tab>
          <Tabs.Tab value="type2">ВРАЧ</Tabs.Tab>

          <Tabs.Tab value="type3">УСЛУГА</Tabs.Tab>
          <Tabs.Tab value="type4">У-3</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="type1" pt="xs">
          <SpaceYMain />
          <Stack gap="xl">
            <TextInput
              maw={elementMaxWidth}
              radius="xl"
              size="md"
              placeholder="Специальность"
              rightSectionWidth={42}
              leftSection={<IconSearch style={{ width: rem(18), height: rem(18) }} stroke={1.5} />}
              rightSection={
                <ActionIcon size={32} radius="xl" color={theme.primaryColor} variant="filled">
                  <IconArrowRight style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
                </ActionIcon>
              }
            />
            <Box>
              <FormItemLabel>Популярные:</FormItemLabel>
              <Space h="sm" />
            {/*}  <Group>
                {profAr.map((item: string, index: number) => (
                  <Button variant="outline" key={'profAr' + index}>
                    {item}
                  </Button>
                ))}
                </Group> */}
                <SpecialityChooser type='popular'/>
             
            </Box>
            <Box>
              <FormItemLabel>Все:</FormItemLabel>
              <Space h="sm" />
              <SpecialityChooser type='all'/>
            </Box>
          </Stack>
        </Tabs.Panel>
        <Tabs.Panel value="type2" pt="xs">
          <SpaceYMain />
          <Stack gap="xl">
            <TextInput
              maw={elementMaxWidth}
              radius="xl"
              size="md"
              placeholder="ФИО Врача"
              rightSectionWidth={42}
              leftSection={<IconSearch style={{ width: rem(18), height: rem(18) }} stroke={1.5} />}
              rightSection={
                <ActionIcon size={32} radius="xl" color={theme.primaryColor} variant="filled">
                  <IconArrowRight style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
                </ActionIcon>
              }
            />
            {/*
            <Space h="xxs" />
            <TitleLabel>
              По специальности ( <u>популярные</u> / <u>все</u> )
            </TitleLabel>

           
            <Space h="xxs" />
            <TitleLabel>
              По услугам ( <u>популярные</u> / <u>все</u> )
            </TitleLabel> */}

            <DoctorChooser />
          </Stack>
        </Tabs.Panel>
        <Tabs.Panel value="type3" pt="xs">
          <SpaceYMain />
          <Stack gap="xl">
            <TextInput
              maw={elementMaxWidth}
              radius="xl"
              size="md"
              placeholder="Услуга"
              rightSectionWidth={42}
              leftSection={<IconSearch style={{ width: rem(18), height: rem(18) }} stroke={1.5} />}
              rightSection={
                <ActionIcon size={32} radius="xl" color={theme.primaryColor} variant="filled">
                  <IconArrowRight style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
                </ActionIcon>
              }
            />

            <ServiceChooser nextStep={nextStep} />
          </Stack>
        </Tabs.Panel>

        <Tabs.Panel value="type4" pt="xs">
          <SpaceYMain />
          <Stack gap="xl">
            <TextInput
              maw={elementMaxWidth}
              radius="xl"
              size="md"
              placeholder="Услуга"
              rightSectionWidth={42}
              leftSection={<IconSearch style={{ width: rem(18), height: rem(18) }} stroke={1.5} />}
              rightSection={
                <ActionIcon size={32} radius="xl" color={theme.primaryColor} variant="filled">
                  <IconArrowRight style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
                </ActionIcon>
              }
            />

            {/*  <ServiceChooser nextStep={nextStep}/> */}

            <ServiceChooserTree nextStep={nextStep} />
          </Stack>
        </Tabs.Panel>
      </Tabs>
    </>
  );
};
