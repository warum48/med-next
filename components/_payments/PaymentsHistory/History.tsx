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
} from '@mantine/core';

import { Calendar } from '@mantine/dates';
import { DatePicker } from '@mantine/dates';
import { IconPhoneCall, IconAt } from '@tabler/icons-react';
import { useState } from 'react';
import 'dayjs/locale/ru';
//import { TitleLabel, useHeadersStyles } from '../../../_styles/headers';
import { Table } from '@mantine/core';
import { innerPageMaxWidth } from '@/global/CONSTS';
import { TitleLabel } from '../../TextBlocks/TextBlocks';
//import { innerPageMaxWidth } from '../../../CONSTS';

interface TProps {}

export function PayHistory({}: TProps) {
  const theme = useMantineTheme();
  /*дата, способ оплаты (наличные \ карта \ расчётный счёт \ абонемент), ФИО Пациента и общий итог за выбранный период. Клиент, щелкнув по записи из списка, переходит в форму краткой справки по оказанным услугам, по которой производилась оплата.*/
  const elements = [
    {
      date: '01.01.2023',
      status: 'Оплачено',
      summ: '5000',
      name: 'Общий анализ крови ',
      type: "Наличные",
    },
    {
      date: '01.01.2023',
      status: 'Оплачено',
      summ: '5000',
      name: 'Общий анализ крови ',
      type: "Наличные",
    },
    {
      date: '01.01.2023',
      status: 'Оплачено',
      summ: '5000',
      name: 'Общий анализ крови ',
      type: "Наличные",
    },
    {
      date: '01.01.2023',
      status: 'Оплачено',
      summ: '5000',
      name: 'Общий анализ крови ',
      type: "Наличные",
    },
    {
      date: '01.01.2023',
      status: 'Оплачено',
      summ: '5000',
      name: 'Общий анализ крови ',
      type: "Наличные",
    },
  ];

  const rows = elements.map((element, index) => (
    <Table.Tr
      //key={element.name}
      key={'tr' + index}
    >
      <Table.Td>{element.date}</Table.Td>
      <Table.Td>{element.name}</Table.Td>
      <Table.Td>{element.status}</Table.Td>
      <Table.Td>{element.type}</Table.Td>
      <Table.Td>{element.summ}</Table.Td>
    </Table.Tr>
  ));

  //const {classes : headerClasses } = useHeadersStyles();
  const [expanded, setExpanded] = useState(false);
  return (
    <Box
      maw={innerPageMaxWidth}
      style={{ overflow: 'auto', border: '1px lightgray solid', boxSizing: 'border-box' }}
    >
      <Table
        //withBorder
        miw={1200}
        style={{ borderBottom: '1px lightgray solid' }}
      >
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Дата</Table.Th>
            <Table.Th>Услуга</Table.Th>
            <Table.Th>Статус</Table.Th>
            <Table.Th>Тип оплаты</Table.Th>
            <Table.Th>Сумма</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <tbody>{rows}</tbody>
      </Table>
      <Group p="xs">
        <TitleLabel>Всего оплачено: </TitleLabel>{' '}
        <TitleLabel
          color="pink"
          // style={{color:theme.colors.virilisPink[0]}}
        >
          25000 ₽
        </TitleLabel>
      </Group>
    </Box>
  );
}
