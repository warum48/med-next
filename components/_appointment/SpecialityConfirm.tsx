import { Avatar, Box, Center, Checkbox, Group, Space, Stack, useMantineTheme } from '@mantine/core';
import * as React from 'react';
//import { Card_pretitle, Card_title, TextInfo, TitleLabel } from '../../../_styles/headers';

//import { StyledButton } from '../../../components/Buttons/StyledButton';
import { Card_pretitle, Card_title, TextInfo, Title4_second, TitleLabel } from '../TextBlocks/TextBlocks';
import { StyledButton } from '../Buttons/StyledButton';

type TProps = {
  form?: any;
};
type SpecialityConfirmProps = {
  avatar: string;
  name: string;
  title: string;
  phone: string;
  email: string;
};

export const SpecialityConfirm = ({
  avatar,
  name,
  title,
  phone,
  email,
  form,
}: SpecialityConfirmProps & TProps) => {
  const theme = useMantineTheme();
  return (
    <>
      <Box
        //maw={400}
        //mx="auto"
       // mx={'0.25rem'}
        w={'100%'}
        // mt="xl"
       // p="md"
        // bga={theme.colors.oceanBlue[0]}
        //style={{ backgroundColor: theme.colors.oceanBlue[0] }}
        //className="gray_highlight"
      >
        {/*<TitleLabel>Информация о приеме:</TitleLabel> */}
        <Stack gap={16}>
          
            <Box>
              {' '}
              <Card_pretitle>Выбранная специальность:</Card_pretitle>
              <Space h='sm'/>
              <Title4_second>Терапевт</Title4_second>
            </Box>
          
          
          <Stack gap={3}>
            <TitleLabel>Доступные клиники:</TitleLabel>{' '}
            <TextInfo>✓ ДМЦ «Мамарада», Большевиков пр.,д.7, корп.3</TextInfo>
            <TextInfo>✓ «Мамарада», Большевиков пр.,д.7, корп.3</TextInfo>
          </Stack>
          
        </Stack>
        <div></div>
      </Box>
    </>
  );
};
