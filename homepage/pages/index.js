import { Container, Box, Heading, ChakraProvider, ColorModeProvider } from "@chakra-ui/react"    

const Page = () => {
    return (
        <ChakraProvider>
            <ColorModeProvider options={{ initialColorMode: "dark" }}>
                <Container>
                    <Box borderRadius="lg" bg="red" p={3} mb="6" allign="center">
                        <Heading as="h1" size="xl">Hey There, I'm Krish!</Heading>
                    </Box>
                    <Box display={{ md: "flex" }}>
                        <Box flexGrow={1}>
                            <Heading as="h2" variant="page-title">I'm a Software Engineer</Heading>
                            <p>My interests include Web Development, DevOps, and Machine Learning.</p>
                        </Box>
                    </Box>
                </Container>
            </ColorModeProvider>
        </ChakraProvider>
    )
} 
export default Page

