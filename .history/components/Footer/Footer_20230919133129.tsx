import { 
    Box,
    Stack, 
    HStack, 
    VStack,
    Image, 
    Text,
    Button,
    IconButton,
    Divider
} from '@chakra-ui/react'


import React, {useState} from 'react';

import { ChevronUpIcon } from '@chakra-ui/icons'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa'

function Footer() {
    const [visible, setVisible] = useState(false)
  
    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300){
        setVisible(true)
        } 
        else if (scrolled <= 300){
        setVisible(false)
        }
    };
    
    const scrollToTop = () =>{
        window.scrollTo({
        top: 0, 
        behavior: 'smooth'
        /* you can also use 'auto' behaviour
            in place of 'smooth' */
        });
    };

    if (typeof window !== "undefined") {
        window.addEventListener('scroll', toggleVisible);
    }

    const linkStyle = {
        color: "#A3ABBA",
        fontWeight: '200',
        justifyContent: "flex-start",
        '&:hover': {
            color: 'white',
            textDecorationColor: '#49ef8b',
            textDecorationThickness: '2px',
            textUnderlineOffset: '6px'
        }
    }
    
    return (
        <Box>
            <HStack justify={'space-between'}>
                <Box>
                    <Image
                        src="/stake-white.svg"
                    />
                    <Text color='white' fontWeight={'100'} mt={3}>
                        Office 182, Level 1, Gate Avenue, DIFC, Dubai
                    </Text>
                </Box>
                <Box>
                    <Button sx={{ 
                            backgroundColor: '#414959', 
                            color: 'white',
                            '&:hover': {
                                backgroundColor: '#49ef8b'
                            } 
                        }}
                        onClick={scrollToTop}
                    >
                        <ChevronUpIcon />
                    </Button>
                </Box>
            </HStack>
            <VStack align='stretch' mt={5}>
                <Box>
                    <HStack spacing={20}>
                            <VStack align='stretch' spacing={4}>
                                <Text>Stake</Text>
                                <Button variant="link" sx={linkStyle}>Properties</Button>
                                <Button variant="link" sx={linkStyle}>About</Button>
                                <Button variant="link" sx={linkStyle}>Golden Visa</Button>
                                <Button variant="link" sx={linkStyle}>Sell with Stake</Button>
                            </VStack>
                            <VStack align='stretch' spacing={4}>
                                <Text>Stake</Text>
                                <Button variant="link" sx={linkStyle}>Properties</Button>
                                <Button variant="link" sx={linkStyle}>About</Button>
                                <Button variant="link" sx={linkStyle}>Golden Visa</Button>
                                <Button variant="link" sx={linkStyle}>Sell with Stake</Button>
                            </VStack>
                            <VStack align='stretch' spacing={4}>
                                <Text>Connect with us</Text>
                                <Button variant="link" sx={linkStyle}>contact@email.com</Button>
                                <HStack spacing={3}>
                                    <IconButton 
                                        isRound={true}
                                        color={'#414959'}
                                        aria-label='Facebook'
                                        icon={<FaFacebook />}
                                    />
                                    <IconButton 
                                        isRound={true}
                                        color={'#414959'}
                                        aria-label='Facebook'
                                        icon={<FaTwitter />}
                                    />
                                    <IconButton 
                                        isRound={true}
                                        color={'#414959'}
                                        aria-label='Facebook'
                                        icon={<FaInstagram />}
                                    />
                                    <IconButton 
                                        isRound={true}
                                        color={'#414959'}
                                        aria-label='Facebook'
                                        icon={<FaLinkedinIn />}
                                    />
                                    <IconButton 
                                        isRound={true}
                                        color={'#414959'}
                                        aria-label='Facebook'
                                        icon={<FaYoutube />}
                                    />
                                </HStack>
                            </VStack>
                    </HStack>
                </Box>
                <HStack mt={10} mb={5}>
                    <Text as='small' color="#A3ABBA">© 2023 Stake. All rights reserved</Text>
                    <Divider orientation='vertical' color="white" />
                    <Button variant="link" sx={linkStyle}>Properties</Button>
                    <Button variant="link" sx={linkStyle}>About</Button>
                    <Button variant="link" sx={linkStyle}>Golden Visa</Button>
                    <Button variant="link" sx={linkStyle}>Sell with Stake</Button>
                </HStack>
                <Divider orientation='horizontal' />
                <Text as='small' color="#A3ABBA">
                    Stake Properties Limited (Stake) is regulated by the Dubai Financial Services Authority (DFSA) as an Operator of a Property Investment Crowdfunding Platform. The Stake platform consists of the website, web platform and mobile app. By using Stake, you agree to be bound by the Terms & Conditions, Cookie Notice and Privacy Policy. All investments through Stake carry risk and are not guaranteed. Please read Key Risks before investing. Stake Properties Limited does not have Islamic Finance endorsement from the DFSA.
                </Text>
            </VStack>
        </Box>
    )
}

export default Footer;