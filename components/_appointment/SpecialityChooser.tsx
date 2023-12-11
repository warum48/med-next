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
import { SpecialityInfo } from './SpecialityInfo';
import { profAr } from './mockdata';
//import { GetDoctorsQuery } from '@/__generated__/graphql';

export const SpecialityChooser = () => {
  //const { classes, theme } = useHeadersStyles();
  const {
    data: data_doctors, //DoctorResult
    loading: loading_doctors,
    error: error_doctors,
  } = useQuery(GET_DOCTORS, { context: { clientName: 'main' } }); //<GetDoctorsQuery>

  return (
    <> 
      <div className={classes.container}>
      {profAr.map((item: string, index: number) => (
        
            <SpecialityInfo  key={'doctor' + index} name={item}/>
          
           
        ))}
      </div>
    </>
  );
};
