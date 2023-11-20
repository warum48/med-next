'use client'
import * as React from 'react';
import { Box, Group, Space, Title, Text, useMantineTheme, Spoiler, Collapse } from '@mantine/core';
//import { Title1_main, Title2_main, Title2_second, TitleLabel } from '../../_styles/headers';
import { InnerPageContainer } from '../../components/Containers/InnerPageContainer';
//import { PayHistory } from './components/History';
import { StyledButton } from '../../components/Buttons/StyledButton';
import { DatePickerInput } from '@mantine/dates';
import { PayHistory } from '@/components/_payments/PaymentsHistory/History';
import { ActionLink, Title1_main, Title2_main, Title2_second, TitleLabel } from '@/components/TextBlocks/TextBlocks';
import { useState } from 'react';
import { Debt } from '@/components/_payments/Debt/Debt';
import { PostponedPayments } from '@/components/_payments/Postponed/PostponedPayments';

export default function Payments() {
  const theme = useMantineTheme();

  return (
    <InnerPageContainer>
      <Title1_main>Текущий баланс</Title1_main>
      <Space h="xl" />
      <Group>
        <Title2_main>Остаток по депозиту:</Title2_main>
        <Title order={2} 
       // c={theme.colors.virilisPink[0]}
        >
          <Text>4800 ₽ </Text>
        </Title>
      </Group>
      
       
      
      <Space h="sm" />
      <Group>
        <TitleLabel>Внести оплату:</TitleLabel>
        <StyledButton appearence="main_second">Оплатить</StyledButton>
      </Group>
      <Space h="xl" />
      <Debt/>
      <Space h="xl" />
      <Title2_second>Отложенные платежи</Title2_second>
      <Space h="xs" />
      <PostponedPayments/>
      <Space h="xl" />
      <Group gap="md" justify="space-between"
      //"apart"
      >
        <Title2_second>История платежей</Title2_second>
        <Group gap="md">
          <DatePickerInput
            //value={value} onChange={setValue}
            //label="С даты"
            placeholder="С даты"
            hideWeekdays
            locale="ru"
          />
          {/*<Divider orientation="vertical" />*/}
          <DatePickerInput
            //label="По дату"
            placeholder="По дату"
            //value={value} onChange={setValue}
            hideWeekdays
            locale="ru"
          />
        </Group>
      </Group>
      <Space h="xs" />
      <PayHistory />
    </InnerPageContainer>
  );
}
