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
import Link from 'next/link';

type TProps = {
  color?: string;
  href?: string;
 // textColor?: string;
  bgColor: string;
  children: React.ReactNode;
  icon?: any//React.ReactNode;
};
export const HomeCard = ({ color = 'black', bgColor = '#FFF8FB', children, href, icon:Icon = IconNotes }: TProps) => {
  const theme = useMantineTheme();
  const PRIMARY_COL_HEIGHT = rem(300);
  const SECONDARY_COL_HEIGHT = `calc(${PRIMARY_COL_HEIGHT} / 2 - ${theme.spacing.md} / 2)`;

  return (
    <Paper
    //component={Link} href="/"
    // component={Box}  

    //@ts-ignore
    
    component={ href ? Link : 'div'} 
    href={href ? href : ''}
      shadow="0"
      radius="md"
      p="md"
      opacity={1}
      style={{
        backgroundColor: bgColor,
        height: SECONDARY_COL_HEIGHT,
        textDecoration: 'none' 
      }}
    >
        <Group align='top' wrap='nowrap' gap="xs">
        {/*<ThemeIcon variant="light" size={30} radius="xl" p={'0.1rem'} style={{backgroundColor:'white'}}></ThemeIcon>*/}
          <Icon style={{ width: rem(28), height: rem(28) , 
                color: color,
                paddingTop:'4px'
                }} /> 
               {/*Icon && <Icon/> */}
            
            <Box>{children}</Box>
            
        </Group>
      
    </Paper>
  );
};
