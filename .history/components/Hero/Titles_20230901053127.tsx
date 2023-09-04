import { Stack, HStack, VStack, StackDivider } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { Builder } from "@builder.io/react";

function Titles() {
    return (
        <VStack
            divider={<StackDivider borderColor='gray.200' />}
            spacing={4}
            align='stretch'
        >
            <Box h='40px' bg='yellow.200'>
                <h1>The modern way for anyone to invest in real estate</h1>
            </Box>
            <Box h='40px' bg='tomato'>
                <p>Digitally invest in prime rental properties from only AED 500 (USD 136), no matter where you are in the world!</p>
            </Box>
            <Box h='40px' bg='pink.100'>
                3
            </Box>
        </VStack>
    )
}

export default Titles;