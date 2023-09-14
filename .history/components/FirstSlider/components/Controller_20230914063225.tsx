import { 
    VStack,
    HStack,
    Heading,
    Box,
    Text,
    Container,
    Badge,
    Hide,
    Show,
    Tabs, 
    TabList, 
    TabPanels, 
    Tab, 
    TabPanel
} from '@chakra-ui/react'

import { useContext } from 'react';

import SliderContext from '../SliderContext'

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

            <Tabs variant='unstyled' align="center" mt={5}>
                <TabList>
                    <Tab 
                    _selected={{ 
                        color: 'white', 
                        bg: 'green.500' 
                        }}
                    sx={{
                        borderRadius: 4
                    }}
                    mx={2}
                    >
                        Browse
                    </Tab>
                    <Tab 
                    _selected={{ 
                        color: 'white', 
                        bg: 'green.500' 
                        }}
                    sx={{
                        borderRadius: 4
                    }}
                    mx={2}
                    >
                        Purchase
                    </Tab>
                    <Tab 
                    _selected={{ 
                        color: 'white', 
                        bg: 'green.500' 
                        }}
                    sx={{
                        borderRadius: 4
                    }}
                    mx={2}
                    >
                        Own
                    </Tab>
                    <Tab 
                    _selected={{ 
                        color: 'white', 
                        bg: 'green.500' 
                        }}
                    sx={{
                        borderRadius: 4
                    }}
                    mx={2}
                    >
                        Exit
                    </Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                    <p>one!</p>
                    </TabPanel>
                    <TabPanel>
                    <p>two!</p>
                    </TabPanel>
                    <TabPanel>
                    <p>three!</p>
                    </TabPanel>
                    <TabPanel>
                    <p>four!</p>
                    </TabPanel>
                </TabPanels>
                </Tabs>

            <Show breakpoint='(max-width: 767px)'>
                <HStack mt={10}>
                    <Box className={styles.workBox} onClick={() => {sliderContext?.setEventSignal(0)}}>
                        <VStack align="baseline" pr={4}>
                            <Badge className={styles.workBadge} variant='solid'>01</Badge>
                            <Heading as='h2' size='md'>Browse</Heading>
                            <Text>Sign up in less than 3 minutes and browse our collection of properties</Text>
                        </VStack>
                    </Box>
                    <Box className={styles.workBox} onClick={() => {sliderContext?.setEventSignal(1)}}>
                        <VStack align="baseline" pr={4}>
                            <Badge className={styles.workBadge} variant='solid'>01</Badge>
                            <Heading as='h2' size='md'>Purchase</Heading>
                            <Text>Sign up in less than 3 minutes and browse our collection of properties</Text>
                        </VStack>
                    </Box>
                    <Box className={styles.workBox} onClick={() => {sliderContext?.setEventSignal(2)}}>
                        <VStack align="baseline" pr={4}>
                            <Badge className={styles.workBadge} variant='solid'>01</Badge>
                            <Heading as='h2' size='md'>Own</Heading>
                            <Text>Sign up in less than 3 minutes and browse our collection of properties</Text>
                        </VStack>
                    </Box>
                    <Box className={styles.workBox} onClick={() => {sliderContext?.setEventSignal(3)}}>
                        <VStack align="baseline" pr={4}>
                            <Badge className={styles.workBadge} variant='solid'>01</Badge>
                            <Heading as='h2' size='md'>Exit</Heading>
                            <Text>Sign up in less than 3 minutes and browse our collection of properties</Text>
                        </VStack>
                    </Box>
                </HStack>
            </Show>    
        </Box>
    )
}

export default Controller;