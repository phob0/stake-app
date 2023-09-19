import React from 'react'

import { 
    Card, 
    CardHeader, 
    CardBody, 
    Image, 
    Stack, 
    Heading, 
    Text,
    Divider,
    IconButton, 
    useBreakpointValue,
    Box,
    Badge,
    HStack
} from '@chakra-ui/react'

// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi'
// And react-slick as our Carousel Lib
import Slider from 'react-slick'

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: false,
  infinite: true,
  autoplay: false,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
}

function CardSlider() {
    const [slider, setSlider] = React.useState<Slider | null>(null)

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '90%', md: '50%' })
  const side = useBreakpointValue({ base: '30%', md: '10px' })

  // These are the images used in the slide
  const cards = [
    'https://images.unsplash.com/photo-1612852098516-55d01c75769a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
    'https://images.unsplash.com/photo-1627875764093-315831ac12f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
    'https://images.unsplash.com/photo-1571432248690-7fd6980a1ae2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
  ]

    return (
        <Card maxW='sm' sx={{ borderRadius: 15 }}>
            <CardBody p={0}>
            <Box position={'relative'} height={220} width={'full'} overflow={'hidden'} 
            sx={{ 
                borderTopLeftRadius: 15,
                borderTopRightRadius: 15, 
            }}>
                {/* CSS files for react-slick */}
                {/* Left Icon */}
                <IconButton
                    aria-label="left-arrow"
                    borderRadius="full"
                    position="absolute"
                    size={"xs"}
                    left={side}
                    top={top}
                    transform={'translate(0%, -50%)'}
                    zIndex={2}
                    onClick={() => slider?.slickPrev()}>
                    <BiLeftArrowAlt />
                </IconButton>
                {/* Right Icon */}
                <IconButton
                    aria-label="right-arrow"
                    borderRadius="full"
                    position="absolute"
                    size={"xs"}
                    right={side}
                    top={top}
                    transform={'translate(0%, -50%)'}
                    zIndex={2}
                    onClick={() => slider?.slickNext()}>
                    <BiRightArrowAlt />
                </IconButton>
                {/* Slider */}
                <Slider {...settings} ref={(slider:any) => setSlider(slider)}>
                    {cards.map((url, index) => (
                    <Box
                        key={index}
                        height={'xs'}
                        position="relative"
                        backgroundPosition="center"
                        backgroundRepeat="no-repeat"
                        backgroundSize="cover"
                        backgroundImage={`url(${url})`}
                    />
                    ))}
                </Slider>
                </Box>

                <Stack p="20px" mt='4' spacing='3'>
                    <HStack>
                        <Badge>Default</Badge>
                        <Badge>Default</Badge>
                    </HStack>
                <Heading size='md'>Living room Sofa</Heading>

                <HStack align="baseline" justify={'space-between'}>
                    <Text as='b' color='green.300' fontSize='2xl'>
                        129,450 $
                    </Text>
                    <Text color='grey.600' fontSize='xs'>
                        391 investors
                    </Text>
                </HStack>
                <Text>
                    This sofa is perfect for modern tropical spaces, baroque inspired
                    spaces, earthy toned spaces and for people who love a chic design with a
                    sprinkle of vintage design.
                </Text>
                        
                <Box sx={{
                    backgroundColor: '#F6F7F9',
                    borderRadius: '6px'
                }}
                    p={5}
                >
                    <HStack align="baseline" justify={'space-between'}>
                        <Text color='black.600' fontSize='sm'>
                            Annualised return
                        </Text>
                        <Text as='b' color='black' fontSize='lg'>
                            9.49%
                        </Text>
                    </HStack>
                    <HStack align="baseline" justify={'space-between'}>
                        <Text color='black.600' fontSize='sm'>
                            Funded date
                        </Text>
                        <Text as='b' color='black' fontSize='lg'>
                            19 Sep 2023
                        </Text>
                    </HStack>
                    <HStack align="baseline" justify={'space-between'}>
                        <Text color='black.600' fontSize='sm'>
                            Current valuation
                        </Text>
                        <Text as='b' color='black' fontSize='lg'>
                            $ 129,450
                        </Text>
                    </HStack>
                </Box>
                
                </Stack>
            </CardBody>
            <Divider />
            </Card>
    )
}

export default CardSlider