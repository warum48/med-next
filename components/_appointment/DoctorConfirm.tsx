import { Avatar, Box, Center, Checkbox, Group, Space, Stack, useMantineTheme } from '@mantine/core';
import * as React from 'react';
//import { Card_pretitle, Card_title, TextInfo, TitleLabel } from '../../../_styles/headers';

//import { StyledButton } from '../../../components/Buttons/StyledButton';
import { Card_pretitle, Card_title, TextInfo, TitleLabel } from '../TextBlocks/TextBlocks';
import { StyledButton } from '../Buttons/StyledButton';

type TProps = {
  form?: any;
};
type DoctorConfirmProps = {
  avatar: string;
  name: string;
  title: string;
  phone: string;
  email: string;
};

export const DoctorConfirm = ({
  avatar,
  name,
  title,
  phone,
  email,
  form,
}: DoctorConfirmProps & TProps) => {
  const theme = useMantineTheme();
  return (
    <>
      <Box
        //maw={400}
        //mx="auto"
        //mx={'0.25rem'}
        w={'100%'}
        // mt="xl"
        p="md"
        // bga={theme.colors.oceanBlue[0]}
        //style={{ backgroundColor: theme.colors.oceanBlue[0] }}
        className="gray_highlight"
      >
        {/*<TitleLabel>Информация о приеме:</TitleLabel> */}
        <Stack gap={4}>
          <Group wrap="nowrap">
            <Avatar src={avatar} size={80} radius="md" />
            <Box>
              {' '}
              <Card_pretitle>Хирург</Card_pretitle>
              <Card_title>Иван Иванович Ивановский</Card_title>
            </Box>
          </Group>
          <Group className="body_highlight" px="md" py="4" mt="xs">
            <TitleLabel>Направление:</TitleLabel> <TextInfo>Консультация педиатра</TextInfo>
          </Group>
          <Group px="md" py="4">
            <TitleLabel>Адрес:</TitleLabel>{' '}
            <TextInfo>ДМЦ «Мамарада», Большевиков пр.,д.7, корп.3</TextInfo>
          </Group>
          {/*
          <Group px="md" py="4" className="body_highlight">
            <TitleLabel>Время и дата:</TitleLabel> <TextInfo>10:30, 4 августа, пятница</TextInfo>
          </Group>
          <Group px="md" py="4">
            <TitleLabel>Стоимость:</TitleLabel> <TextInfo>2300 ₽</TextInfo>
  </Group> */}
        </Stack>
        <div></div>
      </Box>
    </>
  );
};
