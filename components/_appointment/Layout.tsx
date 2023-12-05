import { InnerPageContainer, TChildren } from "../Containers/InnerPageContainer";
import { SpaceYMain } from "../Spacers/Spacers";
import { Title1_main } from "../TextBlocks/TextBlocks";

export const Layout = ({ children }: TChildren) => {

    return (
            <InnerPageContainer className="appointment">
        <Title1_main>Записаться на прием</Title1_main>
        <SpaceYMain />XXX
            {children}
        </InnerPageContainer>
    )
}