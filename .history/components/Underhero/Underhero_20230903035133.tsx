import { 
    Container,
    Center,
    Button,
    Box, 
    Flex,
    Text, 
    Heading, 
    Image,
    Stack, 
    HStack, 
    VStack, 
    StackDivider,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    PopoverAnchor,
    Grid, 
    GridItem,
    Wrap,
    WrapItem
} from '@chakra-ui/react'

function Underhero() {
    return (
        <Flex justifyContent='center'>
                <Box maxW='70%' borderWidth='1px' borderRadius='lg' overflow='hidden' boxShadow='xlc' bg='tomato'>
                    <Wrap>
                        <WrapItem px={45} py={10}>
                            <VStack
                                align='stretch'
                            >
                                <Heading as='h1'>
                                    324K+
                                </Heading>
                                <Text as='p'>
                                    registered users
                                </Text>
                            </VStack>
                        </WrapItem>
                        <WrapItem px={45} py={10} textAlign="center">
                            <Heading>
                                AED 188M+
                            </Heading>
                            <Text>
                                in property transactions
                            </Text>
                        </WrapItem>
                        <WrapItem px={45} py={10} textAlign="center">
                            <Heading>
                                198
                            </Heading>
                            <Text>
                                user nationalities
                            </Text>
                        </WrapItem>
                        <WrapItem px={45} py={10} textAlign="center">
                            <Heading>
                                AED 6.2M+
                            </Heading>
                            <Text>
                                rental income paid
                            </Text>
                        </WrapItem>
                    </Wrap>  
                </Box>
        </Flex>
    )
}

export default Underhero;