import Link from 'next/link'
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

function Titles() {
    return (
        <Flex alignItems='right'>
            <Box maxW='lg' alignItems='right'>
                <VStack
                    spacing={10}
                    align='stretch'
                >
                    <Box h='40px'>
                        <Heading>The modern way for anyone to invest in real estate</Heading>
                    </Box>
                    <Box mt={15} h='40px'>
                        <Text fontSize='lg'>Digitally invest in prime rental properties from only AED 500 (USD 136), no matter where you are in the world!</Text>
                    </Box>
                    <Box h='40px'>
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
                            <Box>
                                <Popover trigger="hover">
                                    <PopoverTrigger>
                                        <Image src='/qrcode_icon.svg' alt='QR Code' />
                                    </PopoverTrigger>
                                    <PopoverContent>
                                        <PopoverBody>
                                            <HStack spacing='24px'>
                                                <Image objectFit="contain" boxSize='150px' src='/qrcode.svg' alt='QR Code' />
                                                
                                                <Text>
                                                    Scan the QR code to download directly on your phone
                                                </Text>
                                            </HStack>
                                        </PopoverBody>
                                    </PopoverContent>
                                </Popover>
                            </Box>
                        </HStack>
                    </Box>
                </VStack>
            </Box>
        </Flex>
    )
}

export default Titles;