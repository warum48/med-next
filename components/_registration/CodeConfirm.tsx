import * as React from 'react';
import { useForm } from '@mantine/form';

import {
  Anchor,
  Paper,
  Container,
  Group,
  Button,
  Center,
} from '@mantine/core';
import { ErrorMessage } from '../../components/Errors/ErrorMessage';
import { useMutation, useReactiveVar } from '@apollo/client';
import { TRegStep } from '@/app/registration/page';
import { ApolloSettingsContext } from '@/apollo/context';
import { confirmationCodeVar, flashCallCodeVar, phoneNumberVar } from '@/apollo/state/Registration';
import { REGISTRATION_FLASH_CALL_CODE } from '@/apollo/queries/accounts/mutations/registrationFlashCallCode';
import { FloatingLabelInputMask } from '../Inputs/FloatingLabelInputMask';
import { TextInfo, Title1_main } from '../TextBlocks/TextBlocks';
import { FormPaper } from '../Containers/FormPaper';
import { tokenVar } from '@/apollo/state/token';
import { useMutationNotifications } from '@/services/useNotifications';
import { GlobalContext } from '@/context/ContextGlobal';
import { useMockMutation } from '@/services/useMockMutation';
//import { TextInfo, Title1_main } from '../../_styles/headers';
//import { FloatingLabelInputMask } from '../../components/Inputs/FloatingLabelInputMask';
//import { FastCommentBlock } from '../../components/FastComment/FastCommentBlock';
//
//import { phoneNumberVar } from '../../_apollo/state/Registration';
//import { flashCallCodeVar } from '../../_apollo/state/Registration';
//import { confirmationCodeVar } from '../../_apollo/state/Registration';
//import { REGISTRATION_FLASH_CALL_CODE } from '../../_apollo/queries/accounts/mutations/registrationFlashCallCode';
//import type { TRegStep } from './Registration';
//
//import { ApolloSettingsContext } from '../../_apollo/context';


type TCodeConfirmProps = {
  setStep: React.Dispatch<React.SetStateAction<TRegStep>>; 
};

/**
 * Renders the component for confirming the code.
 *
 * @param {TCodeConfirmProps} setStep - The function to set the current step.
 * @returns {JSX.Element} The JSX element for the code confirmation component.
 */
export function CodeConfirm({ setStep }: TCodeConfirmProps): JSX.Element {
  const { isDemo } = React.useContext(GlobalContext);
  const { setCookieToken } = React.useContext(ApolloSettingsContext);

  const loginPhoneNumber = useReactiveVar(phoneNumberVar);
  const confirmationCode = useReactiveVar(confirmationCodeVar);
  const flashCallCode = useReactiveVar(flashCallCodeVar);

  const [doConfirmation, { loading, error, data }] = 
  
  isDemo
    ? useMockMutation<any>('/mock/registrationFlashCallCode.json', {})
    : 
  
  useMutation(REGISTRATION_FLASH_CALL_CODE, {
    variables: {
      flashCallCode,
    },
  });

  const form = useForm({
    initialValues: {
      code: '',
    },
    validate: (values) => ({
      code: values.code.trim().length < 4 ? 'Код должен содержать 4 цифры' : null,
    }),
  });

  /**
   * Handles the form submission.
   *
   * @param {any} values - The form values.
   */
  const onSubmit = (values: any) => {
    doConfirmation();
  };

  React.useEffect(() => {
    flashCallCodeVar({
      ...form.values,
      //phoneNumber,
      loginPhoneNumber
     // loginPhoneNumber
    });
  }, [form.values]);

  React.useEffect(() => {
    if (data?.registrationFlashCallCode?.statusCode === 200) {
      setStep('success');
    }

    if (data && data?.registrationFlashCallCode?.data?.token) {
      const d = new Date();
      d.setFullYear(d.getFullYear() + 100);
      setCookieToken('mednekot', data?.registrationFlashCallCode?.data?.token, {
        path: '/',
        expires: d,
      });
     
        tokenVar(data?.registrationFlashCallCode?.data?.token,);
        
    }
  }, [data]);



  useMutationNotifications({
    text: 'Добро пожаловать!',
    data: data,
    data_code: data?.registrationFlashCallCode?.statusCode,
    data_details: data?.registrationFlashCallCode?.details,
    error: error,
   // onSuccess: onSuccess,
  });

  return (
    <>
      <Container size={360} my={40}>
     

<Center>
        <Title1_main
          //align="center"
          ta="center"
          style={{textAlign:'center'}}
        >
          Введите код подтверждения
        </Title1_main>
      </Center>

        <FormPaper>
          <form onSubmit={form.onSubmit((values) => onSubmit(values))}>
            <FloatingLabelInputMask
              label="Код из смс"
              form={form}
              formField="code"
              required
              mask="9999"
              className="input-increased-spacing"
            />
            <Group 
            //position="apart"
             mt="lg">
              <TextInfo>Не пришел код?</TextInfo>
              <Anchor component="button" size="sm">
                Отправить еще раз
              </Anchor>
            </Group>
            <Button fullWidth mt="xl" type="submit">
              Далее
            </Button>
          </form>
          {error &&
          <ErrorMessage detail={data?.registrationFlashCallCode?.details || error.message} />
}
        </FormPaper>
      </Container>
      {/*<FastCommentBlock />*/}
    </>
  );
}

/*
{
    "data": {
        "registrationFlashCallCode": {
            "data": {
                "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MDQ4NzY5ODEsInN1YiI6eyJsb2dpbiI6Ijc5MjU3NjU0MzIxIiwicGFzc3dvcmQiOiIkMmIkMTIkeVdhLkFLT0V5Z1F1R3ZJazNneXkuLnZCcTZ5MHFBUURQdkxvNzJ3S0hiRHJqYWFGdGpWVWUifX0.vMiqoj_B44wGTF9x1iq7INpXVZ52Xd8a5qPQ3BvOD8I",
                "__typename": "Token"
            },
            "details": "Ok",
            "statusCode": 200,
            "__typename": "LoginResult"
        }
    }
}
*/

/*
{
    "data": {
        "registrationFlashCallCode": {
            "data": {
                "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MDUwNzQ0MDYsInN1YiI6eyJsb2dpbiI6Ijc5MjUxMTIyMzM0IiwicGFzc3dvcmQiOiIkMmIkMTIkV3pmb3dCZFVkOU9Ja2x0R3JvVzQudTB2aDdBanFNQUdqQmhmTll6V0RCSVRzczNaVjN2REcifX0.Gv56gAItmwUDp6UgOb8eSPSlC95H7HRrmWYQVX0gxY4",
                "__typename": "Token"
            },
            "details": "Ok",
            "statusCode": 200,
            "__typename": "LoginResult"
        }
    }
}
*/
