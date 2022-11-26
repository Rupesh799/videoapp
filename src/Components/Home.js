import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.jpg';
import img6 from '../assets/service.png';



const headingStyles ={
    pos:'absolute',
    top:'50%',
    left:'50%',
    transform:'translate(-50%,-50%)',
    p:'4',
    size:'4xl',

}

const Home = () => {
  return (
    <Box>
      {/* Box is like a div while using chakra ui */}
      <MyCarousel />
      <Container maxW={"container.xl"} minH={"100vh"} p={"16"}>
            <Heading
            textTransform={"uppercase"}
            py={"2"}
            width={"fit-content"}
            borderBottom={"2px solid"}
            margin={"auto"}
            >Services</Heading>

            <Stack
            h={"full"}
            p={"4"}
            alignItems={"center"}
            direction={["column",'row']} 
            // here direction column is for small devices and row is for large  devices
            
            >
              <Image src={img6} 
             h={["40","400"]} filter={"hue-rotate(230deg)"}/>
             <Text letterSpacing={"widest"} lineHeight={"170%"} textAlign={"center"} p={["4","16"]}>In ut eu nostrud minim incididunt magna id. Exercitation aliquip adipisicing sint velit non amet non reprehenderit est sint Lorem officia deserunt. Ea culpa proident consequat dolor reprehenderit aliquip magna tempor. Veniam mollit dolore mollit officia excepteur ipsum do nostrud dolor non nulla labore do mollit. Cupidatat anim adipisicing ut ex amet. Laborum proident reprehenderit anim adipisicing exercitation enim mollit duis ad do nulla esse incididunt.
             In ut eu nostrud minim incididunt magna id. Exercitation aliquip adipisicing sint velit non amet non reprehenderit est sint Lorem officia deserunt. Ea culpa proident consequat dolor reprehenderit aliquip magna tempor. Veniam mollit dolore mollit officia excepteur ipsum do nostrud dolor non nulla labore do mollit. Cupidatat anim adipisicing ut ex amet. Laborum proident reprehenderit anim adipisicing exercitation enim mollit duis ad do nulla esse incididunt.
             </Text>

            </Stack>
      </Container>
    </Box>
  );
};

const MyCarousel = () => (
  <Carousel
    autoPlay
    infiniteLoop
    interval={1000}
    showArrows={false}
    showThumbs={false}
    showStatus={false}
  >
    <Box w={'full'} h={'100vh'}>
      <Image src={img1} h={"full"} w={"full"} objectfit={"cover"}/>
      {/* ...heading is used as a objects where it contains css styles */}
      <Heading bgColor={"blackAlpha.600"} color={"white"} {...headingStyles}>Learn With Videos</Heading>
    </Box>

    <Box w={'full'} h={'100vh'}>
      <Image src={img2} h={"full"} w={"full"} objectfit={"cover"}/>
      <Heading bgColor={"blackAlpha.600"} color={"white"} {...headingStyles}>Capture Your Moments</Heading>
    </Box>

    <Box w={'full'} h={'100vh'}>
      <Image src={img3} h={"full"} w={"full"} objectfit={"cover"}/>
      <Heading bgColor={"blackAlpha.600"} color={"white"} {...headingStyles}>Feel The Virtual World</Heading>

    </Box>

    <Box w={'full'} h={'100vh'}>
      <Image src={img4} h={"full"} w={"full"} objectfit={"cover"}/>
      <Heading bgColor={"blackAlpha.600"} color={"white"} {...headingStyles}>Make It Fun</Heading>

    </Box>

    <Box w={'full'} h={'100vh'}>
      <Image src={img5} h={"full"} w={"full"} objectfit={"cover"} />
      <Heading bgColor={"blackAlpha.600"} color={"white"} {...headingStyles}>Share Your Feelings</Heading>

    </Box>
  </Carousel>
);

export default Home;
