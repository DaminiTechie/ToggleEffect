import { Box, Container, Heading, Image, position,Text, Stack } from '@chakra-ui/react'
import React from 'react'
import {Carousel} from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import img1 from "../assets/1.jpg"
import img2 from "../assets/2.jpg"
import img3 from "../assets/3.jpg"
import img4 from "../assets/4.jpg"
import img5 from "../assets/5.png"
import { transform } from 'framer-motion'

const headingOption = {
    position: 'absolute',
    left:'50%',
    top:'50%',
    transform : 'translate(-50%, -50% )',
    textTransform:'uppercase',
    p:'4',
    size:'4xl'  
}
const Home = () => {
  return (
    <Box>
         <MyCarousel />
         <Container  maxW={"container.xl"} minH={"100vh"} p={"16"}>
           <Heading textTransform={"uppercase"} py={"2"} w={"fit-content"}
               borderBottom={"2px solid"} margin={"auto"}
           >Services</Heading>

           <Stack h={"full"} p={'4'} alignItems={"center"}
           direction={['column', 'row']}>
           <Image src={img5} h={['40', '400']} filter={"hue-rotate(-130deg)"}/>
            <Text letterSpacing ={"widest"} lineHeight={"190%"} 
              p={['4', '16']} textAlign={"center"}
            >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident dolorum hic illo quo vel dignissimos obcaecati nostrum, iure rem cumque consectetur asperiores facere tempora quaerat atque culpa, ut earum suscipit.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque minima laborum corrupti eaque expedita facere, exercitationem error mollitia ipsum, nobis quod fugit molestias omnis, vero quos quibusdam asperiores cum. Eaque.
                Nisi tempore ducimus cum quidem, perspiciatis ipsum optio similique distinctio. Dolorum, quas sequi voluptatibus laudantium ipsam sunt nemo culpa. Commodi numquam ad, quam adipisci esse accusantium doloribus earum minima laudantium?
            </Text>
           </Stack>
         </Container>
    </Box>
  )
}
const MyCarousel = () => (
    <Carousel autoPlay infiniteLoop interval={1000}
      showStatus={false} showThumbs={false} showArrows={false}
    >
    <Box w={'full'} h={'100vh'}>
    <Image src={img1} w="full" h="full" objectFit="cover"/>
    <Heading 
         
        bgColor={'blackAlpha.600'} 
        color={'white'} 
       {...headingOption}
      >watch the future </Heading>
      </Box>
      <Box w={'full'} h={'100vh'}>
    <Image src={img2} w="full" h="full" objectFit="cover"/>
    <Heading 
         
        bgColor={'whiteAlpha.900'} 
        color={'black'} 
        {...headingOption}
      >future is game </Heading>
      </Box>
      <Box w={'full'} h={'100vh'}>
    <Image src={img3} w="full" h="full" objectFit="cover"/>
    <Heading 
    
        bgColor={'whiteAlpha.600'} 
        color={'black'} 
        {...headingOption}
      >Gaming on Console </Heading>
      </Box>
      <Box w={'full'} h={'100vh'}>
    <Image src={img4} w="full" h="full" objectFit="cover"/>
    <Heading 
        
        bgColor={'whiteAlpha.600'} 
        color={'black'} 
        {...headingOption}
      >watch the future </Heading>
      </Box>
  
    </Carousel>
)

export default Home