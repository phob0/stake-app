import { 
    Box,
    Stack, 
    HStack, 
    VStack,
    Image, 
    Text,
    Button,
    Divider
} from '@chakra-ui/react'


import React, {useState} from 'react';

import { ChevronUpIcon } from '@chakra-ui/icons'

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
            <VStack justify={'start'}>
                <HStack>
                    <VStack>
                        <Text>Stake</Text>
                        <Button 
                            color="#A3ABBA" 
                            variant="link"
                            sx={{
                                fontWeight: '200',
                                '&:hover': {
                                    color: 'white',
                                    textDecorationColor: '#49ef8b',
                                    textDecorationThickness: '3px',
                                    textUnderlineOffset: '5px'
                                }
                            }}
                        >Properties</Button>
                    </VStack>
                </HStack>
                <HStack>
                    <Text>asd</Text>
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