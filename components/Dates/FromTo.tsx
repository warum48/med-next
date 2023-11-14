import { Divider, Group } from '@mantine/core';
import { DatePickerInput } from '@mantine/dates';
import * as React from 'react';
import 'dayjs/locale/ru';

export const FromTo = () => {
  return (
    <Group align="top" gap="xl">
      <DatePickerInput
        //value={value} onChange={setValue}
        label="С даты"
        placeholder="Выберите дату"
        hideWeekdays
        locale="ru"
      />
      <Divider orientation="vertical" />
      <DatePickerInput
        label="По дату"
        placeholder="Выберите дату"
        //value={value} onChange={setValue}
        hideWeekdays
        locale="ru"
      />
    </Group>
  );
};
