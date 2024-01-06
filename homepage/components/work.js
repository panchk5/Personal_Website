import { useState } from "react";
import { useColorModeValue, Box, Wrap, WrapItem, Heading } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Section from "./section";

export const Work = () => {
    const [workExperience, setWorkExperience] = useState([
        {
            company: "/mcmaster.png",
            position: "Research Assistant",
            duration: "Sept 2023 - Present",
            description: "Assisting the technical lead for the McMaster Monitoring my Mobility study (MacM3) analyze, troubleshoot, and maintain the data collection system. Preparing reports for data extraction."
        },
        {
            company: "/delta.png",
            position: "Logistics Executive",
            duration: "Sept 2023 - Present",
            description: "Working with a team of executives plan all the logistical aspects for McMaster's largest hackathon. Establishing and maintaining relationships with various suppliers, spearheading negotiations."
        },
        {
            company: "/robot.png",
            position: "CAD engineer Intern",
            duration: "Oct 2021 - Dec 2021",
            description: "Designed a ventilated acrylic enclosure for a 3D printer. Created a 3D model of the enclosure using Fusion 360. Utilized HEPA filters to catch ABS microplastics."
        }
    ]);

    return (
        <Box>
            <link rel="preconnect" href="https://fonts.googleapis.com"></link>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
            <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@1,300&display=swap" rel="stylesheet"></link>
            <Wrap spacing="4">
                {workExperience.map((experience, index) => (
                    <WrapItem key={index}>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >   <Section delay={0.4}>
                            <Box
                                p="4"
                                bg={useColorModeValue("#f6f1ec", "#313134")}
                                borderRadius="md"
                                boxShadow="md"
                                display={{ md: "flex" }}
                                
                            >
                                <Box width='60%' p="4">
                                    <img src={experience.company} alt="Company Logo" style={{ width: "80%" }} />
                                </Box>
                                <Box width='80%'>
                                    <Heading as="h3" size="lg" fontFamily={'Poppins'} fontSize='25px'>{experience.position}</Heading>
                                    <p ><b><i>{experience.duration}</i></b></p>
                                    <p>{experience.description}</p>
                                </Box>
                                
                            </Box>
                            </Section>
                        </motion.div>
                    </WrapItem>
                ))}
            </Wrap>
        </Box>
    );
};

export default Work;