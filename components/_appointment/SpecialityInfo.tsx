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
import {
  Card_pretitle,
  Card_title,
  TextHighlighted,
  TextInfo,
  Title4_second,
  TitleLabel,
} from '../TextBlocks/TextBlocks';
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
import { docPhotos } from '../___mockdata/mockdata';
import { GlobalContext } from '@/context/ContextGlobal';

/*const useStyles = createStyles((theme) => ({
    icon: {
      color: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[5],
    },
  
    name: {
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    },
  
   
  })); */

export function SpecialityInfo({
  name,
  id,
  viewName,
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
  const { isDemo } = React.useContext(GlobalContext);

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
  function getPhoto() {
    var photo = docPhotos[Math.floor(Math.random() * docPhotos.length)];
    return isDemo ? photo : '';
  }

  return (
    <CardContainer
      className={`hover_card ${classes.gridItem} `}
    >
      <Stack>
        <Card_title>{viewName || 'Терапевт'}</Card_title>

        <Group>
          <TitleLabel>Стомость приемa:</TitleLabel>
          <TextHighlighted>от 5000 р.</TextHighlighted>
        </Group>
        <Avatar.Group>
          {/*<Avatar src="image.png" />
          <Avatar src="image.png" />
  <Avatar src="image.png" />*/}
          <Avatar src={getPhoto()} />
          <Avatar src={getPhoto()} />
          <Avatar src={getPhoto()} />
          <Avatar>+5</Avatar>
        </Avatar.Group>

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
      </Stack>
    </CardContainer>
  ) ;
}
