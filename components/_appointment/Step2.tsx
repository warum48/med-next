import {
  ActionIcon,
  Box,
  Button,
  Group,
  Space,
  Stack,
  Tabs,
  TextInput,
  rem,
  useMantineTheme,
} from '@mantine/core';
import { SpaceYMain } from '../Spacers/Spacers';
import { Title2_second, TitleLabel } from '../TextBlocks/TextBlocks';
import { IconArrowRight, IconSearch } from '@tabler/icons-react';
import { profAr } from './mockdata';
import { DoctorChooser } from './DoctorChooser';
import { elementMaxWidth } from '@/global/CONSTS';

export const Step2 = () => {
  const theme = useMantineTheme();
  return (
    <>
      <SpaceYMain />
      <Title2_second>Выбор специалиста / услуги</Title2_second>
      <SpaceYMain />
      <Tabs defaultValue="type1">
        <Tabs.List>
          <Tabs.Tab value="type1">ВРАЧ</Tabs.Tab>
          <Tabs.Tab value="type2">СПЕЦИАЛИЗАЦИЯ</Tabs.Tab>

          <Tabs.Tab value="type3">УСЛУГА</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value="type1" pt="xs">
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
        <Tabs.Panel value="type2" pt="xs">
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
            <Group>
              {profAr.map((item: string, index: number) => (
                <Button variant="outline" key={'profAr' + index}>
                  {item}
                </Button>
              ))}
            </Group>
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
            {/*   <Group gap="xs">
                {data_services_directions?.getServicesDirections?.data?.map(
                  (item: any
                    //ServiceDirection
                    , index: number) => (
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
                    <Space h="xxs" /> */}
          </Stack>
        </Tabs.Panel>
      </Tabs>
    </>
  );
};
