'use client';
import * as React from 'react';
import { Box, Button, ButtonProps, rem } from '@mantine/core';
import { TChildren } from '../Containers/InnerPageContainer';
import { ReactHTMLElement } from 'react';
import { GlobalContext } from '@/context/ContextGlobal';
//import { GlobalContext } from '../../_context';
import classes from './StyledButton.module.css';
import { IconInfoSmall } from '@tabler/icons-react';

type TButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

type TProps = {
  appearence?:
    | 'intro_second'
    | 'main_second'
    | 'main_first'
    | 'main_first_outlined'
    | 'main_cancel'
    | 'main_small'
    | 'main_gradient'
    | 'main_second_outlined'
    | 'info_circle'
    | 'close'
    | 'main_small_second_transparent'
    | 'main_small_second';
  onClick?: React.MouseEventHandler<HTMLButtonElement>; //() => void;
  sx?: any;
};

export const StyledButton = ({
  appearence,
  onClick,
  sx = {},
  children,
  ...props
}: TProps & ButtonProps & TButtonProps) => {
  //& TChildren

  //const { classes, theme } = useStyles();

  const { DesignService } = React.useContext(GlobalContext);
  //console.log('DesignService', DesignService);
  //console.log('DesignService.buttonRadius', DesignService?.buttonRadius);
  //console.log('-=====appearence', appearence);

  if (appearence == 'intro_second') {
    return (
      <Button
        size="xl"
        className={classes.intro_second}
        mt={40}
      >
        {children}
      </Button>
    );
  }

  if (appearence == 'main_second') {
    return (
      <Button
        size="md" //"sm"
        className={classes.main_second}
        onClick={onClick}
        {...props}
      >
        {children}
      </Button>
    );
  }
  if (appearence == 'main_gradient') {
    return (
      <Button
        variant="gradient"
        gradient={{ from: '#01868a', to: '#0dab5f' }}
        size="md" //"sm"
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
        size="md" //"sm"
        className={classes.main_first}
        onClick={onClick}
        {...props}
      >
        {children}
      </Button>
    );
  }

  if (appearence == 'main_first_outlined') {
    return (
      <Button
        size="md" //"sm"
        className={classes.main_first_outlined}
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
        size="md" //"sm"
        className={classes.main_second_outlined}
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
        size="sm"
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
        onClick={onClick}
        {...props}
      >
        {children}
      </Button>
    );
  }

  if (appearence == 'main_small_second_transparent') {
    return (
      <Button
        size="compact-xs"
        className={classes.main_small_second_transparent}
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
