import Logo from './logo'
import NextLink from 'next/link'

import * as ChakraUI from '@chakra-ui/react'

import { HumburgerIcon } from '@chakra-ui/icons'
import Link from 'next/link'

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
    
    return (
        <ChakraUI.Box position="fixed" style={{backdropFilter: 'blur(10px'}} as="nav" w="100%" bg={ChakraUI.useColorModeValue('white', 'gray800')} zIndex="sticky" shadow="md"{...props}>
                <ChakraUI.Container display='flex' p={2} maxW="container.md" wrap="wrap" allign="center" justify="space-between">
                    <ChakraUI.Flex allign ="center" mr={5}>
                        <ChakraUI.Heading as="h1" size="lg" letterSpacing={'tighter'}>
                            <Logo />
                        </ChakraUI.Heading>
                    </ChakraUI.Flex>
                    <ChakraUI.Stack direction={{ base: 'column', md: 'row' }} display={{ base: 'none', md: 'flex' }} width={{ base: 'full', md: 'auto' }} alignItems="center" flexGrow={1} mt={{ base: 4, md: 0 }}>
                        {/* <LinkItem href="/works" path={path}>
                            Works
                        </LinkItem>
                        <LinkItem href="/blog" path={path}>
                            Blog
                        </LinkItem> */}
                    </ChakraUI.Stack>
                </ChakraUI.Container>
            </ChakraUI.Box>

    )
}

export default Navbar

