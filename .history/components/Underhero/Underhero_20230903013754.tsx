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
            <Box maxW='70%' borderWidth='1px' borderRadius='lg' overflow='hidden' boxShadow='md' bg='tomato'>
                <HStack>
                    <Box>
                        <Header>
                            test 1
                        </Header>
                        <Text>
                            asdfasdf
                        </Text>
                    </Box>
                </HStack>  
            </Box>
        </Flex>
    )
}

export default Underhero;