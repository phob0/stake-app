import React from 'react'
import { 
    Box, 
    IconButton, 
    useBreakpointValue, 
    Stack, 
    HStack, 
    VStack, 
    Card, 
    Heading, 
    Text,
    Image
} from '@chakra-ui/react'
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
        {
            title: '',
            description: ''
        },
        {
            title: '',
            description: ''
        },
        {
            title: '',
            description: ''
        }
    ]

    return (
        <VStack spacing={4}>
            <Box position={'relative'} width={'full'}>
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
                                    <Stack spacing={8} direction='row' pt={5}>
                                        <Heading as='h4' size='md'>
                                            asdasd
                                        </Heading>
                                        <Box>
                                            <HStack align="strech">
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
                                            <Text>
                                                6 January 2023
                                            </Text>
                                        </Box>
                                    </Stack>
                                </Box>

                                <Box>
                                    <Text p={10}>
                                        I’ve been investing in real estate with Stake for the past year now. These guys keep on improving month after month. I collect my monthly dividends every month and have invested in all types of properties. It’s easy, accessible, and very transparent. Highly recommended.
                                    </Text>
                                </Box>

                                <Box>
                                    <Stack spacing={8} direction='row' pb={5}>
                                        <Heading as='h6' size='xs'>Worgore</Heading>
                                        <Image
                                            src="/google.svg"
                                        />
                                    </Stack>
                                </Box>
                            
                            </VStack>  
                        </Card>
                    </Box>
                    ))}
                </Slider>
            </Box>
            
            <Box pt={5}>
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