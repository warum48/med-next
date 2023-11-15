import { Paper, Title, rem, useMantineTheme, Text } from '@mantine/core';
import * as React from 'react';

type TProps = {
  textColor?: string;
  bgColor: string;
  children: React.ReactNode;
};
export const HomeCard = ({ textColor = 'black', bgColor = '#FFF8FB', children }: TProps) => {
  const theme = useMantineTheme();
  const PRIMARY_COL_HEIGHT = rem(300);
  const SECONDARY_COL_HEIGHT = `calc(${PRIMARY_COL_HEIGHT} / 2 - ${theme.spacing.md} / 2)`;

  return (
    <Paper
      shadow="0"
      radius="md"
      p="md"
      opacity={1}
      style={{
        backgroundColor: bgColor,
        height: SECONDARY_COL_HEIGHT,
      }}
    >
      {children}
    </Paper>
  );
};
