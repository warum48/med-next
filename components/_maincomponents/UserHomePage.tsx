'use client';
import {
  Box,
  Card,
  Image,
  Text,
  Container,
  Grid,
  SimpleGrid,
  Skeleton,
  useMantineTheme,
  rem,
  Space,
  Paper,
  Title,
  Center,
  Stack,
  ThemeIcon,
  Group,
} from '@mantine/core';
import * as React from 'react';

import { StyledButton } from '../Buttons/StyledButton';
import classes from './HomePage.module.css';
import { CarouselMain } from './Carousel';
import { HomeCard } from './HomeCard';
import { relative } from 'path';
//import { IconNotes } from '@tabler/icons-react';
import { RoutesTypes } from '@/global/ROUTES';
import {
  HomeCardText,
  HomeCardTitle,
  HomeCardTitleAdv,
  TitleLabel,
  TitleLabel_second,
} from '../TextBlocks/TextBlocks';

import {
  IconNotes,
  IconCalendarStats,
  IconGauge,
  IconPresentationAnalytics,
  IconFileAnalytics,
  IconAdjustments,
  IconLock,
  IconHelp,
  IconUsersGroup,
  IconUserCircle,
  IconCurrencyRubel,
  IconFiles,
  IconCalendar,
  IconCalendarPlus,
  IconId,
  IconHome,
} from '@tabler/icons-react';
import { Advert } from './Advert';

export const UserHomePage = () => {
  const theme = useMantineTheme();
  const PRIMARY_COL_HEIGHT = rem(300);
  const SECONDARY_COL_HEIGHT = `calc(${PRIMARY_COL_HEIGHT} / 2 - ${theme.spacing.md} / 2)`;

  return (
    <>
      <Box
        p={{ base: 'sm', md: 0 }}
        mt={{
          base: 0,
          md: '-md',
          //lg: '-md'//'-xl'
        }}
        maw={1350}
        // style={{ margin: '0 auto' }}
      >
        <Container my="md" p="0" style={{ maxWidth: '100%' }}>
          <SimpleGrid
            cols={{ base: 1, lg: 2 }}
            spacing="md"
            mb="md"
            style={
              {
                //backgroundColor:'red'
              }
            }
          >
            <Grid gutter="md">
              <Grid.Col>
                <HomeCard
                  bgColor={theme.other.pinkTransparent} //"#FFF8FB"
                  href={RoutesTypes.Calendar}
                  color={theme.other.virilisPink}
                  icon={IconCalendar}
                >
                 
                    <HomeCardTitle 
                    //c={theme.other.virilisPink}
                    className="secondColor"
                    >Ближайшие приемы</HomeCardTitle>
                 
                  <HomeCardText>22.12.2023</HomeCardText>
                  <HomeCardText>
                    <b>Терапевт</b> Мария Ивановна Кузнецова
                  </HomeCardText>
                  <HomeCardText>
                    Всего <b>2</b> приема
                  </HomeCardText>
                </HomeCard>
              </Grid.Col>
              <Grid.Col span={6}>
                <HomeCard
                  bgColor={theme.other.greenTransparent}
                  href={RoutesTypes.Documents}
                  color={theme.other.virilisGreen}
                  icon={IconFiles}
                >
                  <HomeCardTitle 
                 // c={theme.other.virilisGreen}
                  className="mainColor"
                  >Документы</HomeCardTitle>

                  <HomeCardText>
                    <b>2</b> новых
                  </HomeCardText>
                  <HomeCardText>
                    Всего <b>5</b>{' '}
                  </HomeCardText>
                </HomeCard>
              </Grid.Col>
              <Grid.Col span={6}>
                <HomeCard
                  bgColor={theme.other.pinkTransparent}
                  href={RoutesTypes.MedicalCard}
                  //color="#E86CA6"
                  color={theme.other.virilisPink}
                  icon={IconNotes}
                >
                  <HomeCardTitle 
                  //c={theme.other.virilisPink}
                  className="secondColor"
                  >Медицинская карта</HomeCardTitle>
                  <HomeCardText>Вся ваша история всегда с вами</HomeCardText>
                </HomeCard>
              </Grid.Col>
            </Grid>

            <Grid gutter="md">
              <Grid.Col span={6}>
                {/*<HomeCard bgColor='#f6abce'><HomeCardTitle c='#ffffff'>Баланс</Title><Text size='sm'  c="#7A7A7A">6000 р</HomeCardText></HomeCard>*/}
                <HomeCard
                  href={RoutesTypes.Payments}
                  bgColor={theme.other.pinkTransparent}
                  color={theme.other.virilisPink}
                  icon={IconCurrencyRubel}
                  //bgColor="#ffebf3"
                >
                  <HomeCardTitle 
                 // c={theme.other.virilisPink}
                 className="secondColor"
                  >Баланс</HomeCardTitle>
                  <TitleLabel_second
                  //c={theme.other.virilisPink}
                  //className="secondColor"
                  >6000 ₽</TitleLabel_second>
                </HomeCard>
              </Grid.Col>
              <Grid.Col span={6}>
                <Advert/>
              </Grid.Col>
              <Grid.Col>
                <HomeCard
                 // bgColor="#E8F8F5"
                  bgColor={theme.other.greenTransparent}
                  href={RoutesTypes.Family}
                  color={theme.other.virilisGreen}
                  icon={IconUsersGroup}
                >
                  <HomeCardTitle 
                 // c={theme.other.virilisGreen}
                //  className="mainColor"
                className="mainColor"
                  >Моя семья </HomeCardTitle>

                  <HomeCardText>
                    <b>Добавляйте детей и бабушек! </b>{' '}
                  </HomeCardText>
                  <HomeCardText>
                    Мы добавили очень удобный функционал, все ваши родственники будут построены
                  </HomeCardText>
                </HomeCard>
              </Grid.Col>
            </Grid>
          </SimpleGrid>
          <CarouselMain />
        </Container>
      </Box>
    </>
  );
};
