import Link from 'next/link'
import { Stack, HStack, VStack, StackDivider } from '@chakra-ui/react'
import { Box, Text, Heading } from '@chakra-ui/react'

function Titles() {
    return (
        <VStack
            divider={<StackDivider borderColor='gray.200' />}
            spacing={4}
            align='stretch'
        >
            <Box h='40px' bg='yellow.200'>
                <Heading>The modern way for anyone to invest in real estate</Heading>
            </Box>
            <Box h='40px' bg='tomato'>
                <Text fontSize='lg'>Digitally invest in prime rental properties from only AED 500 (USD 136), no matter where you are in the world!</Text>
            </Box>
            <Box h='40px' bg='pink.100'>
                <HStack spacing='24px'>
                    <Box w='40px' h='40px' bg='yellow.200'>
                        <Link href="https://apps.apple.com/app/stake-property-investing/id1591107922" target="_blank">
                            Dashboard
                        </Link>
                    </Box>
                    <Box w='40px' h='40px' bg='tomato'>
                        2
                    </Box>
                    <Box w='40px' h='40px' bg='green.100'>
                        3
                    </Box>
                </HStack>
            </Box>
        </VStack>
    )
}

export default Titles;