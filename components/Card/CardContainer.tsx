import { TAnyFields } from '@/types/types';
import { Paper } from '@mantine/core';
import * as React from 'react';

type TProps = { children: React.ReactNode; 
  fitCell?: boolean;
  className?: string;
   expanded?: boolean; miw?: string | number, onClick?: () => void};

export const CardContainer = ({ children, expanded = false, fitCell = true,
  className = '', onClick
  // miw="100%" 
  }: TProps & TAnyFields) => {
  //React.PropsWithChildren

  return (
    <Paper
      style={{ position: 'relative', alignSelf: fitCell ? 'stretch' : 'start'  }} //!!align-self used to make div not to take 100% height in grid cell
      shadow="0"
      p={expanded ? { base: 'xs', md: 'xl' }  : 'xs'}
      withBorder
      className={className}
      onClick={onClick}
      //component='button'
     // miw={miw} //{expanded ? '100%' : ((innerPageMaxWidth  / 2 ) -32) }//448}
    >
      {/*className*/}
      {children}
    </Paper>
  );
};
