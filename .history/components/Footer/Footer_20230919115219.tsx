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
                <Image
                    src="/stake-white.svg"
                />
            </HStack>
        </Box>
    )
}

export default Footer;