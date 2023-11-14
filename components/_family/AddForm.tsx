import * as React from 'react';
//import { FastCommentsCommentWidget } from 'fastcomments-react';
import { useForm } from '@mantine/form';

import {
  TextInput,
  PasswordInput,
  Checkbox,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Group,
  Button,
  Box,
  useMantineTheme,
  Grid,
  Radio,
  Space,
  Center,
} from '@mantine/core';
import { Title4_second } from '../TextBlocks/TextBlocks';
import { FloatingLabelInput } from '../Inputs/FloatingLabelInput';
import { FloatingLabelInputMask } from '../Inputs/FloatingLabelInputMask';
import { StyledButton } from '../Buttons/StyledButton';


type TProps = {
    setAddMemberOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export function AddForm( {setAddMemberOpen}:TProps) {
  //enticationTitle
  const theme = useMantineTheme();

  const form = useForm({
    initialValues: {
      phone: '',
      password: '',

      firstName: '',
      middleName: '',
      lastName: '',

      email: '',
      birthday: '',
sex:'',
type:'',
default:''
      /*  
      comment: '',
       
        firstName_our: '',
        search: '',
        age: '', //age0-age3
        appointmentType: 'apt0', //apt0-3
        address: [''],
        // search: '',
  
        name: '',
        username: '',
        website: '',
        github: '',*/
    },

    validate: (values) => {
      return {
        /*firstName:
              values.firstName.trim().length < 2 ? 'Имя должно содержать хотя бы 2 буквы' : null,
            lastName:
              values.lastName.trim().length < 2 ? 'Фамилия должна содержать хотя бы 2 буквы' : null,
            // name: values.name.trim().length < 2 ? 'Имя должно содержать хотя бы 2 буквы' : null,
            email: /^\S+@\S+$/.test(values.email) ? null : 'Некорректный email',
            // username:values.username.trim().length < 2 ? 'Имя должно содержать хотя бы 2 буквы' : null,
            //password: values.password.length < 6 ? 'Пароль должен содержать хотя бы 6 знаков' : null,
            age:
              values.age.trim().length < 8 || values.age.trim().includes('_')
                ? 'Это поле обязательно'
                : null,
                */
      };
    },
  });

  return (
    <>
      <Container p={0} style={{position:'relative'}}>
      <Button
          size='compact-xs'
          variant="light"
          style={{ position: 'absolute', top: '4px', right: '4px' }}
          onClick={() => setAddMemberOpen(false)}
        >
          {'✕' }
        </Button>
        {/* <Title
          align="center"
          variant="h4"
          sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}`, fontWeight: 900 })}
        >
          Добро пожаловать!
    </Title> */}
       

        <Paper withBorder 
        //shadow="xs" 
        p={30} mt={30} radius="md">
        <Title4_second>Добавить родственника</Title4_second>
            <Grid> <Grid.Col 
           // md={6} xs={12}
           span={{base:12, md:6}}
            >
       
          {/*<TextInput label="Телефон" placeholder="you@yourmail.ru" required />
          <TitleLabel>Ваши данные</TitleLabel>*/}
          <FloatingLabelInput label="Фамилия " form={form} formField="lastName" required />
          <FloatingLabelInput label="Имя " form={form} formField="firstName" required />
          <FloatingLabelInput label="Отчество" form={form} formField="middleName" />
          <FloatingLabelInputMask
            label="Дата рождения "
            form={form}
            formField="birthday"
            required
            mask="99.99.9999"
            //type="tel"
          />
</Grid.Col>
<Grid.Col 
//md={6} xs={12}
span={{base:12, md:6}}
>

          <FloatingLabelInputMask
            label="Телефон родственника"
            form={form}
            formField="phone"
            required
            mask="+7 (999) 999-99-99"
            type="tel"
            //name="phone"
            //id="phone"
          />
          <FloatingLabelInput label="Пол" form={form} formField="sex" required />
          <Radio.Group label="Пол" name="sex" mt="xs">
          <Group mt='xs'>
            <Radio label="Муж."/>
            <Radio label="Жен."/>
            </Group>
          </Radio.Group>
          <Space h='md'/>
          <Radio.Group label="Назначить пользователем по умолчанию?" name="default">
            
          <Group mt='xs'>
            <Radio label="Да"/>
            <Radio label="Нет"/>
            </Group>
          </Radio.Group>
          </Grid.Col>
          
          
          </Grid>
          <Center>

          <StyledButton appearence={'main_second'} mt='xl'
         // onClick={() => setAddMemberOpen(true)}
          >
              Добавить
            </StyledButton></Center>
        </Paper>
      </Container>
      
    </>
  );
}
