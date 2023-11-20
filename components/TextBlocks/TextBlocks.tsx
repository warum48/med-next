import { TAnyFields, TChildren } from '@/types/types';
import { Title, Text, rem, TitleProps, Anchor, Group } from '@mantine/core';
//import { TAnyFields, TChildren } from '../_types/Types';
import classes from './TextBlocks.module.css';

import React from 'react';
import { IconNotes } from '@tabler/icons-react';
//const { DesignService, asideOpen, setAsideOpen } = React.useContext(GlobalContext);

type TCustTitle = typeof Title;

export const ActionLink = ({ children, ...props }: any) => {
  return (
    <Anchor
      {...props}
      size="sm"
      component="button"
      //onClick={() =>
      //  refetch
      //    ? refetch()
      //    : () => {
      //        console.log('nothing to refetch');
      //      }
      //}
    >
      {children}
    </Anchor>
  );
};

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
    <>
      {/* <Title
    // sx={{ marginBottom: '-0.5rem' }}//'.25rem' }}
    // {...props}
  > */}
      <Text className={classes.title3} component="span" inherit {...props}>
        {children}
      </Text>
      {/*</Title>*/}
    </>
  );
};

export const TitleLabel_second = ({ children, ...props }: TChildren & TAnyFields) => {
  return (
    <Text
      className={`${classes.title3} ${classes.secondColor}`}
      component="span"
      inherit
      {...props}
    >
      {children}
    </Text>
  );
};

export const TextInfo = ({ children }: TChildren & TAnyFields) => {
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
    
      <Text className={classes.title4} component="span" inherit>
        {children}
      </Text>
    
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

export const InnerPageTitle = ({ children }: TChildren) => {
  return (
    <div className={classes.blue_square_bg}>
      <div className={classes.white_strip}></div>
      <Group><IconNotes style={{ width: rem(30), height: rem(30) , 
                color: 'green',
                paddingTop:'4px',
                //marginLeft:'-2px',
                marginRight:'-10px',
                zIndex:9
                }} />
      <Title1_main style={{zIndex:10}}>{children}</Title1_main></Group>
      
    </div>
  );
};
