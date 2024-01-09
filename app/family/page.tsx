'use client';
import * as React from 'react';

import { Box, Center, Grid, Space, Notification } from '@mantine/core';

//import { Title1_main, TitleLabel, useHeadersStyles } from '../../_styles/headers';
import { InnerPageContainer } from '../../components/Containers/InnerPageContainer';
//import { FamilyMember } from './components/FamilyMember';
import { StyledButton } from '../../components/Buttons/StyledButton';
import { useState } from 'react';
import { Title1_main } from '@/components/TextBlocks/TextBlocks';
import { FamilyMember } from '@/components/_family/FamilyMember';
import { AddForm } from '@/components/_family/AddForm';
import { useQuery } from '@apollo/client';
import { GET_RELATIONSHIP_DEGREES } from '@/apollo/queries/accounts/getRelationshipDegrees';
import { APOLLO_LINKS_CONTEXT } from '@/apollo/context';
import { ErrorMessage } from '@/components/Errors/ErrorMessage';
import { Preloader } from '@/components/Preloader/Preloader';
import { GetRelationshipDegreesQuery, GetUserRelativesQuery } from '@/__generated__/graphql';
import { GET_USER_RELATIVES } from '@/apollo/queries/accounts/getUserRelatives';
import { notifications } from '@mantine/notifications';
//import { AddForm } from './components/AddForm';
//import { innerPageMaxWidth } from '../../CONSTS';

const mockFamily = [
  {
    avatar:
      'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80',
    title: 'Брат',
    name: 'Иван Иванович Ивановский',
    email: 'robert@glassbreaker.io',
    phone: '+11 (876) 890 56 23',
    isMain: true,
  },
  {
    avatar:
      'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80',
    title: 'Брат',
    name: 'Иван Иванович Ивановский',
    email: 'robert@glassbreaker.io',
    phone: '+11 (876) 890 56 23',
    isMain: false,
  },
  {
    avatar:
      'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80',
    title: 'Брат',
    name: 'Иван Иванович Ивановский',
    email: 'robert@glassbreaker.io',
    phone: '+11 (876) 890 56 23',
    isMain: false,
  },
];

export default function Family() {
  const [addMemberOpen, setAddMemberOpen] = useState(false);

  const {
    data: data_reldergees,
    loading: loading_reldergees,
    error: error_reldergees,
    refetch: refetch_reldergees,
    networkStatus: networkStatus_reldergees,
  } =
    //   isDemo
    // ? useFetch<GetCentersAndCitiesQuery>('/mock/_getProfile.json')
    // :
    useQuery<GetRelationshipDegreesQuery>(GET_RELATIONSHIP_DEGREES, {
      context: { clientName: APOLLO_LINKS_CONTEXT.accounts },
    });

  const {
    data: data_relatives,
    loading: loading_relatives,
    error: error_relatives,
    refetch: refetch_relatives,
    networkStatus: networkStatus_relatives,
  } =
    //   isDemo
    // ? useFetch<GetCentersAndCitiesQuery>('/mock/_getProfile.json')
    // :
    useQuery<GetUserRelativesQuery>(GET_USER_RELATIVES, {
      context: { clientName: APOLLO_LINKS_CONTEXT.accounts },
    });

  function refreshList() {
    refetch_relatives();
  }

  return (
    <InnerPageContainer>
      <Title1_main>Моя семья</Title1_main>
      <Space h="xl" />
      {loading_reldergees && <Preloader />}
      {error_reldergees && (
        <ErrorMessage
          detail={data_reldergees?.getRelationshipDegrees?.details}
          refetch={refetch_reldergees}
          networkStatus={networkStatus_reldergees}
        />
      )}
      {data_reldergees && data_relatives && (
        <>
          <Grid>
            {data_relatives?.getUserRelatives?.data?.map((item: any, index: number) => (
              <FamilyMember {...item} key={'fm' + index} />
            ))}
          </Grid>

          {addMemberOpen ? (
            <AddForm
              setAddMemberOpen={setAddMemberOpen}
              relDegrees={data_reldergees?.getRelationshipDegrees?.data}
              onAdd={refreshList}
            />
          ) : (
            <>
              <Space h="xl" />
              {(true || data_reldergees) && (
                <Center>
                  <StyledButton appearence={'main_second'} onClick={() => setAddMemberOpen(true)}>
                    Добавить родственника
                  </StyledButton>
                </Center>
              )}
            </>
          )}
        </>
      )}

      {/*'rel' + JSON.stringify(data_relatives?.getUserRelatives?.data)*/}
    </InnerPageContainer>
  );
}
