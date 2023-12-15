import { Group, Space, Table } from '@mantine/core';
import { Title4_second } from '../TextBlocks/TextBlocks';
import { appointmentData, serviceDescription } from '../___mockdata/mockdata';
import { StyledButton } from '../Buttons/StyledButton';
import { IconInfoCircle, IconInfoSmall } from '@tabler/icons-react';
import React from 'react';
import { AppointmentServiceList } from '../AppointmentServiceList/AppointmentServiceList';

export const AppointmentServices = () => {
  const [openInfoIndex, setOpenInfoIndex] = React.useState<number | null>(null);

  return (
    <>
      <Title4_second>Услуги на приеме:</Title4_second>
      <Space h="xs" />
    
    <AppointmentServiceList/>
      
    </>
  );
};
