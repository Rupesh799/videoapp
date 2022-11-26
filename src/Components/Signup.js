import { Avatar, Button, Container, Heading, Input, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <Container maxW={"container.xl"} h={'100vh'} p={"16"}>
        <form>
            <VStack w={["full","96"]} 
            h={"100%"}
            m={'auto'}
            my={"16"}
            alignItems={"stretch"}
            spacing={"8"}
            >
                        <Heading textAlign={"center"}>Sign Up</Heading>
                        <Avatar alignSelf={'center'} boxSize={"32"}></Avatar>
                        <Input required placeholder={"Enter your fullname"} focusBorderColor={'orange.300'}></Input>
                        <Input required placeholder={"Enter your email"} type={"email"} focusBorderColor={'orange.300'}></Input>
                        <Input required placeholder={"Enter password"} type={"password"} focusBorderColor={'orange.300'}></Input>

                        <Button colorScheme={"orange"} variant={"solid"} type={'submit'}>Sign Up</Button>
                        <Text colorScheme={"orange"} variant={"link"} textAlign={"right"}>Already SignUp ?{" "}
                        <Button colorScheme={"orange"} variant={"link"}>
                            <Link to={"/login"}>Login</Link>
                        </Button>

                        </Text>

            </VStack>
        </form>

    </Container>
  )
}

export default Signup