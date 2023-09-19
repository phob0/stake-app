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
                    <Text>

                    </Text>
                </Box>
                
            </HStack>
        </Box>
    )
}

export default Footer;