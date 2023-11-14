import { Paper } from '@mantine/core';
import * as React from 'react';

type TProps = { children: React.ReactNode; expanded: boolean; miw: string | number };

export const CardContainer = ({ children, expanded = false, miw }: TProps) => {
  //React.PropsWithChildren

  return (
    <Paper
      style={{ position: 'relative' }}
      shadow="0"
      p={expanded ? 'xl' : 'xs'}
      withBorder
      miw={miw} //{expanded ? '100%' : ((innerPageMaxWidth  / 2 ) -32) }//448}
    >
      {children}
    </Paper>
  );
};
