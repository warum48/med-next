'use client';
import * as React from 'react';
import { Box, Group, Space, Title, Text, useMantineTheme, Spoiler, Collapse } from '@mantine/core';
//import { Title1_main, Title2_main, Title2_second, TitleLabel } from '../../_styles/headers';
import { InnerPageContainer } from '../../components/Containers/InnerPageContainer';
//import { PayHistory } from './components/History';
import { StyledButton } from '../../components/Buttons/StyledButton';
import { DatePickerInput } from '@mantine/dates';
import { PayHistory } from '@/components/_payments/PaymentsHistory/History';
import {
  ActionLink,
  TextInfo,
  Title1_main,
  Title2_main,
  Title2_second,
  TitleLabel,
} from '@/components/TextBlocks/TextBlocks';
import { useState } from 'react';
import { Debt } from '@/components/_payments/Debt/Debt';
import { PostponedPayments } from '@/components/_payments/Postponed/PostponedPayments';
import { FromTo } from '@/components/Dates/FromTo';
import { SpaceYMain } from '@/components/Spacers/Spacers';
import { useForm } from '@mantine/form';
import { MedCenterSelector } from '@/components/MedCenterSelector/MedCenterSelector';

export default function Payments() {
  const theme = useMantineTheme();
  const form = useForm({
    initialValues: {
      doc: '',
    },
  });

  return (
    <InnerPageContainer>
      <Title1_main>Мои платежи</Title1_main>
      <SpaceYMain />
      <Group>
        <Title2_second>
          Остаток на счету: <b className="mainColor">4800 ₽</b>
        </Title2_second>
      </Group>
      <Space h="md" />
      <Group>
        <StyledButton appearence="main_first">Пополнить счет</StyledButton>
      </Group>
      <Space h='xs'/>
      <TextInfo > * Сумма показывается для выбранного мед. центра</TextInfo>
      <SpaceYMain />
      
      <MedCenterSelector form={form} 
     // Label={TitleLabel} 
      />
      <SpaceYMain />
      <Debt />
      <SpaceYMain />
      <Title2_second>Отложенные платежи</Title2_second>
      <Space h="md" />
      <PostponedPayments />
      <SpaceYMain />
      <Group gap="md" justify="space-between">
        <Title2_second>История платежей</Title2_second>
        <Group gap="md">
          <FromTo />
        </Group>
      </Group>
      <Space h="xs" />
      <PayHistory />
    </InnerPageContainer>
  );
}
