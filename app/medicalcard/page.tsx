'use client'
import * as React from 'react';
import {
  Anchor,
  Box,
  Divider,
  Group,
  PasswordInput,
  Select,
  Space,
  Stack,
  Tabs,
  Text,
} from '@mantine/core';
//import { TextInfo, Title1_main, TitleLabel, useHeadersStyles } from '../../_styles/headers';
import { InnerPageContainer } from '../../components/Containers/InnerPageContainer';
//import { NavLink } from 'react-router-dom';

import { useState, useCallback } from 'react';
import { produce } from 'immer';
import { FromTo } from '../../components/Dates/FromTo';
import { TextInfo, Title1_main, TitleLabel } from '@/components/TextBlocks/TextBlocks';
import {  TreatmentHistory } from '@/components/_medicalcard/CardHistory/History';
import classes from "./page.module.css";
import { TreatmentServices } from '@/components/_medicalcard/CardHistory/Services';

export default function MedicalCard() {
  

 
  return (
    <InnerPageContainer>
      <Title1_main>Медицинская карта</Title1_main>
      <Space h="xl" />
      <Tabs
        defaultValue="type1"
       // classNames={classes}
        //styles={(theme) => ({
        //  tab: {
        //    ...theme.fn.focusStyles(),
        //    '&[data-active]': {
        //      backgroundColor: theme.colors.oceanBlue[0],
        //    },
        //  },
        //})}
      >
        <Tabs.List>
          <Tabs.Tab value="type1">ИСТОРИЯ ЛЕЧЕНИЯ</Tabs.Tab>
          <Tabs.Tab value="type2">ИСТОРИЯ ПОСЕЩЕНИЙ</Tabs.Tab>
        </Tabs.List>
        <Space h="xl" />
        <Tabs.Panel value="type1" pt="xs">
          <Stack>
            <FromTo />
            <Select
              maw={420}
              label="Специальность врача"
              placeholder="..."
              data={[
                { value: 'react', label: 'Хирург' },
                { value: 'ng', label: 'Гастроэнтеролог' },
                // { value: 'svelte', label: 'Svelte' },
                // { value: 'vue', label: 'Vue' },
              ]}
            />
            <Select
              maw={420}
              label="ФИО врача"
              placeholder="..."
              data={[
                { value: 'react', label: 'Петров' },
                { value: 'ng', label: 'Иванов' },
                // { value: 'svelte', label: 'Svelte' },
                // { value: 'vue', label: 'Vue' },
              ]}
            />
            <Space h="xs" />
            <TreatmentHistory/>
          </Stack>
        </Tabs.Panel>
        <Tabs.Panel value="type2" pt="xs">
          {' '}
          <Stack 
          //maw={320}
          >
            <FromTo />
            
            <Space h="xs" />
            <TreatmentServices/>

          </Stack>{' '}
          
        </Tabs.Panel>
      </Tabs>
    </InnerPageContainer>
  );
}
