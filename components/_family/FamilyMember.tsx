import {  Avatar, Text, Group, Box, Paper, Button, Grid, Stack, Divider, rem } from '@mantine/core';

import { Calendar } from '@mantine/dates';
import { DatePicker } from '@mantine/dates';
import { IconPhoneCall, IconAt } from '@tabler/icons-react';
import { useState } from 'react';
import 'dayjs/locale/ru';
//import { useHeadersStyles } from '../../../_styles/headers';
import { FMInfo } from './FMInfo';



interface UserInfoIconsProps {
  avatar: string;
  name: string;
  title: string;
  phone: string;
  email: string;
}

export function FamilyMember({ avatar, name, title, phone, email }: UserInfoIconsProps) {
  //const { classes } = useStyles();
  //const {classes : headerClasses } = useHeadersStyles();
  const [expanded, setExpanded] = useState(false);
  return (
    <Grid.Col span={expanded ? 12 : 6}>
      <Paper
        //maw={700}
        style={{ position: 'relative' }}
        shadow="0"//</Grid.Col>"xs"
        p={ expanded?  'xl' :"xs"}
        withBorder
        //w={expanded ? '100%':'50%'}
        //miw={expanded ? '100%':300}
        //mih={expanded ? 400 : 0}
        //ml='xs'
      >
        <Button
          size="compact-xs"
          variant="light"
          style={{ position: 'absolute', top: '4px', right: '4px' }}
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? '✕' : '➔'}
        </Button>
        <Grid>
        <Grid.Col span="auto">
          <Group wrap="nowrap">
         {/*   <Avatar src={avatar} size={expanded? 150:80} radius="md" /> */}
            <div>
            {/*  <Text fz="xs" tt="uppercase" fw={700} c="dimmed">
                {title}
              </Text>

              <Text fz="lg" fw={500} className={classes.name}>
                {name}
              </Text>

  */}

             

               
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
         
          
            <FMInfo expanded={expanded}/>
            
          </Grid.Col>
          
        </Grid>
      </Paper>
    </Grid.Col>
  );
}
