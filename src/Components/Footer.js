import { Box, Button, Heading, HStack, Input, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import {AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle,  AiOutlineSend} from 'react-icons/ai'

const Footer = () => {
  return (
    <Box bgColor={"blackAlpha.900"} minH={"40"} p={'16'} color={"white"}>
            <Stack direction={["column","row"]}>
                <VStack w={"full"} alignItems={"stretch"} px={"2"}>
                    <Heading size={"md"} >Subscribe To Get Videos</Heading>
                    <HStack
                    borderBottom={"2px solid white"}
                    py={"2"}
                    >
                    <Input placeholder={"Enter Your Email.."}
                    focusBorderColor={"none"}
                    // borderColor={"orange"}
                    border={"none"}
                    outline={"none"}
                    />
                    <Button
                    p={"2"}
                    colorScheme={"orange"}
                    variant={"ghost"}
                    borderRadius={"0 20px 20px 0"}
                    >
                        <AiOutlineSend/>
                    </Button>
                    </HStack>
                   
                </VStack>

                <VStack w={"full"}
                
                borderRight={["none","2px solid white"]}
                borderLeft={["none","2px solid white"]}
                >
                        <Heading 
                       textTransform={"uppercase"}
                       textAlign={"center"}
                        >
                            videox
                        </Heading>
                        <Text>All Rights Reserved</Text>
                </VStack>

                <VStack w={"full"}>
                    <Heading textTransform={"uppercase"} size={"md"} >Social media</Heading>
                   
                   
                   <Button 
                    
                    variant={"link"} colorScheme={"orange"}>
                        <a target={"blank"} href='https://www.linkedin.com/in/rupesh-khatri-533462219/'>
                            <AiFillLinkedin size={"20"}/>
                        </a>

                       
                    </Button>
                    <Button variant={"link"} colorScheme={"orange"}>
                        <a target={"blank"} href='https://twitter.com'>
                            <AiFillTwitterCircle size={"20"}/>
                        </a>
                    </Button>
                    <Button variant={"link"} colorScheme={"orange"}>
                        <a target={"blank"} href='https://instagram.com'>
                            <AiFillInstagram size={"20"}/>
                        </a>
                    </Button>
                
                    
                </VStack>

            </Stack>
    </Box>
  )
}

export default Footer