import { useQuery } from '@apollo/client';
import * as React from 'react';
//import { GET_USER_DATA } from '../../_apollo/queries/accounts/getUserDetail';
import { Box, Text } from '@mantine/core';
import { GET_USER_DATA } from '@/apollo/queries/accounts/getUserData';

export const UserDetails = () => {
  console.log('UserDetails ');
  const { loading, error, data } = useQuery(GET_USER_DATA);

  return (
    <Box maw={300}>
      <Text size={'sm'} c="darkgray">
        Debug (user data):{' '}
      </Text>
      <Text maw={300} size={'xs'} c="gray">
        {JSON.stringify(data)?.replaceAll(',', ', ')}
      </Text>
    </Box>
  );
}