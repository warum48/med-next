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
import { TextInfo, TitleLabel } from '../TextBlocks/TextBlocks';
import { ApolloError, NetworkStatus, useQuery } from '@apollo/client';
//import { ErrorMessage } from '../../../components/Errors/ErrorMessage';
import { GetMedicalCentersQuery } from '@/__generated__/graphql';
import { ErrorMessage } from '../Errors/ErrorMessage';
import classes from './MedCenterChooser.module.css';
import { GET_MEDICAL_CENTERS } from '@/apollo/queries/main/getMedicalCenters';
//import { MedicalCenterResult } from '@/-__generated__/graphql';

type TProps = {
  form: any;
  //data_medcenter: any;//MedicalCenterResult;//GetMedicalCentersQuery | undefined; //any;
  //loading_mc: boolean;
  //error_mc: ApolloError | undefined;
  //refetch_mc: () => void;
  //networkStatus_mc: NetworkStatus;
};

export const MedCenterChooser = ({
  form,
  //data_medcenter,
  //loading_mc,
  //error_mc,
  //refetch_mc,
  //networkStatus_mc,
}: TProps) => {
  //  const { classes, theme } = useHeadersStyles();
  const {
    data: data_medcenter,
    loading: loading_mc,
    error: error_mc,
    refetch: refetch_mc,
    networkStatus: networkStatus_mc,
  } = useQuery(GET_MEDICAL_CENTERS, {
    context: { clientName: 'main' },
  });
  return (
    <>
      <TitleLabel>Выберите медцентр:</TitleLabel>
      {
      
      /*error_mc ? (
        <ErrorMessage refetch={refetch_mc} />
      ) : ( */
        <Checkbox.Group
          //value={valueAdress} onChange={setValueAdress}
          {...form.getInputProps('address')}
        >
          <div className={classes.medcontainer} >
            <Stack gap="xs">
              {
             // data_medcenter?.getMedicalCenters?.data
             Array.from({ length: 3 })
               // ?.slice(0, Math.floor(data_medcenter?.getMedicalCenters?.data?.length / 2))
                .map((item: any, index: number) => (
                  <Checkbox
                    key={'adrcb' + index}
                    value={'ad' + index}
                    //label={item}
                    label={
                      <>
                        <TitleLabel>{item?.name || 'ДМЦ «Мамарада»'}</TitleLabel>
                        <Space h="xs" />
                        <TextInfo>{item?.address || 'Большевиков пр.,д.7, корп.3'}</TextInfo>
                        <Space h="xs" />
                      </>
                    }
                  />
                ))}
            </Stack>
            <Stack gap="xs">
              {
              //data_medcenter?.getMedicalCenters?.data
              Array.from({ length: 3 })
                //?.slice(
                //  Math.floor(data_medcenter?.getMedicalCenters?.data?.length / 2),
                //  Math.floor(data_medcenter?.getMedicalCenters?.data?.length)
                //)
                .map((item: any, index: number) => (
                  <Checkbox
                    key={'adrcb' + index + 50}
                    value={'ad' + (index + 50)}
                    label={
                      <>
                        <TitleLabel>{item?.name || 'ДМЦ «Мамарада»'}</TitleLabel>
                        <Space h="xs" />
                        <TextInfo>{item?.address || 'Большевиков пр.,д.7, корп.3'}</TextInfo>
                        <Space h="xs" />
                      </>
                    }
                  />
                ))}
            </Stack>
          </div>
        </Checkbox.Group>
      /*)*/
      
      }
    </>
  );
};
