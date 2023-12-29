import { Container, Box, Heading, ChakraProvider, Image, useColorModeValue, Link } from "@chakra-ui/react"    
import theme from "../libs/theme"
import toggle from "../components/theme-toggle-button"
import Section from "../components/section"
import Paragraph from "../components/paragraph"
import { Timeline, year } from "../components/timeline"
import NextLink from "next/link"
import { Work } from "../components/work"


const Page = () => {
    return (
            <Container>
                <br></br>
                <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb="6" allign="center">
                    <Heading as="h1" size="xl" textAlign = "center">Welcome to my world!</Heading>
                </Box>
                <Box display={{ md: "flex" }} allign ="center">
                    <Box flexGrow={1}>
                        <Heading as="h2" variant="page-title" allign="center" fontFamily={'cursive'}>Krish Panchal</Heading>
                        <p>Struggling Student on the grind.</p>
                    </Box>
                    <Box flexShrink={0} mt={{ base: 4, md: 0 }} ml={{ md: 10 }} align = "center">
                        <Image borderColor="whiteAlpha.800" borderWidth={2} borderStyle="solid" maxWidth="100px" display="inline-block" borderRadius="full" src="/profile.jpg" alt="Profile Picture" alignSelf={"center"}/>
                    </Box>
                </Box>
                <Section delay={0.1}>
                    <Heading as="h3" size="lg" allign="center" variant="section-title">About Me</Heading>
                    <Paragraph>
                        I'm a student at <Link href="https://www.eng.mcmaster.ca/cas/">McMaster University</Link> studying Software engineering. I'm currently working on a few projects, including this website, and a few other projects that I hope to share soon. When I'm not destoying my code, I enjoy climbing at my local gym, strumming chords, and playing videogames.
                    </Paragraph>
                </Section>
                <Section delay={0.6}>
                    <Heading as="h3" size="lg" allign="center" variant="section-title">My Timeline</Heading>
                    <Timeline >
                        <b><year>2004 </year></b>
                        Born in Ahemdabad, India
                    </Timeline>
                    <Timeline>
                        <b><year>2022 </year></b>
                        Began my degree at McMaster University.
                    </Timeline>
                    <Timeline>
                        <b><year>2021 </year></b>
                        Born in Ahemdabad, India
                    </Timeline>
                    <Timeline>
                        <b><year>2021 </year></b>
                        Born in Ahemdabad, India
                    </Timeline>
                </Section>
                <Section delay={0.8}>
                    <Heading as="h3" size="lg" allign="center" variant="section-title">My Work</Heading>
                    <Work/>
                </Section>
            </Container>
        
    )
} 
export default Page

