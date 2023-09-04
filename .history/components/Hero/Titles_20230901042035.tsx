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
                1
            </Box>
            <Box h='40px' bg='tomato'>
                2
            </Box>
            <Box h='40px' bg='pink.100'>
                3
            </Box>
        </VStack>
    )
}

export default Titles;