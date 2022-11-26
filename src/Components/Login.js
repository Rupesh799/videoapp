import { Button, Container, Heading, Input, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <Container maxW={"container.xl"} h={"100vh"} p={"16"}>
        <form>
            <VStack alignItems={"stretch"}
            spacing={"8"}
            w={["full","96"]}
            m={"auto"}
            my={"16"}
            >
                <Heading textAlign={"center"}>LogIn</Heading>
                <Input placeholder='Enter your username' required  focusBorderColor={'orange.300'}/>
                <Input placeholder='Enter your password' required type={"password"} focusBorderColor={'orange.300'}/>

                <Button colorScheme={"orange"} variant={"solid"} type={"submit"}>Login</Button>
                <Button colorScheme={"orange"} variant={"link"}>Forget password? </Button>

                <Text textAlign={'right'}>New user?{" "}
                <Button colorScheme={"orange"} variant={"link"} alignSelf={"flex-end"}>
                    <Link to={"/signup"}>Sign Up</Link></Button>
                </Text>
               


            </VStack>
        </form>
    </Container>
  )
}

export default Login