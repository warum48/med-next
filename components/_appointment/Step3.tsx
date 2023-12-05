import { Grid, Paper } from "@mantine/core"
import { SpaceYMain } from "../Spacers/Spacers"
import { TextInfo, Title2_second, TitleLabel } from "../TextBlocks/TextBlocks"
import { Calendar, DatePicker } from "@mantine/dates"
import 'dayjs/locale/ru';
import { DoctorConfirm } from "./DoctorConfirm";
import { mockDoctor } from "./mockdata";
import { useState } from "react";
import { TimeSelector } from "./TimeSelector";

export const Step3 = () => {
  const [value, setValue] = useState<Date | null>(null);
    return(
        <>
        <SpaceYMain />
          <Title2_second>Время приема</Title2_second>
          <SpaceYMain />
          <Grid>
            <Grid.Col
              //xs={12} lg={6}
              span={{ base: 12, lg: 6.4 }}
              style={{display:'flex'}}
            >
               <DatePicker 
               //size={"xs"} 
               value={value} onChange={setValue} locale='ru' excludeDate={(date) => date.getDay() === 6 || date.getDay() === 0 || date < new Date() }/>
               <TimeSelector/>
            </Grid.Col>
            <Grid.Col
              // xs={12} lg={6}
              span={{ base: 12, lg: 5.6 }}
            >
              <DoctorConfirm {...mockDoctor} />
            </Grid.Col>
          </Grid>
          </>
    )
}