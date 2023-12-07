import { Box, Grid, Group, Paper, Stack } from '@mantine/core';
import { SpaceYMain } from '../Spacers/Spacers';
import {
  Card_pretitle,
  Card_title,
  TextInfo,
  Title2_second,
  TitleLabel,
} from '../TextBlocks/TextBlocks';
import { Calendar, DatePicker } from '@mantine/dates';
import 'dayjs/locale/ru';
import { DoctorConfirm } from './DoctorConfirm';
import { mockDoctor } from './mockdata';
import { useState } from 'react';
import { TimeSelector } from './TimeSelector';
import { SpecialityConfirm } from './SpecialityConfirm';
import { DoctorInfo } from './DoctorInfo';
import classes from './DoctorChooser.module.css';
import { DoctorInfoWTime } from './DoctorInfoWTime';

export const Step3Speciality = () => {
  const [value, setValue] = useState<Date | null>(null);
  return (
    <>
      <SpaceYMain />
      <Title2_second>Выберите дату, врача и время приема</Title2_second>
      <SpaceYMain />
      <Grid>
        <Grid.Col
          // xs={12} lg={6}
          span={{ base: 12, lg: 3 }}
        >
          <SpecialityConfirm {...mockDoctor} />
          <SpaceYMain/>
        </Grid.Col>
        <Grid.Col
          //xs={12} lg={6}
          span={{ base: 12, lg: 9 }}
          //style={{ display: 'flex' }}
        >
          <Group
            align="flex-start"
            //w="100%"
            //grow
            //wrap="nowrap"
            gap={24}
          >
            <Stack >
              <Card_pretitle>Выберите дату:</Card_pretitle>
              <DatePicker
                //size={"xs"}
                value={value}
                onChange={setValue}
                locale="ru"
                excludeDate={(date) =>
                  date.getDay() === 6 || date.getDay() === 0 || date < new Date()
                }
              />
            </Stack>
            <Stack style={{  flex: 1 }}>
              <Card_pretitle>Выберите врача и время:</Card_pretitle>
              
                {Array.from({ length: 3 }).map((_, index) => (
                  <>
                    {/*<DoctorInfo key={'doctor' + index} appointmentType="speciality" /> */}
                    
                      <DoctorInfoWTime {...mockDoctor}/>
                    
                  </>
                ))}
              
            </Stack>
          </Group>
        </Grid.Col>
      </Grid>
    </>
  );
};
