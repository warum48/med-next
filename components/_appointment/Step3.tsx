import { Grid } from "@mantine/core"
import { SpaceYMain } from "../Spacers/Spacers"
import { Title2_second } from "../TextBlocks/TextBlocks"
import { Calendar } from "@mantine/dates"
import 'dayjs/locale/ru';

export const Step3 = () => {
    return(
        <>
        <SpaceYMain />
          <Title2_second>Время приема</Title2_second>
          <SpaceYMain />
          <Grid>
            <Grid.Col
              //xs={12} lg={6}
              span={{ base: 12, lg: 6 }}
            >
               <Calendar locale='ru'/>;
            </Grid.Col>
            <Grid.Col
              // xs={12} lg={6}
              span={{ base: 12, lg: 6 }}
            >
              другие данные приема
            </Grid.Col>
          </Grid>
          </>
    )
}