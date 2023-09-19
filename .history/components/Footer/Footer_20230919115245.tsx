import { 
    Box,
    Stack, 
    HStack, 
    VStack,
    Image, 
} from '@chakra-ui/react'

function Footer() {
    return (
        <Box>
            <HStack justify={'space-between'}>
                <Box>
                    <Image
                        src="/stake-white.svg"
                    />
                </Box>
                
            </HStack>
        </Box>
    )
}

export default Footer;