'use client'
import { innerPageMaxWidth } from '@/global/CONSTS';
import { Title, Text,  rem, Box, Paper, Transition } from '@mantine/core';
//import { innerPageMaxWidth } from '../../CONSTS';
import { useEffect, useState } from 'react';

export type TChildren = { children: React.ReactNode };
export const InnerPageContainer = ({ children, className }: TChildren & { className?: string }) => {
  const inPaper = true;
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    //setTimeout(()=>setMounted(true), 1000)
  }, []);

  if (inPaper) {
    return (
      <Transition mounted={mounted} transition="fade" duration={400} timingFunction="ease">
        {(styles) => (
          <Box className={className + ' innerCont'} mx={{ lg: '1rem', md: 0 }} style={styles}>
            <Paper
              mx="auto"
              shadow="sm"
              p="xl"
              pt="md"
              maw={innerPageMaxWidth}
             // mt="-md"
              
            >
              <Box
                maw={innerPageMaxWidth}
                // mx="auto"
                w={'100%'}
                //mt="xl"
              >
                <Box
                  // mih={'80vh'}
                  pb="xl"
                >
                  {children}
                </Box>
              </Box>
            </Paper>
          </Box>
        )}
      </Transition>
    );
  }

  return (
    <Box className={className + ' innerCont'} mx={{ lg: '1rem', md: 0 }}>
      {children}
    </Box>
  );
};
