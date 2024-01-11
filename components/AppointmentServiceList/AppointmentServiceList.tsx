import { Checkbox, Group, Space, Table } from '@mantine/core';
import { TextHighlighted, Title4_second } from '../TextBlocks/TextBlocks';
import { appointmentData, serviceDescription } from '../___mockdata/mockdata';
import { StyledButton } from '../Buttons/StyledButton';
import { IconInfoCircle, IconInfoSmall } from '@tabler/icons-react';
import React from 'react';

export const AppointmentServiceList = () => {
  const [openInfoIndex, setOpenInfoIndex] = React.useState<number | null>(null);

return (
<Table>
        <Table.Tbody>
          {appointmentData.map((element, index) => (
            <React.Fragment key={element.name + 'f' + index}>
              <Table.Tr key={element.name + 'r' + 'index'}>
               {/* <Table.Td pl={0} 
               // w="80%"
          > </Table.Td> */}
                <Table.Td valign='top'  w="100%" px='0'>
                  <Group align="center">
                  <Checkbox
      //defaultChecked
      //label="I agree to sell my privacy"
    />
                  {element.process}
                    <StyledButton
                      appearence="info_circle"
                      onClick={() => {
                        if (openInfoIndex == null) {
                          setOpenInfoIndex(index);
                        } else {
                          setOpenInfoIndex(null);
                        }
                      }}
                    />
                  </Group>
                </Table.Td>
                <Table.Td>
                  <TextHighlighted>{element.price}</TextHighlighted>
                 
                </Table.Td>
              </Table.Tr>
              {openInfoIndex !== null && openInfoIndex === index && (
                <Table.Tr key={element.name + 'l'}>
                  <Table.Td colSpan={1}>{serviceDescription}</Table.Td>
                  <Table.Td valign='top' align='right'>
                  <StyledButton appearence="close" onClick={()=>  {
                    console.log('cli');
                    setOpenInfoIndex(null)
                  }}/>
                 
                </Table.Td>
                </Table.Tr>
              )}
            </React.Fragment>
          ))}
        </Table.Tbody>
      </Table>
)
}