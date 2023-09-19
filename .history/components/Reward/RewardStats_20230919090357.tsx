import { 
    Box,
    Card,
    CardBody,
    Heading,
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    SliderMark,
    Text,
    HStack
 } from '@chakra-ui/react'

function RewardStats() {
    return (
        <Card>
            <CardBody>
                <HStack justify={'center-between'}>
                    <Box>
                        1
                    </Box>
                    <Box>
                        2
                    </Box>
                </HStack>
            </CardBody>
        </Card>
    )
}

export default RewardStats;