'use client'
import {
    Box,
    List,
    Card,
    Image,
    Text,
    Badge,
    Button,
    Group,
    Title,
    Container,
    Grid,
    SimpleGrid,
    Skeleton,
    useMantineTheme,
    rem,

    BackgroundImage,
    Center,
    Space,
  } from '@mantine/core';
  import * as React from 'react';
  //import { FastCommentsCommentWidget } from 'fastcomments-react';
  //import { FastCommentBlock } from '../../components/FastComment/FastCommentBlock';
  import { Intro } from './Intro';
  //import { CarouselMain } from '../../components/Carousel/CarouselMain';
  import { StyledButton } from '../Buttons/StyledButton';
  import classes from './HomePage.module.css';
import { CarouselMain } from './Carousel';
  

  
  export const Home = () => {
    //const { classes, theme } = useStyles();
    /*  const items = stats.map((stat) => (
          <div key={stat.label}>
            <Text className={classes.label}>{stat.value}</Text>
            <Text size="xs" color="dimmed">
              {stat.label}
            </Text>
          </div>
        ));
  */
    const theme = useMantineTheme();
    const PRIMARY_COL_HEIGHT = rem(300);
    const SECONDARY_COL_HEIGHT = `calc(${PRIMARY_COL_HEIGHT} / 2 - ${theme.spacing.md} / 2)`;


    return (
      <>
        <Box
          //my="-0.125rem"
          mt="-xs" 
         maw={1350}
         style={{margin: '0 auto'}}
        >
          <Container my="md" p="0" style={{ maxWidth: '100%' }}>
            {/*<Intro/>*/}
            <CarouselMain />
            <SimpleGrid 
           // cols={2} 
            cols={{ base: 1, lg: 2 }}
            spacing="md"
           //  breakpoints={[{ maxWidth: 'lg', cols: 1 }]}
             >
              <Card withBorder radius="md" p={0}>
                <SimpleGrid 
               // cols={2} 
                cols={{ base: 1, lg: 2 }}
                spacing="0" 
               // breakpoints={[{ maxWidth: 'lg', cols: 1 }]}
                >
                  <Image
                    src="https://images.unsplash.com/photo-1488998527040-85054a85150e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    height={300}
                    // width={'50%'}
                  />
                  <Box p="xl" pt="sm">
                    <Text className={classes.title2} mt="xs" mb="md">
                      ОНЛАЙН
                      <br />
                      КОНСУЛЬТАЦИЯ
                    </Text>
                    <Text size="sm" color="dimmed">
                      Круглосуточная служба клиентской поддержки, просто позвоните в любое время, и мы
                      окажем необходимую помощь.
                    </Text>
                    <Space h="md" />
                    <StyledButton appearence={'main_first'}>Записаться</StyledButton>
                    {/* <Button
                variant="gradient"
                gradient={{ from: "#008275", to: "#0dab5f" }}
                size="md"
                
                mt={40}
                style={{ borderRadius: '100px' }}
              >
                Записаться 
              </Button>*/}
                  </Box>
                </SimpleGrid>
              </Card>
              <Grid gutter="md">
                <Grid.Col>
                  <Skeleton
                    height={SECONDARY_COL_HEIGHT}
                    radius="md"
                    animate={false}
                    
                    opacity={1}
                    style={{ backgroundColor: 'white', '&:after': { backgroundColor: 'white' } ,border:'0.0625rem solid #dee2e6' }}
                  />
                </Grid.Col>
                <Grid.Col span={6}>
                  <Skeleton
                    height={SECONDARY_COL_HEIGHT}
                    radius="md"
                    animate={false}
                    opacity={1}
                    color="white"
                    style={{ backgroundColor: 'white', '&:after': { backgroundColor: 'white' } , border:'0.0625rem solid #dee2e6'}}
                  />
                </Grid.Col>
                <Grid.Col span={6}>
                  <Skeleton
                    height={SECONDARY_COL_HEIGHT}
                    radius="md"
                    animate={false}
                    opacity={1}
                    style={{ backgroundColor: 'white', '&:after': { backgroundColor: 'white' } , border:'0.0625rem solid #dee2e6'}}
                  />
                </Grid.Col>
              </Grid>
            </SimpleGrid>
          </Container>
        </Box>
  
       {/* <FastCommentBlock /> */}
      </>
    );
  };
  