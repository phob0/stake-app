import Link from 'next/link'
import { 
    Button,
    Box, 
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

function Titles() {
    return (
        <VStack
            divider={<StackDivider borderColor='gray.200' />}
            spacing={4}
            align='stretch'
        >
            <Box h='40px' bg='yellow.200'>
                <Heading>The modern way for anyone to invest in real estate</Heading>
            </Box>
            <Box h='40px' bg='tomato'>
                <Text fontSize='lg'>Digitally invest in prime rental properties from only AED 500 (USD 136), no matter where you are in the world!</Text>
            </Box>
            <Box h='40px' bg='pink.100'>
                <HStack spacing='24px'>
                    <Box>
                        <Link href="/">
                            <Image src='/app-store.svg' alt='Apple App Store' />
                        </Link>
                    </Box>
                    <Box>
                        <Link href="/">
                            <Image src='/play-store.svg' alt='Google Play Store' />
                        </Link>
                    </Box>
                    <Box bg='green.100'>
                        <Popover trigger="hover">
                            <PopoverTrigger>
                                <Button>Trigger</Button>
                            </PopoverTrigger>
                            <PopoverContent>
                                <PopoverArrow />
                                <PopoverCloseButton />
                                <PopoverHeader>Confirmation!</PopoverHeader>
                                <PopoverBody>Are you sure you want to have that milkshake?</PopoverBody>
                            </PopoverContent>
                        </Popover>
                    </Box>
                </HStack>
            </Box>
        </VStack>
    )
}

export default Titles;