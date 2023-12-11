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
import { IconPhoneCall, IconAt, IconChevronRight } from '@tabler/icons-react';
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
import classes from './ServiceItem.module.css';
import { TimeSelector } from './TimeSelector';

/*const useStyles = createStyles((theme) => ({
      icon: {
        color: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[5],
      },
    
      name: {
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
      },
    
     
    })); */

export function ServiceItem({
  name,
  xmembers,
  id,
  clientDoctorId,
  medicalCenterId,
  medicalDepartmentId,
  fio,
  description,
  photo,
  onClick
}: any) {
  return (
    <CardContainer className={`hover_card`}  onClick={xmembers.length ? onClick : ()=>console.log('no xmembers')}>
      <div className={classes.container}>
        <div className={classes.first_column}>
          <Card_title>{name || 'Услуга'} {' (' + xmembers.length+ ')'}</Card_title>
        </div>
        <IconChevronRight className={classes.second_column} />
      </div>
    </CardContainer>
  );
}
