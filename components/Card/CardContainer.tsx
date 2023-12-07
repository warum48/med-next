import { TAnyFields } from '@/types/types';
import { Paper } from '@mantine/core';
import * as React from 'react';

type TProps = { children: React.ReactNode; 
  className?: string;
   expanded?: boolean; miw?: string | number };

export const CardContainer = ({ children, expanded = false,
  className = '',
  // miw="100%" 
  }: TProps & TAnyFields) => {
  //React.PropsWithChildren

  return (
    <Paper
      style={{ position: 'relative' }}
      shadow="0"
      p={expanded ? { base: 'xs', md: 'xl' }  : 'xs'}
      withBorder
      className={className}
     // miw={miw} //{expanded ? '100%' : ((innerPageMaxWidth  / 2 ) -32) }//448}
    >
      {/*className*/}
      {children}
    </Paper>
  );
};
