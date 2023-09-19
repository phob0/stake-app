import { 
    Box,
    Card,
    Heading,
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    SliderMark,
 } from '@chakra-ui/react'

function InvestmentController() {
    return (
        <Box>
            <Card>
                <Heading as='h5' size='sm'>How much do you want to invest?</Heading>
                <Box>
                <Slider aria-label='slider-ex-1' defaultValue={30}>
                    <SliderTrack colorScheme="green">
                        <SliderFilledTrack />
                    </SliderTrack>
                    <SliderThumb />
                </Slider>
                </Box>
            </Card>
        </Box>
    )
}

export default InvestmentController