import { Grid, Group, Paper, ScrollArea, Space } from '@mantine/core';
import { SpaceYMain } from '../Spacers/Spacers';
import { TextInfo, Title2_second, Title4_second, TitleLabel } from '../TextBlocks/TextBlocks';
import { Calendar, DatePicker } from '@mantine/dates';
import 'dayjs/locale/ru';
import { DoctorConfirm } from './DoctorConfirm';
import { mockDoctor } from './mockdata';
import { useState } from 'react';
import { TimeSelector } from './TimeSelector';
import classes from './Step3Doctor.module.css';
import { AppointmentServiceList } from '../AppointmentServiceList/AppointmentServiceList';

export const Step3Doctor = () => {
  const [value, setValue] = useState<Date | null>(null);
  return (
    <>
      <SpaceYMain />
      <Title2_second>Выберите дату и время приема</Title2_second>
      <SpaceYMain />
      <Grid>
        <Grid.Col
          // xs={12} lg={6}
          span={{ base: 12, lg: 5 }}
        >
          <DoctorConfirm {...mockDoctor} />
          <SpaceYMain/>
          <Title4_second>Выберите услугу:</Title4_second>
          <Space h='xs'/>
          <AppointmentServiceList />
          <SpaceYMain/>
        </Grid.Col>
        <Grid.Col
          //xs={12} lg={6}
          span={{ base: 12, lg: 7 }}
          //style={{ display: 'flex' }}
          className={classes.container}
        >
          
          <Group justify='center' className={classes.gridItem} align='flex-start'>
          <DatePicker
          
            //size={"xs"}
            value={value}
            onChange={setValue}
            locale="ru"
            excludeDate={(date) => date.getDay() === 6 || date.getDay() === 0 || date < new Date()}
          />
          </Group>

          <Paper
            // withBorder
            className={classes.gridItem}
            w="100%"
           // ml="md"
            p="md"
            pt="2"
            shadow="0"
            miw='100px'
            //!! mah={320} -- good for design, bad for usability
          >
            
              <TimeSelector />
              {/*
              <ScrollArea h="100%">
              <TextInfo>Время:</TextInfo>
  </ScrollArea>*/}
          </Paper>
          
        </Grid.Col>
      </Grid>
    </>
  );
};
