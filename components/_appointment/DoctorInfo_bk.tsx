import {
  // createStyles,
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
  List,
  Space,
} from '@mantine/core';

import { Calendar } from '@mantine/dates';
import { DatePicker } from '@mantine/dates';
import { IconPhoneCall, IconAt } from '@tabler/icons-react';
import { useState } from 'react';
import 'dayjs/locale/ru';
//import * as dayjs from 'dayjs'
import { Card_pretitle, Card_title, TextHighlighted, TextInfo, Title4_second, TitleLabel } from '../TextBlocks/TextBlocks';
//import { Doctor } from '@/__generated__/graphql';
//import { GET_DOCTORS_SERVICES } from '../../../_apollo/queries/main/getDoctorsServices';
import { useQuery, useLazyQuery } from '@apollo/client';
import React from 'react';
//import { GET_DOCTORS_SERVICES } from '@/apollo/queries/main/getDoctorsServices';
import { CardContainer } from '../Card/CardContainer';
import { CardExpandButton } from '../Card/CardExpandButton';
import { innerPageMaxWidth } from '@/global/CONSTS';
import { GET_DOCTORS_MSPECIALITIES } from '@/apollo/queries/main/getDoctorsMspecialities';
import classes from './DoctorChooser.module.css';
import { TimeSelector } from './TimeSelector';

/*const useStyles = createStyles((theme) => ({
  icon: {
    color: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[5],
  },

  name: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },

 
})); */

export function DoctorInfo({
  id,
  clientDoctorId,
  medicalCenterId,
  medicalDepartmentId,
  fio,
  description,
  photo,
}: any) {
  //Doctor
  // const { classes } = useStyles();
  //const { classes: headerClasses } = useHeadersStyles();
  const [expanded, setExpanded] = useState(false);

  //const data_services = undefined;//{ getDoctorsServices: { data: undefined } };

  
  const [
    _getDoctorsService,
    { data: data_services, loading: loading_services, error: error_services },
  ] = useLazyQuery(GET_DOCTORS_MSPECIALITIES, {
    variables: { filteringAttrs: { doctorId: id } },
    context: { clientName: 'main' },
  });
  

  React.useEffect(() => {
    console.log('expanded', expanded);
    // _getDoctorsService();
  }, [expanded]);

  //React.useEffect(()=>{
  //  //console.log()
  //},[data_services])

  return (
    <Paper
    shadow="0"
      p={expanded ? { base: 'xs', md: 'xl' }  : 'xs'}
      withBorder
      //expanded={expanded}
      // miw={expanded ? '100%' : ((innerPageMaxWidth  / 2 ) -40) }//448}
      className={`${ expanded? '' : 'hover_card'} ${classes.gridItem} ${ expanded? classes.expanded : ''}`}
    >
      <CardExpandButton expanded={expanded} setExpanded={setExpanded} />
      <Grid>
        <Grid.Col span="auto" maw="100%">
          <Group wrap="nowrap" align="flex-start">
            <Avatar src={photo} size={expanded ? 130 : 80} radius="md" />
            <div>
            <Card_pretitle>
                {description || 'Хирург'}
              </Card_pretitle>

              <Card_title>
                {fio || 'Иванов Иван Иванович'}
              </Card_title>

              <TitleLabel>Есть запись:</TitleLabel> <TextInfo>сегодня, завтра, 10.07, 12.07, 14.07</TextInfo>
              <br/>

              <TitleLabel>
                Стомость приемa:</TitleLabel><TextHighlighted> от 5000 р.</TextHighlighted>
              

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
          {expanded && (
            <>
              <Divider mt="xl" mr="xl" mb="sm" />
              <TitleLabel>Cписок услуг: </TitleLabel>
              {/*data_services?.getDoctorsServices?.data?.length*/}
              <Space h="xxs" />
              <List pr="xl">
                {data_services?.getDoctorsMspecialities?.data?.map((item: any, index: number) => (
                  <List.Item>
                    <TextInfo>
                      {item.service.name} - <b>{item.service.price.price}&nbsp;₽</b>
                    </TextInfo>
                  </List.Item>
                ))}
              </List>
            </>
          )}
        </Grid.Col>
        {expanded && (
          <Grid.Col span="content">
          {/*  <Box>
              <Title4_second>Записатьcя на прием</Title4_second>
              <Divider my="sm" />
              <DatePicker hideWeekdays locale="ru" mx="-sm" />
              <Divider my="sm" />
              <TimeSelector />
        </Box> */}
          </Grid.Col>
        )}
      </Grid>
    </Paper>
  );
}
