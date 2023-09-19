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

 import { CheckIcon, CloseIcon } from '@chakra-ui/icons'


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
                    <VStack align={'end'}>
                        <Text as='b' size={'xl'}>When you invest</Text>
                        <Heading as='h3' size={'lg'}>$25,000 and more</Heading>
                    </VStack>
                </HStack>
                <VStack align={'start'} py={5}>
                    <HStack mt={3}>
                        <CheckIcon
                            boxSize={26}
                            color='green.300'
                        />
                        <Text fontSize={'1.3em'} fontWeight={'100'}>$500 for each qualified referral</Text>
                    </HStack>
                </VStack>
            </CardBody>
        </Card>
    )
}

export default RewardStats;