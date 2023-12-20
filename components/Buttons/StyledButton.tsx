'use client';
import * as React from 'react';
import { Box, Button, ButtonProps, rem } from '@mantine/core';
import { TChildren } from '../Containers/InnerPageContainer';
import { ReactHTMLElement } from 'react';
import { GlobalContext } from '@/context/ContextGlobal';
//import { GlobalContext } from '../../_context';
import classes from './StyledButton.module.css';
import { IconInfoSmall } from '@tabler/icons-react';

type TProps = {
  appearence?:
    | 'intro_second'
    | 'main_second'
    | 'main_first'
    | 'main_cancel'
    | 'main_small'
    | 'main_gradient'
    | 'main_second_outlined'
    | 'info_circle'
    | 'close';
  onClick?: React.MouseEventHandler<HTMLButtonElement>; //() => void;
  sx?: any;
};

export const StyledButton = ({
  appearence,
  onClick,
  sx = {},
  children,
  ...props
}: TProps & ButtonProps) => {
  //& TChildren

  //const { classes, theme } = useStyles();

  const { DesignService } = React.useContext(GlobalContext);
  //console.log('DesignService', DesignService);
  //console.log('DesignService.buttonRadius', DesignService?.buttonRadius);
  //console.log('-=====appearence', appearence);

  if (appearence == 'intro_second') {
    return (
      <Button
        //variant="gradient"
        //gradient={{ from: 'pink', to: 'DeepPink' }}
        size="xl"
        className={classes.intro_second}
        // className={classes.main_second}
        mt={40}
        //style={{
        //  borderRadius:
        //    DesignService.sizeAndRadius.buttonRadius[
        //      DesignService.buttonRadius as keyof typeof DesignService.sizeAndRadius.buttonRadius
        //    ].style,
        //}}
      >
        {children}
        {/*} Записаться на прием */}
      </Button>
    );
  }

  if (appearence == 'main_second') {
    return (
      <Button
        // variant="gradient"
        // gradient={{ from: 'pink', to: '#ff3ebb' }}
        //  gradient={{ from: 'pink', to: '#fd55d0' }}
        size="md" //"sm"
        //className={classes.control}
        className={classes.main_second}
        //mt={40}
        //style={{
        //  borderRadius:
        //    DesignService.sizeAndRadius.buttonRadius[
        //      DesignService.buttonRadius as keyof typeof DesignService.sizeAndRadius.buttonRadius
        //    ].style, //
        //  //DesignService.sizeAndRadius.buttonRadius[DesignService.buttonRadius].style,
        //  //'100px'
        //  ...sx,
        //}}
        onClick={onClick}
        {...props}
      >
        {children}
        {/*DesignService.buttonRadius*/}
      </Button>
    );
  }
  if (appearence == 'main_gradient') {
    return (
      <Button
        variant="gradient"
        gradient={{ from: '#01868a', to: '#0dab5f' }}
        size="md" //"sm"
        // size="xl"
        //className={classes.control}
        // mt={40}
        style={{
          borderRadius:
            DesignService.sizeAndRadius.buttonRadius[
              DesignService.buttonRadius as keyof typeof DesignService.sizeAndRadius.buttonRadius
            ].style,
          ...sx,
        }}
        onClick={onClick}
        {...props}
      >
        {children}
      </Button>
    );
  }

  if (appearence == 'main_first') {
    return (
      <Button
        //variant="gradient"
        //gradient={{ from: '#01868a', to: '#0dab5f' }}
        size="md" //"sm"
        // size="xl"
        className={classes.main_first}
        // mt={40}
        //style={{
        //  borderRadius:
        //    DesignService.sizeAndRadius.buttonRadius[
        //      DesignService.buttonRadius as keyof typeof DesignService.sizeAndRadius.buttonRadius
        //    ].style,
        //  ...sx,
        //}}
        onClick={onClick}
        {...props}
      >
        {children}
      </Button>
    );
  }

  if (appearence == 'main_second_outlined') {
    return (
      <Button
        //variant="gradient"
        //gradient={{ from: '#01868a', to: '#0dab5f' }}
        size="md" //"sm"
        // size="xl"
        className={classes.main_outlined}
        // mt={40}
        //style={{
        //  borderRadius:
        //    DesignService.sizeAndRadius.buttonRadius[
        //      DesignService.buttonRadius as keyof typeof DesignService.sizeAndRadius.buttonRadius
        //    ].style,
        //  ...sx,
        //}}
        onClick={onClick}
        {...props}
      >
        {children}
      </Button>
    );
  }

  if (appearence == 'main_cancel') {
    return (
      <Button
        variant="outline"
        // gradient={{ from: '#01868a', to: '#0dab5f' }}
        size="sm"
        // size="xl"
        //className={classes.control}
        // mt={40}
        style={{
          borderRadius:
            DesignService.sizeAndRadius.buttonRadius[
              DesignService.buttonRadius as keyof typeof DesignService.sizeAndRadius.buttonRadius
            ].style,
          ...sx,
        }}
        onClick={onClick}
        {...props}
      >
        {children}
      </Button>
    );
  }

  if (appearence == 'main_small') {
    return (
      <Button
        size="compact-xs"
        className={classes.main_small}
        //!!compact
        // variant="gradient" gradient={{ from: '#038d92', to: 'lime', deg: 105 }}
        // sx={{marginLeft:'auto'}}
        onClick={onClick}
        {...props}
      >
        {children}
      </Button>
    );
  }

  if (appearence == 'info_circle') {
    return (
      <Button
        m={0}
        size="compact-xs"
        className={classes.main_small}
        radius={'xl'}
        w="18px"
        h="18px"
        //style={{ top: 0 }}
        onClick={onClick}
        {...props}
      >
        <Box ml="-xs">
          {' '}
          <IconInfoSmall
            style={{ position: 'absolute', top: '-8px', left: '-7px' }}
            size={30}
          />{' '}
        </Box>
      </Button>
    );
  }

  if (appearence == 'close') {
    return (
      <Button
        p={0}
        size="compact-xs"
        variant="light"
        w="30px"
        h="30px"
        radius={'100px'}
        onClick={onClick}
      >
        ✕
      </Button>
    );
  }

  return <Button>{children}</Button>;
};
