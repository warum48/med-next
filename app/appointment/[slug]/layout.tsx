'use client';
//import { InnerPageContainer, TChildren } from "../Containers/InnerPageContainer";
//import { SpaceYMain } from "../Spacers/Spacers";
//import { Title1_main } from "../TextBlocks/TextBlocks";

import { InnerPageContainer, TChildren } from '@/components/Containers/InnerPageContainer';
import { SpaceYMain } from '@/components/Spacers/Spacers';
import { Title1_main } from '@/components/TextBlocks/TextBlocks';

const Layout = ({ children }: TChildren) => {
  return (
    <InnerPageContainer className="appointment">
      <Title1_main>Записаться на прием</Title1_main>
      <SpaceYMain />
      {children}
    </InnerPageContainer>
  );
};

export default Layout;
