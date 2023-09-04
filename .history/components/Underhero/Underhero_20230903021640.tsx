import { 
    Container,
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
    GridItem
} from '@chakra-ui/react'

function Underhero() {
    return (
        <Container centerContent={false}>
                <Box borderWidth='1px' borderRadius='lg' overflow='hidden' boxShadow='xlc' bg='tomato'>
                    <Stack direction={['column', 'row']}>
                        <Box px={45} py={10} textAlign="center">
                            <Heading>
                                324K+
                            </Heading>
                            <Text>
                                registered users
                            </Text>
                        </Box>
                        <Box px={45} py={10} textAlign="center">
                            <Heading>
                                AED 188M+
                            </Heading>
                            <Text>
                                in property transactions
                            </Text>
                        </Box>
                        <Box px={45} py={10} textAlign="center">
                            <Heading>
                                198
                            </Heading>
                            <Text>
                                user nationalities
                            </Text>
                        </Box>
                        <Box px={45} py={10} textAlign="center">
                            <Heading>
                                AED 6.2M+
                            </Heading>
                            <Text>
                                rental income paid
                            </Text>
                        </Box>
                    </Stack>  
                </Box>
        </Container>    
    )
}

export default Underhero;