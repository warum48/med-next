import {
  Box,
  Title,
  Text,
  BackgroundImage,
  Button,
  rem,
  Space,
  useMantineColorScheme,
  Center,
} from '@mantine/core';
import * as React from 'react';
import { StyledButton } from '../Buttons/StyledButton';
import classes from './Intro.module.css';
import { alegreya, alegreya_bold } from '@/global/Fonts';

export const Intro = () => {
  const { colorScheme, setColorScheme } = useMantineColorScheme();
  const darkWithoutPicture = false;

  console.log('colorScheme', colorScheme);

  return (
    <BackgroundImage
      //src="https://med.shop-survey.ru/images/frame-1-1.jpg"
       src={colorScheme === 'light' ? "https://med.shop-survey.ru/images/frame-1-1.jpg" : "https://med.shop-survey.ru/images/frame-1-1.jpg" }//"http://dev.nahab.info/aerovadim/_files/virilis/mainbg_bright.jpg"
      radius="md"
      style={{
        height: 420, //SECONDARY_COL_HEIGHT,
        marginBottom: '1rem',
      //  padding: '5rem',
      //  paddingTop: '4rem',
        overflow: 'hidden',
        position: 'relative',
      }}
pt='4rem'
      p={{base: 'xl', xs: '5rem'}} //'5rem'
    >
      {/* <Box
        tyle={{
          position: 'absolute',
          //zIndex:'-1',
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          overflow: 'hidden',
          border: '20px',
          //zIndex:1,
          // background:'linear-gradient(114deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.60) 42%, rgba(255,255,255,0) 50%, rgba(255,255,255,0) 100%)'//'white'
          background:
            'linear-gradient(114deg, rgb(255, 255, 255) 0%, rgba(255,255,255,0.90) 42%, rgba(255,255,255,0) 50%, rgba(255,255,255,0) 100%)', //'white'
        }} 
      ></Box>*/}
      <Box  className={classes.info_cont}>
      <Title className={classes.title + ' ' + alegreya.className} >
        {' '}
        <Text
          component="span"
          inherit
          variant="gradient"
          gradient={{ from: 'DeepPink', to: 'pink' }}
          className={alegreya.className}
        >
          Медицина для детей
          <br />
          с&nbsp;рождения до 18 лет
        </Text>
        <Space h="xs" /> {/*широкий спектр медицинских услуг*/}
        32 года опыта
        <br />и ответственности
      </Title>
      <StyledButton appearence="intro_second">Записаться на прием</StyledButton>
      </Box>

      <Center lightHidden darkHidden className={classes.info_cont}>
        <Box>
      <Title className={classes.title + ' ' + alegreya.className} ta='center'>
        {' '}
        <Text
          component="span"
          inherit
          variant="gradient"
          gradient={{ from: 'DeepPink', to: 'pink' }}
          className={alegreya.className}
        >
          Медицина для детей
          <br />
          с&nbsp;рождения до 18 лет
        </Text>
        <Space h="xs" /> {/*широкий спектр медицинских услуг*/}
        32 года опыта
        <br />и ответственности
      </Title>
      <Center>
      <StyledButton appearence="intro_second">Записаться на прием</StyledButton></Center>
      </Box>
      </Center>
    </BackgroundImage>
  );
};
