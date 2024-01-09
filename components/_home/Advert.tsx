import { Box, Center, Paper, Stack } from '@mantine/core';
import { HomeCardTitleAdv } from '../TextBlocks/TextBlocks';

export const Advert = () => {
  return (
    <>
    <Paper darkHidden
      shadow="0"
      radius="md"
      opacity={1}
      style={{
        backgroundColor: '#e8fdff', //"#f2f2f2",//'#E8F8F5',//'#fde4ef',
        //  height: SECONDARY_COL_HEIGHT,
        height: '100%',
        position: 'relative',
      }}
    >
      <Box
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          backgroundImage: 'url(/images/white_circ.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.8,
          backgroundBlendMode: 'screen',
        }}
      ></Box>
      <Box style={{ zIndex: 9, position: 'relative' }} p="xl">
        <Center>
          <Stack align="center" gap={'xs'}>
            <HomeCardTitleAdv c="#007966">Прививки?</HomeCardTitleAdv>
            <HomeCardTitleAdv c="#007966">Диспансеризация?</HomeCardTitleAdv>
          </Stack>
        </Center>
      </Box>
    </Paper>

<Paper lightHidden
shadow="0"
radius="md"
opacity={1}
style={{
  backgroundColor: '#38e8f811', //"#f2f2f2",//'#E8F8F5',//'#fde4ef',
  //  height: SECONDARY_COL_HEIGHT,
  height: '100%',
  position: 'relative',
}}
>
<Box
  style={{
    width: '100%',
    height: '100%',
    position: 'absolute',
    backgroundImage: 'url(/images/white_circ.png)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    opacity: 0.1,
    backgroundBlendMode: 'screen',
  }}
></Box>
<Box style={{ zIndex: 9, position: 'relative' }} p="xl">
  <Center>
    <Stack align="center" gap={'xs'}>
      <HomeCardTitleAdv c="#ffffff">Прививки?</HomeCardTitleAdv>
      <HomeCardTitleAdv c="#ffffff">Диспансеризация?</HomeCardTitleAdv>
    </Stack>
  </Center>
</Box>
</Paper>
</>
  );
};
