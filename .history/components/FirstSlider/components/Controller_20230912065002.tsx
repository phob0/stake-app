import { 
    VStack,
    HStack,
    Heading,
    Box,
    Text,
    Container,
    Badge
} from '@chakra-ui/react'

import SliderContext from './SliderContext'

import styles from "./styles.module.css";

function Controller() {
    const sliderContext = useContext(SliderContext);

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
                <Box className={styles.workBox} onClick={() => {console.log('qweqweqwe')}}>
                    <VStack align="baseline" pr={4}>
                        <Badge className={styles.workBadge} variant='solid'>01</Badge>
                        <Heading as='h2' size='md'>Browse</Heading>
                        <Text>Sign up in less than 3 minutes and browse our collection of properties</Text>
                    </VStack>
                </Box>
                <Box className={styles.workBox}>
                    <VStack align="baseline" pr={4}>
                        <Badge className={styles.workBadge} variant='solid'>01</Badge>
                        <Heading as='h2' size='md'>Purchase</Heading>
                        <Text>Sign up in less than 3 minutes and browse our collection of properties</Text>
                    </VStack>
                </Box>
                <Box className={styles.workBox}>
                    <VStack align="baseline" pr={4}>
                        <Badge className={styles.workBadge} variant='solid'>01</Badge>
                        <Heading as='h2' size='md'>Own</Heading>
                        <Text>Sign up in less than 3 minutes and browse our collection of properties</Text>
                    </VStack>
                </Box>
                <Box className={styles.workBox}>
                    <VStack align="baseline" pr={4}>
                        <Badge className={styles.workBadge} variant='solid'>01</Badge>
                        <Heading as='h2' size='md'>Exit</Heading>
                        <Text>Sign up in less than 3 minutes and browse our collection of properties</Text>
                    </VStack>
                </Box>
            </HStack>
        </Box>
    )
}

export default Controller;