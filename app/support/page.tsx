'use client'
import * as React from 'react';

import { Anchor, Box, Space } from '@mantine/core';

//import { TextInfo, Title1_main, TitleLabel, useHeadersStyles } from '../../_styles/headers';
//import { InnerPageContainer } from '../../components/Containers/InnerPageContainer';
import { useCookies } from 'react-cookie';
//import { NavLink } from 'react-router-dom';
//import { RoutesTypes } from 'ROUTES';
import { TextInfo, Title1_main } from '@/components/TextBlocks/TextBlocks';
import Link from 'next/link';
import { RoutesTypes } from '../../global/ROUTES';
import { InnerPageContainer } from '@/components/Containers/InnerPageContainer';

export default function Support() {
  const [cookieToken, setCookieToken, removeCookieToken] = useCookies(['mednekot']);
  return (
    <InnerPageContainer>
      <Title1_main>Техподдержка</Title1_main>
      <Space h="xl" />
      {cookieToken.mednekot ? (
        <>
          <TextInfo>
            Если у вас есть замечания или предложения по работе сайта <br />
            пишите нам на{' '}
            <Anchor size="sm" component="button">
              lalala@mail.ru 
            </Anchor>
             &nbsp;или звоните по телефону +7 (812)331-17-00 (Круглосуточный контактный центр)
          </TextInfo>
        </>
      ) : (
        <>
          <TextInfo>
            Чтобы оставить нам замечания или предложения по работе сайта <br />
            вы должны быть зарегистрированы.{' '}
          </TextInfo>
          <Link href={RoutesTypes.Registration}>
            <Anchor size="sm" component="button">
              Зарегистрироваться
            </Anchor>
          </Link>
        </>
      )}
    </InnerPageContainer>
  );
}
