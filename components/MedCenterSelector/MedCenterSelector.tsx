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
    Collapse,
  } from '@mantine/core';
  import { ActionLink, Card_pretitle, FormItemLabel, TextInfo, TitleLabel } from '@/components/TextBlocks/TextBlocks';
  import { ApolloError, NetworkStatus, useQuery } from '@apollo/client';
  //import { ErrorMessage } from '../../../components/Errors/ErrorMessage';
  import { GetMedicalCentersQuery } from '@/__generated__/graphql';
  //import { ErrorMessage } from '../Errors/ErrorMessage';
  import classes from './MedCenterChooser.module.css';
  import { GET_MEDICAL_CENTERS } from '@/apollo/queries/main/getMedicalCenters';
  import React from 'react';
  import { AuthContext } from '@/context/AuthContext';
import { GroupStretcher } from './GroupStretcher';
  
  //import { MedicalCenterResult } from '@/-__generated__/graphql';
  
  type TProps = {
    form: any;
    //data_medcenter: any;//MedicalCenterResult;//GetMedicalCentersQuery | undefined; //any;
    //loading_mc: boolean;
    //error_mc: ApolloError | undefined;
    //refetch_mc: () => void;
    //networkStatus_mc: NetworkStatus;
  };
  
  export const MedCenterSelector = ({
    form,
  }: //data_medcenter,
  //loading_mc,
  //error_mc,
  //refetch_mc,
  //networkStatus_mc,
  TProps) => {
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
  
    const { isLoggedIn } = React.useContext(AuthContext);
    const [isExpanded, setIsExpanded] = React.useState(false);
  
    return (
      <Box w='100%'>
        <TitleLabel>Мой медцентр:</TitleLabel>
        <Space h='sm'/>
        {/*error_mc ? (
          <ErrorMessage refetch={refetch_mc} />
        ) : ( */}
  
        
          <Group gap={"0px 16px"}><img src='/images/onni_1_logo.png' style={{height:'80px'}}/>
          <Box>
            <TitleLabel>{'ДМЦ «Мамарада»'}</TitleLabel>
            <Space h="1" />
            <TextInfo>{'Большевиков пр.,д.7, корп.3'}</TextInfo>
            <Space h="1" />
          </Box>
          </Group>
    
  
        {(isExpanded) && (
          <>
            <Collapse in={isExpanded} 
            //p={'md'} my={'md'}
           // mt='xl'
            >
              <Checkbox.Group
                //value={valueAdress} onChange={setValueAdress}
                {...form.getInputProps('address')}
              >
               
                  <GroupStretcher>
                    {
                      // data_medcenter?.getMedicalCenters?.data
                      Array.from({ length: 6 })
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
                        ))
                    }
                  </GroupStretcher>
                  
                
              </Checkbox.Group>
            </Collapse>
          </>
        )}
        {isLoggedIn && (
          <Box>
            <ActionLink onClick={() => setIsExpanded(!isExpanded)}>
              {isExpanded ? 'Скрыть' : 'Выбрать другой центр'}
            </ActionLink>
          </Box>
        )}
      </Box>
    );
  };
  
  /*
  <Collapse in={debtOpen} className={styles.debt_table} p={'md'} my={'md'}>
          {mockDebt.map((clinic, index) => (
            <DebtItem
              key={clinic.clinic}
              clinic={clinic.clinic}
              summ={clinic.summ}
              clinicDebtAr={clinic.cliniDebtAr}
              lastItem={index === mockDebt.length - 1}
            />
          ))}
        </Collapse>
        <Box>
        
  
        */
  