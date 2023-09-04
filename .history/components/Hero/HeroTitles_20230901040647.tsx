import { Stack, HStack, VStack } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { Builder } from "@builder.io/react";

function Titles() {
    return (
        <Stack direction={['column', 'row']} spacing='24px'>
            <Box w='40px' h='40px' bg='yellow.200'>
                1
            </Box>
            <Box w='40px' h='40px' bg='tomato'>
                2
            </Box>
            <Box w='40px' h='40px' bg='pink.100'>
                3
            </Box>
        </Stack>
    )
}

// Register this component for use in the Visual Editor
Builder.registerComponent(Titles,{
    name: 'HeroTitles',
    inputs: [],
})
  
export default Titles;