import React from 'react'
import {Box, Button, Heading, HStack, Stack, VStack, Text, Input} from '@chakra-ui/react'
import { AiOutlineSend } from "react-icons/ai";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
const Fotter = () => {
  return (
    <Box bgColor={'blackAlpha.900'} minH={"40"} p={"16"} color={"white"}>
       
       <Stack direction={['column', 'row']}>
        <VStack alignItems={'stretch'} w={'full'} px={'4'}>
            <Heading size={"md"} textTransform={"uppercase"} textAlign={['center','left']}>
                subscribe to get update
            </Heading>
            <HStack  borderBottom={"2px solid white"} py={'2'}>
                <Input placeholder='Enter Email Here...'
                    
                   border={'none'}
                  borderRadius={'none'}
                  outline={'none'}
                  focusBorderColor='none'
                />
                <Button  p={'0'} colorScheme='purple' variant={'ghost'} 
                  borderRadius={'0 20px 20px 0'}
                >
                <AiOutlineSend size={20} />
                </Button>
            </HStack>
        </VStack>
        <VStack w={'full'} 
             borderLeft={["none", "1px solid white"]}
             borderRight={["none", "1px solid white"]}
         >
          <Heading textTransform={'uppercase'} textAlign={'center'}>Video Hub</Heading>
          <Text>All right received</Text>
        </VStack>
        <VStack w={'full'} >
           <Heading size={'md'} textTransform={'uppercase'}>
            social Media
           </Heading>
           <HStack >
           <Button variant={'link'} colorScheme='white' >
            <a target='black' href='https://www.youtube.com/'>
            <FaYoutube   size={'30'}/>
              
            </a>
           </Button>
           <Button variant={'link'} colorScheme='white'>
            <a target='black' href='https://www.youtube.com/'>
            <FaInstagramSquare  size={'30'}/>
               
            </a>
           </Button>
           <Button variant={'link'} colorScheme='white'>
            <a target='black' href='https://www.youtube.com/'>
            <FaGithub size={'30'}/>
               
            </a>
           </Button>
           </HStack>
        </VStack>
       </Stack>
    </Box>
  )
}

export default Fotter