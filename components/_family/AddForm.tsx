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
import { PatientRegistration, RelationshipDegrees } from '@/__generated__/graphql';
import { patientRelativeInitValue, patientRelativeVar } from '@/apollo/state/addRelatives';
import { FloatingLabelSelect } from '../Inputs/FloatingLabelSelect';
import { formatDateRuToNormal } from '@/utils/dateRuToNormal';
import { useMutation, useReactiveVar } from '@apollo/client';
import { ADD_RELATIVES } from '@/apollo/queries/accounts/mutations/addRelatives';

type TProps = {
  setAddMemberOpen: React.Dispatch<React.SetStateAction<boolean>>;
  relDegrees: RelationshipDegrees[] | undefined | null;
};

export function AddForm({ setAddMemberOpen, relDegrees }: TProps) {
  //enticationTitle
  const theme = useMantineTheme();
  const patientRelativeVar_re = useReactiveVar(patientRelativeVar);
  const onSubmit = (values: PatientRegistration) => {
    console.log('ADDING RELATIVES');
    doReg();
  };

  const form = useForm<PatientRegistration>({
    initialValues: patientRelativeInitValue, //initialValues,

    validate: (values) => {
      return {
        firstName:
          !!values.firstName && values.firstName.trim().length < 2
            ? 'Имя должно содержать хотя бы 2 буквы'
            : null,
        lastName:
          !!values.lastName && values.lastName.trim().length < 2
            ? 'Фамилия должна содержать хотя бы 2 буквы'
            : null,
        patronymic:
          !!values.patronymic &&
          values.patronymic.trim().length > 0 &&
          values.patronymic.trim().length < 2
            ? 'Фамилия должна содержать хотя бы 2 буквы'
            : null,
        // name: values.name.trim().length < 2 ? 'Имя должно содержать хотя бы 2 буквы' : null,
        // email: !!values.email && /^\S+@\S+$/.test(values.email) ? null : 'Некорректный email',
        birthDate:
          !!values.birthDate && values.birthDate.includes('_') ? 'Заполнено не верно' : null,
        relativeTypeId: values.relativeTypeId == null ? 'Выберите степень родства' : null,
        // username:values.username.trim().length < 2 ? 'Имя должно содержать хотя бы 2 буквы' : null,
        // gender: !!values.gender && values.gender ? 'Заполнено не верно' : null,
      };
    },
  });

  const [doReg, { loading: loading_reg, error: error_reg, data: data_reg }] = useMutation(
    ADD_RELATIVES,
    {
      variables: {
        relationshipDegreeId: Number(form.values.relativeTypeId) || 2, //2 = other
        patient: patientRelativeVar_re, //{...values, phoneNumber:values.phoneNumber.replace(/\D/g, ''), birthDate: '2012-12-31'} ,
      },
    }
  );

  React.useEffect(() => {
    // window.localStorage.setItem('user-form', JSON.stringify(form.values));
    console.log('birth:', form.values?.birthDate);
    //console.log(dayjs(form.values?.birthDate).format('YYYY-MM-DD'));
    // console.log('formatDateRuToNormal', formatDateRuToNormal(form.values?.birthDate));
    // delete form.values.passwordRepeat
    patientRelativeVar({
      ...form.values, //TODO delete relationshipDegreeId
      phoneNumber: form.values.phoneNumber.replace(/\D/g, ''),
      additionalPhoneNumber: form.values?.additionalPhoneNumber?.replace(/\D/g, ''),
      birthDate: formatDateRuToNormal(form.values?.birthDate || ''), //'2012-12-31',
      gender: form.values?.gender?.substring(0, 1).toLowerCase(),
      relativeTypeId: Number(form.values?.relativeTypeId)
    });
    // phoneNumberVar(form.values.phoneNumber.replace(/\D/g, ''));
  }, [form.values]);

  return (
    <>
      <Container p={0} style={{ position: 'relative' }}>
        <Button
          size="compact-xs"
          variant="light"
          style={{ position: 'absolute', top: '4px', right: '4px' }}
          onClick={() => setAddMemberOpen(false)}
        >
          {'✕'}
        </Button>
        {/* <Title
          align="center"
          variant="h4"
          sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}`, fontWeight: 900 })}
        >
          Добро пожаловать!
    </Title> */}

        <Paper
          withBorder
          //shadow="xs"
          p={30}
          mt={30}
          radius="md"
        >
          <form
            onSubmit={form.onSubmit((values) => {
              console.log('lala');
              onSubmit(values);
            })}
            //onSubmit={form.onSubmit((values) => console.log(values))}
          >
            <Title4_second>Добавить родственника</Title4_second>
            <Grid>
              {' '}
              <Grid.Col
                // md={6} xs={12}
                span={{ base: 12, md: 6 }}
              >
                {/*<TextInput label="Телефон" placeholder="you@yourmail.ru" required />
          <TitleLabel>Ваши данные</TitleLabel>*/}
                <FloatingLabelInput label="Фамилия " form={form} formField="lastName" required />
                <FloatingLabelInput label="Имя " form={form} formField="firstName" required />
                <FloatingLabelInput label="Отчество" form={form} formField="middleName" />
                <FloatingLabelInputMask
                  label="Дата рождения "
                  form={form}
                  formField="birthDate"
                  required
                  mask="99.99.9999"
                  //type="tel"
                />
              </Grid.Col>
              <Grid.Col
                //md={6} xs={12}
                span={{ base: 12, md: 6 }}
              >
                <FloatingLabelInputMask
                  label="Телефон родственника"
                  form={form}
                  formField="phoneNumber"
                  required
                  mask="+7 (999) 999-99-99"
                  type="tel"
                  //name="phone"
                  //id="phone"
                />

                <FloatingLabelSelect
                  label="Родство"
                  form={form}
                  formField="relativeTypeId"
                  required
                  data={relDegrees?.map(({ id, name }: any) => ({
                    value: id.toString(),
                    label: name,
                  }))}
                />

                <Radio.Group
                  label="Пол"
                  name="gender"
                  mt="xs"
                  // label="Тип приема"
                  // {...form.getInputProps('gender', )} // { type: "checkbox" }
                  value={form.values.gender || undefined}
                  onChange={(e) => {
                    form.setValues({
                      //gender: 'м',
                      gender: e,
                    });
                    console.log('form', form.values);
                  }}
                >
                  <Group mt="xs">
                    <Radio label="Муж." value="м" />
                    <Radio label="Жен." value="ж" />
                  </Group>
                </Radio.Group>

                <Space h="md" />
                <Radio.Group label="Назначить пользователем по умолчанию?" name="default">
                  <Group mt="xs">
                    <Radio label="Да" />
                    <Radio label="Нет" />
                  </Group>
                </Radio.Group>
              </Grid.Col>
            </Grid>
            <Center>
                 <StyledButton
                appearence={'main_second'}
                mt="xl"
                type="submit"
                // onClick={() => setAddMemberOpen(true)}
              >
                Добавить
                </StyledButton> 
              {/*  <Button fullWidth maw="350" mt="xl" type="submit">
                Зарегистрироваться
              </Button> */}
             
            </Center>
          </form>
          {/*JSON.stringify(relDegrees)*/}
        </Paper>
      </Container>
    </>
  );
}

//https://github.com/orgs/mantinedev/discussions/2947

/*
response:
{
    "data": {
        "addRelatives": {
            "data": null,
            "recordsCount": null,
            "pagesCount": null,
            "statusCode": 200,
            "details": "Ok",
            "__typename": "LoginResult"
        }
    }
}
*/

/*
{
    "data": {
        "addRelatives": {
            "data": null,
            "recordsCount": null,
            "pagesCount": null,
            "statusCode": 422,
            "details": "Patient 39 is already your relative.",
            "__typename": "LoginResult"
        }
    }
}
*/
