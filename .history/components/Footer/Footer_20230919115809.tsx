import { 
    Box,
    Stack, 
    HStack, 
    VStack,
    Image, 
    Text,
    Button
} from '@chakra-ui/react'

import { ChevronUpIcon } from '@chakra-ui/icons'

function Footer() {
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
                    <Button sx={{ backgroundColor: 'grey', color: 'white', opacity: '0.3' }}>
                        <ChevronUpIcon/>
                    </Button>
                </Box>
            </HStack>
        </Box>
    )
}

export default Footer;