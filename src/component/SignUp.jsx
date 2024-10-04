import { Button, Container, Heading, Input, VStack, Text,Avatar } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <Container maxW={'container.xl'} h={"100vh"} p={'16'}>
    <form>
     <VStack alignItems={"stretch"} spacing={"8"} 
     w={['full' , '96']} margin={"auto"} 
     marginY={'16'}>
      <Heading alignSelf={'center'}>VIDEO HUB</Heading>
      <Avatar alignSelf={'center'} boxSize={'32'} />

      <Input placeholder='Name' type='Name' 
      required focusBorderColor='purple.500'></Input>
        
      <Input placeholder='Email' type='Email' 
      required focusBorderColor='purple.500'></Input>

       <Input placeholder='password' type='password' 
      required focusBorderColor='purple.500'></Input>

   

      <Button colorScheme='purple' type='submit'>Sign Up  </Button>
      <Text textAlign={'right'}>Already signed up?{" "}
      <Button variant={'link'} colorScheme='purple'>
          <Link to={"/Login"}>LogIn</Link>
      </Button>
      </Text>
      
     </VStack>
    </form>
  </Container>
  )
}

export default SignUp