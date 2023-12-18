import Link from 'next/link'
import Image from 'next/image'
import {Text, useColorModeValue} from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
    font-weight: bold;
    font-size: 1.5rem;
    display: inline-flex;
    align-items: center;
    height: 30px;
    line-height: 1.2;
    padding: 0 0.5rem;
    &:hover img {
        transform: rotate(20deg);
    }
`;

const Logo = () => {
    const footPrint = '/logo.png'
    return (
        <Link href="/" legacyBehavior>
            <a>
                <LogoBox>
                    <Image
                        src={footPrint}
                        alt="footprint"
                        width={20}
                        height={20}
                        fixed='true'
                    />
                    <Text
                        as="span"
                        ml={2}
                        color={useColorModeValue("gray.800", "whiteAlpha.900")}
                        fontFamily='times new roman'
                        fontWeight={"bold"}
                    >
                        Krish Panchal
                    </Text>
                </LogoBox>
            </a>
        </Link>
        
    )
}
export default Logo;

