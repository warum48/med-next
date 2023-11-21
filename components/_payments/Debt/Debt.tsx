import * as React from 'react';
import { DebtItem } from './DebtItem';
import { Box, Collapse, Paper, Text } from '@mantine/core';
import { ActionLink, TitleLabel } from '@/components/TextBlocks/TextBlocks';

import styles from "./Debt.module.css";

interface Props {
  // Add your prop types here
}

const mockDebt = [
  {
    clinic: 'Онни',
    summ: 1500,
    cliniDebtAr: [
      {
        summ: 1000,
        date: '01.01.2023',
        description: 'Консультация педиатра',
      },
      {
        summ: 500,
        date: '01.01.2023',
        description: 'забор крови',
      },
    ],
  },
  {
    clinic: 'Чудодети',
    summ: 1000,
    cliniDebtAr: [
      {
        summ: 1000,
        date: '21.01.2023',
        description: 'Консультация невролога',
      },
    ],
  },
];

export const Debt: React.FC<Props> = () => {
  const [debtOpen, setDebtOpent] = React.useState(false);
  return (
    <Paper withBorder shadow={'0'} color={'red'} p="sm" className={styles.warning}>
      <TitleLabel>Задолженность: <span className={styles.warning_text}>1500 ₽</span></TitleLabel>
      
      <Collapse in={debtOpen} className={styles.debt_table} p={'md'} my={'md'}>
        {mockDebt.map((clinic, index) => (
          <DebtItem
            key={clinic.clinic}
            clinic={clinic.clinic}
            summ={clinic.summ}
            clinicDebtAr={clinic.cliniDebtAr}
            lastItem={index === mockDebt.length - 1}
          />
        ))}
      </Collapse>
      <Box>
      <ActionLink onClick={() => setDebtOpent(!debtOpen)}>
        {debtOpen ? 'Скрыть' : ' Подробнее'}
      </ActionLink>
      </Box>
    </Paper>
  );
};