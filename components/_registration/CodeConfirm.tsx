import * as React from 'react';
import { useForm } from '@mantine/form';

import {
  Anchor,
  Paper,
  Container,
  Group,
  Button,
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
  const { setCookieToken } = React.useContext(ApolloSettingsContext);

  const phoneNumber = useReactiveVar(phoneNumberVar);
  const confirmationCode = useReactiveVar(confirmationCodeVar);
  const flashCallCode = useReactiveVar(flashCallCodeVar);

  const [doConfirmation, { loading, error, data }] = useMutation(REGISTRATION_FLASH_CALL_CODE, {
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
      phoneNumber,
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
    }
  }, [data]);

  return (
    <>
      <Container size={360} my={40}>
      <Group grow><Title1_main ta="center"
        //align="center"
        >Введите код подтверждения</Title1_main></Group>

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
          <ErrorMessage detail={data?.registrationFlashCallCode?.details} />
}
        </FormPaper>
      </Container>
      {/*<FastCommentBlock />*/}
    </>
  );
}
