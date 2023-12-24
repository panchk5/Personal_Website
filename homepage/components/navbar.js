import Logo from './logo'
import NextLink from 'next/link'
import * as ChakraUI from '@chakra-ui/react'

import { HamburgerIcon } from '@chakra-ui/icons'
import Link from 'next/link'

import {IconButton, useColorMode, useColorModeValue} from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'


    


const LinkItem = ({ href, path, children }) => {
    const active = path === href
    const inactiveColor = ChakraUI.useColorModeValue('gray200', 'whiteAlpha.900')
    return (
        <NextLink href={href}>
            <Link
            p={2}
            bg={active ? 'gray100' : undefined}
            color={active ? 'gray900' : inactiveColor}
            legacyBehavior
            >
                {children}
            </Link>
        </NextLink>
    )
}

const Navbar = props => {
    const { path } = props
    const { colorMode, toggleColorMode } = useColorMode()
    return (
        <ChakraUI.Box position="fixed" style={{backdropFilter: 'blur(10px'}} as="nav" w="100%" bg={ChakraUI.useColorModeValue('white', 'gray800')} zIndex="sticky" shadow="md"{...props}>
                <ChakraUI.Container display='flex' p={2} maxW="container.md" wrap="wrap" allign="center" justify="space-between">
                    <ChakraUI.Flex allign ="center" mr={5}>
                        <ChakraUI.Heading as="h1" size="lg" letterSpacing={'tighter'}>
                            <Logo />
                        </ChakraUI.Heading>
                    </ChakraUI.Flex>
                    
                    <ChakraUI.Stack direction={{ base: 'column', md: 'row' }} display={{ base: 'none', md: 'flex' }} width={{ base: 'full', md: 'auto' }} alignItems="center" flexGrow={1} mt={{ base: 4, md: 0 }}>
                        <Link href="/works" path={path} >
                            Works
                        </Link>
                        <Link href="/posts" path={path} >
                            Posts
                        </Link>
                    </ChakraUI.Stack>
                    <ChakraUI.Box flex={1} align="right">
                        
                        <IconButton
                        aria-label="Toggle theme"
                        colorScheme={useColorModeValue('purple', 'orange')}
                        icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
                        onClick={toggleColorMode}
                        ></IconButton>

                        <ChakraUI.Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
                            <ChakraUI.Menu>
                                <ChakraUI.MenuButton 
                                as={ChakraUI.IconButton} 
                                icon={<HamburgerIcon />} 
                                variant={'outline'}
                                aria-label={'Options'}
                                />
                                <ChakraUI.MenuList>
                                    <NextLink href="/" passHref legacyBehavior>
                                        <ChakraUI.MenuItem as={Link}>About</ChakraUI.MenuItem>
                                    </NextLink>
                                    <NextLink href="/works" passHref legacyBehavior>
                                        <ChakraUI.MenuItem as={Link}>Works</ChakraUI.MenuItem>
                                    </NextLink>
                                    <NextLink href="/posts" passHref legacyBehavior>
                                        <ChakraUI.MenuItem as={Link}>Posts</ChakraUI.MenuItem>
                                    </NextLink>
                                    <ChakraUI.MenuItem as={Link} href="https://www.github.com/panchk5" isExternal>Github</ChakraUI.MenuItem>
                                </ChakraUI.MenuList>

                            </ChakraUI.Menu>
                        </ChakraUI.Box>
                    </ChakraUI.Box>

                </ChakraUI.Container>
            </ChakraUI.Box>

    )
}

export default Navbar

