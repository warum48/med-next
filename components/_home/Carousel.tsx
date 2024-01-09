import * as React from 'react';
import {  Image, Card, Text, Group, Button,  rem, Box, Container } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import { IconStar } from '@tabler/icons-react';
import { Intro } from './Intro';
//import Autoplay from 'embla-carousel-autoplay';
import classes from './Carousel.module.css';
//import classes from './CarouselCard.module.css';

/*
const useStyles = createStyles((theme) => ({
  price: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
  },

  carousel: {
    borderRadius:'.5rem',
    overflow:'hidden',
    marginBottom:'1rem',
    height:'420px',
    '&:hover': {
      [`& .${getStylesRef('carouselControls')}`]: {
        opacity: 1,
      },
    },
  },

  carouselControls: {
    ref: getStylesRef('carouselControls'),
    transition: 'opacity 150ms ease',
    opacity: 0,
  },

  carouselIndicator: {
    width: rem(4),
    height: rem(4),
    transition: 'width 250ms ease',

    '&[data-active]': {
      width: rem(16),
    },
  },
}));
*/

const images = [
  'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
  'https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
  'https://images.unsplash.com/photo-1605774337664-7a846e9cdf17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
  'https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
  'https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
];

export function CarouselMain() {
  const targetUrl = 'https://jsonblob.com/api/1151573914073030656';
  //const { classes } = useStyles();


  interface Post {
    image: string;
    text: string;
    url: string;
  }
  
  const [posts, setPosts] = React.useState<null | Post[]>(null);
  
  React.useEffect(() => {
    const controller = new AbortController();
    fetch(targetUrl, { signal: controller.signal, 
     // mode: 'no-cors'
     })
      .then((response) => {
        //console.log('resp', response)
       return response.json()
      })
      .then((data) => {
        //console.log('data', data);
        setPosts(data.advSlider);
      })
      .catch((err) => {
        if (err.name != 'AbortError') {
          //console.log('er', err);
          console.error(err);
        }
      });
    return () => controller.abort();
  }, []);
   

 /* const slides = images.map((image) => (
    <Carousel.Slide key={image} >
      <Image src={image} height={420} />
    </Carousel.Slide>
  )) */
  const slides = posts?.map((slide, index) => (
    <Carousel.Slide key={'slide'+index} >
      <Image src={slide.image} height={420} />
    </Carousel.Slide>
  ))
  /*.push(
    <Carousel.Slide key='intro' >
      <Intro />
    </Carousel.Slide>
  );*/

  return (
    <Card
    withBorder 
    //radius="md" 
    p={0} 
    mb='md'
   // className={classes.carousel}
   //style={{
    //marginBottom:0, 
    //paddingBottom:0, 
    //height:'400px', 
   // overflow:'hidden', borderRadius: '0.5rem',  border:'0.0625rem solid #dee2e6'}}
    >
        <Carousel
        //radius="md"
       // withBorder
        //mantine-Carousel-root
          withIndicators
          loop
         // style={{borderRadius: '0.5rem',  border:'0.0625rem solid #dee2e6'}}
          classNames={{
            root: classes.carousel,
            controls: classes.carouselControls,
            indicator: classes.carouselIndicator,
          }}
        > <Carousel.Slide key='intro' >
       { <Intro /> }
      </Carousel.Slide>
          {slides}
         
        </Carousel>
        </Card>
      
  )
}

