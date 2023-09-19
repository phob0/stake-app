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
                <HStack justify={'space-between'}>
                    <Box>
                        <Image
                            src="/stake-tier-2.svg"
                        />
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