import { TAnyFields, TChildren } from '@/types/types';
import { Title, Text,  rem, TitleProps } from '@mantine/core';
//import { TAnyFields, TChildren } from '../_types/Types';
import classes from './TextBlocks.module.css';

import React from 'react';
//const { DesignService, asideOpen, setAsideOpen } = React.useContext(GlobalContext);

type TCustTitle = typeof Title;



export const Card_pretitle = ({ children }: TChildren) => {
  //const { classes, theme } = useHeadersStyles();

  return (
    <Text fz="xs" tt="uppercase" fw={700} c="dimmed">
      {children}
    </Text>
  );
};

export const Card_title = ({ children }: TChildren) => {
  //const { classes, theme } = useHeadersStyles();

  return (
    <Text fz="lg" fw={500} className={classes.name}>
      {children}
    </Text>
  );
};

export const TitleLabel = ({ children, ...props }: TChildren & TAnyFields) => {
  //const { classes, theme } = useHeadersStyles();

  return (
    <Title
    // sx={{ marginBottom: '-0.5rem' }}//'.25rem' }}
    // {...props}
    >
      <Text className={classes.title3} component="span" inherit {...props}>
        {children}
      </Text>
    </Title>
  );
};

export const TextInfo = ({ children }: TChildren & TAnyFields) => {
  //const { classes, theme } = useHeadersStyles();

  return (
    
      <Text className={classes.basicInfo} component="span" inherit>
        {children}
      </Text>

  );
};

export const TextRegular = ({ children }: TChildren & TAnyFields) => {
  //const { classes, theme } = useHeadersStyles();

  return (
    <Title
    // sx={{ marginBottom: '-0.5rem' }}//'.25rem' }}
    >
      <Text className={classes.regularText} component="span" inherit>
        {children}
      </Text>
    </Title>
  );
};

export const Title2_second = ({ children }: TChildren) => {
  //const { classes, theme } = useHeadersStyles();

  return (
    <Title>
      <Text className={classes.title2} component="span" inherit>
        {children}
      </Text>
    </Title>
  );
};

export const Title2_main = ({ children }: TChildren) => {
  //const { classes, theme } = useHeadersStyles();

  return (
    <Title>
      <Text
        className={classes.title2}
        component="span"
        inherit
        variant="gradient"
        gradient={{ from: '#01868a', to: '#0dbc68' }}
      >
        {children}
      </Text>
    </Title>
  );
};

export const Title4_second = ({ children }: TChildren) => {
  //const { classes, theme } = useHeadersStyles();

  return (
    <Title
    // sx={{ marginBottom: '-0.5rem' }}//'.25rem' }}
    >
      <Text className={classes.title4} component="span" inherit>
        {children}
      </Text>
    </Title>
  );
};

export const Title4_main = ({ children }: TChildren) => {
  //const { classes, theme } = useHeadersStyles();

  return (
    <Title
    // sx={{ marginBottom: '-0.5rem' }}//'.25rem' }}
    >
      <Text className={classes.title5} component="span" inherit>
        {children}
      </Text>
    </Title>
  );
};

export const Title1_main = ({ children, ...props }: TitleProps) => {
  //TChildren & TAnyFields) => {
  //const { classes, theme } = useHeadersStyles();
  return (
    <Title {...props}>
      <Text
        className={classes.title}
        component="span"
        inherit
        variant="gradient"
        //gradient={{ from: 'DeepPink', to: 'pink' }}
        gradient={{ from: '#01868a', to: '#0ee57d' }}
      >
        {children}
      </Text>
    </Title>
  );
};
