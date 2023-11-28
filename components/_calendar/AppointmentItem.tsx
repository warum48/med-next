import {  Avatar, Text, Group, Box, Paper, Button, Grid, Stack, Divider, rem, Table, Space } from '@mantine/core';

import { Calendar } from '@mantine/dates';
import { DatePicker } from '@mantine/dates';
import { IconPhoneCall, IconAt } from '@tabler/icons-react';
import { useState } from 'react';
import 'dayjs/locale/ru';
import { innerPageMaxWidth } from '@/global/CONSTS';
import { CardContainer } from '../Card/CardContainer';
import { CardExpandButton } from '../Card/CardExpandButton';
import { StyledButton } from '../Buttons/StyledButton';
import { Card_pretitle, Card_title, Title4_second } from '../TextBlocks/TextBlocks';
import { appointmentData } from '../___mockdata/mockdata';
import { SpaceYMain } from '../Spacers/Spacers';
import { AppointmentServices } from './AppointmentServices';
//import { StyledButton } from '../../../components/Buttons/StyledButton';
//import { innerPageMaxWidth } from '../../../CONSTS';
//import { CardContainer } from '../../../components/Card/CardContainer';
//import { CardExpandButton } from '../../../components/Card/CardExpandButton';

/*
const useStyles = createStyles((theme) => ({
  icon: {
    color: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[5],
  },

  name: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },

  title: {
    color: theme.colors.virilisPink[0], // theme.colors.gray[6], //theme.white,

    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 400,
    lineHeight: 1.05,
    maxWidth: rem(500),
    fontSize: rem(18),
    // zIndex:100,
    position: 'relative',
    display: 'block',

    [theme.fn.smallerThan('md')]: {
      maxWidth: '100%',
      fontSize: rem(14),
      lineHeight: 1.15,
    },
  },
}));
*/

interface UserInfoIconsProps {
  avatar: string;
  name: string;
  title: string;
  //phone: string;
  //email: string;
  timeStart: string;
}

export function AppointmentItem({ avatar, name, title, timeStart }: UserInfoIconsProps) {
 // const { classes } = useStyles();
  const [expanded, setExpanded] = useState(false);
  return (
    
      <CardContainer
        expanded={expanded}
        //miw={expanded ? '100%' : ((innerPageMaxWidth  / 2 ) -40) }//448} //-32
      >
        <CardExpandButton expanded={expanded} setExpanded={setExpanded}/>
       
          <Group wrap="nowrap">
            <Avatar src={avatar} 
            visibleFrom="md"
            size={expanded? 150:80} 
            radius="md" />
            <Avatar src={avatar} 
            hiddenFrom="md"
            size={80} 
            radius="md" />
            <div>
              <Card_pretitle>
                {title}
              </Card_pretitle>

              <Card_title >
                {name}
              </Card_title>

              <Text fz="xs" fw={500} >
               Время приема: {timeStart}
              </Text>

              

               
              {/*
          <Group noWrap spacing={10} mt={3}>
            <IconAt stroke={1.5} size="1rem" className={classes.icon} />
            <Text fz="xs" c="dimmed">
              {email}
            </Text>
          </Group>

          <Group noWrap spacing={10} mt={5}>
            <IconPhoneCall stroke={1.5} size="1rem" className={classes.icon} />
            <Text fz="xs" c="dimmed">
              {phone}
            </Text>
  </Group> */}
            </div>
            
          </Group>
          {expanded && <>
          <SpaceYMain/>
          <AppointmentServices/>
            <Divider my="xl" />
            <StyledButton appearence='main_second'>Отменить запись</StyledButton>
            </>}
          
         
       
      </CardContainer>
    
  );
}
