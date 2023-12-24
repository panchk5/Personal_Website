import {IconButton, useColorMode, useColorModeValue, Box, Flex, Heading, Stack, Menu, MenuButton, MenuList, MenuItem, Icon, Link as ChakraLink} from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'

const togglebutton = () => {
    const {toggleColorMode} = useColorMode()
    return(
        <IconButton
        aria-label="Toggle theme"
        colorScheme={useColorModeValue('purple', 'orange')}
        icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
        onClick={toggleColorMode}
        ><p>Hello</p></IconButton>
    )
}

export default togglebutton