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
    
    window.addEventListener('scroll', toggleVisible);
    
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
            <VStack>
                <HStack>1</HStack>
                <HStack>2</HStack>
                <Divider orientation='horizontal' />
            </VStack>
        </Box>
    )
}

export default Footer;