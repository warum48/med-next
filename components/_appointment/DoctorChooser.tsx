//351

import { Title, Text, Grid, Group, SimpleGrid, Skeleton } from '@mantine/core';
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
import { profAr } from './mockdata';
//import { GetDoctorsQuery } from '@/__generated__/graphql';

export const DoctorChooser = () => {
  //const { classes, theme } = useHeadersStyles();
  const {
    data: data_doctors, //DoctorResult
    loading: loading_doctors,
    error: error_doctors,
  } = useQuery(GET_DOCTORS, { context: { clientName: 'main' } }); //<GetDoctorsQuery>

  return (
    <> {/*
      <TitleLabel>
        Наши врачи ( <u>популярные</u> / <u>все</u> )
      </TitleLabel>
     <Group 
            grow
            >
        {data_doctors?.getDoctors?.data?.map((item: any, index: number) => (
          <DoctorInfo key={'uii' + index} {...item} />
        ))}
        </Group>*/}

      {/*
      <SimpleGrid
        // grow
        cols={{ base: 1, lg: 2 }}
        spacing={{ base: 'md', sm: 'md' }}
        verticalSpacing={{ base: 'md', sm: 'md' }}
      >
        {data_doctors?.getDoctors?.data?.map((item: any, index: number) => (
          <DoctorInfo key={'uii' + index} {...item} />
        ))}
      </SimpleGrid>
        */}
      <div 
      className={classes.container}
      >
       {[
  'Терапевт',
  'Терапевт',
  'Терапевт',
  'Педиатр',
  'Педиатр',
  'Семейный врач',
  'Хирург',
  'Хирург',
  'Травматолог-ортопед',
  'Стоматолог',
  'Стоматолог',
  'Стоматолог',
  'Стоматолог-терапевт',
].map((item: string, index: number) => (
         <>
            <DoctorInfo  key={'doctor' + index} description={item}/>
           {/*} <div className={classes.gridItem} key={'doctor' + index}> </div> */}
           </>
        ))}
      </div>
    </>
  );
};
