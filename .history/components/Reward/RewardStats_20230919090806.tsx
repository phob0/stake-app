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
    HStack,
    VStack,
    Image
 } from '@chakra-ui/react'

function RewardStats() {
    return (
        <Card>
            <CardBody>
                <HStack justify={'space-between'}>
                    <HStack>
                        <Image
                            src="/stake-tier-2.svg"
                        />
                        <Heading>Plus</Heading>
                    </HStack>
                    <VStack>
                        <Text as='b' size={'xl'}>When you invest</Text>
                        <Heading as='h3' size={'xl'}>$25,000 and more</Heading>
                    </VStack>
                </HStack>
            </CardBody>
        </Card>
    )
}

export default RewardStats;