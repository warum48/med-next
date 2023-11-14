'use client';
import * as React from 'react';

import { Box, Grid, Space } from '@mantine/core';

//import { Title1_main, TitleLabel, useHeadersStyles } from '../../_styles/headers';
import { InnerPageContainer } from '../../components/Containers/InnerPageContainer';
//import { FamilyMember } from './components/FamilyMember';
import { StyledButton } from '../../components/Buttons/StyledButton';
import { useState } from 'react';
import { Title1_main } from '@/components/TextBlocks/TextBlocks';
import { FamilyMember } from '@/components/_family/FamilyMember';
import { AddForm } from '@/components/_family/AddForm';
//import { AddForm } from './components/AddForm';
//import { innerPageMaxWidth } from '../../CONSTS';

const mockDoctor = {
  avatar:
    'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80',
  title: 'Брат',
  name: 'Иван Иванович Ивановский',
  email: 'robert@glassbreaker.io',
  phone: '+11 (876) 890 56 23',
};

export default function Family() {
  const [addMemberOpen, setAddMemberOpen] = useState(false);

  return (
    <InnerPageContainer>
      <Title1_main>Моя семья</Title1_main>
      <Space h="xl" />
      <Grid>
        {Array.from(Array(3)).map((item: any, index: number) => (
          <FamilyMember {...mockDoctor} key={'fm' + index} />
        ))}
      </Grid>

      {addMemberOpen ? (
        <AddForm setAddMemberOpen={setAddMemberOpen} />
      ) : (
        <>
          <Space h="xl" />
          <StyledButton appearence={'main_second'} onClick={() => setAddMemberOpen(true)}>
            Добавить родственника
          </StyledButton>
        </>
      )}
    </InnerPageContainer>
  );
}
