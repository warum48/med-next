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
import { HomeCardTitle, TitleLabel } from '../TextBlocks/TextBlocks';

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

export const UserHomePage = () => {
  const theme = useMantineTheme();
  const PRIMARY_COL_HEIGHT = rem(300);
  const SECONDARY_COL_HEIGHT = `calc(${PRIMARY_COL_HEIGHT} / 2 - ${theme.spacing.md} / 2)`;

  return (
    <>
      <Box mt="-xs" maw={1350} style={{ margin: '0 auto' }}>
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
                  bgColor="#FFF8FB"
                  href={RoutesTypes.Calendar}
                  color={theme.other.virilisPink}
                  icon={IconCalendar}
                >
                  <Group>
                    <HomeCardTitle c={theme.other.virilisPink}>
                      Ближайшие приемы
                    </HomeCardTitle>
                  </Group>
                  <Text size="sm" c={theme.black}>
                    22.12.2023
                  </Text>
                  <Text size="sm" c={theme.black}>
                    <b>Терапевт</b> Мария Ивановна Кузнецова
                  </Text>
                  <Text size="sm" c={theme.black}>
                    Всего <b>2</b> приема
                  </Text>
                </HomeCard>
              </Grid.Col>
              <Grid.Col span={6}>
                <HomeCard
                  bgColor="#E8F8F5"
                  href={RoutesTypes.Documents}
                  color={theme.other.virilisGreen}
                  icon={IconFiles}
                >
                  <HomeCardTitle c="#007966">
                    Документы
                  </HomeCardTitle>

                  <Text size="sm" c={theme.black}>
                    <b>2</b> новых
                  </Text>
                  <Text size="sm" c={theme.black}>
                    Всего <b>5</b>{' '}
                  </Text>
                </HomeCard>
              </Grid.Col>
              <Grid.Col span={6}>
                <HomeCard
                  bgColor="#FFF8FB"
                  href={RoutesTypes.MedicalCard}
                  //color="#E86CA6"
                  color={theme.other.virilisPink}
                  icon={IconNotes}
                >
                  <HomeCardTitle c={theme.other.virilisPink}>
                    Медицинская карта
                  </HomeCardTitle>
                  <Text size="sm" c={theme.black}>
                    Вся ваша история всегда с вами
                  </Text>
                </HomeCard>
              </Grid.Col>
            </Grid>

            <Grid gutter="md">
              <Grid.Col span={6}>
                {/*<HomeCard bgColor='#f6abce'><HomeCardTitle c='#ffffff'>Баланс</Title><Text size='sm'  c="#7A7A7A">6000 р</Text></HomeCard>*/}
                <HomeCard
                  href={RoutesTypes.Payments}
                  bgColor="#FFF8FB"
                  color={theme.other.virilisPink}
                  icon={IconCurrencyRubel}
                  //bgColor="#ffebf3"
                >
                  <HomeCardTitle c={theme.other.virilisPink}>
                    Баланс
                  </HomeCardTitle>
                  <TitleLabel c="black">6000 ₽</TitleLabel>
                </HomeCard>
              </Grid.Col>
              <Grid.Col span={6}>
                <Paper
                  shadow="0"
                  radius="md"
                  opacity={1}
                  style={{
                    backgroundColor: '#e8fdff', //"#f2f2f2",//'#E8F8F5',//'#fde4ef',
                    height: SECONDARY_COL_HEIGHT,
                    position: 'relative',
                  }}
                >
                  <Box
                    style={{
                      width: '100%',
                      height: '100%',
                      position: 'absolute',
                      backgroundImage: 'url(/images/white_circ.png)',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      opacity: 0.8,
                      backgroundBlendMode: 'screen',
                    }}
                  ></Box>
                  <Box style={{ zIndex: 9, position: 'relative' }} p="xl">
                    <Center>
                      <Stack align="center" gap={'xs'}>
                        <HomeCardTitle c="#007966">
                          Прививки?
                        </HomeCardTitle>
                        <HomeCardTitle  c="#007966">
                          Диспансеризация?
                        </HomeCardTitle>
                      </Stack>
                    </Center>
                  </Box>
                </Paper>
              </Grid.Col>
              <Grid.Col>
                <HomeCard bgColor="#E8F8F5" href={RoutesTypes.Family} color={theme.other.virilisGreen} icon={IconUsersGroup}>
                  <HomeCardTitle c="#007966">
                    Моя семья{' '}
                  </HomeCardTitle>

                  <Text size="sm" c={theme.black}>
                    <b>Добавляйте детей и бабушек! </b>{' '}
                  </Text>
                  <Text size="sm" c={theme.black}>
                    Мы добавили очень удобный функционал, все ваши родственники будут построены
                  </Text>
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
