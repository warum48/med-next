'use client';

import { createTheme } from '@mantine/core';

export const theme = createTheme({
  /* Put your mantine theme override here */
 // colorScheme,
  colors: {
   // virilisPink: ['#fb6eb5'],
   // virilisGreen: ['#2fb797'],
    //oceanBlue: ['#ecf9fb', '#9ce5ee', '#7bf0ea', '#6defe6', '#30dcdf', '#028375', '#0f9d8c', '#0a9080', '#089181', '#059080'],
    oceanBlue: [
      '#eefafc',
      '#9ce5ee',
      '#7bf0ea',
      '#6defe6',
      '#30dcdf',

      '#028375',
      '#0f9d8c',
      '#0a9080',
      '#089181',
      '#059080',
    ],
    brightPink: [
      '#fee6f6',
      '#ED9BCF',
      '#EC7CC3',
      '#ED5DB8',
      '#F13EAF',

      '#F71FA7',
      '#FF00A1',
      '#E00890',
      '#C50E82',
      '#AD1374',
    ],
   // secondaryArray: DesignService.colorSсheme.secondaryArray

    // oceanBlue: ['#eaf9fb', '#9ce5ee', '#7bf0ea', '#6defe6', '#30dcdf', '#028375', '#0f9d8c', '#0a9080', '#089181', '#059080'],
    // oceanBlue: ['#ebf9fb', '#bbf3fa', '#c3fcfa', '#befef9', '#c2f6f7', '#5ce5d5', '#0f9d8c', '#c1fff8', '#d3fbf7', '#059080'],
  }, //6 - color of the contour
  primaryColor: 'oceanBlue',
  
  
  
  //secondaryColor: 'brightPink',
  //primaryColor: myTheme.colors?.oceanBlue//'ocean-blue'
  // myTheme.primaryColor
//}}
});
