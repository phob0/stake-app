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

    const content = [
        {
            title: 'Sign up in less than 3 minutes and browse our collection of properties',
            text: 'Our team of property professionals combine a data driven valuation and analysis process with over 20 years of leadership experience at the top real estate companies in Dubai, to source the best rental properties with the highest investment potential for you.'
        },
        {
            title: 'Buy a piece of the ones you love, starting from only AED 500',
            text: 'You can purchase shares in the properties that make sense for you, no matter where you are in the world. All investor funds are held in a segregated account, which is used to create an SPV (holding company) in the DIFC to purchase each property (100% owned by you and the other investors).'
        },
        {
            title: 'Sit back and track your income and investments online',
            text: 'Once you invest, we’ll take care of everything, from maintaining the property, to making sure there’s always a tenant in place. You can track your monthly income and manage your investments in real time using our mobile app or web platform.'
        },
        {
            title: 'Hold, exit or resell your Stake in a way that suits your financial goals',
            text: 'We work to sell all of our assets at a significantly higher valuation than the purchase price, with investors voting to accept or reject any offers we receive. You can also resell your Stakes during Exit windows, but we do recommend a holding period of 5 years in order to maximise your return.'
        }
    ]

    return (
        <Box px="15%">
            <VStack
                spacing={4}
                align='stretch'
            >
                <Heading sx={{ textAlign: "center" }}>How it works</Heading>
                <Text align="center">Stake is available to savvy investors all over the world</Text>
            </VStack>

            <Hide breakpoint='(max-width: 767px)'>
            <Tabs variant='unstyled' align="center" mt={10}>
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
                    onClick={() => {sliderContext?.setEventSignal(0)}}
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
                    onClick={() => {sliderContext?.setEventSignal(1)}}
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
                    onClick={() => {sliderContext?.setEventSignal(2)}}
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
                    onClick={() => {sliderContext?.setEventSignal(3)}}
                    >
                        Exit
                    </Tab>
                </TabList>
                <TabPanels>
                {content.map((item, index) => (
                    <TabPanel>
                        <Heading as='h4' size='md' mb={5}>{item.title}</Heading>
                        <Text>{item.text}</Text>
                    </TabPanel>
                ))}
                </TabPanels>
            </Tabs>
            </Hide>

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