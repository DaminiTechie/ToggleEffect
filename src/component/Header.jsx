import React, { useState } from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    useDisclosure,
    VStack,
    HStack
  } from '@chakra-ui/react'
  import {Link} from "react-router-dom"
  import {BiMenuAltLeft} from "react-icons/bi"
const Header = () => {
    const {isOpen, onOpen, onClose} = useDisclosure();
  return (
    <>
       <Button zIndex={'overlay'} pos={'fixed'} top={'4'} left={'4'} colorScheme='purple' padding={0} width={'10'}
       h={'10'} borderRadius={'full'} onClick={onOpen}
       >

        <BiMenuAltLeft  size={'20'}/>
       </Button>
       <Drawer isOpen={isOpen} placement='left' onClose={onClose}>
        <DrawerOverlay/>
        
        <DrawerContent>
            <DrawerCloseButton/>
            <DrawerHeader>Video Hub</DrawerHeader>
            <DrawerBody>
            <VStack alignItems={'flex-start'}>
                <Button onClick={onClose} variant={'ghost'}  colorScheme='purple'>
                    <Link to={'/'}>Home</Link>
                </Button>
                <Button onClick={onClose} variant={'ghost'}  colorScheme='purple'>
                    <Link to={'/videos'}>Videos</Link>
                </Button>
                <Button onClick={onClose} variant={'ghost'}  colorScheme='purple'>
                    <Link to={'/videos?category=free'}>Free Videos</Link>
                </Button>
                <Button  onClick={onClose} variant={'ghost'}  colorScheme='purple'>
                    <Link to={'/uploadd'}>Upload video</Link>
                </Button>
            </VStack>
            <HStack pos={'absolute'} bottom={'10'} left={'0'} w={'full'} justifyContent={'space-evenly'}>
                <Button  onClick={onClose} colorScheme='purple'>
                    <Link to={'/logIn'}>Log In</Link>
                </Button>
                <Button   onClick={onClose}  colorScheme='purple' variant={'outline'}>
                    <Link to={'/signup'}>sign up</Link>
                </Button>
            </HStack>
            </DrawerBody>
        </DrawerContent>
       </Drawer>
     


    </>
  )
}

export default Header