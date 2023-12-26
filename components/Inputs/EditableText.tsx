import {
  Anchor,
  Box,
  Group,
  Input,
  InputProps,
  Select,
  TextInput,
  TextInputProps,
  Textarea,
  TextareaProps,
  useMantineTheme,
} from '@mantine/core';
import { IconEdit } from '@tabler/icons-react';
import { ChangeEvent, InputHTMLAttributes, useState } from 'react';
import { TextInfo } from '../TextBlocks/TextBlocks';
//import { TextInfo } from '../../_styles/headers';

export type TTfOnChange = (
  e: React.ChangeEvent<HTMLInputElement> & React.ChangeEvent<HTMLTextAreaElement>
) => void;

export type TTfOnChangeE = React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>

type TSelectOnChange = (value: string | null) => void;

export type TEditTypes = 'text' | 'select';

type TTFProps = {
  type?: TEditTypes;
  text: string | undefined; // | null;
  // value?: string | null;
  onChange?: TTfOnChange; //|  TSelectOnChange;// //any; //any |
  autosize?: boolean;
  onUpdate:(value: string ) => void
};

type TSelectProps = {
  type?: TEditTypes;
  // text: string | undefined; // | null;
  value?: string | null;
  onChange?: TSelectOnChange; // //any; //any |
  data?: any;
  onUpdate:(value: string ) => void
};

/*
type TProps = {
  type?: 'text' | 'select';
  text: string | undefined; // | null;
  value?: string | null;
  onChange:  TTfOnChange |  TSelectOnChange;// //any; //any |
  autosize?: boolean;
}; */

export const EditableText = ({
  type = 'text',
  text,
  value,
 // onChange,
  onUpdate,
  autosize,
  data,
  ...props
}: TTFProps & TextInputProps & TextareaProps & TSelectProps) => {
  //& InputHTMLAttributes<HTMLInputElement>
  const [edit, setEdit] = useState(false);
  const theme = useMantineTheme();

  function onChange(e:  TTfOnChangeE |  TSelectOnChange) {
    //onChange(e);
    var newValue = '';
    if(type == 'text'){
    newValue =  (e as TTfOnChangeE).currentTarget.value;
    }
    onUpdate(newValue);
    setEdit(false);
  }

  return (
    <>
      <Group grow>
        {!edit ? (
          <>
            <TextInfo>
            {type == 'text' ? 
            (text ? text : '-') : 
            data?.find((d:any) => d.value == value)?.label
            }</TextInfo>
            <Box style={{ cursor: 'pointer' }} onClick={() => setEdit(true)}>
              <IconEdit size={16} color={theme.colors.gray[6]} />
            </Box>
          </>
        ) : (
          <>
            {type == 'text' && (
              <>
                {autosize ? (
                  <Textarea
                    // placeholder="Autosize with no rows limit"
                    // label="Autosize with no rows limit"
                    autosize
                    minRows={2}
                    //miw={320}
                    // w="100%"
                    onChange={onChange}
                    value={text}
                  />
                ) : (
                  <TextInput
                    //value={text}
                    value={text}
                    onChange={onChange}
                    // miw={320}
                  />
                )}
              </>
            )}

            {type == 'select' && (
              <>
                <Select
                  data={data}
                  value={value}
                  onChange={(e:string|null) => onUpdate(e || '')}//{onChange as TSelectOnChange}
                />
               
              </>
            )}

            <Anchor onClick={() => setEdit(false)} c="gray" size={'xs'}>
              Готово
            </Anchor>
          </>
        )}
      </Group>
    </>
  );
};
