import * as React from 'react';
//import { DebtItem } from './DebtItem';
import { Box, Collapse, Paper, Text } from '@mantine/core';
import { ActionLink, TitleLabel } from '@/components/TextBlocks/TextBlocks';

//import styles from "./Debt.module.css";
import { DebtItem } from '../Debt/DebtItem';

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

export const PostponedPayments: React.FC<Props> = () => {
  const [debtOpen, setDebtOpent] = React.useState(false);
  return (
    <Paper withBorder shadow={'0'} color={'red'} p="sm" >
      
        {mockDebt.map((clinic, index) => (
          <DebtItem
            key={clinic.clinic}
            clinic={clinic.clinic}
            summ={clinic.summ}
            clinicDebtAr={clinic.cliniDebtAr}
            lastItem={index === mockDebt.length - 1}
          />
        ))}
      
      <Box>
     
      </Box>
    </Paper>
  );
};
