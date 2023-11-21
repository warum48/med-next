import { StyledButton } from '@/components/Buttons/StyledButton';
import { TextInfo, TitleLabel, TitleLabel_second } from '@/components/TextBlocks/TextBlocks';
import { Button, Divider, Group, List, Stack, Text } from '@mantine/core';
import * as React from 'react';
import styles from "./Debt.module.css";

type TProps = {
    clinic: string
    summ: number
    clinicDebtAr: any[]
    lastItem: boolean
}
export const AllAbonementsItem = ({clinic, summ, clinicDebtAr, lastItem}: TProps) =>{
 return(
 <Stack>
    <Group>
        <TitleLabel>{clinic}:</TitleLabel>
        {/*<span className={styles.warning_text_small}>{summ}₽</span>*/}
        <TitleLabel_second>{summ}₽</TitleLabel_second>
        <StyledButton appearence='main_small'>Подробнее</StyledButton>
    </Group>
    <Text size='sm'>Описание</Text>
   {/*} <List>
        {clinicDebtAr.map((item, index) => (
            <List.Item key={'debt' + index}>
                <Group>
                <TextInfo>{item.description}</TextInfo> /
                <TextInfo>{item.date}</TextInfo> / 
                    <TextInfo>{item.summ} ₽</TextInfo>
                </Group>
            </List.Item>
        ))}
        </List> */}
    {!lastItem && <Divider my="sm" variant="dotted" />}
   
 </Stack>
 )
}