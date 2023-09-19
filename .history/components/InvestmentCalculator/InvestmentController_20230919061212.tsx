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
                <Heading p={5} as='h5' size='md'>How much do you want to invest?</Heading>
                <Box mt={5} p={5}>
                    <Text fontSize='sm'>
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
            </Card>
        </Box>
    )
}

export default InvestmentController