import React from 'react'
import {
    Drawer,
   
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    useDisclosure,
    VStack,
    HStack,
  } from '@chakra-ui/react'
  import {Link} from 'react-router-dom'
  import {BiMenuAltLeft} from 'react-icons/bi'

 
const Header = () => {
    const {isOpen , onOpen , onClose} = useDisclosure()
  return (
    <>
        <Button
        zIndex={"overlay"}
        pos={"fixed"}
        top={"4"}
        left={'4'}
        colorScheme={'orange'}
        p={'0'}
        h={'10'}
        w={'10'}
        onClick={onOpen}
        >
            <BiMenuAltLeft size={"30"}/>
        </Button>

    <Drawer isOpen={isOpen} placement={"left"} onClose={onClose}>
           <DrawerOverlay />
                    <DrawerContent>
                        <DrawerCloseButton/>
                        <DrawerHeader>VIDEOX</DrawerHeader>
                        <VStack >
{/* vstack is used to align the items vertically with display flex */}
                        <Button onClick={onClose} colorScheme={"orange"} variant={"ghost"}>
                            <Link to={'/'}>Home</Link>
                        </Button>

                        <Button onClick={onClose} colorScheme={"orange"} variant={"ghost"}>
                            <Link to={'/videos'}>Videos</Link>
                        </Button>

                        <Button onClick={onClose} colorScheme={"orange"} variant={"ghost"}>
                            <Link to={'/videos?category=free'}>Free Videos</Link>
                        </Button>

                        <Button onClick={onClose} colorScheme={"orange"} variant={"ghost"}>
                            <Link to={'/upload'}>Upload Video</Link>
                        </Button>

                        </VStack>

                        <HStack pos={"absolute"}
                         bottom={"10"} 
                         left={"0"}
                          w={"full"} 
                          justifyContent={"space-evenly"}
                          >
                            <Button onClick={onClose} colorScheme={"orange"}>
                                <Link to={'/login'}>Log In</Link>
                            </Button>

                            <Button onClick={onClose} colorScheme={"orange"} variant={"outline"}>
                                <Link to={'signup'}>Sign Up</Link>
                            </Button>
                        </HStack>
                    </DrawerContent>
           
    </Drawer>
    </>
  )
}

export default Header