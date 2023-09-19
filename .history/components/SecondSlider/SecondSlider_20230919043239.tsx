import React from 'react'
import { Box, IconButton, useBreakpointValue, Stack, HStack, VStack, Card, Heading } from '@chakra-ui/react'
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt, BiSolidStar } from 'react-icons/bi'
// And react-slick as our Carousel Lib
import Slider from 'react-slick'

// Settings for the slider
const settings = {
  dots: false,
  arrows: false,
  fade: false,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
}

function SecondSlider() {
    const [slider, setSlider] = React.useState<Slider | null>(null)

    // These are the breakpoints which changes the position of the
    // buttons as the screen size changes
    const top = useBreakpointValue({ base: '90%', md: '50%' })
    const side = useBreakpointValue({ base: '30%', md: '10px' })

    // These are the images used in the slide
    const data = [
        'https://images.unsplash.com/photo-1612852098516-55d01c75769a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
        'https://images.unsplash.com/photo-1627875764093-315831ac12f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
        'https://images.unsplash.com/photo-1571432248690-7fd6980a1ae2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
    ]

    return (
        <VStack spacing={4}>
            <Box position={'relative'} height={'400px'} width={'full'} overflow={'hidden'}>
                {/* Slider */}
                <Slider {...settings} ref={(slider:any) => setSlider(slider)}>
                    {data.map((url, index) => (
                    <Box
                        key={index}
                        position="relative"
                    >
                        <Card>
                            <VStack>
                                
                                <Box>
                                    <Stack spacing={8} direction='row'>
                                        <Heading>
                                            asdasd
                                        </Heading>
                                        <Box>
                                            <HStack>
                                                <BiSolidStar
                                                    color="#41ce8e"
                                                    fontSize={22}
                                                />
                                               <BiSolidStar
                                                    color="#41ce8e"
                                                    fontSize={22}
                                                />
                                                <BiSolidStar
                                                    color="#41ce8e"
                                                    fontSize={22}
                                                />
                                                <BiSolidStar
                                                    color="#41ce8e"
                                                    fontSize={22}
                                                />
                                                <BiSolidStar
                                                    color="#41ce8e"
                                                    fontSize={22}
                                                />
                                            </HStack>
                                        </Box>
                                    </Stack>
                                </Box>
                            
                            </VStack>  
                        </Card>
                    </Box>
                    ))}
                </Slider>
            </Box>
            
            <Box mt={5}>
            <HStack spacing={4} align="end">
                {/* Left Icon */}
                <IconButton
                    aria-label="left-arrow"
                    colorScheme="messenger"
                    background={"grey"}
                    borderRadius="full"
                    transform={'translate(0%, -50%)'}
                    zIndex={2}
                    size="lg"
                    onClick={() => slider?.slickPrev()}>
                    <BiLeftArrowAlt />
                </IconButton>
                {/* Right Icon */}
                <IconButton
                    aria-label="right-arrow"
                    colorScheme="messenger"
                    borderRadius="full"
                    background={"grey"}
                    transform={'translate(0%, -50%)'}
                    zIndex={2}
                    size="lg"
                    onClick={() => slider?.slickNext()}>
                    <BiRightArrowAlt />
                </IconButton>
            </HStack>
            </Box>
        </VStack>
    )
}

export default SecondSlider;