import {
  Avatar,
  Text,
  Group,
  Box,
  Paper,
  Button,
  Grid,
  Stack,
  Divider,
  rem,
  useMantineTheme,
  Modal,
} from '@mantine/core';

import { Calendar } from '@mantine/dates';
import { DatePicker } from '@mantine/dates';
import { IconPhoneCall, IconAt } from '@tabler/icons-react';
import { useState } from 'react';
import 'dayjs/locale/ru';
//import { TitleLabel, useHeadersStyles } from '../../../_styles/headers';
import { Table } from '@mantine/core';
import { innerPageMaxWidth } from '@/global/CONSTS';
import { TextInfo, Title4_second, TitleLabel } from '../../TextBlocks/TextBlocks';
import { useDisclosure } from '@mantine/hooks';
//import { innerPageMaxWidth } from '../../../CONSTS';
import styles from './History.module.css';

interface TProps {}

export function TreatmentHistory({}: TProps) {
  const theme = useMantineTheme();
  //const {classes : headerClasses } = useHeadersStyles();
  const [expanded, setExpanded] = useState(false);
  const [opened, { open, close }] = useDisclosure(false);
  const [curItem, setCurItem] = useState(0);
  const elements = [
    {
      date: '01.01.2023',
      speciality: 'Терапевт',
      name: 'Иванов Иван Иванович',
      process: 'Общий анализ крови ',
      status: 'Оказана',
    },
    {
      date: '01.02.2023',
      speciality: 'Терапевт',
      name: 'Иванов Иван Иванович',
      process: 'Общий анализ крови ',
      status: 'Оказана',
    },
    {
      date: '01.03.2023',
      speciality: 'Терапевт',
      name: 'Иванов Иван Иванович',
      process: 'Полный анализ крови',
      status: 'Оказана',
    },
    {
      date: '01.04.2023',
      speciality: 'Терапевт',
      name: 'Иванов Иван Иванович',
      process: 'Общий анализ крови ',
      status: 'Оказана',
    },
    {
      date: '01.05.2023',
      speciality: 'Терапевт',
      name: 'Иванов Иван Иванович',
      process: 'Общий анализ крови ',
      status: 'Оказана',
    },
  ];

  const rows = elements.map((element, index) => (
    <Table.Tr
      //key={element.name}
      onClick={()=>{open(); setCurItem(index)}}
      key={'tr' + index}
      className={styles.hoveringCell}
    >
      <Table.Td>{element.date}</Table.Td>
      <Table.Td>{element.speciality}</Table.Td>
      <Table.Td>{element.name}</Table.Td>
      {/*<Table.Td>{element.process}</Table.Td>*/}
    </Table.Tr>
  ));

  return (
    <Box
      maw={innerPageMaxWidth}
      style={{ overflow: 'auto', border: '1px lightgray solid', boxSizing: 'border-box' }}
    >
      <Table
        //withBorder
        miw={600}
        style={{ borderBottom: '1px lightgray solid' }}
      >
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Дата</Table.Th>
            <Table.Th>Специальность</Table.Th>
            <Table.Th>ФИО врача</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <tbody>{rows}</tbody>
      </Table>

      <Modal.Root opened={opened} onClose={close} 
      //title={"Посещение " + elements[curItem].date} 
      centered>
      <Modal.Overlay />
        <Modal.Content>
          <Modal.Header>
            <Modal.Title><Title4_second>{"Посещение " + elements[curItem].date}</Title4_second></Modal.Title>
            <Modal.CloseButton />
          </Modal.Header>
          <Modal.Body>
        <TitleLabel>Врач:&nbsp;</TitleLabel>
      <TextInfo>{elements[curItem].name}</TextInfo>
      </Modal.Body>
      </Modal.Content>
      </Modal.Root>
      {/*
    <Group p='xs'>
    <TitleLabel>Всего оплачено: </TitleLabel>  <TitleLabel color='pink'>25000 ₽</TitleLabel> 
  </Group>*/}
    </Box>
  );
}
