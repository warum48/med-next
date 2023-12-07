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
import { SpaceYMain } from '../Spacers/Spacers';

/*const useStyles = createStyles((theme) => ({
    icon: {
      color: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[5],
    },
  
    name: {
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    },
  
   
  })); */

export function DoctorInfoWTime({
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
  //const [expanded, setExpanded] = useState(false);

  //const data_services = undefined;//{ getDoctorsServices: { data: undefined } };

  const [
    _getDoctorsService,
    { data: data_services, loading: loading_services, error: error_services },
  ] = useLazyQuery(GET_DOCTORS_MSPECIALITIES, {
    variables: { filteringAttrs: { doctorId: id } },
    context: { clientName: 'main' },
  });

  

  //React.useEffect(()=>{
  //  //console.log()
  //},[data_services])

  return (
    <CardContainer miw='250px'>
     

      <Group wrap="nowrap" align="flex-start" >
        <Avatar src={photo} size={80} radius="md" />
        <div>
          <Card_pretitle>{description || 'Хирург'}</Card_pretitle>

          <Card_title>{fio || 'Иванов Иван Иванович'}</Card_title><br/>

          <TitleLabel>Стомость приемa:</TitleLabel>
          <TextHighlighted> от 5000 р.</TextHighlighted>
        </div>
      </Group>
      <Space h='md'/>
      <TimeSelector />
      </CardContainer>
  );
}
