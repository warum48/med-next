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
import { Doctor } from '@/__generated__/graphql';
import { Preloader } from '../Preloader/Preloader';
import { useFetch } from '@/services/useFetch';
import { GET_DOCTOR_MEDICAL_CENTER } from '@/apollo/queries/main/getDoctorMedicalCenter';
import React from 'react';
import { GlobalContext } from '@/context/ContextGlobal';
//import { GetDoctorsQuery } from '@/__generated__/graphql';

export const DoctorChooser = () => {
  //const { classes, theme } = useHeadersStyles();
  //const isDemo = false;
  const isDemo = React.useContext(GlobalContext);
  const {
    data: data_doctors, //DoctorResult
    loading: loading_doctors,
    error: error_doctors,
  } = isDemo
    ? useFetch('/mock/getDoctors.json')
    : useQuery(GET_DOCTOR_MEDICAL_CENTER, { context: { clientName: 'main' } }); //useQuery(GET_DOCTORS, { context: { clientName: 'main' } }); //<GetDoctorsQuery>
  //const {data: dataAbonement, loading: loadingAbonement, error: errorAbonement} = useFetch("/mock/abonements.json");

  /*[
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
]*/

  return (
    <>
      
      {data_doctors && (
        <div className={classes.container}>
          {//data_doctors?.getDoctors?.data?.map((item: Doctor, index: number) => (
            data_doctors?.getDoctorMedicalCenter?.data?.map((item: any, index: number) => (
            
              <DoctorInfo key={'doctor' + index} { ...item.medicalSpeciality} {...item.doctor} />
             
          ))}
        </div>
      )}
      {loading_doctors && <Preloader />}
    </>
  );
};
