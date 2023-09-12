import { 
    VStack,
    HStack,
    Heading,
    Box,
    Text,
    Container,
    Badge
} from '@chakra-ui/react'

function Controller() {
    return (
        <Container>
            <VStack
                spacing={4}
                align='stretch'
            >
                <Heading sx={{ textAlign: "center" }}>How it works</Heading>
                <Text align="center">Stake is available to savvy investors all over the world</Text>
            </VStack>

            <HStack>
                <Box>
                    <VStack>
                        <Badge>01</Badge>
                        <Heading>Browse</Heading>
                        <Text>Sign up in less than 3 minutes and browse our collection of properties</Text>
                    </VStack>
                </Box>
            </HStack>
        </Container>
    )
}

export default Controller;