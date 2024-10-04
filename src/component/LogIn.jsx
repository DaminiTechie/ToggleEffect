import { Button, Container, Heading, Input, VStack, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const LogIn = () => {
  return (
    <Container maxW={'container.xl'} h={"100vh"} p={'16'}>
      <form>
       <VStack alignItems={"stretch"} spacing={"8"} 
       w={['full' , '96']} margin={"auto"} 
       marginY={'16'}>
        <Heading>Welcome Back</Heading>
        <Input placeholder='Email' type='Email' 
        required focusBorderColor='purple.500'></Input>
         <Input placeholder='password' type='password' 
        required focusBorderColor='purple.500'></Input>

        <Button variant={'link'} alignSelf={'flex-end'}>
            <Link to={"/forgetpassword"}>Forget Password?</Link>
        </Button>

        <Button colorScheme='purple' type='submit'>Log In</Button>
        <Text textAlign={'right'}>New User?{" "}
        <Button variant={'link'} alignSelf={'flex-end'}>
            <Link to={"/SignUp"}>SingUp</Link>
        </Button>
        </Text>
        
       </VStack>
      </form>
    </Container>
  )
}

export default LogIn