import { 
    VStack,
    HStack,
    Heading,
    Box,
    Text,
    Container,
    Badge
} from '@chakra-ui/react'

import styles from "./styles.module.css";

function Controller() {
    return (
        <Box px="15%">
            <VStack
                spacing={4}
                align='stretch'
            >
                <Heading sx={{ textAlign: "center" }}>How it works</Heading>
                <Text align="center">Stake is available to savvy investors all over the world</Text>
            </VStack>

            <HStack mt={10}>
                <Box className={styles.workBox}>
                    <VStack align="baseline" pr={4}>
                        <Badge className={styles.workBadge} variant='solid'>01</Badge>
                        <Heading as='h2' size='md'>Browse</Heading>
                        <Text>Sign up in less than 3 minutes and browse our collection of properties</Text>
                    </VStack>
                </Box>
                <Box className={styles.workBox}>
                    <VStack align="baseline" pr={4}>
                        <Badge className={styles.workBadge} variant='solid'>01</Badge>
                        <Heading as='h2' size='md'>Browse</Heading>
                        <Text>Sign up in less than 3 minutes and browse our collection of properties</Text>
                    </VStack>
                </Box>
                <Box className={styles.workBox}>
                    <VStack align="baseline" pr={4}>
                        <Badge className={styles.workBadge} variant='solid'>01</Badge>
                        <Heading as='h2' size='md'>Browse</Heading>
                        <Text>Sign up in less than 3 minutes and browse our collection of properties</Text>
                    </VStack>
                </Box>
                <Box className={styles.workBox}>
                    <VStack align="baseline" pr={4}>
                        <Badge className={styles.workBadge} variant='solid'>01</Badge>
                        <Heading as='h2' size='md'>Browse</Heading>
                        <Text>Sign up in less than 3 minutes and browse our collection of properties</Text>
                    </VStack>
                </Box>
            </HStack>
        </Box>
    )
}

export default Controller;