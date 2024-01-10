import { Box, Divider, Group, Modal, Radio, Space, Stack } from '@mantine/core';
import { SpaceYMain } from '../Spacers/Spacers';
import { Card_pretitle, FormItemLabel, Title2_second } from '../TextBlocks/TextBlocks';
import { SwitchWithTextMantine } from '../Switch/SwitchMantine';
import { AgeChooser } from './AgeChooser';
import { MedCenterChooser } from './MedCenterChooser';
import { useState } from 'react';
import { PopupAlertIntro } from './PopupAlertIntro';
import { medCenterInitWarningShownVar } from '@/apollo/state/appointment/globalvars';
import { useReactiveVar } from '@apollo/client';
import { MedCenterSelector } from '../MedCenterSelector/MedCenterSelector';
import { GroupStretcher } from '../MedCenterSelector/GroupStretcher';

type TProps = {
  form: any;
};

export const Step1 = ({ form }: TProps) => {
  const [opened, setOpened] = useState(false);
  const [curPopup, setCurPopup] = useState( <PopupAlertIntro close={closeIntroWarning}/>); 
  const medCenterInitWarningShownVar_re = useReactiveVar(medCenterInitWarningShownVar);
  function open(){
    setOpened(true);
 }

 function close() {
  //medCenterInitWarningShownVar(true);
  setOpened(false);
}

 function closeIntroWarning() {
   medCenterInitWarningShownVar(true);
   close();
 }

 
  return (
    <>
    <Modal opened={opened} onClose={close} centered withCloseButton={false} closeOnClickOutside={false}
    size="auto"
    maw={500}
    >
        
        {curPopup}
  </Modal>

  
      <SpaceYMain />
      <Title2_second>Вводные данные</Title2_second>
      <SpaceYMain />
      <Box mb="xl">
        <Stack mb="xl" gap="xl">
          <Box
          onClick={() => {if(!medCenterInitWarningShownVar_re){
            open();
            }}}
          >
            <FormItemLabel>Тип приема</FormItemLabel>
            <Space h="sm" />

            <Radio.Group
              name="appointment"
              // label="Тип приема"
              {...form.getInputProps('appointmentType')}
              //value={valueType}
              //onChange={setValueType}
              // description="This is anonymous"
              // withAsterisk
            >
              <Group
              //mt="xs"
              >
                <Radio value="apt0" label="В медцентре" />
                <Radio disabled value="apt1" label="Телемедицина" />
                <Radio disabled value="apt2" label="Вызов врача на дом" />
                <Radio disabled value="apt3" label="Забор анализов" />
              </Group>
            </Radio.Group>
          </Box>
          <Divider/>

        {/* <MedCenterChooser
            form={form}
            //data_medcenter={data_medcenter}
            //refetch_mc={refetch_mc}
            //networkStatus_mc={networkStatus_mc}
            //loading_mc={loading_mc}
            //error_mc={error_mc}
          /> */}
<Box w='100%'>
          <MedCenterSelector form={form} />
          </Box>
          <Divider/>

          <SwitchWithTextMantine
            leftText="Обычная запись"
            rightText="По полису дмс"
            label="Форма оплаты"
            {...form.getInputProps('paymentType', { type: 'checkbox' })}
          />
          <Divider/>
          <AgeChooser form={form} />
        </Stack>
      </Box>
    </>
  );
};
