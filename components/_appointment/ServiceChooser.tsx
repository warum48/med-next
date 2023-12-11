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
import { ServiceItem } from './ServiceItem';
import { GET_SERVICE_GROUP } from '@/apollo/queries/main/getServicesGroup';
import React from 'react';
import { cU } from '@fullcalendar/core/internal-common';
//import { GetDoctorsQuery } from '@/__generated__/graphql';

export const ServiceChooser = () => {
  //const { classes, theme } = useHeadersStyles();
  const {
    data, //DoctorResult
    loading,
    error,
  } = useQuery(GET_SERVICE_GROUP, { context: { clientName: 'main' } }); //<GetDoctorsQuery>

  const [curNestingPath, setCurNestingPath] = React.useState<any>(null); // apollo

  React.useEffect(() => {
    console.log('data', data);
    if (data) {
      setCurNestingPath([data?.getServiceGroup?.data[0].xmembers]);
      //  setCurNestingPath(data?.getServiceGroup?.data[0].xmembers)
    }
  }, [data]);

  return (
    <>
    <Group>
        { curNestingPath && curNestingPath.map((item: any, index: number) => (
            <button onClick={()=>{setCurNestingPath(curNestingPath.slice(0,index+1))}}>  level {index} [debug] {item.name}</button>
        ))}
    </Group>
      <div className={classes.container}>
       
        {curNestingPath &&
          curNestingPath[curNestingPath.length - 1].map((item: any, index: number) => (
            <ServiceItem
              key={'doctor' + index}
              name={item.name}
              xmembers={item.xmembers}
              //onClick={()=> console.log('click')}
              onClick={() => {
                console.log('item.xmembers', item.xmembers);
                setCurNestingPath([...curNestingPath, item.xmembers]);
              }}
            />
          ))}
        
      </div>
    </>
  );
};
