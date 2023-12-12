'use client';
//import { InnerPageContainer, TChildren } from "../Containers/InnerPageContainer";
//import { SpaceYMain } from "../Spacers/Spacers";
//import { Title1_main } from "../TextBlocks/TextBlocks";

import { InnerPageContainer, TChildren } from '@/components/Containers/InnerPageContainer';
import { SpaceYMain } from '@/components/Spacers/Spacers';
import { Title1_main } from '@/components/TextBlocks/TextBlocks';
import { useEffect } from 'react';

const Layout = ({ children }: TChildren) => {

  /*
useEffect(() => {
  window.scrollTo(0, 0);
  console.log('---scroll-0')
}, [])
*/

  return (
    <InnerPageContainer className="appointment">
      <Title1_main>Записаться на прием</Title1_main>
      <SpaceYMain />
      {children}
    </InnerPageContainer>
  );
};

export default Layout;
