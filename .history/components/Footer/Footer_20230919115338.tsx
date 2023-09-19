import { 
    Box,
    Stack, 
    HStack, 
    VStack,
    Image, 
    Text,
} from '@chakra-ui/react'

function Footer() {
    return (
        <Box>
            <HStack justify={'space-between'}>
                <Box>
                    <Image
                        src="/stake-white.svg"
                    />
                    <Text color='white' fontWeight={'100'}>
                        Office 182, Level 1, Gate Avenue, DIFC, Dubai
                    </Text>
                </Box>
                
            </HStack>
        </Box>
    )
}

export default Footer;