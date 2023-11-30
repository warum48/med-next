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
  ThemeIcon,
} from '@mantine/core';
import * as React from 'react'

import { Calendar } from '@mantine/dates';
import { DatePicker } from '@mantine/dates';
import { IconPhoneCall, IconAt, IconPencil, IconX } from '@tabler/icons-react';
import { useState } from 'react';
import 'dayjs/locale/ru';
//import { useHeadersStyles } from '../../../_styles/headers';
import { FMInfo } from './FMInfo';
import { GlobalContext } from '@/context/ContextGlobal';

interface UserInfoIconsProps {
  avatar: string;
  name: string;
  title: string;
  phone: string;
  email: string;
  isMain: boolean;
}

export function FamilyMember({
  avatar,
  name,
  title,
  phone,
  email,
  isMain = false,
}: UserInfoIconsProps) {
  //const { classes } = useStyles();
  //const {classes : headerClasses } = useHeadersStyles();
  const { isMobile } = React.useContext(GlobalContext); //GlobalContext();
  const [expanded, setExpanded] = useState(false);
  return (
    <Grid.Col span={expanded || isMobile ? 12 : 6} >
      <Paper
        //maw={700}
        style={{ position: 'relative' }}
        shadow="0" //</Grid.Col>"xs"
        p={expanded ? 'xl' : 'xs'}
        withBorder
        //w={expanded ? '100%':'50%'}
        //miw={expanded ? '100%':300}
        //mih={expanded ? 400 : 0}
        //ml='xs'
      >
        <ThemeIcon
          variant="light"
          size={30}
          radius="xl"
          p={'.3rem'}
          style={{ position: 'absolute', top: '4px', right: '4px' , cursor:'pointer'}}
          onClick={() => setExpanded(!expanded)}
        >
         {expanded ? <IconX/> :  <IconPencil /> }
        </ThemeIcon>
        
        <Grid>
          <Grid.Col span="auto" maw={'100%'}>
           
            <FMInfo expanded={expanded} isMain={isMain} />
          </Grid.Col>
        </Grid>
      </Paper>
    </Grid.Col>
  );
}
