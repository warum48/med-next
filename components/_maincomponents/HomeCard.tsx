import { Paper, Title, rem, useMantineTheme, Text, ThemeIcon, Group, Stack, Box } from '@mantine/core';
import * as React from 'react';
import {
    IconNotes,
    IconCalendarStats,
    IconGauge,
    IconPresentationAnalytics,
    IconFileAnalytics,
    IconAdjustments,
    IconLock,
  } from '@tabler/icons-react';

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
        <Group align='top' wrap='nowrap' gap="xs">
        {/*<ThemeIcon variant="light" size={30} radius="xl" p={'0.1rem'} style={{backgroundColor:'white'}}></ThemeIcon>*/}
            <IconNotes style={{ width: rem(28), height: rem(28) , 
               // color: 'white'
                paddingTop:'4px'
                }} />
            
            <Box>{children}</Box>
            
        </Group>
      
    </Paper>
  );
};