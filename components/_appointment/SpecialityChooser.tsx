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
//import { GetDoctorsQuery } from '@/__generated__/graphql';

export const SpecialityChooser = ({ type = 'all' }: { type?: string }) => {
  //const { classes, theme } = useHeadersStyles();
  const {
    data: data_services_types,
    loading: loading_services_typess,
    error: error_services_types,
  } = useQuery(GET_SERVICES_TYPES, { context: { clientName: 'main' } });

  return (
    <>
      {type === 'all' ? (
        <div className={classes.container}>
          {
            //profAr
            data_services_types?.getServicesTypes?.data?.map((item: any, index: number) =>  (
               <SpecialityInfo key={'doctor' + index} {...item} /> 
            ))
          }
        </div>
      ) : (
        <Group>
          {data_services_types?.getServicesTypes?.data?.map((item: any, index: number) => (
            <Button variant="outline" key={'profAr' + index}>
              {item.name}
            </Button>
          ))}
        </Group>
      )}

      {loading_services_typess && <Preloader />}
    </>
  );
};
