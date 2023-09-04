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
                <Box maxW='70%' borderWidth='1px' borderRadius='lg' overflow='hidden' boxShadow='xlc' bg='tomato'>
                    <Wrap>
                        <WrapItem px={45} py={10} textAlign="center">
                            <Box display="block">
                                <Heading>
                                    324K+
                                </Heading>
                            </Box>
                            <Box>
                                <Text>
                                    registered users
                                </Text>
                            </Box>
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
    )
}

export default Underhero;