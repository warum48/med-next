// @tеs-nocheck
// input mask children type conflict

import * as React from 'react';
import { useEffect, useState } from 'react';
import InputMask from 'react-input-mask';
import {
  Stepper,
  Button,
  Group,
  TextInput,
  PasswordInput,
  Code,
  Box,
  useMantineTheme,
  Center,
  Title,
  Text,
  //createStyles,
  rem,
  Radio,
  Stack,
  ActionIcon,
  Space,
  Select,
  Grid,
  Checkbox,
} from '@mantine/core';
import { useForm } from '@mantine/form';
//import { FastCommentsCommentWidget } from 'fastcomments-react';
import { IconArrowLeft, IconArrowRight, IconSearch } from '@tabler/icons-react';
//import { useStylesInput } from './useStylesInput';
import classes from "./FloatingLabelInput.module.css";



type TFloatingInputProps = {
  label: string;
  form: any;
  formField: string;
  mask?: string;
  [key: string]: any;
};
export function FloatingLabelInput({ label, form, formField,mask, ...props }: TFloatingInputProps) {
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState('');
  const floating = value.trim().length !== 0 || focused || undefined;
/*  const { classes } = useStylesInput({
    floating: ( form?.getInputProps(formField)?.value != undefined && form?.getInputProps(formField)?.value?.trim().length !== 0) || focused,
  }); */
  

  return (
    
        <TextInput
          label={label}
          //mr='xs'
          // placeholder="OMG, it also has a placeholder"
          //required
          classNames={classes}
          {...form.getInputProps(formField)}
          // value={value}
          //  onChange={(event) => setValue(event.currentTarget.value)}
           onFocus={() => setFocused(true)}
           onBlur={() => setFocused(false)}
          mt="md"
          autoComplete="on"//"off"//"no" //nope
          {...props}

          data-floating={floating}
      labelProps={{ 'data-floating': floating }}
         
          //{...form.getInputProps('firstName')}
        />
     
  );
}
