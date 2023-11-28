import * as React from 'react';
//import { DebtItem } from './DebtItem';
import { Box, Collapse, Paper, Text } from '@mantine/core';
import { ActionLink, TitleLabel } from '@/components/TextBlocks/TextBlocks';

//import styles from "./Debt.module.css";
import { DebtItem } from '../Debt/DebtItem';
import { mockDebt } from '@/components/___mockdata/mockdata';

interface Props {
  // Add your prop types here
}



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
