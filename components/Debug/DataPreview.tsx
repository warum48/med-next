import { useQuery } from '@apollo/client';
import * as React from 'react';

import { Box, Text } from '@mantine/core';

/**
 * Render a preview of the given data.
 *
 * @param {any} data - The data to be previewed.
 * @return {JSX.Element} The rendered preview component.
 */
export const DataPreview = ({data}:{data:any}): JSX.Element => {
  console.log('UserDetails ');
 

  return (
    <Box maw={500}>
      <Text size={'sm'} color="darkgray">
        Debug:{' '}
      </Text>
      <Text maw={500} size={'xs'} color="gray">
        {JSON.stringify(data)?.replaceAll(',', ', ')}
      </Text>
    </Box>
  );
}