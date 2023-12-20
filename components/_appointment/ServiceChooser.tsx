//351

import { Title, Text, Grid, Group, SimpleGrid, Skeleton, Box } from '@mantine/core';
//import { UserInfoIcons } from './userInfoIcons';
//import { useHeadersStyles } from '../../../_styles/headers';
//import { mockDoctor } from '../mock/data';
import { useQuery } from '@apollo/client';
//import { GetDoctorsQuery } from '../../../__generated__/graphql';
//import { GET_DOCTORS } from '../../../_apollo/queries/main/getDoctors';
import { DoctorInfo } from './DoctorInfo';
import { ActionLink, Card_pretitle, TitleLabel } from '../TextBlocks/TextBlocks';
import { GET_DOCTORS } from '@/apollo/queries/main/getDoctors';
import classes from './DoctorChooser.module.css';
import { SpecialityInfo } from './SpecialityInfo';
import { ServiceItem } from './ServiceItem';
import { GET_SERVICE_GROUP } from '@/apollo/queries/main/getServicesGroup';
import React from 'react';
import { cU } from '@fullcalendar/core/internal-common';
import { Preloader } from '../Preloader/Preloader';
//import { GetDoctorsQuery } from '@/__generated__/graphql';

type TProps = {
    nextStep: () => void;
}

export const ServiceChooser = ({nextStep}: TProps) => {
  //const { classes, theme } = useHeadersStyles();
  const {
    data, //DoctorResult
    loading,
    error,
  } = useQuery(GET_SERVICE_GROUP, { context: { clientName: 'main' } }); //<GetDoctorsQuery>

  const [curNestingPath, setCurNestingPath] = React.useState<any>(null); // apollo querri part
  const [nestingLevelsNames, setNestingLevelsNames] = React.useState<string[]>(['Все услуги']);

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
        {curNestingPath &&
          curNestingPath.map((item: any, index: number) => (
            <Group key={"group_serv"+index}>
                {index > 0 && (
                    <Card_pretitle>/ {' '}</Card_pretitle>
                )}
            <ActionLink
              onClick={() => {
                setCurNestingPath(curNestingPath.slice(0, index + 1));
                setNestingLevelsNames(nestingLevelsNames.slice(0, index + 1));
              }}
            >
              
              {nestingLevelsNames[index]}
              </ActionLink>
              </Group>
          ))}
      </Group>
      <div className={classes.container}>
        {curNestingPath &&
          curNestingPath[curNestingPath.length - 1].map((item: any, index: number) => (
            <ServiceItem
              key={'doctor' + index}
              name={item.viewName ?? item.name}
              xmembers={item.xmembers}
              //onClick={()=> console.log('click')}
              onClick={() => {
                console.log('item.xmembers', item.xmembers);
                console.log('item.name', item.name);
                if(item.xmembers.length > 0){
                setCurNestingPath([...curNestingPath, item.xmembers]);
                setNestingLevelsNames([...nestingLevelsNames, item.viewName ?? item.name]);
                }else{
                    nextStep();
                }
              }}
            />
          ))}
      </div>
      {loading  && <Preloader/>}
    </>
  );
};
