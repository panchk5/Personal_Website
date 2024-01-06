import { Container, Heading, SimpleGrid, Divider } from "@chakra-ui/react";
import Section from "../components/section";
import { WorkGridItem } from "../components/grid-item";

const Works = () => {
    return (
        <Container>
            <br></br>
            <Heading as="h3" fontSize={20} mb={4}>My Projects</Heading>
            <SimpleGrid columns={[1, 1, 2]} gap={6}>
                <Section>
                    <WorkGridItem id='redditbot' title='Reddit Trading Bot' thumbnail='/wallstreet.jpg'>
                        Captures opinions on popular subreddit "WallStreetBets" and buys/sells stocks accordingly. 
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem id='website' title='Personal Website' thumbnail='/website.png'>
                        This lovely website!
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem id='pantry' title='Pantry Palate' thumbnail='/pantry.jpg'>
                        Utilizes trained AI image detection model to maximize the food items in your pantry. 
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem id='script' title='Script Sage' thumbnail='/script.jpg'>
                        Machine learning model that helps simplify code for beginners using image-text detection. 
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem id='easyhome' title='Easyhome' thumbnail='/hackathon.jpg'>
                        Web application that helps newcomer Canadians find homes using Census CSV data.
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem id='first' title='First year engineeing Projects' thumbnail='/mcm3.jpg'>
                        Various projects from my first year at McMaster University.
                    </WorkGridItem>
                </Section>
            </SimpleGrid>
        </Container>
    )
}

export default Works