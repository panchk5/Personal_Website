import Head from 'next/head'
import Navbar from '../navbar.js'
import { Box, Container, ChakraProvider, extendTheme } from '@chakra-ui/react'


const Main = ({ children, router }) => {
    return (
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Home</title>
            </Head> 
            <Navbar path={router.asPath} />
            <Container maxW="container.md" pt={14}>
                {children}
            </Container>
        </Box>
    )
}

export default Main
