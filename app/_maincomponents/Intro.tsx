import { Box, Title, Text, BackgroundImage, Button, rem,  } from '@mantine/core';
import * as React from 'react';
import { StyledButton } from '../../components/Buttons/StyledButton';
import classes from './Intro.module.css';

export const Intro = () => {




  return (
    <BackgroundImage
      src="http://dev.nahab.info/aerovadim/_files/virilis/mainbg_bright.jpg"
      radius="md"
      style={{
        height: 420, //SECONDARY_COL_HEIGHT,
        marginBottom: '1rem',
        padding: '5rem',
        paddingTop: '4rem',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <Box
        style={{
          position: 'absolute',
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
      ></Box>
      <Title className={classes.title}>
        {' '}
        <Text
          component="span"
          inherit
          variant="gradient"
          gradient={{ from: 'DeepPink', to: 'pink' }}
        >
          Вирилис -
        </Text>{' '}
        широкий спектр медицинских услуг
      </Title>

      <Text className={classes.description} mt={30}>
        Осуществляем наблюдение, диагностику, лечение заболеваний у детей и взрослых. Обеспечиваем
        профилактику и оздоровительную медицину.
      </Text>

     {/*} <Button
        variant="gradient"
        gradient={{ from: 'pink', to: 'DeepPink' }}
        size="xl"
        className={classes.control}
        mt={40}
        sx={{ borderRadius: '100px' }}
      >
        Записаться на прием
      </Button> */}
      <StyledButton appearence='intro_second'>Записаться на прием</StyledButton>
    </BackgroundImage>
  );
};
