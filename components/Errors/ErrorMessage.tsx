import { ApolloQueryResult, NetworkStatus } from '@apollo/client';
import { Anchor, Box, Text } from '@mantine/core';
import * as React from 'react';

type TErrorMessageProps = {
  detail?: string | null | undefined;
  code?: number;
  refetch?: () => void; //ApolloQueryResult<any>;
  networkStatus?: NetworkStatus;
};

export function ErrorMessage({ detail='', code = -1, refetch, networkStatus }: TErrorMessageProps) {
  return (
    <Box pt="sm">
      {detail ? (
        <Text size="xs" c="red" ta="center">
          {detail}
        </Text>
      ) : (
        <>
        <Text size="xs"  color='dimmed'
       // ta="center"
        >
        Ошибка загрузки,  проверьте соединениe с&nbsp;интернетом
         и&nbsp;повторите попытку
        </Text>
          {refetch && (
            <Anchor
              size="sm"
              component="button"
              onClick={() =>
                refetch
                  ? refetch()
                  : () => {
                      console.log('nothing to refetch');
                    }
              }
            >
              Попробовать еще раз
            </Anchor>
          )}
        </>
      )}
    </Box>
  );
}
