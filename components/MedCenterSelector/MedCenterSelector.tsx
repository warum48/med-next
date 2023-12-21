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
  //  Radio,
    Stack,
    ActionIcon,
    Space,
    Select,
    Grid,
    Radio,
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
import { UserContext } from '@/context/UserContext';
  
  //import { MedicalCenterResult } from '@/-__generated__/graphql';
  
  type TProps = {
    form: any;
    Label?: any;
    //data_medcenter: any;//MedicalCenterResult;//GetMedicalCentersQuery | undefined; //any;
    //loading_mc: boolean;
    //error_mc: ApolloError | undefined;
    //refetch_mc: () => void;
    //networkStatus_mc: NetworkStatus;
  };
  
  export const MedCenterSelector = ({
    form,
    Label = FormItemLabel
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
    const showClinicLogo = false;
    const { getCurClinic, setCurClinic, curClinic } = React.useContext(UserContext);

    //|| 'Не выбран'
  
    return (
      <Box w='100%'>
       {/*} <TitleLabel>Мой медцентр:</TitleLabel>
        <FormItemLabel>{isLoggedIn ? 'Мой медцентр' : 'Выберите медцентр'}</FormItemLabel>
    */}
    <Label>{ (isLoggedIn && curClinic) ? 'Мой медцентр' : 'Выберите медцентр'}</Label>
        <Space h='sm'/>
        {/*error_mc ? (
          <ErrorMessage refetch={refetch_mc} />
        ) : ( */}
  
        
          <Group gap={"0px 16px"}>
            { showClinicLogo &&<img src='/images/onni_1_logo.png' style={{height:'80px'}}/> }
          <Box>
           
            <TitleLabel>{(data_medcenter?.getMedicalCenters?.data?.filter((item: any) => item.id.toString() === curClinic)[0]?.name )}</TitleLabel>
            <Space h="1" />
            <TextInfo>{(data_medcenter?.getMedicalCenters?.data?.filter((item: any) => item.id.toString() === curClinic)[0]?.address )}</TextInfo>
            <Space h="1" />
          </Box>
          </Group>
    
  
        {(isExpanded || !getCurClinic()) && (
          <>
            <Collapse in={isExpanded || !getCurClinic()} 
            //p={'md'} my={'md'}
           // mt='xl'
            >
              <Radio.Group
                value={curClinic} 
                onChange = {(e) => { 
                  setCurClinic(e)
                  setIsExpanded(true) // or false if you want to close it right away
                  console.log('e',e)}}
               // onChange={setCurClinic}
               // {...form.getInputProps('address')}
              >
               
                  <GroupStretcher>
                    {
                       //Array.from({ length: 6 }).map((item: any, index: number) => (
                       data_medcenter?.getMedicalCenters?.data?.map((item: any, index: number) => (
                          <Radio
                            key={'adrcb' + index}
                            value={item.id.toString()}
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
                  
                
              </Radio.Group>
            </Collapse>
          </>
        )}
        {(isLoggedIn && getCurClinic()) && (
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
  