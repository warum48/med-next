//351

import { Title, Text, Grid, Group, SimpleGrid, Skeleton, Button } from '@mantine/core';
//import { UserInfoIcons } from './userInfoIcons';
//import { useHeadersStyles } from '../../../_styles/headers';
//import { mockDoctor } from '../mock/data';
import { useQuery } from '@apollo/client';
//import { GetDoctorsQuery } from '../../../__generated__/graphql';
//import { GET_DOCTORS } from '../../../_apollo/queries/main/getDoctors';
import { DoctorInfo } from './DoctorInfo';
import { TitleLabel } from '../TextBlocks/TextBlocks';
import { GET_DOCTORS } from '@/apollo/queries/main/getDoctors';
import classes from './DoctorChooser.module.css';
import { SpecialityInfo } from './SpecialityInfo';
import { profAr } from './mockdata';
import { GET_SERVICES_TYPES } from '@/apollo/queries/main/getServicesTypes';
import { Preloader } from '../Preloader/Preloader';
import { GET_MEDICAL_SPECIALITIES } from '@/apollo/queries/main/getMedicalSpecialities';
import React from 'react';
import { GlobalContext } from '@/context/ContextGlobal';
import { useFetch } from '@/services/useFetch';
import { GetMedicalSpecialitiesQuery } from '@/__generated__/graphql';
//import { GetDoctorsQuery } from '@/__generated__/graphql';

export const SpecialityChooser = ({ type = 'all' }: { type?: string }) => {
  //const { classes, theme } = useHeadersStyles();
  const { isDemo } = React.useContext(GlobalContext);
  const {
    data: data_services_types,
    loading: loading_services_typess,
    error: error_services_types,
  } = 
    isDemo
    ? useFetch<GetMedicalSpecialitiesQuery>('/mock/getMedicalSpecialities.json')
    : 
    useQuery(GET_MEDICAL_SPECIALITIES, { context: { clientName: 'main' } });

  return (
    <>
      {type === 'all' ? (
        <div className={classes.container}>
          {
            //profAr
            data_services_types?.getMedicalSpecialities?.data?.map((item: any, index: number) => (
              <SpecialityInfo key={'doctor' + index} {...item} />
            ))
          }
        </div>
      ) : (
        <Group>
          {data_services_types?.getMedicalSpecialities?.data?.map((item: any, index: number) => (
            <Button variant="outline" key={'profAr' + index}>
              {item.viewName}
            </Button>
          ))}
        </Group>
      )}

      {loading_services_typess && <Preloader />}
    </>
  );
};
