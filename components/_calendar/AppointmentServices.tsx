import { Space, Table } from '@mantine/core';
import { Title4_second } from '../TextBlocks/TextBlocks';
import { appointmentData } from '../___mockdata/mockdata';

export const AppointmentServices = () => {
  return (
    <>
      <Title4_second>Услуги на приеме:</Title4_second>
      <Space h="xs" />
      <Table>
        <Table.Tbody>
          {appointmentData.map((element, index) => (
            <Table.Tr key={element.name}>
              <Table.Td pl={0}>{element.process}</Table.Td>
              <Table.Td>{element.price}</Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>
    </>
  );
};
