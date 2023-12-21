'use client';
import * as React from 'react';
import { useEffect, useState } from 'react';
import InputMask from 'react-input-mask';
import {
  Stepper,
  Button,
  Group,
  TextInput,
  PasswordInput,
  Code,
  Box,
  useMantineTheme,
  Center,
  Title,
  Text,
  //createStyles,
  rem,
  Radio,
  Stack,
  ActionIcon,
  Space,
  Select,
  Grid,
  Checkbox,
  Tabs,
  Paper,
  Divider,
  Badge,
  Textarea,
  em,
} from '@mantine/core';
import { useForm } from '@mantine/form';
//import { FastCommentsCommentWidget } from 'fastcomments-react';
import { IconArrowLeft, IconArrowRight, IconSearch } from '@tabler/icons-react';

//import { Title1_main, TitleLabel, useHeadersStyles } from '../../_styles/headers';
import { InnerPageContainer } from '../../components/Containers/InnerPageContainer';
import { StyledButton } from '../../components/Buttons/StyledButton';
import { DatePicker, DatePickerInput } from '@mantine/dates';
import { FromTo } from '../../components/Dates/FromTo';
import { Title1_main, TitleLabel } from '@/components/TextBlocks/TextBlocks';
import { useMediaQuery } from '@mantine/hooks';
import { MedCenterChooser } from '@/components/_appointment/MedCenterChooser';
import { MedCenterSelector } from '@/components/MedCenterSelector/MedCenterSelector';
import classes from "./page.module.css"

export default function Documents() {
  const isMobile = useMediaQuery(`(max-width: ${em(750)})`);
  const [active, setActive] = useState(0);
  const [highestStepVisited, setHighestStepVisited] = useState(active);
  //const theme = useMantineTheme();
  //const { classes, theme } = useHeadersStyles();
  // const { classes : inputClasses  } = useHeadersStylesInput();

  const [valueType, setValueType] = useState('react');
  const [valueAge, setValueAge] = useState('age3');
  const [valueAdress, setValueAdress] = useState<string[]>([]);

  const [value, setValue] = useState<Date | null>(null);

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
      {/*<h4> Записаться на прием </h4>*/}
      <Title1_main>Документы</Title1_main>
      <Space h="xl" />
      <Text c="dimmed">
        В этом разделе личного кабинета вы можете отправить запрос на документы
      </Text>
      <Space h="xl" />

      <Tabs
        defaultValue="type1"
        // orientation="vertical"
        //  placement='top'
      >
        <Tabs.List>
          <Tabs.Tab
            value="type1"
            //icon={<IconPhoto size="0.8rem" />}
          >
            {isMobile ? 'ЗАПРОСИТЬ' : 'ЗАПРОСИТЬ ДОКУМЕНТЫ'}
          </Tabs.Tab>
          <Tabs.Tab
            value="type2"
            // icon={<IconMessageCircle size="0.8rem" />}
          >
            {isMobile ? 'ИСТОРИЯ' : 'ИСТОРИЯ ЗАПРОСОВ'}
          </Tabs.Tab>
          {/*}
              <Tabs.Tab
                value="type3"
                // icon={<IconSettings size="0.8rem" />}
              >
                ТИП 3
  </Tabs.Tab> */}
        </Tabs.List>

        <Tabs.Panel value="type1" pt="xs">
          <Box>
            <Space h="xl" />
            <div className={classes.container}>
              <Radio.Group
                name="age"
                label="Выберите документ:"
                {...form.getInputProps('doc')}
                //value={valueAge}
                //onChange={setValueAge}
                // description="This is anonymous"
                // withAsterisk
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
             
              {/*}  <Paper
                  shadow="md"
                  p="md"
                  withBorder
                  //bg={'white'}
                >
                  <Group align="top" spacing="xl">
                    <DatePickerInput
                      //value={value} onChange={setValue}
                      hideWeekdays
                      locale="ru"
                    />
                    <Divider orientation="vertical" />
                    <DatePickerInput
                      //value={value} onChange={setValue}
                      hideWeekdays
                      locale="ru"
                    />
                  </Group>
                        </Paper> */}
<Box  className={classes.second_column}>
              <Stack 
            
             // style={{flex:1, maxWidth:'100%'}}
             >
                <FromTo />
                <Select
                  maw={420}
                  label="На кого"
                  placeholder="Выберите пациента"
                  data={[
                    { value: 'react', label: 'На себя' },
                    { value: 'ng', label: 'Дочь Анна Антонова Антоновна' },
                    // { value: 'svelte', label: 'Svelte' },
                    // { value: 'vue', label: 'Vue' },
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
               
                <MedCenterSelector form={form} Label={TitleLabel}/>

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
        {/*
            <Tabs.Panel value="type3" pt="xs">
              Документы тип 3
                            </Tabs.Panel> */}
      </Tabs>
    </InnerPageContainer>
  );
}
