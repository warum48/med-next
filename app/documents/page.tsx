'use client';
import * as React from 'react';
import { useState } from 'react';
import {
  Group,
  Box,
  Center,
  Text,
  Radio,
  Stack,
  Space,
  Select,
  Tabs,
  Badge,
  Textarea,
  em,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { InnerPageContainer } from '../../components/Containers/InnerPageContainer';
import { StyledButton } from '../../components/Buttons/StyledButton';
import { FromTo } from '../../components/Dates/FromTo';
import { Title1_main, TitleLabel } from '@/components/TextBlocks/TextBlocks';
import { useMediaQuery } from '@mantine/hooks';
import { MedCenterSelector } from '@/components/MedCenterSelector/MedCenterSelector';
import classes from './page.module.css';

export default function Documents() {
  const isMobile = useMediaQuery(`(max-width: ${em(750)})`);

  const docsAr = [
    { name: 'Копия карты', status: 'waiting' },
    { name: 'Справка для оформления налогового вычета' },
    { name: 'Выписка (после операции)' },
    { name: 'Результаты анализов ', status: 'ready', readyDate: '12.06.2023' },
    { name: 'Результаты исследований ' },
  ];

  const form = useForm({
    initialValues: {
      doc: '',
    },
  });

  return (
    <InnerPageContainer>
      <Title1_main>Документы</Title1_main>
      <Space h="xl" />
      <Text c="dimmed">
        В этом разделе личного кабинета вы можете отправить запрос на документы
      </Text>
      <Space h="xl" />

      <Tabs
        defaultValue="type1"
      >
        <Tabs.List>
          <Tabs.Tab
            value="type1"
          >
            {isMobile ? 'ЗАПРОСИТЬ' : 'ЗАПРОСИТЬ ДОКУМЕНТЫ'}
          </Tabs.Tab>
          <Tabs.Tab
            value="type2"
          >
            {isMobile ? 'ИСТОРИЯ' : 'ИСТОРИЯ ЗАПРОСОВ'}
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="type1" pt="xs">
          <Box>
            <Space h="xl" />
            <div className={classes.container}>
              <Radio.Group
                name="age"
                label="Выберите документ:"
                {...form.getInputProps('doc')}
                className={classes.first_column}
              >
                <Stack mt="md">
                  {docsAr.map((item, index) => (
                    <Group key={'doc' + index}>
                      <Radio value={'doc' + index} label={item.name} />
                      {item.status && item.status == 'waiting' && (
                        <Badge color="pink">Запрошен</Badge>
                      )}
                      {item.readyDate && <Badge>Выдан {item.readyDate}</Badge>}
                    </Group>
                  ))}
                </Stack>
              </Radio.Group>
              <Box className={classes.second_column}>
                <Stack
                >
                  <FromTo />
                  <Select
                    maw={420}
                    label="На кого"
                    placeholder="Выберите пациента"
                    data={[
                      { value: 'react', label: 'На себя' },
                      { value: 'ng', label: 'Дочь Анна Антонова Антоновна' },
                    ]}
                  />
                  <Textarea
                    maw={420}
                    placeholder="Ваши пожелания и уточнее"
                    label="Комментарий"
                    autosize
                    minRows={2}
                  />

                  <Radio.Group label="Способ получения документов" name="default">
                    <Group mt="xs">
                      <Radio label="Лично в Клинике" value="r1_1" />
                      <Radio label="По электронной почте" value="r1_2" />
                    </Group>
                  </Radio.Group>

                  <MedCenterSelector form={form} Label={TitleLabel} />

                  <Space h="xs" />
                  <Center>
                    <StyledButton appearence="main_second">Запросить</StyledButton>
                  </Center>
                </Stack>
              </Box>
            </div>
          </Box>
        </Tabs.Panel>

        <Tabs.Panel value="type2" pt="xs">
          Документы тип 2
        </Tabs.Panel>
      </Tabs>
    </InnerPageContainer>
  );
}
