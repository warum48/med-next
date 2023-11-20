import {  Avatar, Text, Group, Box, Paper, Button, Grid, Stack, Divider, rem, useMantineTheme } from '@mantine/core';

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




interface TProps {

}

export function PayHistory({ }: TProps) {
const theme = useMantineTheme();
    const elements = [
        { position: '01.01.2023',  mass: 'Оплачено', symbol: '5000', name: 'Общий анализ крови ', position2: '01.01.2023',  mass2: 'Оплачено', symbol2: '5000', name2: 'Общий анализ крови - Общий анализ крови' },
        { position: '01.02.2023',  mass: 'Оплачено', symbol: '5000', name: 'Общий анализ крови ', position2: '01.01.2023',  mass2: 'Оплачено', symbol2: '5000', name2: 'Общий анализ крови - Общий анализ крови' },
        { position: '01.03.2023',  mass: 'Оплачено', symbol: '5000', name: 'Полный анализ крови', position2: '01.01.2023',  mass2: 'Оплачено', symbol2: '5000', name2: 'Общий анализ крови - Общий анализ крови' },
        { position: '01.04.2023',  mass: 'Оплачено', symbol: '5000', name: 'Общий анализ крови ', position2: '01.01.2023',  mass2: 'Оплачено', symbol2: '5000', name2: 'Общий анализ крови - Общий анализ крови' },
        { position: '01.05.2023',  mass: 'Оплачено', symbol: '5000', name: 'Общий анализ крови ', position2: '01.01.2023',  mass2: 'Оплачено', symbol2: '5000', name2: 'Общий анализ крови - Общий анализ крови' },
      ];

    const rows = elements.map((element, index) => (
        <Table.Tr
        //key={element.name} 
        key={"tr"+index}>
          <Table.Td>{element.position}</Table.Td>
          <Table.Td>{element.name}</Table.Td>
          <Table.Td>{element.symbol}</Table.Td>
          <Table.Td>{element.mass}</Table.Td>

          <Table.Td>{element.position2}</Table.Td>
          <Table.Td>{element.name2}</Table.Td>
          <Table.Td>{element.symbol2}</Table.Td>
          <Table.Td>{element.mass2}</Table.Td>
        </Table.Tr>
      ));

  //const {classes : headerClasses } = useHeadersStyles();
  const [expanded, setExpanded] = useState(false);
  return (
    <Box maw={innerPageMaxWidth} style={{overflow:'auto', border:'1px lightgray solid', boxSizing:'border-box', }}>
    <Table 
    //withBorder 
    miw={1200} style={{borderBottom: '1px lightgray solid'}}>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Дата</Table.Th>
          <Table.Th>Назначение</Table.Th>
          <Table.Th>Сумма</Table.Th>
          <Table.Th>Статус</Table.Th>

          <Table.Th>Дата</Table.Th>
          <Table.Th>Назначение</Table.Th>
          <Table.Th>Сумма</Table.Th>
          <Table.Th>Статус</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <tbody>{rows}</tbody>
    </Table>
    <Group p='xs'>
    <TitleLabel>Всего оплачено: </TitleLabel>  <TitleLabel color='pink' 
   // style={{color:theme.colors.virilisPink[0]}}
    >25000 ₽</TitleLabel> 
    </Group>
    </Box>
  );
}
