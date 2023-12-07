import { Box, Group, Radio, Space, Stack } from "@mantine/core"
import { SpaceYMain } from "../Spacers/Spacers"
import { Title2_second } from "../TextBlocks/TextBlocks"
import { SwitchWithTextMantine } from "../Switch/SwitchMantine"
import { AgeChooser } from "./AgeChooser"
import { MedCenterChooser } from "./MedCenterChooser"

type TProps = {
    form: any;
}

export const Step1 = ({form}:TProps) => {
    return(
        <>
        <SpaceYMain />
          <Title2_second>Вводные данные</Title2_second>
          <SpaceYMain />
          <Box mb="xl">
            <Stack mb="xl">
              <Radio.Group
                name="appointment"
                label="Тип приема"
                {...form.getInputProps('appointmentType')}
                //value={valueType}
                //onChange={setValueType}
                // description="This is anonymous"
                // withAsterisk
              >
                <Group mt="xs">
                  <Radio value="apt0" label="В медцентре" />
                  <Radio disabled value="apt1" label="Телемедицина" />
                  <Radio disabled value="apt2" label="Вызов врача на дом" />
                  <Radio disabled value="apt3" label="Забор анализов" />
                </Group>
              </Radio.Group>

              <Space h="xxs" />
              <MedCenterChooser
                form={form}
                //data_medcenter={data_medcenter}
                //refetch_mc={refetch_mc}
                //networkStatus_mc={networkStatus_mc}
                //loading_mc={loading_mc}
                //error_mc={error_mc}
              />

              <Space h="xxs" />
              
              <SwitchWithTextMantine
                leftText="Обычная запись"
                rightText="По полису дмс"
                label="Форма оплаты"
                {...form.getInputProps('paymentType', { type: 'checkbox' })}
              />
              <AgeChooser form={form} />

              
            </Stack>
          </Box>
          </>
    )
}