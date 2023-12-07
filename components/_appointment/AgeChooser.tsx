import { Box, Group, Radio, RangeSlider, Slider, Title, rem, useMantineTheme } from '@mantine/core';
import { ChangeEvent, useState } from 'react';
// TODO remove from yarn import Switch from "react-switch";
import { SwitchWithText } from '../Switch/Switch';
import { IconArrowRightCircle, IconArrowRightRhombus, IconGripVertical, IconHeart, IconPoint } from '@tabler/icons-react';
import classes from './SliderMarks.module.css';
import arrowclasses from './AgeChooser.module.css'
import React from 'react';
type TProps = {
  form: any;
};
export const AgeChooser = ({ form }: TProps) => {
  const theme = useMantineTheme();
  const [checked, setChecked] = useState(false);
  const [sliderTouched, setSliderTouched] = useState(false);
  //const handleChange = (nextChecked:boolean) => {
  //  setChecked(nextChecked);
  //};
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
  };
  const point = (
    <IconPoint style={{ marginTop: rem(6), width: rem(10), height: rem(10) }} stroke={1.5} />
  );
  const [value, setValue] = useState<number | undefined>(undefined);

  React.useEffect(() => {
    if (value != null) {
      setSliderTouched(true);
    }
  }, [value]);

  const marks = [
    { value: 0, label: '﹤1', hint: 'Меньше 1 года' },
    { value: 1, label: '1', hint: '1 год' },
    { value: 2, label: '2', hint: '2 года' },
    { value: 3, label: '3', hint: '3 года' },
    { value: 4, label: '4', hint: '4 года' },
    { value: 5, label: '5', hint: '5 лет' },
    { value: 6, label: '6', hint: '6 лет' },
    { value: 7, label: '7', hint: '7 лет' },
    { value: 8, label: '8', hint: '8 лет' },
    { value: 9, label: '9', hint: '9 лет' },
    { value: 10, label: '10', hint: '10 лет' },
    { value: 11, label: '11', hint: '11 лет' },
    { value: 12, label: '12', hint: '12 лет' },
    { value: 13, label: '13', hint: '13 лет' },
    { value: 14, label: '14', hint: '14 лет' },
    { value: 15, label: '15', hint: '15 лет' },
    { value: 16, label: '16', hint: '16 лет' },
    { value: 17, label: '17', hint: '17 лет' },
  ];

  const marksWPoints = [
    { value: 0, label: '<1', hint: 'Меньше 1 года' },
    { value: 1, label: point, hint: '1 год' },
    { value: 2, label: '2', hint: '2 года' },
    { value: 3, label: point, hint: '3 года' },
    { value: 4, label: '4', hint: '4 года' },
    { value: 5, label: point, hint: '5 лет' },
    { value: 6, label: '6', hint: '6 лет' },
    { value: 7, label: point, hint: '7 лет' },
    { value: 8, label: '8', hint: '8 лет' },
    { value: 9, label: point, hint: '9 лет' },
    { value: 10, label: '10', hint: '10 лет' },
    { value: 11, label: point, hint: '11 лет' },
    { value: 12, label: '12', hint: '12 лет' },
    { value: 13, label: point, hint: '13 лет' },
    { value: 14, label: '14', hint: '14 лет' },
    { value: 15, label: point, hint: '15 лет' },
    { value: 16, label: '16', hint: '16 лет' },
    { value: 17, label: point, hint: '17 лет' },
  ];

  const styles = {
    markLabel: {
      marginTop: '6px',
      fontSize:'10px'
    },

    thumb: {
      borderWidth: 2,
      height: 26,
      width: 26,
      padding: 3,
      color: sliderTouched ? 'green' : 'gray',
      borderColor: sliderTouched ? theme.colors.oceanBlue[9] : 'lightgray',
      // backgroundColor: '#666666ff',
      //opacity:.1
    },
  };
  return (
    <>
      {/*
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
  */}
      {/*
  <label htmlFor="small-radius-switch">
  <span>Возраст пациента</span>
  <Switch
    checked={checked}
    onChange={handleChange}
    handleDiameter={78}
    offColor="#08f"
    onColor="#0ff"
    offHandleColor="#0ff"
    onHandleColor="#08f"
    height={100}
    width={250}
    borderRadius={16}
    activeBoxShadow="0px 0px 1px 2px #fffc35"
    uncheckedIcon={
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          fontSize: 15,
          color: "orange",
          paddingRight: 2
        }}
      >
        Offffffffffffffffdfdfd
      </div>
    }
    checkedIcon={
      <svg viewBox="0 0 10 10" height="100%" width="100%" fill="yellow">
        <circle r={3} cx={5} cy={5} />
      </svg>
    }
    uncheckedHandleIcon={
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          fontSize: 20
        }}
      >
        ☹sdfsdfsdflskdflks
      </div>
    }
    checkedHandleIcon={
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          color: "red",
          fontSize: 18
        }}
      >
        ♥
      </div>
    }
    className="react-switch"
    id="small-radius-switch"
  />
  </label>*/}

      <SwitchWithText
        leftText="Ребенок"
        rightText="Взрослый"
        label="Возраст пациента"
        checked={checked}
        handleChange={handleChange}
      />

      {!checked && (
        <>
        <Group gap='4px' align='flex-start'>
          <Title order={6} mb="0" 
          //c={sliderTouched ? theme.colors.oceanBlue[9] : 'gray'}
          >
            
            {value != undefined ? marks[value].hint : 'Выберите возраст'}
          </Title>
          {!sliderTouched &&
          <Box 
          //mt="sm" pb='0' 
        className={arrowclasses.moving_box}><IconArrowRightCircle style={{position:'absolute', top: 0}}/></Box> }
          </Group>
          
          <Slider
            onMouseUpCapture={() => console.log('click')}
            ml="xs"
            //mt="xl"
            mb="xl"
            classNames={classes}
            thumbChildren={<IconHeart size="1rem" stroke={1.5} />}
            styles={styles}
            color={sliderTouched ? theme.colors.oceanBlue[9] : 'gray'}
            min={0}
            max={17}
            label={null}
            value={value}
            onChange={setValue}
            //  defaultValue={[30, 60]}
            //  thumbChildren={<IconGripVertical style={{ width: rem(20), height: rem(20) }} stroke={1.5} />}
            marks={marks}
          />
        </>
      )}
    </>
  );
};
