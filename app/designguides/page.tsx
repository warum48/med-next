'use client';
import { CardContainer } from '@/components/Card/CardContainer';
import { CardExpandButton } from '@/components/Card/CardExpandButton';
import {
    Card_pretitle,
  Card_title,
  TextInfo,
  TextRegular,
  Title1_main,
  Title2_main,
  Title2_second,
  Title4_main,
  Title4_second,
  TitleLabel,
} from '@/components/TextBlocks/TextBlocks';
import { innerPageMaxWidth } from '@/global/CONSTS';
import { RoutesTypes } from '@/global/ROUTES';
import { Anchor, Box, Text } from '@mantine/core';
import Link from 'next/link';
import * as React from 'react';

export default function DesignGuides() {
    const [expanded, setExpanded] = React.useState(false);
  return (
    <div>
      <Title1_main>Текущий баланс Title1_main</Title1_main>
      <Title2_main>Остаток по депозиту: Title2_main</Title2_main>
      <Title2_second>История платежей Title2_second</Title2_second>
      <TitleLabel>Внести оплату: TitleLabel</TitleLabel>
      <Text c="dimmed">
        В этом разделе личного кабинета вы можете отправить запрос на документы
      </Text>
      <TextRegular>В этом разделе личного кабинета TextRegular</TextRegular>
      <TextInfo>В этом разделе личного кабинета TextInfo</TextInfo>
      <Link href={RoutesTypes.Family}>
        <Anchor size="sm" component="button">
          Добавить родственника
        </Anchor>
      </Link>
      <Title4_second>Ближайшие записи: Title4_second</Title4_second> 
      <Title4_main>В этом разделе личного кабинета Title4_main</Title4_main>

      <CardContainer
        expanded={expanded}
        miw={expanded ? '100%' : ((innerPageMaxWidth  / 2 ) -32) }//448}
      >
        <CardExpandButton expanded={expanded} setExpanded={setExpanded}/>
        <Card_pretitle>Card_pretitle</Card_pretitle>
        <Card_title>Card_title</Card_title>
        </CardContainer>
    </div>
  );
}
