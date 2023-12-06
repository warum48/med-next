'use client';

import { createTheme } from '@mantine/core';

export const theme = createTheme({
  /* Put your mantine theme override here */
 // colorScheme,
 fontFamily: 'Onest, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji',
 breakpoints: {
  'xs': '36em',
  'sm': '48em',
  'md': '62em',
  'lg': '75em',
  'xl': '88em',
  'xxl': '100em', //!!added
 },
 other: {
  pinkTransparent: 'rgba(249, 124, 187, 0.08)',
  greenTransparent: 'rgba(73, 223, 210, 0.1)',
  virilisPink: '#e3378d',//'#E2378D',//'#fb6eb5', //'#ec529f',// 
   virilisGreen: '#019f90',//'#2fb797',
   virilisDarkGreen: '#00574B',
   //transparentGray: "#99999911"
   grayHighligt: '#72889411',
 },
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
      /*
      '#fee6f6',
      '#ED9BCF',
      '#EC7CC3',
      '#ED5DB8',
      '#F13EAF',

      '#F71FA7',
      '#FF00A1',
      '#E00890',
      '#C50E82',
      '#AD1374',*/

      //"#ffe9f611",
      "#f66eab11",
      "#ffd1e6",
      "#faa1c9",
      "#f66eab",
      "#f24391",
      "#f02881",
      "#f01879",
      "#d60867",
      "#c0005c",
      "#a9004f"
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
