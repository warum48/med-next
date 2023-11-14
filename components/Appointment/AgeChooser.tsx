import { Group, Radio } from '@mantine/core';
type TProps = {
  form: any;
};
export const AgeChooser = ({ form }: TProps) => {
  return (
    <Radio.Group
      name="age"
      label="Возраст пациента"
      {...form.getInputProps('age')}
      //value={valueAge}
      //onChange={setValueAge}
      // description="This is anonymous"
      // withAsterisk
    >
      <Group mt="xs">
        <Radio value="age1" label="0-3" />
        <Radio value="age2" label="6-16" />
        <Radio value="age3" label="16-60" />
        <Radio value="age4" label="60+" />
      </Group>
    </Radio.Group>
  );
};
