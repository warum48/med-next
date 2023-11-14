import { Button } from '@mantine/core';
import * as React from 'react';
import { Dispatch, SetStateAction } from 'react';

type TProps = {  expanded: boolean; setExpanded: Dispatch<SetStateAction<boolean>> };

export const CardExpandButton = ({  expanded = false, setExpanded }: TProps) => {

  return (
    <Button
          size="compact-xs"
          variant="light"
          style={{ position: 'absolute', top: '4px', right: '4px', borderRadius:'100px', width:'30px', height:'30px' }}
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? '✕' : '➔'}
        </Button>
  );
};

//redeploy
