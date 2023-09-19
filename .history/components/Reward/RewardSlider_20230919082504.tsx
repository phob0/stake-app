import { 
    Box,
    Card,
    Heading,
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    SliderMark,
    Text,
    HStack
 } from '@chakra-ui/react'

function RewardSlider() {
    return (
        <Box>
            <Heading p={5} mt={2} as='h4' size='md'>How much do you want to invest?</Heading>
                <Box p={5}>
                    <HStack>
                        <Text fontSize='md' mb={2}>
                            How much do you want to invest?
                        </Text>
                        <Text fontSize='md' mb={2}>
                            230,000
                        </Text>
                    </HStack>
                    <Slider 
                        defaultValue={30} 
                        colorScheme="green"
                        size="lg"
                    >
                        <SliderTrack height={3}>
                            <SliderFilledTrack />
                        </SliderTrack>
                        <SliderThumb 
                            height={6} 
                            width={6}
                            sx={{
                                border: "5px solid #38A169"
                            }} 
                        />
                    </Slider>
                </Box>
        </Box>
    )
}

export default RewardSlider;