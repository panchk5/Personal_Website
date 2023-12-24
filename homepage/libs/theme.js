import { extendTheme } from "@chakra-ui/react";
import {mode } from "@chakra-ui/theme-tools";

const styles = {
    global: (props) => ({
        body: {
            bg: mode("#f0e9e1", "#202023")(props),
        }
    })
}

const components = {
    Heading: {
        variants: {
            "section-title": {
                fontSize: 20,
                textDecoration: "underline",
                textDecorationColor: "#525252",
                textUnderlineOffset: 6,
                textDecorationThickness: 4,
                marginBottom: 4,
                marginTop: 3,
            },
        },
    },
    Link: {
        baseStyle: props => ({
            color: mode('#3d7aed', '#ff63c3')(props),
            textUnderlineOffset: 3,
    }),
    },
};

const fonts = {
    heading: "'M PLUS Rounded 1c'",
}

const colors = {
    glassTeal: '#88ccca'
}

const config = {
    initialColorMode: 'dark',
    useSystemColorMode: true,
}

const theme = extendTheme({
    styles,
    components,
    fonts,
    colors,
    config,
});

export default theme