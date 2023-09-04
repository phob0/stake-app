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
} from '@chakra-ui/react'

function Underhero() {
    return (
        <Flex justifyContent='center'>
            <Box maxW='80%' borderWidth='1px' borderRadius='lg' overflow='hidden' boxShadow='md' bg='tomato'>
                <HStack>
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
                </HStack>  
            </Box>
        </Flex>
    )
}

export default Underhero;