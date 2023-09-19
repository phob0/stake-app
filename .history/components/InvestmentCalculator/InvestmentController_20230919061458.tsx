import { 
    Box,
    Card,
    Heading,
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    SliderMark,
    Text
 } from '@chakra-ui/react'

function InvestmentController() {
    return (
        <Box>
            <Card>
                <Heading p={5} mt={2} as='h5' size='md'>How much do you want to invest?</Heading>
                <Box p={5}>
                    <Text fontSize='md' mb={2}>
                        Initial Investment
                    </Text>
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

                <Box p={5}>
                    <Text fontSize='md' mb={2}>
                        Initial Investment
                    </Text>
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

                <Box p={5}>
                    <Text fontSize='md' mb={2}>
                        Initial Investment
                    </Text>
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

                <Text fontSize={'xs'} my={5} px={5}>
                    All projected values are before any property costs and platform fees, and based on a 5-year holding period. We expect the asset value to grow 30% over the next 5 years.
                </Text>
            </Card>
        </Box>
    )
}

export default InvestmentController