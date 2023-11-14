'use client'
import * as React from 'react';
import { useEffect } from 'react';
import { InnerPageContainer } from '../../components/Containers/InnerPageContainer';
import { RoutesTypes } from '@/global/ROUTES';
import { useRouter } from 'next/navigation';
import { Box } from '@mantine/core';
import { Title1_main } from '@/components/TextBlocks/TextBlocks';


export default function Appointment() {
  const router = useRouter();
  useEffect(() => {
   
    const options = {
      pathname: RoutesTypes.Appointment + '/' + 1,
    };
    //navigate(options, { replace: false });
    router.replace(options.pathname)
  }, [])


  return (
    <InnerPageContainer className="appointment">
     <Box
        maw={1200}
        mx="auto"
        w={'100%'}
        //mt="xl"
      >
        <Box mih={'80vh'}>
          {/*<h4> Записаться на прием </h4>
          <Title1_main>Записаться на прием</Title1_main>*/}
          </Box>
          </Box>
    </InnerPageContainer>
  );
}
