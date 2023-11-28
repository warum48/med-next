import * as React from 'react';
//import { FastCommentsCommentWidget } from 'fastcomments-react';
////import { NavLink as RouterLink, useSearchParams } from 'react-router-dom';

import { Anchor, Paper, Title, Text, Container, Stack, Center, Grid, Image } from '@mantine/core';
//import { TextInfo, TextRegular, Title1_main } from '../../_styles/headers';

//import { RoutesTypes } from 'ROUTES';
import { UserDetails } from './UserDetails';
import { InnerPageContainer } from '../../components/Containers/InnerPageContainer';
import { TextInfo, Title1_main } from '../TextBlocks/TextBlocks';
import Link from 'next/link';
import { RoutesTypes } from '@/global/ROUTES';

export function RegSuccess() {
  return (
    <InnerPageContainer
    //mw={500}
    >
      {/* <Container size={'100%'} my={40}>
       <Title
          align="center"
          variant="h4"
          sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}`, fontWeight: 900 })}
        >
          Добро пожаловать!
    </Title> */}
      <Grid mb={-56}>
        <Grid.Col
          //xs={12}
          //md={7}
          //xl={6}

          span={{ base: 12, md: 7, xl: 6 }}
        >
          <Stack
            //align="center"
            mt="md"
            gap={'xs'}
          >
            <Title1_main
            //align="center"
            >
              Добро пожаловать!
            </Title1_main>

            <TextInfo>
              Ваш профиль успешно создан. <br /> Теперь Вы можете воспользоваться сервисом личного
              кабинета. В&nbsp;качестве логина Вы можете использовать Ваш номер телефона.
            </TextInfo>

            <Link href={RoutesTypes.Appointment}>
              <Anchor size="sm" component="button">
                Записаться на прием
              </Anchor>
            </Link>

            <Link href={RoutesTypes.Home}>
              <Anchor size="sm" component="button">
                На главную
              </Anchor>
            </Link>

            {/*<UserDetails />*/}
          </Stack>
        </Grid.Col>
        <Grid.Col
          //xs={12}
          //md={5}
          //xl={6}
          span={{ base: 12, md: 5, xl: 6 }}
        >
          <Center>
            <Image
              src="/images/reg_suc.jpg"
              height={300}
              maw={300}
              // fit='contain'
              // width={'50%'}
              style={{ opacity: 0.95, backgroundPositionY: 'top' }}
            />
          </Center>
        </Grid.Col>
      </Grid>
    </InnerPageContainer>
  );
}
