import { Divider, Group, Stack } from '@mantine/core';
import { DatePickerInput } from '@mantine/dates';
import * as React from 'react';
import 'dayjs/locale/ru';
import { ActionLink } from '../TextBlocks/TextBlocks';
//import { isMobile } from '@/global/CONSTS';
import { GlobalContext } from '@/context/ContextGlobal';

export const FromTo = () => {
  const [valueFrom, setValueFrom] = React.useState<Date | null>(null);
  const [valueTo, setValueTo] = React.useState<Date | null>(null);
  const {isMobile} = React.useContext(GlobalContext);
  return (
    <>
    {/*<Stack><ActionLink>Очистить</ActionLink></Stack>*/}
    <Group align="top" gap={isMobile ? 'md' : 'xl'} >
      
      <DatePickerInput
        //value={value} onChange={setValue}
        label="С даты"
        placeholder="Выберите дату"
        hideWeekdays
        locale="ru"
        value={valueFrom}
      onChange={setValueFrom}
      />
      <Divider orientation="vertical"/>
      <DatePickerInput
        label="По дату"
        placeholder="Выберите дату"
        //value={value} onChange={setValue}
        hideWeekdays
        locale="ru"
        value={valueTo}
      onChange={setValueTo}
      />
    </Group>
    </>
  );
};
