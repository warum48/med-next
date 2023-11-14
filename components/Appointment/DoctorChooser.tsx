//351

import { Title, Text, Grid } from '@mantine/core';
//import { UserInfoIcons } from './userInfoIcons';
//import { useHeadersStyles } from '../../../_styles/headers';
//import { mockDoctor } from '../mock/data';
import { useQuery } from '@apollo/client';
//import { GetDoctorsQuery } from '../../../__generated__/graphql';
//import { GET_DOCTORS } from '../../../_apollo/queries/main/getDoctors';
import { DoctorInfo } from './DoctorInfo';
import { TitleLabel } from '../TextBlocks/TextBlocks';
import { GET_DOCTORS } from '@/apollo/queries/main/getDoctors';
import { GetDoctorsQuery } from '@/__generated__/graphql';

export const DoctorChooser = () => {
  //const { classes, theme } = useHeadersStyles();
  const {
    data: data_doctors, //DoctorResult
    loading: loading_doctors,
    error: error_doctors,
  } = useQuery<GetDoctorsQuery>(GET_DOCTORS, { context: { clientName: 'main' } });

  return (
    <>
      {/*<Title>
        <Text className={classes.title3} component="span" inherit>
          Наши врачи ( <u>популярные</u> / <u>все</u> )
        </Text>
      </Title>*/}
      <TitleLabel>Наши врачи  ( <u>популярные</u> / <u>все</u> )</TitleLabel>
      <Grid>
        {data_doctors?.getDoctors?.data?.map((item: any, index: number) => (
          <DoctorInfo key={'uii' + index} {...item} />
        ))}
      </Grid>
    </>
  );
};
