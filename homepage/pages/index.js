import { Container, Box, Heading, ChakraProvider, Image, useColorModeValue } from "@chakra-ui/react"    
import theme from "../libs/theme"
import toggle from "../components/theme-toggle-button"
import Section from "../components/section"
import Paragraph from "../components/paragraph"

const Page = () => {
    return (
            <Container>
                <br></br>
                <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb="6" allign="center">
                    <Heading as="h1" size="xl" textAlign = "center">Hey There, I'm Krish!</Heading>
                </Box>
                <Box display={{ md: "flex" }} allign ="center">
                    <Box flexGrow={1}>
                        <Heading as="h2" variant="page-title" allign="center">Krish Panchal</Heading>
                        <p>My interests include Web Development, DevOps, and Machine Learning.</p>
                    </Box>
                    <Box flexShrink={0} mt={{ base: 4, md: 0 }} ml={{ md: 10 }} align = "center">
                        <Image borderColor="whiteAlpha.800" borderWidth={2} borderStyle="solid" maxWidth="100px" display="inline-block" borderRadius="full" src="/profile.jpg" alt="Profile Picture" alignSelf={"center"}/>
                    </Box>
                </Box>
                <Section delay={0.1}>
                    <Heading as="h3" size="lg" allign="center" variant="section-title">About Me</Heading>
                    <Paragraph>
                        I'm a student at the University of Waterloo studying Computer Science. I'm currently working on a few projects, including this website, and a few other projects that I hope to share soon.
                    </Paragraph>
                </Section>
            </Container>
        
    )
} 
export default Page

